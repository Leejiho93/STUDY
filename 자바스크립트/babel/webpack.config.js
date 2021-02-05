const path = require("path");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  entry: {
    main: "./app.js",
  },
  output: {
    filename: "[name].js",
    path: path.resolve("./dist"),
  },
};
