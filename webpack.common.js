const path = require('path');
const APP_DIR = path.resolve(__dirname, "./src");
const BUILD_DIR = path.resolve(__dirname , "dist");
const HtmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  output: {
    path: BUILD_DIR,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include : APP_DIR,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.html$/i,
        use: [
          {
            loader: 'html-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader, 'css-loader',
        ],
      },
      {
        test: /\.(png|jpg|gif)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              mimetype: 'image/png',
              limit: false,
              esModule: false,
            },
          },
        ],
      },
    ],
  },
  plugins: [
   new HtmlWebPackPlugin({
     template: './src/index.html',
     filename: './index.html',
   }),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
  ],
};
