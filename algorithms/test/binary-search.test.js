const binarySearch = require('../binary-search.js').binarySearch;

describe('BinarySearch Test', () => {
  describe('#BinarySearch()', () => {
    test('should return -1 when the value is not present', () => {
      expect(binarySearch(32,[2,6,89,67,65,98])).toEqual(-1);
    });
    test('should return 2 if value is found', () => {
      expect(binarySearch(65,[2,6,65,67,85,98])).toEqual(2);
    });
    test('should return 20 if value is found', () => {
      expect(binarySearch(73,[2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37,
		41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97])).toEqual(20);
    });
  });
});
