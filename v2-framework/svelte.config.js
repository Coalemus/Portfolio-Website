import adapter from '@sveltejs/adapter-auto';
import pkg from 'svelte-preprocess'; const { typescript } = pkg;
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	// preprocess: preprocess(),

	kit: {
		adapter: adapter()
  },

  extensions: ['.svelte', '.md'],

  preprocess: [
    preprocess({
      scss: {
        prependData: `@import './src/style/app.scss';`
      }
    }),
    typescript({}),
    mdsvex({
      extensions: ['.md'],
      layout: {
        blog: 'src/routes/blog/post.svelte'
      },

	  })
  ]
};

export default config;
