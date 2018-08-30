'use strict';

const utils = require('./utils');

let calculator = new utils.Calculator();

calculator.number1 = 6;
calculator.number2 = 6;

describe('calculator', () => {
    test('should return 12 with method sum', () => {
        expect(calculator.sum()).toBe(12);
    });
    test('should return 36 with method mul', () => {
        expect(calculator.mul()).toBe(36);
    });
});

