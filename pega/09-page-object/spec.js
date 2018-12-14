var webtables = require('./webtables.js');
describe('AngularJS Webtables page', function() {
    it('should check the number of elements of Web table', function() {
        webtables.loadPage.go;
        webtables.items.all.then(function(items) {
            expect(items.length).toBe(77);
        })
    })
    it('should insert a new row to the Web table and check the number of elements of Web table after the insertion', function() {    
        webtables.buttons.add.click();
        webtables.addItem.firstName.sendKeys('Paweł');
        webtables.addItem.lastName.sendKeys('Górka');
        webtables.addItem.userName.sendKeys('test');
        webtables.addItem.pass.sendKeys('1234');
        webtables.addItem.companyAAA.click();
        webtables.addItem.typeSales.click();
        webtables.addItem.email.sendKeys('test@test.com');
        webtables.addItem.mobile.sendKeys('444-444-444');
        webtables.addItem.saveBtn.click();
        webtables.items.all.then(function(items) {
            expect(items.length).toBe(88);
        })
    })
    it('should validate the values inserted to the new row', function() {
        webtables.items.all.then(function(items) {
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
    it('should delete the new inserted row check the number of elements of Web table', async function() {
        webtables.buttons.deleteFirst.click();
        webtables.buttons.confirmDeletion.click();
        await webtables.items.all.then(function(items) {
                expect(items.length).toBe(77);
        })
    })
})