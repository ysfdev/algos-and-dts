const binarySearch = require('../binary-search.js').binarySearch;
const assert = require('chai').assert;

describe('BinarySearch Test', () => {
  describe('#BinarySearch()', () => {
    it('should return -1 when the value is not present', () => {
      assert.equal(binarySearch(32,[2,6,89,67,65,98]), -1);
    });
    it('should return 2 if value is found', () => {
      assert.equal(binarySearch(65,[2,6,65,67,85,98]),2);
    });
    it('should return 20 if value is found', () => {
      assert.equal(binarySearch(73,[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97]),20);
    });
  });
});
