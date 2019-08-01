const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/js/index.ts',
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath:"./dist/"
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        use: [
              {
                loader: "style-loader"
              },
              {
                loader: "css-loader"
              },
              {
                loader: "sass-loader",
              
             }
            
            ]
    }
    ]
  },
  resolve: {
    extensions: [ '.ts', '.js' ]
  },
 
  plugins: [
    new MiniCssExtractPlugin({
        // Options similar to the same options in webpackOptions.output
        // both options are optional
        filename: "style.css",
       // chunkFilename: "[id].css"
    })
]
};