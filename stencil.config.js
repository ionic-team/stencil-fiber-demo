exports.config = {
  collections: [
    { name: '@stencil/router' }
  ],
  globalStyle: 'src/global/app.css',
  generateDistribution: true
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}