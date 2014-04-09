describe('seisansei routing', function () {

  it('should redirect to tasks when path unrecognized', function () {
    browser.get('/#!/');
    var homeUrl = browser.getCurrentUrl();
    browser.get('/#!/this/path/DNE').then(function () {
      expect(browser.getLocationAbsUrl()).toEqual(homeUrl);
    });
  });

  it('should load appropriate items via navigation', function () {
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

  it('should move navigation to slideout when mobile', function () {
    expect(element(by.css('.nav .menu-item')).isDisplayed()).toBe(true);
    element(by.css('.nav .menu-item')).getLocation().then(function(loc) {
      expect(loc.x).toBeGreaterThan(0);
    });

    browser.manage().window().setSize(480, 640);

    element(by.css('.nav .menu-item')).getLocation().then(function(loc) {
      expect(loc.x).toBeLessThan(0);
    });
    element(by.css('.header .nav-open')).click().then(function () {
      browser.sleep(500);
      element(by.css('.nav .menu-item')).getLocation().then(function(loc) {
        expect(loc.x).toBeGreaterThan(0);
      });
    });
  });
});
