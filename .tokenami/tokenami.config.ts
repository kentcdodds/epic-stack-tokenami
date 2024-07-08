import { createConfig } from '@tokenami/css'

export default createConfig({
	include: ['./app/**/*.{ts,tsx}'],
	grid: '0.25rem',
	responsive: {
		sm: '(min-width: 640px)',
		md: '(min-width: 768px)',
		lg: '(min-width: 1024px)',
		xl: '(min-width: 1280px)',
		'2xl': '(min-width: 1536px)',
	},
	theme: {
		modes: {
			light: {
				color: {
					background: 'hsl(0 0% 100%)',
					foreground: 'hsl(222.2 84% 4.9%)',
				},
			},
			dark: {
				color: {
					background: 'hsl(222.2 84% 4.9%)',
					foreground: 'hsl(210 40% 98%)',
				},
			},
		},
		alpha: {},
		anim: {},
		border: {},
		color: {},
		ease: {},
		'font-size': {},
		leading: {},
		'line-style': {},
		radii: {},
		size: {},
		shadow: {},
		surface: {},
		tracking: {},
		transition: {},
		weight: {},
		z: {},
	},
})
