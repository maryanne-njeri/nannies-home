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
                'light-brown': '#715353',
                'light-pink': '#FEF7F7'
            },

            backgroundImage: {
                'hero-image': "url('/public/heroImage.jpg')",
            },

            boxShadow: {
                'hero-search': '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }
        },
    },
    plugins: [],
}