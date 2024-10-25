/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: [
    "./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./layouts/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		colors: {
			transparent: "transparent",
			not_active_gray: "#667085",
			border_gray: "#EAECF0",
			light_purple: "#BFB0E6",
			light_violet: "#F5F3FF",
			overlay_purple: "#53389E",
			table_gray: "#F9FAFB",
			hover_purple: "#F9F5FF",
			current: "current",
			black: colors.black,
			white: colors.white,
			purple_title: "#6941C6",
			blue: {
				water: "#D5F5FF",
				ligth: "#44D4FF",
				lighter: "#719AF6",
				moderate: "#6165D7",
				default: "#44A04A",
				dark: "#170E33",
				purple: "#4531D3",
			},
			blueGray: colors.slate,
			yellow: colors.yellow,
			gray: colors.neutral,
			red: colors.red,
			aqua: "#31D3BA",
			//yellow: colors.amber,
			green: {
				water: "#C7EFDA",
				lighter: "#B1C449",
				default: "#44A04A",
				dark: "#202e78",
			},
			blue_gray: "#475467",
			gold: "#BA973B",
			ligthgreen: "#B1C449",
			ligthblue: "#44D4FD",
			primary: "#3D4495",
			secondary: "",
			zafiro: "#6165D7",
			purple: "#7F56D9",
			pink: {
				soft: "#EF497A",
				default: "#EA82DE",
				dark: "#FF2266"
			},
			violet: {
				superligth: "#FAF7FF",
				ligth: "#AD81FF",
				moderate: "#A737D5",
				water: "#D8C3FF",
				lighter: "#AA80F9",
				default: "#2B2558",
				dark: "#161238",
			},
		},

		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			"2xl": "1536px",
		},

		extend: {
			letterSpacing: {
				'n2p': '-2%'
			},
			width: {
				'90vw': '90vw',
				'98vw': '98vw',
				'95vw': '95vw',
				'80vw': '80vw',
				'60vw': '60vw',
			},

			height: {
				'8vh': '8vh',
				'10vh': '10vh',
				'12vh': '12vh',
				'35vh': '35vh',
			},

			visibility: ["group-hover"],

			backgroundImage: {
				"home-hero": "url('/img/home-hero-pattern.svg')",
				"home-hero-mobile": "url('/img/home-hero-pattern-mobile.svg')",
				"pattern-1": "url('/img/background-pattern-1.svg')",
				"profile-background": "url('/img/profile-background.svg')",
				"home-pattern": "url('/img/home-pattern.svg')",
				"footer-pattern": "url('/img/footer-pattern.svg')",
				"login-pattern": "url('/img/login-pattern.svg')",
				"pattern-white": "url('/img/pattern-white.svg')",
				"form-background": "url('/img/bg-ranking.png)"
			},
			gridTemplateColumns: {
				// Complex site-specific column configuration
				home: "650px auto",
				board: "1fr 2fr 1fr",
				"modal-post": "550px 1fr",
				"form-2cols": "auto 1fr",
				"1fr-auto": "1fr auto",
			},
			maxWidth: {
				"screen-sm-5": "540px",
				"screen-sm": "640px",
			},
			fontSize: {
				"2.5xl": [
					"1.75rem",
					{
						lineHeight: "36px",
					},
				],
			},
			spacing: {
				"1px": "1px",
				"px": "2px",
				xs: ".75rem",
				sm: ".875rem",
				tiny: ".875rem",
				base: "1rem",
				lg: "1.125rem",
				xl: "1.25rem",
				"2xl": "1.5rem",
				"3xl": "1.875rem",
				"4xl": "2.25rem",
				"5xl": "3rem",
				"6xl": "4rem",
				"7xl": "5rem",
				2: "0.5rem",
				82: "20.50rem",
				83: "20.75rem",
				90: "22.5rem",
				98: "24.5rem",
				105: "26.25rem",
				130: "32.5rem",
				136: "34rem",
			},
		},
		fontFamily: {
			display: ["Helvetica", ...defaultTheme.fontFamily.sans],
			body: ['"Helvetica"', ...defaultTheme.fontFamily.sans],
		},
		fontSize: {
			xs: ".75rem",
			sm: ".875rem",
			tiny: ".875rem",
			base: "1rem",
			lg: "1.125rem",
			xl: "1.25rem",
			"2xl": "1.5rem",
			"3xl": "1.875rem",
			"4xl": "2.25rem",
			"5xl": "3rem",
			"6xl": "4rem",
			"7xl": "5rem",
		},
		keyframes: {
			"fade-in": {
				"0%": {
					opacity: "0",
				},
				"100%": {
					opacity: "1",
				},
			},
			"fade-in-down": {
				"0%": {
					opacity: "0",
					transform: "translate3d(0, -20%, 0)",
				},
				"100%": {
					opacity: "1",
					transform: "translate3d(0, 0, 0)",
				},
			},
			"fade-out-down": {
				from: {
					opacity: "1",
					transform: "translateY(0px)",
				},
				to: {
					opacity: "0",
					transform: "translateY(10px)",
				},
			},
			"fade-in-up": {
				"0%": {
					opacity: "0",
					transform: "translateY(10px)",
				},
				"100%": {
					opacity: "1",
					transform: "translateY(0)",
				},
			},
			"fade-out-up": {
				from: {
					opacity: "1",
					transform: "translateY(0px)",
				},
				to: {
					opacity: "0",
					transform: "translateY(10px)",
				},
			},
			"up-down-animate": {
				"0%": {
					transform: "translateY(-10%)",
					animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
				},
				"50%": {
					transform: "translateY(0)",
					animationTimingFunction: "cubic-bezier(0, 0, 0.2, 1)",
				},

				"100%": {
					transform: "translateY(-10%)",
					animationTimingFunction: "cubic-bezier(0.8, 0, 1, 1)",
				},
			},
			pulse: {
				"0%": {
					opacity: 1,
				},
				"50%": {
					opacity: 0.5,
				},
				"100%": {
					opacity: 1,
				},
			},
			ping: {
				'75%, 100%': {
					transform: 'scale(2)',
					opacity: 0
				}
			},
			spin: {
				from: {
					transform: 'rotate(0deg)'
				},
				to: {
					transform: 'rotate(360deg)'
				}
			}
		},
		animation: {
			spin: 'spin 1s linear infinite',
			ping: 'ping 1s cubic-bezier(0, 0, 0.2, 1) infinite',
			pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
			"fade-in": "fade-in 3s ease-in",
			"fade-in-down-1": "fade-in-down 2s ease-in both",
			"fade-in-down-2": "fade-in-down 2s ease-in both",
			"fade-out-down": "fade-out-down 0.5s ease-out",
			"fade-in-up": "fade-in-up 0.5s ease-out",
			"fade-out-up": "fade-out-up 0.5s ease-out",
			"fade-out": "fade-out-up 2s ease-in-out both",
			"up-down": "up-down-animate 3s linear infinite",
		},
	},
	variants: {
		extend: {
			padding: ["responsive", "hover", "first", "last"],
			borderWidth: ["responsive", "hover", "last"],
			margin: ["responsive", "hover", "last"],
		},
	},
	plugins: [],
};
