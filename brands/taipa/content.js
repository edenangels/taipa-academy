/* ============================================================================
   INSTANCE CONTENT · Taipa Academy by Rafael Lopes — course catalogue (pure data)
   The curriculum of a rammed-earth school, in the order a wall is built: why
   earth · the material · formwork and ramming · foundations and water ·
   plasters · repairing old walls · designing and building legally.
   HONESTY: nothing is filmed yet. Every lesson is `type:'soon'`, so the
   storefront says "Coming soon" instead of pretending. No ratings, no learner
   counts. Replace each 'soon' with { type:'vimeo', id, h } as Rafael films.
============================================================================ */
const _soon = n => Array.from({ length: n }, () => ({ type: 'soon' }));

const CATALOG = [
  {
    id: 'welcome-taipa', title: 'Welcome to Taipa Academy', cat: 'Foundations', grad: 1, icon: 'compass',
    level: 'All levels', learners: 0, ai: true, featured: true, updated: '2026-10',
    poster: 'media/covers/welcome-taipa.svg', heroArt: 'media/covers/welcome-taipa-hero.svg',
    educator: 'rafael',
    outcomes: ['Explain why rammed earth is a serious building material today', 'Place taipa in Portugal\'s own building tradition', 'Know how this academy takes you from soil test to finished wall'],
    outcomes_pt: ['Explicar porque a taipa é um material de construção sério hoje', 'Situar a taipa na tradição construtiva portuguesa', 'Saber como esta academia o leva do ensaio do solo à parede acabada'],
    hook: 'The oldest wall is the newest idea.', hookSub: 'Why earth, why now, and how this academy works.',
    desc: 'Rammed earth is older than the Alentejo villages it still holds up, and it answers questions the building industry is only now asking: carbon, comfort, local material, honest work. This is where the journey starts.',
    modules: ['Why earth: the case for taipa today', 'Taipa in Portugal: a living tradition', 'How this academy works'],
    moduleDurations: [7, 9, 5],
    moduleMedia: _soon(3)
  },
  {
    id: 'earth-as-material', title: 'Earth as a Material', cat: 'Material', grad: 2, icon: 'seed',
    level: 'Beginner', learners: 0, ai: true, updated: '2026-10', poster: 'media/covers/earth-as-material.svg', educator: 'rafael',
    outcomes: ['Read a soil by hand: clay, silt, sand and gravel', 'Run the jar, ribbon, ball and drop tests on site', 'Correct a soil and judge its moisture before ramming'],
    outcomes_pt: ['Ler um solo com as mãos: argila, silte, areia e cascalho', 'Fazer os ensaios do frasco, da fita, da bola e da queda no local', 'Corrigir um solo e avaliar a humidade antes de apiloar'],
    hook: 'The wall is already under your feet.', hookSub: 'Learn to read, test and correct the soil you build with.',
    desc: 'Every taipa wall begins with a handful of earth. What it is made of, how to test it with nothing but a jar and your hands, how to correct it, and when stabilisation helps and when it only adds cement.',
    modules: ['What soil is made of: clay, silt, sand, gravel', 'Field tests: jar, ribbon, ball and drop', 'Choosing and correcting a soil', 'Moisture: the hand test', 'Stabilisation, and when not to'],
    moduleDurations: [8, 11, 9, 6, 8],
    moduleMedia: _soon(5)
  },
  {
    id: 'formwork-and-ramming', title: 'Formwork & Ramming', cat: 'Technique', grad: 6, icon: 'hands',
    level: 'Beginner', learners: 0, ai: true, updated: '2026-10', poster: 'media/covers/formwork-and-ramming.svg', educator: 'rafael',
    outcomes: ['Set up traditional and modern formwork plumb and tight', 'Mix, move and place earth in even lifts', 'Ram a dense, sound wall and strike the forms cleanly'],
    outcomes_pt: ['Montar cofragem tradicional e moderna a prumo e bem apertada', 'Misturar, transportar e colocar a terra em camadas regulares', 'Apiloar uma parede densa e sã e descofrar com limpeza'],
    hook: 'Layer by layer, the wall rises.', hookSub: 'The taipal, the lifts, the rammer, and the sound of a wall done right.',
    desc: 'The heart of the craft. Traditional taipais and modern shuttering, how earth is mixed and moved, the rhythm of lifts and compaction, corners and openings, and the moment the formwork comes off.',
    modules: ['The taipal: traditional formwork', 'Modern formwork and shuttering', 'Mixing and moving earth', 'Layers, lifts and compaction', 'Corners, openings and lintels', 'Striking the formwork'],
    moduleDurations: [9, 8, 7, 12, 10, 6],
    moduleMedia: _soon(6)
  },
  {
    id: 'foundations-and-water', title: 'Foundations, Plinths & Water', cat: 'Water & Structure', grad: 5, icon: 'mountain',
    level: 'Beginner', learners: 0, ai: true, updated: '2026-10', poster: 'media/covers/foundations-and-water.svg', educator: 'rafael',
    outcomes: ['Build a plinth that stops rising damp', 'Size overhangs and drainage so rain never meets the wall', 'Judge wall thickness and work safely on site'],
    outcomes_pt: ['Construir um embasamento que trava a humidade ascendente', 'Dimensionar beirais e drenagem para que a chuva nunca toque a parede', 'Avaliar a espessura da parede e trabalhar em segurança no estaleiro'],
    hook: 'Good boots and a good hat.', hookSub: 'Everything that keeps water away from an earth wall.',
    desc: 'Earth walls fail for one reason: water. Stone plinths and capillarity, roof overhangs and drainage, how thick a wall needs to be, and the site habits that keep everyone safe.',
    modules: ['Good boots and a good hat', 'Stone plinths and capillarity', 'Roof overhangs and drainage', 'Wall thickness and structure', 'Site safety'],
    moduleDurations: [6, 9, 8, 9, 7],
    moduleMedia: _soon(5)
  },
  {
    id: 'earth-plasters', title: 'Earth Plasters & Finishes', cat: 'Finishes', grad: 4, icon: 'sun',
    level: 'Intermediate', learners: 0, ai: true, updated: '2026-10', poster: 'media/covers/earth-plasters.svg', educator: 'rafael',
    outcomes: ['Apply base coats that key into the wall', 'Mix finishing coats with natural pigments', 'Combine lime and earth, and repair a damaged finish'],
    outcomes_pt: ['Aplicar camadas de base que agarram à parede', 'Misturar camadas de acabamento com pigmentos naturais', 'Combinar cal e terra, e reparar um acabamento danificado'],
    hook: 'The skin of the wall.', hookSub: 'Base coats, finishing coats, pigments, and the lime that protects them.',
    desc: 'How a raw wall becomes a finished room. Base coats and keys, finishing coats and pigments, where lime belongs, and how to repair a finish without starting again.',
    modules: ['Base coats and keys', 'Finishing coats and pigments', 'Lime and earth together', 'Repairing a finish'],
    moduleDurations: [9, 10, 8, 6],
    moduleMedia: _soon(4)
  },
  {
    id: 'heritage-taipa', title: 'Repairing Heritage Taipa', cat: 'Heritage', grad: 3, icon: 'tree',
    level: 'Intermediate', learners: 0, ai: true, updated: '2026-10', poster: 'media/covers/heritage-taipa.svg', educator: 'rafael',
    outcomes: ['Read an old wall and tell damage from patina', 'Trace erosion, water and salts to their cause', 'Patch and re-ram with compatible material, and plan maintenance'],
    outcomes_pt: ['Ler uma parede antiga e distinguir dano de pátina', 'Rastrear erosão, água e sais até à causa', 'Remendar e reapiloar com material compatível, e planear a manutenção'],
    hook: 'Walls that outlived their builders.', hookSub: 'How to read, repair and keep a heritage taipa wall.',
    desc: 'Much of the Alentejo stands on taipa raised generations ago. Reading an old wall, finding what water and salts have done, patching and re-ramming with material that belongs, and the maintenance that makes the next century possible.',
    modules: ['Reading an old wall', 'Erosion, water and salts', 'Patching and re-ramming', 'Maintenance over the years'],
    moduleDurations: [9, 8, 11, 6],
    moduleMedia: _soon(4)
  },
  {
    id: 'design-and-permits', title: 'Designing & Building Legally', cat: 'Design', grad: 7, icon: 'people',
    level: 'Intermediate', learners: 0, ai: true, updated: '2026-10', poster: 'media/covers/design-and-permits.svg', educator: 'rafael',
    outcomes: ['Explain how an earth wall behaves with heat and moisture', 'Work with an engineer and the municipality on a taipa project', 'Cost a rammed-earth build honestly'],
    outcomes_pt: ['Explicar como uma parede de terra se comporta com o calor e a humidade', 'Trabalhar com um engenheiro e a câmara num projeto em taipa', 'Orçamentar uma obra em taipa com honestidade'],
    hook: 'From sketch to licence to budget.', hookSub: 'What a taipa project needs before the first lift.',
    desc: 'The part of the craft that happens at a desk. Thermal and moisture behaviour, how to work with engineers, what licensing asks of an earth building, and how to cost a build so it gets finished.',
    modules: ['Thermal and moisture behaviour', 'Working with engineers', 'Licensing and the municipality', 'Costing a taipa build'],
    moduleDurations: [9, 8, 9, 8],
    moduleMedia: _soon(4)
  }
];

/* No invented sessions. Real ones come from the studio the day someone schedules one. */
const LIVE_SESSIONS = [];

const COURSE_HOOKS = {};
const COURSE_HOOKS_PT = {
  'welcome-taipa':          ['A parede mais antiga é a ideia mais nova.', 'Porquê terra, porquê agora, e como funciona esta academia.'],
  'earth-as-material':      ['A parede já está debaixo dos seus pés.', 'Aprenda a ler, ensaiar e corrigir o solo com que constrói.'],
  'formwork-and-ramming':   ['Camada a camada, a parede sobe.', 'O taipal, as camadas, o pilão, e o som de uma parede bem feita.'],
  'foundations-and-water':  ['Boas botas e um bom chapéu.', 'Tudo o que mantém a água longe de uma parede de terra.'],
  'earth-plasters':         ['A pele da parede.', 'Camadas de base, acabamentos, pigmentos, e a cal que os protege.'],
  'heritage-taipa':         ['Paredes que sobreviveram a quem as fez.', 'Como ler, reparar e conservar uma parede de taipa antiga.'],
  'design-and-permits':     ['Do esboço à licença ao orçamento.', 'O que um projeto em taipa precisa antes da primeira camada.']
};
const COURSE_QUIZ = {};
const TAKEAWAYS = {};
const COURSE_PT = {
  'welcome-taipa': { title: 'Bem-vindo à Taipa Academy',
    desc: 'A taipa é mais antiga do que as aldeias alentejanas que ainda sustenta, e responde a perguntas que a construção só agora faz: carbono, conforto, material local, trabalho honesto. É aqui que a viagem começa.',
    modules: ['Porquê terra: a taipa hoje', 'A taipa em Portugal: uma tradição viva', 'Como funciona esta academia'] },
  'earth-as-material': { title: 'A Terra como Material',
    desc: 'Toda a parede de taipa começa numa mão-cheia de terra. De que é feita, como a ensaiar só com um frasco e as mãos, como a corrigir, e quando a estabilização ajuda e quando só acrescenta cimento.',
    modules: ['De que é feito o solo: argila, silte, areia, cascalho', 'Ensaios de campo: frasco, fita, bola e queda', 'Escolher e corrigir um solo', 'Humidade: o teste da mão', 'Estabilização, e quando não'] },
  'formwork-and-ramming': { title: 'Cofragem e Apiloamento',
    desc: 'O coração do ofício. Taipais tradicionais e cofragem moderna, como a terra se mistura e transporta, o ritmo das camadas e da compactação, cantos e vãos, e o momento em que a cofragem sai.',
    modules: ['O taipal: a cofragem tradicional', 'Cofragem moderna', 'Misturar e transportar a terra', 'Camadas e compactação', 'Cantos, vãos e padieiras', 'Descofrar'] },
  'foundations-and-water': { title: 'Fundações, Embasamentos e Água',
    desc: 'As paredes de terra falham por uma razão: a água. Embasamentos de pedra e capilaridade, beirais e drenagem, a espessura que uma parede precisa, e os hábitos de estaleiro que mantêm todos em segurança.',
    modules: ['Boas botas e um bom chapéu', 'Embasamentos de pedra e capilaridade', 'Beirais e drenagem', 'Espessura e estrutura da parede', 'Segurança no estaleiro'] },
  'earth-plasters': { title: 'Rebocos de Terra e Acabamentos',
    desc: 'Como uma parede crua se torna uma sala acabada. Camadas de base e aderência, acabamentos e pigmentos, onde a cal pertence, e como reparar um acabamento sem recomeçar.',
    modules: ['Camadas de base e aderência', 'Acabamentos e pigmentos', 'Cal e terra juntas', 'Reparar um acabamento'] },
  'heritage-taipa': { title: 'Reparar Taipa Antiga',
    desc: 'Grande parte do Alentejo assenta em taipa erguida há gerações. Ler uma parede antiga, perceber o que a água e os sais fizeram, remendar e reapiloar com material que pertence, e a manutenção que torna possível o próximo século.',
    modules: ['Ler uma parede antiga', 'Erosão, água e sais', 'Remendar e reapiloar', 'Manutenção ao longo dos anos'] },
  'design-and-permits': { title: 'Projetar e Construir Legalmente',
    desc: 'A parte do ofício que acontece à secretária. Comportamento térmico e higrométrico, como trabalhar com engenheiros, o que o licenciamento pede a um edifício de terra, e como orçamentar para que a obra se acabe.',
    modules: ['Comportamento térmico e higrométrico', 'Trabalhar com engenheiros', 'Licenciamento e a câmara', 'Orçamentar uma obra em taipa'] }
};
const COURSE_SKILLS = {};
const COURSE_REGIME = {};
const ORGS = {};
/* The one name here is the academy's own. Role and line describe what the courses are; no credentials are claimed. */
const EDUCATORS = {
  rafael: {
    name: 'Rafael Lopes',
    role: { en: 'Rammed-earth builder and teacher', pt: 'Construtor em taipa e formador' },
    line: { en: 'Teaches the craft the way a wall is built: from the soil test to the finished surface.', pt: 'Ensina o ofício como se faz uma parede: do ensaio do solo ao acabamento.' },
    credentials: [],
    external: false
  }
};
const REELS = [];
const QUICKWINS = REELS;
