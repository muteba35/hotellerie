/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    './pages/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
    './app/**/*.{js,jsx}',
    './src/**/*.{js,jsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* soft-cream */
        input: "var(--color-input)", /* white */
        ring: "var(--color-ring)", /* warm-gold */
        background: "var(--color-background)", /* warm-white */
        foreground: "var(--color-foreground)", /* charcoal */
        primary: {
          DEFAULT: "var(--color-primary)", /* deep-navy */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* warm-gold */
          foreground: "var(--color-secondary-foreground)", /* deep-navy */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* warm-brown */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* soft-cream */
          foreground: "var(--color-muted-foreground)", /* medium-gray */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* muted-bronze */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* white */
          foreground: "var(--color-popover-foreground)", /* charcoal */
        },
        card: {
          DEFAULT: "var(--color-card)", /* soft-cream */
          foreground: "var(--color-card-foreground)", /* charcoal */
        },
        success: {
          DEFAULT: "var(--color-success)", /* sage-green */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* dark-gold */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* warm-brown */
          foreground: "var(--color-error-foreground)", /* white */
        },
      },
      fontFamily: {
        heading: ['Playfair Display', 'serif'],
        body: ['Inter', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      fontSize: {
        'hero': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'heading': ['2rem', { lineHeight: '1.3' }],
        'subheading': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-sm': ['0.875rem', { lineHeight: '1.5' }],
        'caption': ['0.75rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        lg: "var(--border-radius)",
        md: "calc(var(--border-radius) - 2px)",
        sm: "calc(var(--border-radius) - 4px)",
      },
      boxShadow: {
        'elegant': 'var(--shadow-elegant)',
        'luxury': 'var(--shadow-luxury)',
        'soft': '0 2px 8px rgba(27, 54, 93, 0.06)',
        'medium': '0 4px 16px rgba(27, 54, 93, 0.08)',
        'strong': '0 8px 32px rgba(27, 54, 93, 0.12)',
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "slide-up": "slideUp 0.4s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "elegant-hover": "elegantHover 0.3s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        elegantHover: {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.02)" },
        },
      },
      backdropBlur: {
        'luxury': '10px',
      },
      aspectRatio: {
        'golden': '1.618',
        'cinema': '2.35',
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
  ],
}