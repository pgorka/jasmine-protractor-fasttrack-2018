var multiform = require('./multiform.js');
describe("5 different selectors test", function() {
    it("should locate elements by css selector", async function() {
        await multiform.loadPage.go;
        await multiform.items.name.sendKeys('Paweł');
        expect(multiform.items.output.getText()).toContain('Paweł');
    })
    it("should locate elements by xpath selector", async function() {
        await multiform.items.email.sendKeys('pawel.gorka@gft.com');
        expect(multiform.items.output.getText()).toContain('pawel.gorka@gft.com');

        multiform.items.nextSection.click();
    })
    it('should locate elements by name selector', function() {
        multiform.items.xbox.click();
        expect(multiform.items.output.getText()).toContain('xbox');

        multiform.items.profileBtn.click();
    })
    it('should locate elements by model selector', function() {
        multiform.items.name.sendKeys(' Górka');
        expect(multiform.items.output.getText()).toContain('Paweł Górka');

        multiform.items.interestsBtn.click();
    })
    it('should locate element by the text of css locator', function() {
        expect(multiform.items.header.getText()).toContain('Protractor');
    })
    //browser.sleep(5000);
})