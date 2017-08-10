exports.config = {
  bundles: [
    { components: ['fiber-demo', 'fiber-triangle', 'fiber-dot'] }
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}