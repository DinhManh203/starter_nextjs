
/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,jsx,tsx}",
        "./components/**/*.{js,jsx,tsx}",
        "./app/**/*.{js,jsx,tsx}",
        "./src/**/*.{js,jsx,tsx}",
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "15px",
            screens: {
                sm: "640px",
                md: "768px",
                lg: "960px",
                xl: "1200px",
            },
        },
        fontFamily: {
            primary: "var(--font-jetbrainsMono)",
        },
        extend: {
            keyframes: {
                "accordion-down": {
                    from: { height: "0" },
                    to: { height: "var(--radix-accordion-content-height)" },
                },
                "accordion-up": {
                    from: { height: "var(--radix-accordion-content-height)" },
                    to: { height: "0" },
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
            colors: {
                primary: '#1c1c22',
                secondary: '#F59E0B',
                accent: {
                    DEFAULT: '#00ff99',
                    hover: '#00e187',
                }
            },
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
        }

    },
    plugins: [],
}