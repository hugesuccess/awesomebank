'use strict';

describe('Directive: splash', function () {

  // load the directive's module and view
  beforeEach(module('awesomebankApp'));
  beforeEach(module('app/splash/splash.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<splash></splash>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the splash directive');
  }));
});