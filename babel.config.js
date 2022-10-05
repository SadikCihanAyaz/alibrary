module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        alias: {
          app: './src',
          components: './src/components',
          containers: './src/containers',
          localization: './src/localization',
          utils: './src/utils',
        },
      },
    ],
  ],
};
