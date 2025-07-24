
import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [vitePreprocess(), mdsvex({ extension: '.svx' })],
	kit: {
		adapter: adapter()
	},
	compilerOptions: {
		runes: true // 👈 enables runes globally
	},
	alias: {
		$lib: 'src/lib',
		$routes: 'src/routes'
		// ...add more as needed
	},
	vite: {
		css: {
			postcss: './postcss.config.cjs'
		}
	},
	extensions: ['.svelte', '.svx', '.md', '.mdx']
};

export default config;
