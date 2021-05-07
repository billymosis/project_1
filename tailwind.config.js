module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue,html}', './*.html'],
    plugins: [
        require('@tailwindcss/typography'),
        // ...
    ],
};