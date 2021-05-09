// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */

const MYCONFIG = {
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
    public: "/",
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
if (process.env.NODE_ENV === "productionx") {
  console.log(MYCONFIG);
  MYCONFIG.optimize.bundle = true;
  MYCONFIG.optimize.minify = true;
  MYCONFIG.optimize.treeshake = true;
  MYCONFIG.optimize.target = "es2018";
  // MYCONFIG.optimize.preload = true;
}
module.exports = MYCONFIG;
