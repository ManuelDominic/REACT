/* jshint esversion: 6 */

const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/app/index.jsx',
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /node_modules/,
      resolve: { extensions: ['.js', '.jsx'] },
      use: {
        loader: 'babel-loader',
      },
    },
    {
      test: /\.html$/,
      use: [{
        loader: 'html-loader',
      }],
    },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
