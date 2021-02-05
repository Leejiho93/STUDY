const path = require("path");
const Myplugin = require("./myplugin");
const MyPlugin = require("./myplugin");

module.exports = {
  mode: "development",
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [path.resolve("./myloader.js")],
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      //   {
      //     test: /\.jpg$/,
      //     loader: "file-loader",
      //     options: {
      //       publicPath: "./dist/",
      //       name: "[name].[ext]?[hash]",
      //     },
      //   },
      {
        test: /\.jpg$/,
        loader: "url-loader",
        options: {
          publicPath: "./dist/",
          name: "[name].[ext]?[hash]",
          limit: 5000,
        },
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
  plugins: [new Myplugin()],
};
