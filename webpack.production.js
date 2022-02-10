const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const path = require("path");

module.exports = {
  output: {
    filename: "[name].[hash].js", //[1]
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      hash: true,
      template: "./src/index.html",
      filename: "index.[hash].html",
    }),
    new CleanWebpackPlugin(),
  ], //[2]
};
