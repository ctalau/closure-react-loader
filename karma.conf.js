module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine'],

    files: [
      'test/*.spec.js',
      { pattern: 'test/**/*', included: false},
      { pattern: 'closure-react-loader.js*', included: false},
      { pattern: 'node_modules/closure-library/closure/goog/**/*', included: false},
      { pattern: 'node_modules/react/dist/**/*', included: false}
    ],

    reporters: ['dots'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    browsers: ['Firefox'],

    // Continuous Integration mode
    singleRun: false 
  })
}
