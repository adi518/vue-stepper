// https://github.com/noamkfir/webpack/tree/webpack-4/template

/* Webpack 4 + Babel 7 (Next) bundle configuration boilerplate for Vue components */

const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin // eslint-disable-line

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js',
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.join(__dirname, 'src')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              forceAllTransforms: true,
            }]
          ],
          plugins: [
            'babel-plugin-transform-vue-jsx'
          ]
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: 'vue-style-loader',
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'sass-loader',
            options: {
              includePaths: [
                './src/sass',
                './node_modules'
              ]
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ],
  mode: 'production'
}

if (process.env.ANALYZE) {
  module.exports.plugins.push(new BundleAnalyzerPlugin())
}
