# 第2回 Reactハンズオン 初等部編

## 導入

### npm install

```
mkdir react-handson_vol02
cd react-handson_vol02
```


```
npm init
npm install --save-dev webpack webpack-dev-server
npm install --save material-ui react react-dom react-tap-event-plugin
npm install --save-dev babel-loader babel-core babel-preset-es2015 babel-preset-react css-loader file-loader style-loader
```

### package.json

scriptを追記
　
```json
"scripts": {
  "build": "webpack",
  "watch": "webpack --watch",
  "start": "webpack-dev-server --inline"
},
```

### webpack.config.js

```js
module.exports = {
  context: __dirname + "/src",
  entry: {
    js: "./App.js",
    css: "./App.css",
    html: "./index.html",
  },
  output: {
    path: __dirname + "/dist",
    filename: 'bundle.js',
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
  }
};
```

## 実行

```
npm start
```

`http://localhost:3000`を開く

## Material UI
http://www.material-ui.com/#/
