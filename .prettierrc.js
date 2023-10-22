module.exports = {
  semi: true,
  tabWidth: 2,
  printWidth: 95,
  singleQuote: true,
  trailingComma: 'all',
  jsxSingleQuote: true,
  bracketSpacing: true,
  importOrderParserPlugins: [
    'classProperties',
    '["decorators", { "decoratorsBeforeExport": true }]',
    'typescript',
    'jsx',
  ],
  importOrder: [
    'expo/build/Expo.fx',
    'react-native-gesture-handler',
    '^(react)$',
    '<THIRD_PARTY_MODULES>',
    '^[./]',
  ],
};
