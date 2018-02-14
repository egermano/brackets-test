
const mod = require('./main');


describe('findIndex', () => {

    const findIndex = mod.findIndex;

    // string
    let input = '[ABC[23]][89]';

    it('bracket at 0 end at position 8', () => {
        expect(findIndex(input, 0)).toBe(8);
    });

    it('bracket at 4 end at position 7', () => {
        expect(findIndex(input, 4)).toBe(7);
    });

    it('bracket at 9 end at position 12', () => {
        expect(findIndex(input, 9)).toBe(12);
    });

    it('position 1 is not a bracket2', () => {
        expect(findIndex(input, 1)).toBe(-1);
    });

    it('bracket at 0 has no closing', () => {
        input = '[abc[123]'
        expect(findIndex(input, 0)).toBe(-1);
    });
});


describe('findEqual', () => {
    const findEqual = mod.findEqual;


    it('is 9', () => {
        input = '(()))(()()())))'
        expect(findEqual(input)).toBe(9);
    });

    it('is 4', () => {
        input = '(())))('
        expect(findEqual(input)).toBe(4);
    });

    it('is 2', () => {
        input = '))'
        expect(findEqual(input)).toBe(2);
    });

    it('is 0', () => {
        input = '(('
        expect(findEqual(input)).toBe(0);
    });
});

describe('checkForBalance', () => {

    const checkForBalance = mod.checkForBalance;

    it('is true', () => {
        input = '[()]{}{[()()]()}'
        expect(checkForBalance(input)).toBe(true);
    });

    it('is false', () => {
        input = '[[(])'
        expect(checkForBalance(input)).toBe(false);
    });
})