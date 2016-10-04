var path = require('path');
var config = require('webpack.config');
// config.plugins.push(new webpack.HotModuleReplacementPlugin());
module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/dev-server',
    path.resolve(__dirname, './src/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    // publicpath: '/build/',
    publicPath: '/build',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [{
    //   test: /\.css$/,
    //   loaders: ['style', 'css']
    // }, {
    //   test: /\.html$/,
    //   loader: "raw-loader" // loaders: ['raw-loader']，這個方式也是可以被接受的。 
    // }
    // , {
      test: /\.js$/,
      exclude: /node_modules/, 
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }
    ]
  }
}