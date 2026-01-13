const path = require('path');

module.exports = {
  turbopack: {},
   
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@styles': path.resolve(__dirname, 'styles'),
    };
    return config;
  },
};