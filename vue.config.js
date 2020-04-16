module.exports = {
  pwa: {
    name: "My App",
    themeColor: "#4DBA87",
    msTileColor: "#000000",
    appleMobileWebAppCapable: "yes",
    appleMobileWebAppStatusBarStyle: "black"
  },
  chainWebpack: config => {
    config.plugin("html").tap(option => {
      option[0].title = "Novel Shiori";
      return option;
    });
  }
};
