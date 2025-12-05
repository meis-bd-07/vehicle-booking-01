module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-reanimated/plugin',
    // 'react-native-worklets/plugin',
    [
      'module-resolver', 
      {
        // extensions: [ '.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx', '.d.ts' ],
        // root: ['.'],
        root: ['./src'],
        alias: {
          '@main': './src/main.tsx',
          '@config': './src/config.ts',
          '@assets': './src/assets',
          '@components': './src/components',
          '@controllers': './src/controllers',
          '@packages': './src/packages',
          '@providers': './src/providers',
          '@routes': './src/routes',
          '@states': './src/states',
          '@services': './src/services',
          '@type': './src/type',
          '@utils': './src/utils',
          "@screenName": './src/routes/routeName.route.ts',
          /* all modules */
          '@auth_modules': './src/modules/auth',
          '@bidding_modules': './src/modules/bidding',
        },
      }
    ]
  ],
};

