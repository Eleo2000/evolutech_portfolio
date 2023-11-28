/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			boxShadow: {
				't-orange': '0 35px 60px -15px rgba(234, 88, 12, 0.6)',
			}
		},
	},
	plugins: [],
}
