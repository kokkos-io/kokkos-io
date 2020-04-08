// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: "Kokkos · nettsider og apper",
  siteUrl: "https://kokkos.io",
  plugins: [
    {
      use: "gridsome-plugin-sass-resources-loader",
      options: {
        resources: "@/styles/index.scss"
      }
    },
    {
      use: "gridsome-plugin-typescript"
    },
    {
      use: "gridsome-plugin-tailwindcss"
    },
    {
      use: "gridsome-plugin-purgecss",
      // default options, the following will be included if you don't provide anything
      options: {
        content: [
          "./src/**/*.vue",
          "./src/**/*.js",
          "./src/**/*.scss",
          "./src/**/**/*.scss",
          "./src/**/*.css",
          "./src/**/**/*.css"
        ],
        defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || []
      }
    }
  ]
  // chainWebpack: config => {
  //   config.module
  //     .rule("postcss-loader")
  //     .test(/.css$/)
  //     .use(["tailwindcss", "autoprefixer"])
  //     .loader("postcss-loader");
  // }
};
