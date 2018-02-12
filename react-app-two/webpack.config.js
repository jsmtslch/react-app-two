module.exports = {
    entry: './App/main.js',
    output: {
       filename: 'bundle.js'
    },
    module: {
       loaders: [
          {
             loader: 'babel-loader',
             test: /\.js$/,
             exclude: /node_modules/
          }
       ]
    },
    devServer: {
       port: 7777
    }
 };