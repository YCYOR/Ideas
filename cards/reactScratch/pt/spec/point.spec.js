// spec/point.spec.js
jest.dontMock('../point');
//import { Point } from '../point';
//jest.autoMockOff();
let Point = require('../point').Point;
//let Point = P.Point;

describe('Point', () => {
  beforeEach(function() {
  });
  it('sets up instance properties correctly', () => {
      let p = new Point(1, 5);
      console.log(JSON.stringify(p));
      expect(p.x).toBe(1);
      expect(p.y).toBe(5);
  });
});
//describe('Erpa', () => {
  //it('should do struff', () => {
    //expect(2).toBe(2);
  //});
//});
/*
API

<generated_api_start />
The jest object

    jest.autoMockOff()
    jest.autoMockOn()
    jest.clearAllTimers()
    jest.dontMock(moduleName)
    jest.genMockFromModule(moduleName)
    jest.genMockFunction()
    jest.genMockFn()
    jest.mock(moduleName)
    jest.runAllTicks()
    jest.runAllTimers()
    jest.runOnlyPendingTimers()
    jest.setMock(moduleName, moduleExports)

Mock functions

    mockFn.mock.calls
    mockFn.mock.instances
    mockFn.mockClear()
    mockFn.mockImplementation(fn)
    mockFn.mockImpl(fn)
    mockFn.mockReturnThis()
    mockFn.mockReturnValue(value)
    mockFn.mockReturnValueOnce(value)

Config options

    config.cacheDirectory [string]
    config.collectCoverage [boolean]
    config.collectCoverageOnlyFrom [object]
    config.globals [object]
    config.moduleFileExtensions [array]
    config.modulePathIgnorePatterns [array]
    config.rootDir [string]
    config.scriptPreprocessor [string]
    config.setupEnvScriptFile [string]
    config.setupTestFrameworkScriptFile [string]
    config.testDirectoryName [string]
    config.testFileExtensions [array]
    config.testPathDirs [array]
    config.testPathIgnorePatterns [array]
    config.testPathPattern [string]
    config.unmockedModulePathPatterns [array]

Globally injected variables

    afterEach(fn)
    beforeEach(fn)
    describe(name, fn)
    it(name, fn)
    it.only(name, fn) executes only this test. Useful when investigating a failure
    jest
    pit(name, fn) helper for promises
    require(module)
    require.requireActual(module)
    xdescribe(name, fn)
    xit(name, fn)

expect(value)

    .not inverse the next comparison
    .toThrow(?message)
    .toBe(value) comparison using ===
    .toEqual(value) deep comparison. Use jasmine.any(type) to be softer
    .toBeFalsy()
    .toBeTruthy()
    .toBeNull()
    .toBeUndefined()
    .toBeDefined()
    .toMatch(regexp)
    .toContain(string)
    .toBeCloseTo(number, delta)
    .toBeGreaterThan(number)
    .toBeLessThan(number)
    .toBeCalled()
    .toBeCalledWith(arg, um, ents)
    .lastCalledWith(arg, um, ents)
*/
