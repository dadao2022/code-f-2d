const { defineConfig } = require('@vue/cli-service')

// 取随机数
const CopyWebpackPlugin = require('copy-webpack-plugin')
const webpack = require('webpack')
const path = require('path')

let cesiumSource = './node_modules/cesium/Source'
let cesiumWorkers = '../Build/Cesium/Workers'

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/web/',
  devServer: {
    open: true,
    port: 7879,
    // 默认地
    // host: '192.168.10.146',
    proxy: {
      // '/api': {
      //   target: 'http://localhost/api',
      //   changeOrigin: true,
      //   pathRewrite: {
      //     '^/api': ''
      //   }
      // },
      '/ditu': {
        target: 'http://localhost/ditu',
        changeOrigin: true,
        pathRewrite: {
          '^/ditu': ''
        }
      },
      '/qd': {
        target: 'http://localhost/qd',
        changeOrigin: true,
        pathRewrite: {
          '^/qd': ''
        }
      },
      '/gomk': {
        // target: 'https://test.yueheli.cn/gomk',
        target: 'http://111.35.4.25:16380/gomk',
        changeOrigin: true,
        pathRewrite: {
          '^/gomk': ''
        }
      }
    }
  },
  configureWebpack: {
    output: {
      sourcePrefix: ' '
    },
    amd: {
      toUrlUndefined: true
    },
    resolve: {
      alias: {
        '@': path.resolve('src'),
        'cesium': path.resolve(__dirname, cesiumSource),
        "http": false,
        "url": false,
        "https": false,
        "zlib": false
      }
    },
    plugins: [
      new CopyWebpackPlugin({
        patterns: [
          { from: path.join(cesiumSource, cesiumWorkers), to: 'Workers' },
          { from: path.join(cesiumSource, 'Assets'), to: 'Assets' },
          { from: path.join(cesiumSource, 'Widgets'), to: 'Widgets' },
          { from: path.join(cesiumSource, 'ThirdParty/Workers'), to: 'ThirdParty/Workers' },
        ]
      }),
      new webpack.DefinePlugin({
        CESIUM_BASE_URL: JSON.stringify('./')
      })
    ],
    module: {
      unknownContextCritical: /^.\/.*$/,
      unknownContextCritical: false
    }
  }

})
