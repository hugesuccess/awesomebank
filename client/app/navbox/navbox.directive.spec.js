'use strict';

describe('Directive: navbox', function () {

  // load the directive's module and view
  beforeEach(module('awesomebankApp'));
  beforeEach(module('app/navbox/navbox.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<navbox></navbox>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the navbox directive');
  }));
});