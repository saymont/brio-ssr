const withSass = require("@zeit/next-sass");
module.exports = withSass();

const withImages = require('next-images')
module.exports = withImages();

const withCSS = require('@zeit/next-css')
module.exports = withCSS({});


const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [withSass],
]);