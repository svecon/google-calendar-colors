const path = require('path');
var GasPlugin = require("gas-webpack-plugin");

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
  //     {
  //       test: /\.js$/,
  //       exclude: /(node_modules|bower_components)/,
  //       use: {
  //         loader: 'babel-loader',
  //         options: {
  //           presets: ['@babel/preset-env'],
  //           plugins: [
  //            // require('@babel/plugin-proposal-object-rest-spread').default,
  //            // require("gas-webpack-plugin"),
  //           ]
  //         }
  //       }
  //     }
      {
        test: /src\/index\.js$/,
        use: [
          {
            loader: `expose-loader`,
            // options: {...options}
          }
        ]
      }
    ]
  },
  plugins: [
    // new GasPlugin(),
  ],
  stats: {
    colors: true
  },
  devtool: 'source-map'
};
