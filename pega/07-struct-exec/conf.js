exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    suites: {
      calc: 'calc/*.js',
      main: 'main/*.js',
      profile: 'profile/*.js',
    },
    capabilities: {
      browserName: 'firefox'
    },
    onPrepare: function() {
      browser.driver.manage().window().maximize();
    },
  }