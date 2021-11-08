const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'dist'),
  },
  entry: './src/index.js',
  module: {
    rules: [
      {
        test: /\.scss$/i,
        use: [
          // 'style-loader',
          require('mini-css-extract-plugin').loader,
          'css-loader',
          'sass-loader',
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].css',
      chunkFilename: 'css/[id].css',
    })
  ],
};
