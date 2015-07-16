'use strict';

describe('Filter: cash', function () {

  // load the filter's module
  beforeEach(module('awesomebankApp'));

  // initialize a new instance of the filter before each test
  var cash;
  beforeEach(inject(function ($filter) {
    cash = $filter('cash');
  }));

  it('should return the input prefixed with "cash filter:"', function () {
    var text = 'angularjs';
    expect(cash(text)).toBe('cash filter: ' + text);
  });

});
