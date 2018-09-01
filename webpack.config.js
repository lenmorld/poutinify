const path = require('path');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, './'),
  entry: './dev/js/index.js',
  output: {
    path: path.join(__dirname, 'src'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ["es2015", "react"]
        }
      },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      }
    ],
  },
};
