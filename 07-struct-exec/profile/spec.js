//locators / selectors
describe("5 different selectors test", function() {
    beforeAll(function() {
        browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
    })
    it("should locate elements by css selector", function() {
        element(by.css('.form-group .form-control')).sendKeys('Paweł');

        var output = element(by.css('pre.ng-binding')).getText();
        expect(output).toContain('Paweł');
    })
    it("should locate elements by xpath selector", function() {
        element(by.xpath('//html/body/div[3]/div/div/div/div/form/div/div[2]/input')).sendKeys('pawel.gorka@gft.com');

        var output = element(by.xpath('//div/pre')).getText();
        expect(output).toContain('pawel.gorka@gft.com');

        element(by.xpath("//div[@class='col-xs-6 col-xs-offset-3']/a")).click();
    })
    it('should locate elements by name selector', function() {
        element(by.name('009')).click();

        var output = element(by.css('pre.ng-binding')).getText();
        expect(output).toContain('xbox');

        element(by.xpath("//div[@id='status-buttons']/a[@href='#/form/profile']")).click();
    })
    it('should locate elements by model selector', function() {
        element(by.model('formData.name')).sendKeys(' Górka');

        var output = element(by.css('pre.ng-binding')).getText();
        expect(output).toContain('Paweł Górka');

        element(by.xpath("//div[@id='status-buttons']/a[@href='#/form/interests']")).click();
    })
    it('should locate element by the text of css locator', function() {
        var output = element(by.cssContainingText('.page-header > h2:nth-child(1)',"Let's Learn Protractor")).getText();
        expect(output).toContain('Protractor');
    })

})