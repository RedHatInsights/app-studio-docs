module.exports = {
  presets: [
    // Polyfills
    '@babel/env',
    // Allow JSX syntax
    '@babel/react',
  ],
  plugins: [
    // Put _extends helpers in their own file
    '@babel/plugin-transform-runtime',
    // Devs tend to write `import { someIcon } from '@patternfly/react-icons';`
    // This transforms the import to be specific which prevents having to parse 2k+ icons
    // Also prevents potential bundle size blowups with CJS
    [
      'transform-imports',
      {
        '@patternfly/react-icons': {
          transform: (importName) =>
            `@patternfly/react-icons/dist/js/icons/${importName
              .split(/(?=[A-Z])/)
              .join('-')
              .toLowerCase()}`,
          preventFullImport: true,
        },
      },
      'react-icons',
    ],
    '@babel/proposal-object-rest-spread'
  ],
};
