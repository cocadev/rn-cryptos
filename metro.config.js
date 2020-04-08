/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */
var path = require('path');

module.exports = {
  resolver: {
    extraNodeModules: {
      crypto: path.resolve(__dirname, 'extra_modules/crypto'),
    },
  },
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: false,
      },
    }),
  },
};
