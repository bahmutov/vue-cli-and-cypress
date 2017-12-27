const {
  onFilePreprocessor,
} = require('cypress-vue-unit-test/preprocessor/webpack')

const webpackConfig = require('../../webpack.config')

module.exports = on => {
  on('file:preprocessor', onFilePreprocessor(webpackConfig))
}
