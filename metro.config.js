const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
  resolver: {
    assetExts: [
      'png',
      'jpg',
      'jpeg',
      'gif',
      'svg',
      'webp',
      'ttf',
      'otf',
      'eot',
      'woff',
      'woff2',
      'mp3',
      'aac',
      'wav',
      'flac',
    ],
    sourceExts: ['js', 'json', 'ts', 'tsx'],
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
