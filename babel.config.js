module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: ['.ios.js', '.android.js', '.js', '.ts', '.tsx', '.json'],
        alias: {
          '@base': './src/base',
          '@navigation': './src/navigation',
          '@redux': './src/redux',
          '@screen': './src/screen',
          '@utils': './src/utils',
          '@api': './src/api',
          '@assets': './src/assets',
          '@hooks': './src/hooks',
          '@i18n': './src/i18n',
          '@themes': './src/themes',
          '@store': './src/store',
        },
      },
    ],
    [
      'react-native-reanimated/plugin',
      {
        relativeSourceLocation: true,
        globals: ['__scanFaces'],
      },
    ],
  ],
  env: {
    production: {
      plugins: ['transform-remove-console'],
    },
  },
};
