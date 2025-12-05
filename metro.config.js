const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

/**
 * Metro configuration
 * https://reactnative.dev/docs/metro
 *
 * @type {import('@react-native/metro-config').MetroConfig}
 */

const defaultConfig = getDefaultConfig(__dirname);

const config = {
  resolver: {
    sourceExts: [...defaultConfig.resolver.sourceExts, 'ts', 'tsx'],
  },
  server: {
    enhanceMiddleware: (middleware) => {
      return (req, res, next) => {
        if (
          req.url.startsWith('/index.bundle') &&
          !req.url.includes('index.ts')
        ) {
          req.url = req.url.replace('index', 'index.ts');
        }
        return middleware(req, res, next);
      };
    },
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
