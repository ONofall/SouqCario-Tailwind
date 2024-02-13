/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,js}"],
    theme: {
        extend: {
            padding: {
                larg: '100rem',
            },
            colors: {
                blue: {
                    950: '#42549c',
                },
                gray: {
                    950: '#F4F5F9'
                },
                orange: {
                    950: '#F26522'
                },

            },
            width: {
                '128': '32rem',
            },
            height: {
                '128': '32rem',
            },


            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
            },

        },
    },
    plugins: [],
}
