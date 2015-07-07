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

    reporters: ['dots', 'saucelabs'],

    port: 9876,

    colors: true,

    logLevel: config.LOG_INFO,

    // enable / disable watching file and executing tests whenever any file changes
    autoWatch: false,

    // start these browsers
    browsers: ['Firefox', 'sl_chrome', 'sl_ios_safari', 'sl_ie_11'],
    customLaunchers: {
      sl_chrome: {
        base: 'SauceLabs',
        browserName: 'chrome',
        platform: 'Windows 7',
        version: '35'
      },
      sl_ios_safari: {
        base: 'SauceLabs',
        browserName: 'iphone',
        platform: 'OS X 10.9',
        version: '7.1'
      },
      sl_ie_11: {
        base: 'SauceLabs',
        browserName: 'internet explorer',
        platform: 'Windows 8.1',
        version: '11'
      }
    },
    captureTimeout: 120000,
    sauceLabs: {
        testName: 'closure-react-loader Unit Tests'
    },
    
    // Continuous Integration mode
    singleRun: false 
  })
}
