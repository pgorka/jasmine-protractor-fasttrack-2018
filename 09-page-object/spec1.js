var webtables = require('./webtables.js');
describe('AngularJS Webtables page', function() {
    it('should check the number of elements of Web table', function() {
        webtables.loadPage.go;
        webtables.items.all.then(function(items) {
            expect(items.length).toBe(77);
        })
    })
    it('should list all elements found by ElementArrayFinder', function() {
        webtables.items.all.getText().then(function(text) {
            console.log(text);
        })
    })
    
})//wyciągnąć pierwszy 
//dodać wiersz i zrobić asercję (po repeat .first i wyciągnąc pierwszy wiersz)
