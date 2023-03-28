/**
 * Partition an array values based on a pivot
 * Efficiency: O(N)
 */

class PartitionArr {
  constructor(arr) {
    this.array = arr;
  }

  getArray() {
    return this.array;
  }

  swap(indexA, indexB) {
    const temp = this.array[indexA];
    this.array[indexA] = this.array[indexB];
    this.array[indexB] = temp;
  }

  partitionIt(left, right, pivot) {
    let leftIndex = left - 1;
    let rightIndex = right + 1;

    while (true) {
      //find bigger items
      while (leftIndex < right && this.array[++leftIndex] < pivot); //no operation

      //find smaller items
      while (rightIndex > left && this.array[--rightIndex] > pivot); //no operation

      if (leftIndex >= rightIndex) {
        break;
      } else {
        this.swap(leftIndex, rightIndex);
      }
    }
  }
}

module.exports.PartitionArr = PartitionArr;
