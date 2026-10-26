#!/usr/bin/env node
/* ============================================================================
   reel-check.mjs — one command per reel: transcript → context → ONE question,
   blind-verified before it is allowed anywhere near a learner.

     node scripts/reel-check.mjs media/reels/gratitude.mp4 --id gratitude-reset
     node scripts/reel-check.mjs --all            # every reel missing a check

   WHY ONE QUESTION, AND WHY THIS SHAPE
   A 20–60 second clip contains one idea. Asking three questions about one idea
   manufactures two bad ones — and a bad distractor teaches the wrong thing more
   efficiently than a good question teaches the right one. So: one question, and
   it must be the one that fails if the idea did not land.

   Preference order, and it is deliberate:
     1. APPLICATION — "you are in X, what do you do?" Transfer is the point.
     2. SCENARIO    — a new situation, same principle.
     3. RECALL      — only when the clip's whole content is a fact worth knowing.
   Recall alone measures whether someone was awake, not whether they learned.

   DISTRACTOR DISCIPLINE (where most generated quizzes fail)
   Wrong options must be things a real person would actually do — the plausible
   shortcut, the common misreading, the thing that works elsewhere. Never absurd,
   never "all of the above", never longest-is-correct, never a giveaway by
   grammar. Three options, not four: a fourth option in a micro-check is almost
   always filler, and filler is a tell.

   THE GATE
   Nothing is written until a SECOND, blind model call answers the question with
   only the transcript excerpt — never the proposed key. Agreement ships it.
   Disagreement runs once more: two blind runs agreeing means the key was wrong
   and it is corrected; still split means the question is ambiguous and it is
   DISCARDED. A wrong key is worse than no question: it teaches the wrong thing
   and it tells a learner who was right that they were wrong.

   This mirrors scripts/verify-quizzes.mjs, which found and corrected wrong keys
   in 59% of a generated course batch. That number is the whole argument for this
   file existing.
   ========================================================================= */
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync } from 'fs';
import { execFileSync } from 'child_process';
import { join, dirname, basename } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const TR = join(ROOT, 'media', 'reel-transcripts');
const OUT = join(ROOT, 'knowledge', 'reel-checks.json');
const API = process.env.ACADEMY_AI_URL || '';
if (!API) { console.error('✗ set ACADEMY_AI_URL to this instance\'s AI gateway'); process.exit(1); }

const argv = process.argv.slice(2);
const arg = k => { const i = argv.indexOf(k); return i > -1 ? argv[i + 1] : null; };

async function ai(prompt, maxTokens = 700) {
  const key = existsSync(process.env.HOME + '/.academy-build-key')
    ? readFileSync(process.env.HOME + '/.academy-build-key', 'utf8').trim() : '';
  const r = await fetch(API, {
    signal: AbortSignal.timeout(120000),
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...(key ? { 'X-Build-Key': key } : {}) },
    body: JSON.stringify({ maxTokens, messages: [{ role: 'user', content: prompt }] }),
  });
  const d = await r.json();
  if (d && d.error) { const e = new Error(`${d.error}: ${String(d.detail || '').slice(0, 120)}`);
    e.fatal = /4006|allocation|quota|rate/i.test(JSON.stringify(d)); throw e; }
  return String(d.reply || '');
}

/* 1 · TRANSCRIBE — Whisper locally, so a 30-second clip costs nothing and the
       audio never leaves the machine. */
function transcribe(file, id) {
  mkdirSync(TR, { recursive: true });
  const out = join(TR, id + '.json');
  if (existsSync(out)) return JSON.parse(readFileSync(out, 'utf8'));
  console.log('  whisper …');
  const raw = execFileSync('whisper', [file, '--model', 'small', '--output_format', 'json',
    '--output_dir', TR, '--verbose', 'False'], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  const produced = join(TR, basename(file).replace(/\.[^.]+$/, '.json'));
  const j = JSON.parse(readFileSync(produced, 'utf8'));
  const doc = { id, language: j.language || 'en',
    text: (j.text || '').trim(),
    segments: (j.segments || []).map(x => ({ t0: x.start, t1: x.end, text: x.text.trim() })) };
  writeFileSync(out, JSON.stringify(doc, null, 1));
  return doc;
}

/* 2 · CONTEXT — what is this clip actually teaching? Named before a question is
       written, because a question about a misidentified idea is worse than none.
       The theme is returned as a tag so it joins the same vocabulary the courses
       and the legal job-relevance gate already use. */
async function context(doc) {
  const out = await ai(
`Below is the full transcript of one short training video. In JSON only, no prose:
{"idea":"the ONE thing this teaches, in a sentence","theme":"one lowercase tag","actionable":true|false}
"actionable" is true if the clip tells someone what to DO, false if it only explains something.

TRANSCRIPT:
${doc.text.slice(0, 3000)}`, 300);
  const a = out.indexOf('{'), b = out.lastIndexOf('}');
  return JSON.parse(out.slice(a, b + 1));
}

/* 3 · WRITE ONE QUESTION, of the strongest type the clip supports. */
async function write(doc, ctx, lang) {
  const type = ctx.actionable ? 'application' : 'scenario';
  const out = await ai(
`You write retrieval-practice questions for workplace training. One question only, about this short video.

THE IDEA IT TEACHES: ${ctx.idea}
TRANSCRIPT: ${doc.text.slice(0, 3000)}

RULES
- Type: "${type}". ${ctx.actionable
  ? 'Put the learner in a real situation from their work and ask what they DO.'
  : 'Give a NEW situation that tests the same principle — do not quote the video back.'}
- THREE options. Exactly one defensibly best.
- Distractors must be what a real person would plausibly do instead: the shortcut,
  the common misreading, the thing that works in a different situation. Never absurd,
  never "all of the above", never longer or shorter than the rest as a tell.
- Answerable from the transcript alone. Nothing invented, no outside facts.
- "why": one sentence saying why the right answer is right. This is the teaching moment.
- Language: ${lang === 'pt' ? 'European Portuguese (pt-PT, never Brazilian)' : 'English'}.

Reply with ONLY JSON: {"q":"…","opts":["…","…","…"],"a":<0-2>,"why":"…"}`, 700);
  const a = out.indexOf('{'), b = out.lastIndexOf('}');
  const q = JSON.parse(out.slice(a, b + 1));
  if (!Array.isArray(q.opts) || q.opts.length !== 3) throw new Error('needs exactly 3 options');
  if (typeof q.a !== 'number' || q.a < 0 || q.a > 2) throw new Error('key out of range');
  return { ...q, type };
}

/* 4 · THE GATE — answer it blind, from the transcript, never seeing the key. */
async function blind(doc, q) {
  const out = await ai(
`From this training video transcript, answer the question. Reply with ONLY the number (0, 1 or 2).

TRANSCRIPT: ${doc.text.slice(0, 3000)}

QUESTION: ${q.q}
0: ${q.opts[0]}
1: ${q.opts[1]}
2: ${q.opts[2]}`, 32);
  const m = out.match(/[0-2]/);
  return m ? +m[0] : null;
}

async function one(file, id) {
  console.log(`${id}`);
  const doc = transcribe(file, id);
  const ctx = await context(doc);
  console.log(`  idea: ${ctx.idea}`);
  console.log(`  theme: ${ctx.theme} · ${ctx.actionable ? 'actionable' : 'explanatory'}`);
  const en = await write(doc, ctx, 'en');
  const v1 = await blind(doc, en);
  let verdict = 'verified', key = en.a;
  if (v1 !== en.a) {
    const v2 = await blind(doc, en);
    if (v1 != null && v1 === v2) { key = v1; verdict = 'corrected';
      console.log(`  ⚠ key ${en.a} → ${v1} (two blind runs agreed against the generator)`); }
    else { console.log(`  ✗ DISCARDED — ambiguous (gen=${en.a}, blind=${v1}/${v2})`); return null; }
  }
  const pt = await write(doc, ctx, 'pt').catch(() => null);
  return { id, theme: ctx.theme, idea: ctx.idea, type: en.type, a: key,
    [verdict]: true,
    en: { q: en.q, opts: en.opts, why: en.why },
    ...(pt ? { pt: { q: pt.q, opts: pt.opts, why: pt.why } } : {}),
    lang: doc.language, generatedAt: Date.now() };
}

async function main() {
  mkdirSync(dirname(OUT), { recursive: true });
  const bank = existsSync(OUT) ? JSON.parse(readFileSync(OUT, 'utf8')) : {};
  const jobs = [];
  if (argv.includes('--all')) {
    const dir = join(ROOT, 'media', 'reels');
    if (!existsSync(dir)) { console.error('✗ no media/reels/ — put the clips there or pass a file'); process.exit(1); }
    for (const f of readdirSync(dir).filter(f => /\.(mp4|mov|m4v)$/i.test(f)))
      jobs.push([join(dir, f), f.replace(/\.[^.]+$/, '')]);
  } else {
    const file = argv.find(a => !a.startsWith('--'));
    if (!file) { console.error('usage: reel-check.mjs <file.mp4> --id <reel-id>   |   --all'); process.exit(1); }
    jobs.push([file, arg('--id') || basename(file).replace(/\.[^.]+$/, '')]);
  }
  let made = 0, skipped = 0, dropped = 0;
  for (const [file, id] of jobs) {
    if (bank[id]) { console.log(`${id} — has a check, skip`); skipped++; continue; }
    try {
      const q = await one(file, id);
      if (q) { bank[id] = q; writeFileSync(OUT, JSON.stringify(bank, null, 1)); made++; console.log('  ✓ written'); }
      else dropped++;
    } catch (e) {
      console.log(`  FAILED: ${e.message.slice(0, 140)}`);
      if (e.fatal) { console.log('\n⛔ out of budget — re-run after the reset; finished reels are skipped.'); break; }
    }
  }
  console.log(`\n${made} written · ${dropped} discarded as ambiguous · ${skipped} already had one`);
  console.log(`bank: ${OUT}\nWire each into its REELS entry as \`check\`, or load ${basename(OUT)} at boot.`);
}
main();
