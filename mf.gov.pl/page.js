'use strict';  
  
module.exports = {  
    loadPage: function() {
        browser.waitForAngularEnabled(false);
        browser.get('https://ppuslugi.mf.gov.pl/');
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(function () {
            browser.wait(EC.presenceOf(element(by.css('a.SidebarLinkChVAT'))), 15000);
            return by.css('a.SidebarLinkChVAT');
            
        });
        element(by.css('a.SidebarLinkChVAT')).click();
        //browser.sleep(5000);
    },

    waitForInput: function() {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(function () {
            browser.wait(EC.visibilityOf(element(by.css('input.DocControlMask'))), 5000);
            return by.css(element(by.css('input.DocControlMask')));
        })
    },

    waitForClickable: function() {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(function () {
            browser.wait(EC.visibilityOf(element(by.css('button.HideInvalidLink'))), 5000);
            return by.css(element(by.css('button.HideInvalidLink')));
        })
    },

    // waitForOutput: function() {
    //     var EC = protractor.ExpectedConditions;
    //     browser.driver.wait(function () {
    //         browser.wait(EC.presenceOf(element(by.css('label.ControlGridDecodeContainer'))), 5000);
    //         return by.css(element(by.css('label.ControlGridDecodeContainer')));
    //     })
    // },
    // waitForOutput: function() {
    //     var EC = protractor.ExpectedConditions;
    //     browser.driver.wait(function () {
    //         browser.wait(EC.visibilityOf(element(by.css('label span'))), 5000);
    //         return by.css(element(by.css('label span')));
    //     })
    // },
    waitForOutput: function() {
        var EC = protractor.ExpectedConditions;
        browser.driver.wait(function () {
            browser.wait(EC.visibilityOf(element(by.id('caption2_b-3'))), 5000);
            return by.css(element(by.id('caption2_b-3')));
        })
    },
    
      
    items: {  
        inputField: element(by.css('input.DocControlMask ')),
        checkButton: element(by.css('button.ShowInvalidLink')),
        outputMessage: element(by.id('caption2_b-3')),
        clearButton: element(by.css('button.HideInvalidLink')),
    },

};