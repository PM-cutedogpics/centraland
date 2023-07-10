/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		extend: {
			gridTemplateColumns: {
				sidebar: '300px auto', // for sidebar layout, adds grid-cols-sidebar class
			},
			gridTemplateRows: {
				header: '64px auto', // for navbar layout, adds grid-rows-sidebar class
			},
			borderRadius: {
				'home-chip': '15px',
			},
			colors: {
				'app-mint-green': '#9CD9A5',
				'chip-default': '#ADADAD',
				'hover-green': '#77A37E',
			},
		},
	},
	plugins: [],
};
