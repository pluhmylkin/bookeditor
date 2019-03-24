const merge = require("webpack-merge");
const baseConfig = require("./webpack.base.config");

const productionConfig = {
  mode: "prodaction"
};

module.exports = new Promise(resolve => {
  resolve(merge(baseConfig, productionConfig));
});
