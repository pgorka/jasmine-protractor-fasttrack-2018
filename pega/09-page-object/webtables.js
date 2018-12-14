'use strict';  
  
module.exports = {  
    loadPage: {
        go: browser.get('http://www.way2automation.com/angularjs-protractor/webtables/'),
    },
      
    items: {  
        all: element.all(by.css('.smart-table-data-row td'))
    },

    buttons: {
        add: element(by.css('button.pull-right')),
        deleteFirst: element(by.xpath('//html/body/table/tbody/tr[1]/td[11]/button')),
        confirmDeletion: element(by.css('html.ng-scope body.ng-scope div.modal.ng-scope div.modal-footer button.btn.ng-scope.ng-binding.btn-primary')),
    },

    addItem: { 
        firstName: element(by.name('FirstName')),
        lastName: element(by.name('LastName')),
        userName: element(by.name('UserName')),
        pass: element(by.name('Password')),
        companyAAA: element(by.css('label.radio:nth-child(1) > input:nth-child(1)')),
        companyBBB: element(by.css('label.radio:nth-child(2) > input:nth-child(1)')),
        typeSales: element(by.xpath("//select[@ng-model='dataRow[column.map]']/option[@value=0]")),
        typeCustomer: element(by.xpath("//select[@ng-model='dataRow[column.map]']/option[@value=1]")),
        typeAdmin: element(by.xpath("//select[@ng-model='dataRow[column.map]']/option[@value=2]")),
        email: element(by.name('Email')),
        mobile: element(by.name('Mobilephone')),
        //closeBtn: element(by.css('.btn-danger')).click(),
        saveBtn: element(by.className('btn btn-success'))
    },
        
    // items: {
    //     item0: items[0].getText(),
    //     item1: items[1].getText(),
    //     item2: items[2].getText(),
    //     item3: items[3].getText(),
    //     item4: items[4].getText(),
    //     item5: items[5].getText(),
    //     item6: items[6].getText(),
    //     item7: items[7].getText()
    // },
};