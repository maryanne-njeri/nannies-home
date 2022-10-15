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
                'aref': ['Aref+Ruqaa'],
            },

            colors: {
                'light-brown': '#715353',
                'light-pink': '#FEF7F7'
            },

            backgroundImage: {
                'hero-image': "url('/public/heroImage.jpg')",
                'home-image': "url('/public/homeImage.jpg')",
                'first-user': "url('/public/user1.jpg')",
                'second-user': "url('/public/user2.jpg')",
                'third-user': "url('/public/user3.jpg')",
                'fourth-user': "url('/public/user4.jpg')",
            },

            boxShadow: {
                'hero-search': '0px 4px 4px rgba(0, 0, 0, 0.25)'
            }
        },
    },
    plugins: [],
}