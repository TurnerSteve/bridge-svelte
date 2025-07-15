




# React Directory structure before modification

bridge-teacher-main/
├── .gitignore
├── README.md
├── components.json
├── eslint.config.mjs
├── next.config.ts
├── package-lock.json
├── package.json
├── postcss.config.mjs
├── tailwind.config.mjs
├── tsconfig.json
├── XLibrary/
│   ├── BRI-DGE-DUP.md
│   ├── BRI.md
│   ├── DGE.md
│   ├── DUP.md
│   └── ... (other library markdown)
├── pages/
│   ├── _app.tsx
│   ├── _document.tsx
│   ├── api/
│   │   └── hello.ts
│   ├── index.tsx
│   ├── about.tsx
│   └── … (other page routes)
├── components/
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Button.tsx
│   └── … (other reusable React components)
├── hooks/
│   ├── useAuth.ts
│   └── … 
├── lib/
│   ├── api.ts
│   └── … 
├── styles/
│   └── globals.css
├── types/
│   ├── bridge.ts
│   ├── cards.ts
│   └── … 
├── utils/
│   └── shadcn.ts
└── math/
    ├── factorial.ts
    ├── maxCodePage.ts
    └── randomBigInt.ts

# The process of conversion

    1.	Set up a new SvelteKit project
	2.	Convert global layout & styling (src/app.html / src/routes/+layout.svelte & globals.css)
	3.	Migrate each page (pages/*.tsx → src/routes/*.svelte)
	4.	Rewrite shared components (components/*.tsx → src/lib/components/*.svelte)
	5.	Port utilities and types (utils/, math/, types/)
	6.	Adjust configuration (Tailwind, ESLint, etc.)

# The new structure of svelte kit app

├── README.md
├── .gitignore
├── package.json
├── tsconfig.json
├── svelte.config.js
├── postcss.config.cjs
├── tailwind.config.cjs
├── eslint.config.mjs
├── static/
│   ├── favicon.ico
│   └── (other static assets)
├── src/
│   ├── app.html           # Template for the app
│   ├── styles/
│   │   └── globals.css    # Global styles (Tailwind entry)
│   ├── lib/
│   │   ├── components/    # Converted UI components
│   │   │   ├── Header.svelte
│   │   │   ├── Footer.svelte
│   │   │   └── Button.svelte
│   │   ├── hooks/         # Custom hooks & utilities
│   │   │   └── useAuth.ts
│   │   ├── utils/         # API clients, helpers
│   │   │   └── api.ts
│   │   ├── math/          # Math utilities
│   │   │   ├── factorial.ts
│   │   │   └── randomBigInt.ts
│   │   └── types/         # Type definitions
│   │       ├── bridge.d.ts
│   │       └── cards.d.ts
│   └── routes/            # SvelteKit pages & endpoints
│       ├── +layout.svelte
│       ├── +layout.ts     # Optional root layout load function
│       ├── +page.svelte   # Homepage
│       ├── about/
│       │   └── +page.svelte
│       ├── api/
│       │   └── hello.ts   # Server endpoint
│       └── ...            # Other routes converted from pages/*.tsx
