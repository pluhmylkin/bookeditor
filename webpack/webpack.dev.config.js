const webpack = require("webpack");
const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

const developmentConfig = {
  mode: "development",
  devtool: "cheap-module-eval-source-map",
  devServer: {
    contentBase: baseConfig.externals.path.dist,
    port: 8085,
    overlay: true,
    open: true,
    hot: true,
    inline: true
  },
  plugins: [
    new webpack.SourceMapDevToolPlugin({
      filename: "[file].map"
    })
  ]
};

module.exports = new Promise(resolve => {
  resolve(merge(baseConfig, developmentConfig));
});
