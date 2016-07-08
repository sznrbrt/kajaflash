module.exports = {
  devtool: "cheap-module-source-map",
  entry: "./app/app.js",
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
  }
};