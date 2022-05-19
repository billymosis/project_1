// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */

const MYCONFIG = {
  buildOptions: {
    out: "./docs/",
  },
  devOptions: {
    port: 3000,
  },
  optimize: {
    bundle: false,
    minify: false,
    treeshake: false,
    preload: false,
  },
  mount: {
    src: "/dist",
    public: {url: "/", static: true},
  },
  plugins: [
    [
      "@snowpack/plugin-run-script",
      {
        cmd: "tailwindcss -i ./tailwind.css -o ./src/global.css",
        watch: "tailwindcss -i ./tailwind.css -o ./src/global.css --watch",
      },
    ],
  ],
};
if (process.env.NODE_ENV === "production") {
  MYCONFIG.optimize.bundle = true;
  MYCONFIG.optimize.minify = true;
  MYCONFIG.optimize.treeshake = true;
  MYCONFIG.optimize.target = "es2018";
  console.log(MYCONFIG);
}

module.exports = MYCONFIG;
