describe('profile page with a name and e-mail input', function() {
  it('should allow you to input your name and e-mail', function() {
    browser.get('http://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');

    element(by.model('formData.name')).sendKeys('Paweł');
    element(by.model('formData.email')).sendKeys('pawel.gorka@gft.com');
    var output = element(by.css('pre.ng-binding')).getText();
    
    expect(output).toContain('{"name":"Paweł","email":"pawel.gorka@gft.com"}');
    expect
  });
});