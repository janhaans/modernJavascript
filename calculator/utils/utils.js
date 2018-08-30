"use strict";

const prompt = require('prompt-sync')();

function Calculator() {
    this.number1 = 0;
    this.number2 = 0;

    this.read = function() {
        this.number1 = Number(prompt('Give number 1: '));
        this.number2 = Number(prompt('Give number 2: '));
    };

    this.sum = function() {
        return this.number1 + this.number2;
    };
    
    this.mul = function() {
        return this.number1*this.number2;
    };
};


module.exports.Calculator = Calculator;
