// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  optimize: {
    bundle: false,
    minify: false,
  },
  mount: {
    /* ... */
    src: "/dist",
    public: "/",
  },
  plugins: [
    [
      "@snowpack/plugin-run-script",
      {
        cmd:
          "TAILWIND_MODE=build NODE_ENV=production postcss ./tailwind.css -o ./public/global.css -w", // production build command
        watch:
          "NODE_ENV=development postcss ./tailwind.css -o ./public/global.css -w", // (optional) dev server command
      },
    ],
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    /* ... */
  },
  buildOptions: {
    /* ... */
  },
};
