const utils = require('./utils.js');

describe('Ladder', () => {
    
    test('step is 2', () => {
        let step = utils.ladder.up().up().up().down().showStep();
        expect(step).toBe(2);
    });

    test('step is 0', () => {
        let step = utils.ladder.down().down().down().down().showStep();
        expect(step).toBe(0);
    });
});