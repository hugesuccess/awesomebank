'use strict';

describe('Directive: tool', function () {

  // load the directive's module and view
  beforeEach(module('awesomebankApp'));
  beforeEach(module('app/tool/tool.html'));

  var element, scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<tool></tool>');
    element = $compile(element)(scope);
    scope.$apply();
    expect(element.text()).toBe('this is the tool directive');
  }));
});