// svgo.config.js
module.exports = {
  multipass: true,
  plugins: [
    {
      name: 'removeAttrs',
      params: {
        attrs: ['^on.*$', 'xmlns:*', 'xlink:href', ':*']
      }
    },
    'sortAttrs',
    'removeComments',
    'removeMetadata',
    'removeTitle',
    'removeDesc',
    {
      name: 'preset-default',
      params: {
        overrides: {
          // disable potentially breaking transforms
          cleanupIDs: false,
          removeViewBox: false
        }
      }
    }
  ]
};