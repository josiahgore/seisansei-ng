describe('seisansei routing', function() {

  it('should redirect to tasks when path unrecognized', function() {
    browser.get('/#!/');
    var homeUrl = browser.getCurrentUrl();
    browser.get('/#!/this/path/DNE').then(function() {
      expect(browser.getLocationAbsUrl()).toEqual(homeUrl);
    });
  });

  it('should load appropriate items via navigation', function() {
    var menu;
    browser.get('/#!/');
    menu = element.all(by.repeater('menuItem in menuItems'));

    element(by.css('.menu li:nth-child(1) > a')).click().then(function () {
      expect(element(by.css('h1.section-header')).getText()).toContain('Tasks');
    });
    element(by.css('.menu li:nth-child(2) > a')).click().then(function () {
      expect(element(by.css('h1.section-header')).getText()).toContain('Settings');
    });
  });
});
