const webpack = require('webpack');
const path = require('path');

module.exports = {
    devtool: 'eval',
    entry: [
      'webpack-dev-server/client?http://0.0.0.0:8000',
      'webpack/hot/only-dev-server',
      './index.jsx'
    ],
    output: {
        publicPath: '/asset/',
        path: path.join(__dirname,'src/main/resoruces/static/asset'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './src/main/resources/static/',
        historyApiFallback: true,
        hot: true,
        port: 8000,
        publicPath: '/asset/',
        noInfo: false,
        proxy: {
            '*': {
                target: 'http://localhost:8080',
                secure: false
            }
        }
    },
    plugins: [
          new webpack.HotModuleReplacementPlugin()
    ],
    module: {
        loaders: [
            {
                test: /\.(jsx)$/,
                exclude: /node_modules/,
                loader: 'react-hot!babel-loader'
            },
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                loader: 'style!css?sourceMap!sass?sourceMap'
            }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.css', '.scss']
    },
};
