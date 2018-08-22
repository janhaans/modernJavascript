const utils = require('./utils');

describe('Object', () => {
    test('is empty', () => {
        expect(utils.isEmpty({})).toBeTruthy();
    });
    
    test('is not empty', () => {
        expect(utils.isEmpty({"8:30": "get up"})).toBeFalsy();
    }); 
});

