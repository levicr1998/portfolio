module.exports = {
    publicPath: process.env.NODE_ENV === "production" ? "/portfolio/" : "/",
    css: {
      loaderOptions: {
        sass: {
            additionalData: `@import "@/assets/scss/_main.scss";`
        }
      }
    },
    chainWebpack: config => {
      config
          .plugin('html')
          .tap(args => {
              args[0].title = "Levi Crietee - Portfolio";
              return args;
          })
  }
  };