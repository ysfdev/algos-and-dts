/**
 * Test for an array Partitioning
 */

const PartioningArr = require("../partition-arr").PartitionArr;

describe("partitionArr tests ", () => {
  let partionValues = [];
  let initialArr = [];
  const pivot = 99;
  let maxValue = 200;
  let randomValue = 0;

  //generate 20 random values up to maxValue
  for (let i = 0; i < 20; i++) {
    randomValue = Math.floor(Math.random() * (maxValue - 1) + 1);
    partionValues.push(randomValue);
    initialArr.push(randomValue); //Create a copy of values to be partioned for test
  }

  const partioningArr = new PartioningArr(partionValues);
  partioningArr.partitionIt(0, partionValues.length - 1, pivot);

  test("should not equal initial array", () => {
    expect(partioningArr.getArray()).not.toEqual(initialArr);
  });
});
