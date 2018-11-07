module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'SingleSelectField',
      externals: {
        react: 'React'
      }
    }
  }
}
