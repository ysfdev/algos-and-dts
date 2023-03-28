const ShellSort = require("../shell-sort").ShellSort;

describe("ShellSort Test", () => {
  const array = [9, 8, 5, 4, 6, 2, 7, 1, 10, 3];
  const sortArray = new ShellSort(array);
  sortArray.shellSort();

  test("Should return sorted array!", () => {
    expect(sortArray.getSortedArray()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});
