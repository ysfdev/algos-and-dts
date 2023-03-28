/**
 * Test for insertion sort
 */

const insertionSort = require("../insertion-sort").insertionSort;

describe("insertionSort test", () => {
  const array = [3, 5, 7, 11, 13, 2, 9, 6];
  test("expect array to be sorted", () => {
    expect(insertionSort(array)).toEqual([2, 3, 5, 6, 7, 9, 11, 13]);
  });
});
