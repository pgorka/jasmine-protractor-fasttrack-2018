var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

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
    //logLevel: 'INFO',
    onPrepare: function() {
      browser.driver.manage().window().maximize();
      jasmine.getEnv().addReporter(
        new Jasmine2HtmlReporter({
          savePath: 'reports',
          screenshotsFolder: 'images',
          takeScreenshots: true,
          takeScreenshotsOnlyOnFailures: true
        })
      );
      jasmine.getEnv().addReporter(new SpecReporter({
        spec: {
          displayStacktrace: false
        },
        summary: {
          displayDuration: false
        },
        spec: {
          displayPending: true
        }
      }))
    }
}
