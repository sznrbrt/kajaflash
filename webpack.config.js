import webpack from 'webpack'

if (module.hot) {
  module.hot.accept();
}

module.exports = {
  devtool: "cheap-module-source-map",
  entry: ["./app/app.js", 'webpack-hot-middleware/client?path=/__webpack_hmr&timeout=20000&reload=true',],
  output: {
    path: __dirname + "/public",
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader",
        query: { presets: ["react", "es2015"] }
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css'],
        include: __dirname + "/app"
      }
    ]
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
};
