export default [
  {
    input: 'dist/builds/browser.min.js',
    external: ['dom'],
    output: {
      esModule: false,
      file: 'dist/builds/browser.umd.js',
      name: '@algolia/client-search',
      format: 'umd',
      sourcemap: false,
      globals: {
        ['searchClient']: 'searchClient',
      },
    },
  },
]