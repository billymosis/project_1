module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  plugins: [require("@tailwindcss/typography")],
};
