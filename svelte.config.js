import { mdsvex } from 'mdsvex';
import adapter from '@sveltejs/adapter-node';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://svelte.dev/docs/kit/integrations
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(), 
		mdsvex({extension: '.svx'})],
	kit: { 
		adapter: adapter() },
	    alias: {
      $lib: 'src/lib',
      $components: 'src/lib/components',
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
