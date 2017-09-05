module.exports = {
  entry: [
    './src/index.js'
  ],
  module: {
      loaders: [
        {
          test: /(\.js|\.jsx)$/,
          loader: 'babel-loader', //loader de babel
          exclude: /node_modules/,
          query: { presets: ['es2015', 'react'] }
          // a babel le tenemos que decir que transformaciones va a hacer
          //en este caso, transforma es2015 y jsx (react)
        }
      ]
    },
  devtool: "source-map",
  output: {
      filename: "index_bundle.js",
      path: __dirname + '/dist'
    }
}