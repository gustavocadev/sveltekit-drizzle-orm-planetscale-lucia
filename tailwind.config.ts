import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';

const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {}
	},

	plugins: [daisyui],

	daisyui: {
		themes: ['light']
	}
} satisfies Config;

export default config;
