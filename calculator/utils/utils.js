"use strict";

const prompt = require('prompt-sync')();

let calculator ={};

calculator.read = function() {
    this.number1 = Number(prompt('Give number 1: '));
    this.number2 = Number(prompt('Give number 2: '));
};

calculator.sum = function() {
    return this.number1 + this.number2;
};

calculator.mul = function() {
    return this.number1*this.number2;
}

module.exports.calculator = calculator;

