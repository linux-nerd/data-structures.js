var webpack = require("webpack");
var path = require("path");
var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var libraryName = "ds";
var plugins = [],
  outputFile;

if (process.env.WEBPACK_ENV && process.env.WEBPACK_ENV.trim() === "build") {
  plugins.push(new UglifyJsPlugin({ minimize: true }));
  outputFile = libraryName + ".min.js";
} else {
  outputFile = libraryName + ".js";
}

var config = {
  entry: path.join(__dirname, "src", "index.ts"),
  devtool: "source-map",

  output: {
    globalObject: "typeof self !== 'undefined' ? self : this",
    path: path.join(__dirname, "lib"),
    filename: outputFile,
    library: libraryName,
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  resolve: {
    modules: []
  },
  module: {
    rules: [
      {
        test: /(\.tsx|\.ts)$/,
        use: "ts-loader",
        exclude: /node_modules/
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "babel-loader",
        exclude: /(node_modules|bower_components)/,
        query: {
          presets: ["@babel/preset-env"]
        }
      },
      {
        test: /(\.jsx|\.js)$/,
        loader: "eslint-loader",
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: [__dirname, "src"],
    extensions: [".js", ".ts"]
  }
};

module.exports = config;
