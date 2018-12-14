exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.1.js'],
    capabilities: {
      browserName: 'firefox'
    },
    onPrepare: function() {
      browser.driver.manage().window().maximize();
    },
    jasmineNodeOpts: {defaultTimeoutInterval: 30000}
  };