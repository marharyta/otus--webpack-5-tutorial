// // webpack v5
// const path = require("path");
// const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// const HtmlWebpackPlugin = require("html-webpack-plugin");
// const { CleanWebpackPlugin } = require("clean-webpack-plugin");

// module.exports = {
//   entry: { main: "./src/index.js" },
//   output: {
//     path: path.resolve(__dirname, "dist"),
//     filename: "[name].[chunkhash].js",
//   },
//   devServer: {
//     static: {
//       directory: path.join(__dirname, "public"),
//     },
//     compress: false,
//     port: 8091,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.js$/,
//         exclude: /node_modules/,
//         use: {
//           loader: "babel-loader",
//         },
//       },
//       {
//         test: /(\.css)$/,
//         use: [
//           "style-loader",
//           MiniCssExtractPlugin.loader,
//           "css-loader",
//           {
//             loader: "postcss-loader",
//             options: {
//               postcssOptions: {
//                 plugins: ["autoprefixer"],
//               },
//             },
//           },
//         ],
//       },
//     ],
//   },
//   plugins: [
//     new MiniCssExtractPlugin({
//       filename: "style.css",
//     }),
//     new HtmlWebpackPlugin({
//       inject: true,
//       hash: true,
//       template: "./src/index.html",
//       filename: "index.html",
//     }),
//     new CleanWebpackPlugin(),
//   ],
// };

const path = require("path");
const { merge } = require("webpack-merge"); //[1]
const commonConfig = require("./webpack.common"); //[2]

module.exports = (env) => {
  const config = require("./webpack.development"); //[3]
  return merge(commonConfig, config); //[4]
};
