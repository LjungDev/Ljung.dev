/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		/** Based on Nord theme. https://www.nordtheme.com */
		colors: {
			'polar-night': {
				0: '#2e3440',
				1: '#3b4252',
				2: '#434c5e',
				3: '#4c566a'
			},
			'snow-storm': {
				0: '#d8dee9',
				1: '#e5e9f0',
				2: '#eceff4'
			},
			frost: {
				0: '#8fbcbb',
				1: '#88c0d0',
				2: '#81a1c1',
				3: '#5e81ac'
			},
			aurora: {
				0: '#bf616a',
				1: '#d08770',
				2: '#ebcb8b',
				3: '#a3be8c',
				4: '#b48ead'
			}
		},
		fontFamily: {
			display: ["'Baloo 2'", 'cursive'],
			body: ["'Open Sans'", 'sans-serif'],
			mono: ["'Fira Code'", 'monospace']
		},
		extend: {}
	},
	plugins: []
};
