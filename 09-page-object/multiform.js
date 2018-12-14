'use strict';  
  
module.exports = {  
    loadPage: {  
        go: browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile')
    },  
      
    items: {  
        name: element(by.css('div.form-group:nth-child(1) > input:nth-child(2)')),
        email: element(by.css('div.form-group:nth-child(2) > input:nth-child(2)')),
        output: element(by.css('pre.ng-binding')),
        nextSection: element(by.xpath("//div[@class='col-xs-6 col-xs-offset-3']/a")),
        xbox: element(by.name('009')),
        profileBtn: element(by.xpath("//div[@id='status-buttons']/a[@href='#/form/profile']")),
        interestsBtn: element(by.xpath("//div[@id='status-buttons']/a[@href='#/form/interests']")),
        header: element(by.cssContainingText('.page-header > h2:nth-child(1)',"Let's Learn Protractor")).getText()
    },
}