describe('angularjs homepage', function() {
    it('should be testable', function() {
      browser.get('http://www.way2automation.com/angularjs-protractor/calc/');
      
      //toEqual()
      element(by.model('first')).sendKeys(4);
      element(by.model('second')).sendKeys(4);
      element(by.id('gobutton')).click();
  
      expect(element(by.binding('latest')).getText()).
        toEqual('8');
      
      //toBe()
      element(by.model('first')).sendKeys(2);
      element(by.model('second')).sendKeys(2);
      element(by.xpath("//select[@ng-model='operator']/option[@value='SUBTRACTION']")).click();
      element(by.id('gobutton')).click();

      expect(element(by.binding('latest')).getText()).
        toBe('0');

      //toBeCloseTo()
      element(by.model('first')).sendKeys(4);
      element(by.model('second')).sendKeys(5);
      element(by.xpath("//select[@ng-model='operator']/option[@value='DIVISION']")).click();
      element(by.id('gobutton')).click();
      
      expect(element(by.binding('latest')).getText()).
      toBeCloseTo(1.0, 0.2);
      
      //toBeLessThan()
      element(by.model('first')).sendKeys(-4);
      element(by.model('second')).sendKeys(4);
      element(by.xpath("//select[@ng-model='operator']/option[@value='MULTIPLICATION']")).click();
      element(by.id('gobutton')).click();

      expect(element(by.binding('latest')).getText()).
        toBeLessThan(0);

      //toBeDefined()
      expect(element(by.binding('latest')).getText()).
        toBeDefined();
        
        
    });
  });