/* ============================================================================
   INSTANCE · Taipa Academy by Rafael Lopes  (brand pack — pure config)
   A school of rammed-earth building (taipa). Earth palette: deep umber ground,
   ochre accent, sand highlight, a touch of fired clay. Fraunces for display,
   Figtree for body, both self-hosted. The mark is a formwork block with three
   rammed lifts.
   Firebase stays a PLACEHOLDER (guest-only preview) until a real project is
   wired — docs/PROVISIONING.md phase 2 in the academy template.
============================================================================ */
(window.EdenBrands = window.EdenBrands || {}).taipa = {
  id: 'taipa',
  name: 'Taipa',
  academy: 'Taipa Academy',
  tagline: 'Building with the earth, by Rafael Lopes',
  title: 'Taipa Academy — Rammed-earth building, by Rafael Lopes',
  ogDesc: 'Learn to build with rammed earth: soil as a material, formwork and ramming, foundations and water, earth plasters, and the repair of heritage taipa walls.',
  twDesc: 'Taipa Academy by Rafael Lopes — the craft of rammed-earth building, taught from soil test to finished wall.',
  domain: 'taipa-academy.pages.dev',
  hostnames: ['taipa-academy.pages.dev', 'edenangels.github.io'],
  lang: 'en',
  ethos: 'Taipa Academy by Rafael Lopes: a school of rammed-earth (taipa) building rooted in Portugal\'s own tradition — soil as a material, formwork and ramming, foundations and water, earth plasters, and the repair of heritage walls. The craft is taught hands-on, from the first soil test to the finished wall.',
  shortDesc: 'a rammed-earth building school',
  realm: 'real building situations (soil tests, formwork and ramming, foundations and water, plasters and finishes, repairing old taipa walls, site safety, working with clients, engineers and the municipality)',
  location: 'Portugal',
  firebase: {                    /* PLACEHOLDER — the academy runs guest-only until Rafael's own project is wired */
    apiKey: 'PLACEHOLDER', authDomain: '', projectId: '',
    storageBucket: '', messagingSenderId: '', appId: ''
  },
  superadmins: [],
  landflow: '',
  themeColor: '#1b130d',
  wordSub: 'Academy',
  contentProvider: '',           /* Rafael Lopes authors the content himself */
  /* the mark: a formwork block holding three rammed lifts */
  logoSvg: '<svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="4" y="5.5" width="28" height="25" rx="3" stroke="#d9893f" stroke-width="2.4"/><rect x="8" y="9.5" width="20" height="4.2" rx="1.2" fill="#b5553a"/><rect x="8" y="15.9" width="20" height="4.2" rx="1.2" fill="#d9893f"/><rect x="8" y="22.3" width="20" height="4.2" rx="1.2" fill="#e6c79a"/></svg>',
  favicon: 'favicon.svg',
  ogImage: null,
  content: 'brands/taipa/content.js',
  /* the storefront always leads with the welcome course */
  heroCourse: 'welcome-taipa',
  fonts: {
    /* self-hosted (GDPR: no visitor IP to a third party) — scripts/selfhost-fonts.py */
    link: 'fonts/fonts.css',
    display: '"Fraunces", Georgia, "Times New Roman", serif',
    body: '"Figtree", system-ui, sans-serif'
  },
  theme: {
    '--bg': '#1b130d', '--bg-2': '#271b13',
    '--surface': 'rgba(245,228,205,.06)', '--surface-2': 'rgba(245,228,205,.11)',
    '--line': 'rgba(245,228,205,.14)',
    '--text': '#f5ebdd', '--text-dim': '#d6c3ad', '--text-faint': '#a48c74',
    '--accent': '#d9893f' /* ochre, 6.1:1 on the ground */, '--accent-2': '#e6c79a', '--glow': 'rgba(217,137,63,.42)',
    '--forest': '#6f6a4e', '--olive': '#8a7f5a', '--cork': '#8c6a4e', '--clay': '#b5553a',
    '--atlantic': '#6e8d8a', '--mist': '#d9cdb8', '--ivory': '#f5ebdd', '--focus': '#e6c79a',
    /* rgb channels + gradients the shared stylesheet mixes from */
    '--tint-rgb': '140,106,78', '--accent-2-rgb': '230,199,154', '--bg-rgb': '27,19,13', '--bg2-rgb': '39,27,19',
    '--grad-text': 'linear-gradient(95deg, #f1d8b3 0%, #d9893f 48%, #b5553a 100%)',
    '--orb-grad': 'conic-gradient(from 200deg, #d9893f, #e6c79a, #8c6a4e, #d9893f)'
  }
};
