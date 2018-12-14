exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    //specs: ['spec.js','spec1.js','spec.1.js'],
    suites: {
      multiform: ['spec1.js','spec.js'],
      profile: 'spec.1.js'
    },
    capabilities: {
      browserName: 'firefox'
    },
    onPrepare: function() {
      browser.driver.manage().window().maximize();
    },
    //jasmineNodeOpts: {defaultTimeoutInterval: 30000}
  };