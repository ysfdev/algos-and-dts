/**
 * Test for an array Partitioning
 */

const rotateLeft = require('../rotate-left').rotateLeft;

describe('rotate Left tests ', () => {
    let testArr = [1,2,3,4,5];
    let rotations = 4;
    test('should rotate all values 4 times to the left', () => {
        expect(rotateLeft(testArr, rotations)).toEqual([5,1,2,3,4]);
    })
})