module.exports = {
  publicPath: '/portfolio/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/styles/main.scss";
            `
      }
    }
  }
};
