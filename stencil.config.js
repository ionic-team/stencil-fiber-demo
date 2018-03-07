exports.config = {
  bundles: [
    { components: ['fiber-demo', 'fiber-triangle', 'fiber-dot'] }
  ],
  copy: [
    { src: 'perf.html' },
  ]
};

exports.devServer = {
  root: 'www',
  watchGlob: '**/**'
}
