'use strict';

const utils = require('./utils/utils');

utils.calculator.read();
console.log(`Sum = ${utils.calculator.sum()}`);
console.log(`Multiply = ${utils.calculator.mul()}`);
