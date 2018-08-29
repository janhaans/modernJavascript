'use strict';

const utils = require('./utils');

utils.calculator.number1 = 6;
utils.calculator.number2 = 6;

describe('calculator', () => {
    test('should return 12 with method sum', () => {
        expect(utils.calculator.sum()).toBe(12);
    });
    test('should return 36 with method mul', () => {
        expect(utils.calculator.mul()).toBe(36);
    });
});

