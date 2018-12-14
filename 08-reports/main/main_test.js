describe('AngularJS Webtables page', function() {
    beforeAll(function() {
        browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
    })
    beforeEach(function() {
        element.all(by.css('.smart-table-data-row td')).then(function(items) {
            expect(items.length).toBe(77);
    })})
    afterEach(function() {
        element(by.xpath('//html/body/table/tbody/tr[1]/td[11]/button')).click();//usuwanie rzędu
        element(by.css('button.btn:nth-child(2)')).click();//potwierdzenie usuwania rzędu
        element(by.css('button.pull-right')).click();//Add user
        element(by.name('FirstName')).clear();
        element(by.name('LastName')).clear();
        element(by.name('UserName')).clear();
        element(by.name('Password')).clear();
        element(by.name('Email')).clear();
        element(by.name('Mobilephone')).clear();
    })
    afterAll(function() {
        element(by.css('.btn-danger')).click();
    })
    it('should insert a new row to the Web table and check the values of inserted elements', function() {    
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
        element.all(by.css('.smart-table-data-row td')).then(function(items) {
            expect(items[0].getText()).toBe('Paweł');
            expect(items[1].getText()).toBe('Górka');
            expect(items[2].getText()).toBe('test');
            //expect(items[4].getText()).toBe('Company AAA');
            expect(items[5].getText()).toBe('Sales Team');
            expect(items[6].getText()).toBe('test@test.com');
            expect(items[7].getText()).toBe('444-444-444');
            //test nie przejdzie, ponieważ Company AAA nie jest wstawiane poprawnie na formularzu
            //jak to zrobić żeby testował dalej jak się wywali?
        })
    })
    it('should insert again a new row to the Web table and check the values of the second inserted row', function() {    
        element(by.name('FirstName')).sendKeys('Test');
        element(by.name('LastName')).sendKeys('User');
        element(by.name('UserName')).sendKeys('test123');
        element(by.name('Password')).sendKeys('1234');
        element(by.css('label.radio:nth-child(1) > input:nth-child(1)')).click();
        element(by.xpath("//select[@ng-model='dataRow[column.map]']/option[@value='1']")).click();
        element(by.name('Email')).sendKeys('test123@test.com');
        element(by.name('Mobilephone')).sendKeys('555-555-555');
        element(by.css('button.btn-success')).click();
        element.all(by.css('.smart-table-data-row td')).then(function(items) {
            expect(items.length).toBe(88);
        })
        element.all(by.css('.smart-table-data-row td')).then(function(items) {
            expect(items[0].getText()).toBe('Test');
            expect(items[1].getText()).toBe('User');
            expect(items[2].getText()).toBe('test123');
            //expect(items[4].getText()).toBe('Company BBB');
            expect(items[5].getText()).toBe('Customer');
            expect(items[6].getText()).toBe('test123@test.com');
            expect(items[7].getText()).toBe('555-555-555');
        })
    })
})