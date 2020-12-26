const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devServer: {
    contentBase: path.resolve(process.cwd(), 'dist'),
    compress: true,
    port: 9000
  },
  entry: {
    main: './src/index.js'
  },
  output: {
    filename: 'static/js/[name]_[chunkHash:6].js',
    path: path.resolve(process.cwd(), 'dist'),
  },
  devtool: 'eval-cheap-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          "less-loader"// compiles Less to CSS
        ]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack',
      template: 'public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'static/css/[name]_[chunkHash:6].css'
    })
  ]
}
