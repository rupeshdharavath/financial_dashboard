/** @type {import('tailwindcss').Config} */
export default {
	content: [
		'./index.html',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		extend: {
			colors: {
				brand: {
					50: '#eef9f4',
					100: '#d7f0e4',
					500: '#1f7a5d',
					700: '#12513f',
					900: '#0a2f25',
				},
			},
			boxShadow: {
				panel: '0 10px 30px rgba(10, 30, 22, 0.08)',
			},
		},
	},
	plugins: [],
}
