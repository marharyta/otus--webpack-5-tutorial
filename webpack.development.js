const path = require("path");
const webpack = require("webpack");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

module.exports = {
  entry: {
    main: "./src/index.js",
    hot: "webpack/hot/dev-server.js",
    client: "webpack-dev-server/client/index.js?hot=true&live-reload=true",
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "public"),
    },
    compress: false,
    port: 8091,
    hot: false,
    client: false,
  },
  plugins: [new BundleAnalyzerPlugin()],
};
