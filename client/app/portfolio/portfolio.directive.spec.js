'use strict';

describe('Directive: portfolio', function () {

  // load the directive's module and view
  beforeEach(module('awesomebankApp'));
  beforeEach(module('app/portfolio/portfolio.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<portfolio></portfolio>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the portfolio directive');
  }));
});