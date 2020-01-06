const withSass = require("@zeit/next-sass");
module.exports = withSass();

const withImages = require('next-images')
module.exports = withImages();

const withCSS = require('@zeit/next-css')

const nextConfig = {
  webpack: function (config) {
    config.module.rules.push({
      test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
      use: {
        loader: 'url-loader',
        options: {
          limit: 100000,
          name: '[name].[ext]'
        }
      }
    })
    return config
  }
}

const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [withCSS],
  [withSass, {
    cssModules: true
  }]
], nextConfig);