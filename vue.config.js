const path = require('path')

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "presentation/styles/scss/__variables.scss";
            `
      }
    }
  },
  configureWebpack: {
    entry: {
      app: path.resolve(__dirname, 'app', 'main.ts')
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'app'),
        app: path.resolve(__dirname, 'app'),
        modules: path.resolve(__dirname, 'modules'),
        routes: path.resolve(__dirname, 'routes'),
        presentation: path.resolve(__dirname, 'presentation'),
        src: path.resolve(__dirname, 'src')
      }
    }
  }
}
