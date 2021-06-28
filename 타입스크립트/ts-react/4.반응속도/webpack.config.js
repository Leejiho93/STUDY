const { Module } = require("webpack");
const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // production
  devtool: "eval", // hiden-source-map
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"],
  },

  entry: {
    app: "./client",
  },

  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "awesome-typescript-loader",
      },
    ],
  },

  plugins: [],

  output: {
    filename: "app.js",
    path: path.join(__dirname, "dist"),
    publicPath: '/dist', // webpack-dev-server 쓸려면 넣어줘야함
  },
};
