
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))',
					glow: 'hsl(var(--primary-glow))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				/* Portfolio specific colors */
				purple: 'hsl(var(--purple))',
				blue: 'hsl(var(--blue))',
				cyan: 'hsl(var(--cyan))',
				'text-muted': 'hsl(var(--text-muted))'
			},
			backgroundImage: {
				'gradient-primary': 'var(--gradient-primary)',
				'gradient-hero': 'var(--gradient-hero)',
				'gradient-card': 'var(--gradient-card)'
			},
			boxShadow: {
				'primary': 'var(--shadow-primary)',
				'glow': 'var(--shadow-glow)',
				'card': 'var(--shadow-card)'
			},
			transitionTimingFunction: {
				'smooth': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'spring': 'cubic-bezier(0.175, 0.885, 0.32, 1.275)'
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				// Enhanced fade animations
				'fade-in': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px) scale(0.95)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)'
					}
				},
				'fade-in-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(60px) scale(0.9)',
						filter: 'blur(4px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0px)'
					}
				},
				'slide-in-left': {
					'0%': {
						opacity: '0',
						transform: 'translateX(-60px) rotateY(-15deg)',
						filter: 'blur(2px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0) rotateY(0deg)',
						filter: 'blur(0px)'
					}
				},
				'slide-in-right': {
					'0%': {
						opacity: '0',
						transform: 'translateX(60px) rotateY(15deg)',
						filter: 'blur(2px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateX(0) rotateY(0deg)',
						filter: 'blur(0px)'
					}
				},
				'slide-up': {
					'0%': {
						opacity: '0',
						transform: 'translateY(80px) scale(0.8)',
						filter: 'blur(6px)'
					},
					'50%': {
						opacity: '0.5',
						transform: 'translateY(20px) scale(0.95)',
						filter: 'blur(2px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0px)'
					}
				},
				'scale-in': {
					'0%': {
						opacity: '0',
						transform: 'scale(0.6) rotate(-5deg)',
						filter: 'blur(4px)'
					},
					'70%': {
						opacity: '0.8',
						transform: 'scale(1.05) rotate(2deg)',
						filter: 'blur(1px)'
					},
					'100%': {
						opacity: '1',
						transform: 'scale(1) rotate(0deg)',
						filter: 'blur(0px)'
					}
				},
				// Enhanced glow and effects
				'glow-pulse': {
					'0%, 100%': {
						boxShadow: '0 0 20px hsl(var(--primary) / 0.4)',
						transform: 'scale(1)'
					},
					'50%': {
						boxShadow: '0 0 60px hsl(var(--primary) / 0.8), 0 0 100px hsl(var(--accent) / 0.3)',
						transform: 'scale(1.02)'
					}
				},
				'gradient-shift': {
					'0%': {
						backgroundPosition: '0% 50%',
						transform: 'scale(1)'
					},
					'25%': {
						backgroundPosition: '100% 0%',
						transform: 'scale(1.01)'
					},
					'50%': {
						backgroundPosition: '100% 50%',
						transform: 'scale(1)'
					},
					'75%': {
						backgroundPosition: '0% 100%',
						transform: 'scale(1.01)'
					},
					'100%': {
						backgroundPosition: '0% 50%',
						transform: 'scale(1)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px) rotateX(0deg)'
					},
					'25%': {
						transform: 'translateY(-15px) rotateX(2deg)'
					},
					'50%': {
						transform: 'translateY(-25px) rotateX(0deg)'
					},
					'75%': {
						transform: 'translateY(-10px) rotateX(-2deg)'
					}
				},
				'magnetic-hover': {
					'0%': {
						transform: 'translate(0, 0) scale(1) rotateZ(0deg)'
					},
					'100%': {
						transform: 'translate(3px, -3px) scale(1.08) rotateZ(1deg)'
					}
				},
				'stagger': {
					'0%': {
						opacity: '0',
						transform: 'translateY(30px) scale(0.9)',
						filter: 'blur(3px)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)',
						filter: 'blur(0px)'
					}
				},
				// New sophisticated animations
				'bounce-subtle': {
					'0%, 20%, 50%, 80%, 100%': {
						transform: 'translateY(0) scale(1)'
					},
					'40%': {
						transform: 'translateY(-8px) scale(1.02)'
					},
					'60%': {
						transform: 'translateY(-4px) scale(1.01)'
					}
				},
				'wiggle': {
					'0%, 100%': {
						transform: 'rotate(0deg) scale(1)'
					},
					'25%': {
						transform: 'rotate(1deg) scale(1.02)'
					},
					'75%': {
						transform: 'rotate(-1deg) scale(1.02)'
					}
				},
				'pulse-glow': {
					'0%, 100%': {
						opacity: '1',
						boxShadow: '0 0 5px hsl(var(--primary) / 0.3)'
					},
					'50%': {
						opacity: '0.8',
						boxShadow: '0 0 20px hsl(var(--primary) / 0.6), 0 0 30px hsl(var(--accent) / 0.2)'
					}
				},
				'reveal': {
					'0%': {
						opacity: '0',
						transform: 'translateY(40px) scale(0.8)',
						clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)'
					},
					'100%': {
						opacity: '1',
						transform: 'translateY(0) scale(1)',
						clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 100%)'
					}
				},
				'elastic': {
					'0%': {
						transform: 'scale(0) rotate(0deg)'
					},
					'50%': {
						transform: 'scale(1.25) rotate(5deg)'
					},
					'75%': {
						transform: 'scale(0.9) rotate(-2deg)'
					},
					'100%': {
						transform: 'scale(1) rotate(0deg)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				// Enhanced entrance animations with better easing
				'fade-in': 'fade-in 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'fade-in-up': 'fade-in-up 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-in-left': 'slide-in-left 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-in-right': 'slide-in-right 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'slide-up': 'slide-up 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'scale-in': 'scale-in 0.7s cubic-bezier(0.34, 1.56, 0.64, 1)',
				// Enhanced continuous animations
				'glow-pulse': 'glow-pulse 3s ease-in-out infinite',
				'gradient-shift': 'gradient-shift 4s ease-in-out infinite',
				'float': 'float 8s ease-in-out infinite',
				// Enhanced interaction animations
				'magnetic-hover': 'magnetic-hover 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)',
				'stagger': 'stagger 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				// New sophisticated animations
				'bounce-subtle': 'bounce-subtle 1s ease-in-out',
				'wiggle': 'wiggle 0.5s ease-in-out',
				'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
				'reveal': 'reveal 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
				'elastic': 'elastic 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
