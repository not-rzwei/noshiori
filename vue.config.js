/* eslint @typescript-eslint/camelcase: off */

module.exports = {
  pwa: {
    assetsVersion: Math.floor(new Date() / 1000),
    name: "Novel Shiori",
    themeColor: "#D7BA89",
    msTileColor: "#D7BA89",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black",
    manifestOptions: {
      short_name: "noshiori",
      background_color: "#D7BA89"
    }
  },
  chainWebpack: config => {
    config.plugin("html").tap(option => {
      option[0].title = "Novel Shiori";
      return option;
    });
  }
};
