module.exports = {
  entry: {
    bundle: './src/App.js',
    index: './index.html'
  },
  output: {
    path: './dist',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: 'dist',
    port: 3000
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.css/,
        loader: 'style!css'
      },
      {
        test: /\.html$/,
        loader: 'file?name=[path][name].[ext]'
      }
    ]
  },
  resolve: {
    modulesDirectories: ['node_modules', './src']
  }
};
