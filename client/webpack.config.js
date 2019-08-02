const webpack = require("webpack");
const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const dotenv = require("dotenv");

const env = dotenv.config().parsed;

const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next]);
  return prev;
}, {});

module.exports = {
  output: {
    publicPath: "/"
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.(png|svg|jpeg|jpg|gif)$/,
        use: ["file-loader"]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"]
      }
    ]
  },
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      filename: "./index.html"
    }),
    new webpack.DefinePlugin(envKeys)
  ],
  resolve: {
    extensions: [".js", ".jsx", ".css", ".ttf"],
    alias: {
      Components: path.resolve(__dirname, "src/components/"),
      Constants: path.resolve(__dirname, "src/constants/"),
      Services: path.resolve(__dirname, "src/services/"),
      Images: path.resolve(__dirname, "src/img/"),
      Theme: path.resolve(__dirname, "src/"),
      Utilities: path.resolve(__dirname, "src/utilities/")
    }
  }
};
