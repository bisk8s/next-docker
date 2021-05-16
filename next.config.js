/* eslint-disable no-param-reassign */
const withImages = require('next-images')

module.exports = withImages({
  esModule: true,
  webpackDevMiddleware: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300,
    };
    return config;
  },
});
