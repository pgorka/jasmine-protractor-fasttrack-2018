describe('AngularJS Webtables page', function() {
    beforeAll(async function() {
        await browser.get('http://www.way2automation.com/angularjs-protractor/webtables/');
    })
    it('should make an assertion on an ElementArrayFinder', async function() {
        element.all(by.css('.smart-table-data-row td')).then(async function(items) {
            expect(items.length).toBe(77);
            expect(items[28].getText()).toBe('asa@asd.cz');
        })
    })
    it('should list all elements found by ElementArrayFinder', function() {
        element.all(by.css('.smart-table-data-row td')).getText().then(function(text) {
            console.log(text);
        })
    })
    
})//wyciągnąć pierwszy 
//dodać wiersz i zrobić asercję (po repeat .first i wyciągnąc pierwszy wiersz)
