import { sveltePreprocess } from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base: process.env.NODE_ENV === 'production' ? '' : ''
		},
		prerender: {
			handleHttpError: 'warn'
		},
		alias: {
			'$components/*': 'src/components/*',
			'$lib/*': 'src/lib/*',
			'$utils/*': 'src/utils/*'
		}
	},
	preprocess: sveltePreprocess(),
};

export default config;
