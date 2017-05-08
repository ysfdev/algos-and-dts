const selectionSort = require('../selection-sort.js').selectionSort;
const assert = require('chai').assert;

describe('selectionSort Test', () => {
  describe('#selectionSort()', () => {
    let array;
    it('should return sorted array', () => {
      array = [4,7,3,8,1,24,15];
      assert.deepEqual(selectionSort(array), [1,3,4,7,8,15,24]);
    });
    it('should return sorted array 2', () => {
      array = [10,9,8,7,6,5,4,3,2,1];
      assert.deepEqual(selectionSort(array), [1,2,3,4,5,6,7,8,9,10]);
    });
  });
});
