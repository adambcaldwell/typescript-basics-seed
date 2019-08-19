const path = require('path');

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: path.join(__dirname, 'src', 'app.ts'),
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: ['awesome-typescript-loader'],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    port: 3000
  }
};