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
        infra: path.resolve(__dirname, 'infra'),
        modules: path.resolve(__dirname, 'modules'),
        presentation: path.resolve(__dirname, 'presentation'),
        routes: path.resolve(__dirname, 'routes'),
        source: path.resolve(__dirname, 'source')
      }
    }
  }
}
