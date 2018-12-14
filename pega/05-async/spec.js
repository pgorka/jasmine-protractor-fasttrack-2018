describe('AngularJS Webtables page', function() {
    browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
    it('should check the number of elements of Web table', function() {
        element.all(by.css('.smart-table-data-row td')).then(function(items) {
            expect(items.length).toBe(77);
        })
    })
    it('should insert a new row to the Web table and check the number of elements of Web table after the insertion', function() {    
        element(by.css('button.pull-right')).click();
        element(by.name('FirstName')).sendKeys('Paweł');
        element(by.name('LastName')).sendKeys('Górka');
        element(by.name('UserName')).sendKeys('test');
        element(by.name('Password')).sendKeys('1234');
        element(by.css('label.radio:nth-child(2) > input:nth-child(1)')).click();
        element(by.xpath("//select[@ng-model='dataRow[column.map]']/option[@value='0']")).click();
        element(by.name('Email')).sendKeys('test@test.com');
        element(by.name('Mobilephone')).sendKeys('444-444-444');
        element(by.css('button.btn-success')).click();
        element.all(by.css('.smart-table-data-row td')).then(function(items) {
            expect(items.length).toBe(88);
        })
    })
    it('should validate the values inserted to the new row', function() {
        element.all(by.css('.smart-table-data-row td')).then(function(items) {
            expect(items[0].getText()).toBe('Paweł');
            expect(items[1].getText()).toBe('Górka');
            expect(items[2].getText()).toBe('test');
            expect(items[4].getText()).toBe('Company AAA');
            expect(items[5].getText()).toBe('Sales Team');
            expect(items[6].getText()).toBe('test@test.com');
            expect(items[7].getText()).toBe('444-444-444');
            //test nie przejdzie, ponieważ Company AAA nie jest wstawiane poprawnie na formularzu
            //jak to zrobić żeby testował dalej jak się wywali?
        })
    })
    it('should delete the new inserted row check the number of elements of Web table', function() {
        element(by.css('button.btn')).click();
        element.all(by.css('.smart-table-data-row td')).then(function(items) {
                expect(items.length).toBe(88);
        })
    })
})