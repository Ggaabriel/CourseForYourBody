/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                alinaLay:"url('/CourseForYourBody/images/alinaLay.png')",
                alinaLayMobile:"url('/CourseForYourBody/images/alinaLayMobile.jpg')",
                bgSavva:"url('/CourseForYourBody/images/savva.jpg')",
            },
            fontFamily: {
                sans: ["sans"],
                ristretto: [ "ristretto", "sans serif"],
                serif:["Gilroy","sans serif"],
            },
            colors: {
                savva: `#68c74e`,
            },
            fontSize: {
                'base': '1.1rem',
              },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
    ],
};
