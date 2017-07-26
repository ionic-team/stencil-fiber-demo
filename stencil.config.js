exports.config = {
  buildDir: 'dist',
  generateCollection: false,
  bundles: [
    { components: ['fiber-demo', 'fiber-triangle', 'fiber-dot'] }
  ]
};

exports.devServerConfig = {
  watchGlob: ['dist/**/*.*']
};

