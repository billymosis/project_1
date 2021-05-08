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
          "$env:NODE_ENV='production' postcss ./tailwind.css -o ./src/global.css -w",
        watch:
          "postcss ./tailwind.css -o ./src/global.css -w",
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
