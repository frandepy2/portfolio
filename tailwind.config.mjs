/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
		  colors: {
			darkBlue: '#2c3e50',
			grayBlue: '#34495e',
			lightGreen: '#1abc9c',
			darkGreen: '#16a085',
		  },
		  backgroundSize: {
			'400%': '400%',
		  },
		  animation: {
			gradient: 'gradientBG 8s ease infinite',
		  },
		  keyframes: {
			gradientBG: {
			  '0%': { backgroundPosition: '0% 50%' },
			  '50%': { backgroundPosition: '100% 50%' },
			  '100%': { backgroundPosition: '0% 50%' },
			},
		  },
		},
	  },
	  plugins: [],
}
