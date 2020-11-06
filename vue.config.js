module.exports = {
  transpileDependencies: ["vuetify"],

  publicPath: process.env.NODE_ENV === "production" ? "/upluser/" : "",

  lintOnSave: false,
  runtimeCompiler: true,

  configureWebpack: {
    optimization: {
      splitChunks: {
        minSize: 10000,
        maxSize: 250000
      }
    }
  }
};
