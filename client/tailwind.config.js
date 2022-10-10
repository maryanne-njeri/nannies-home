// /** @type {import('tailwindcss').Config} */

module.exports = {
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                'averia': ['Averia Serif Libre'],
                'nunito': ['Nunito'],
            },

            colors: {
                'light-brown': '#715353'
            },

            backgroundImage: {
                'hero-image': "url('/public/heroImage.jpg')",
            }
        },
    },
    plugins: [],
}