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
    bundle: true,
    minify: true,
    treeshake: true,
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
        cmd: "postcss ./tailwind.css -o ./src/global.css",
        watch: "postcss ./tailwind.css -o ./src/global.css -w",
      },
    ],
  ],
};
if (process.env.NODE_ENV === "production") {
  console.log(MYCONFIG);
  MYCONFIG.optimize.bundle = true;
  MYCONFIG.optimize.minify = true;
  MYCONFIG.optimize.treeshake = true;
  MYCONFIG.optimize.target = "es2018";
}

module.exports = MYCONFIG;
