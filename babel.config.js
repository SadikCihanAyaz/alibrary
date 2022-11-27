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
          utils: './src/utils',
          demo: './src/demo',
        },
      },
    ],
  ],
};
