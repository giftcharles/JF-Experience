// vue.config.js
module.exports = {
    // options...
    outputDir : 'extension_build/src/browser_action/',
    configureWebpack: {
      output: {
        filename: "[name]-[hash].js",
        chunkFilename: "[name]-[hash].js",
      },
    }


  }