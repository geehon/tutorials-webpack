# webpack配置基本的开发环境

## 处理css方式一

安装loader

```powershell
npm install --save-dev style-loader css-loader
```

webpack.config.js添加module规则

```js
module: {
    rules: [
      {
        test: /\.css$/,
        use: [
        'style-loader',
        'css-loader'
        ]
      }
    ]
  }
```

## 处理css方式二

使用[mini-css-extract-plugin](https://www.npmjs.com/package/mini-css-extract-plugin)

安装

```powershell
npm install --save-dev mini-css-extract-plugin
```

修改webpack配置

```js
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
module.exports = {
  plugins: [new MiniCssExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
      },
    ],
  },
};
```

## 使用dev-server

包[webpack-dev-server](https://www.npmjs.com/package/webpack-dev-server)

```powershell
npm install webpack-dev-server --save-dev
```

添加sceipt

```js
"scripts": {
  "start:dev": "webpack serve --mode development --config script/webpack.config.js"
}
```

