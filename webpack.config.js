const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
  },
  devServer: {
    writeToDisk: true
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new AddAssetHtmlPlugin({
      filepath: path.resolve(__dirname, './assets/dll.js'),
    }),
  ],
};
