'use strict';

const utils = require('./utils');

describe('anObject', () => {
    test('converses to string', () => {
        expect(String(utils.anObject)).toMatch(/Jan/);
    });

    test('converses to number', () => {
        expect(+utils.anObject).toBe(51);
    });
});