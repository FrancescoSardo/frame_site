
import adapter from '@sveltejs/adapter-static';
import vercel from '@sveltejs/adapter-vercel';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: vitePreprocess(),

	kit: {
    adapter: vercel(),
    // base path for static assets
    paths: {
      base: '/frame_site'
    },
	}
};

export default config;
