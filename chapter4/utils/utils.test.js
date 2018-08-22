"use strict";

const utils = require("./utils");

describe('Object', () => {
    test('is empty', () => {
        expect(utils.isEmpty({})).toBeTruthy();
    });
    
    test('is not empty', () => {
        expect(utils.isEmpty({"8:30": "get up"})).toBeFalsy();
    }); 
});


describe('Sum of object properties', () => {
    test('is 390', () => {
        expect(utils.sum({
            John: 100,
            Ann: 160,
            Pete: 130
        })).toEqual(390);
    });

    test('is 0', () => {
        expect(utils.sum({})).toEqual(0);
    });
});