/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './**/*.{razor,html,cshtml}',
        './node_modules/flowbite/**/*.js',
        './node_modules/preline/dist/*.js',
    ],
    theme: {
        extend: {},
    },
    plugins: [require('@tailwindcss/forms'), require('flowbite/plugin'), require('preline/plugin')],
};
