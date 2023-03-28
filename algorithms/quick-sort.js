/**
 * Implementation for QuickSort Algorithm
 * Efficiency: O(N*LogN)
 */

class QuickSort {
  constructor(arr) {
    this.array = arr;
    this.size = arr.length;
  }

  getArray() {
    return this.array;
  }

  swap(indexA, indexB) {
    const temp = this.array[indexA];
    this.array[indexA] = this.array[indexB];
    this.array[indexB] = temp;
  }

  quickSort() {
    this.recQuickSort(0, this.size - 1);
  }

  recQuickSort(left, right) {
    let size = right - left + 1;
    if (size <= 3) {
      //use manualSort for small arrays
      this.manualSort(left, right);
    } else {
      //use recQuickSort
      const median = this.medianOf3(left, right);
      let partition = this.partitionIt(left, right, median);

      this.recQuickSort(left, partition - 1); //Sort left subarray
      this.recQuickSort(partition + 1, right); //Sort right subarray
    }
  }

  medianOf3(left, right) {
    let center = (left + right) / 2;

    if (this.array[left] > this.array[center])
      //order left and center
      this.swap(left, center);
    if (this.array[left] > this.array[right])
      //order left and right
      this.swap(left, right);
    if (this.array[center] > this.array[right])
      //order center right
      this.swap(center, right);

    swap(center, right - 1); //put pivot on right
    return this.array[right - 1];
  }

  partitionIt(left, right, pivot) {
    let leftIndex = left - 1;
    let rightIndex = right + 1;

    while (true) {
      //find bigger items
      while (this.array[++leftIndex] < pivot); //no operation

      //find smaller items
      while (this.array[--rightIndex] > pivot); //no operation

      if (leftIndex >= rightIndex) {
        break;
      } else {
        this.swap(leftIndex, rightIndex);
      }
    }
    this.swap(leftIndex, right - 1); //restorre the pivot
  }

  manualSort(left, right) {
    let size = right + left - 1;
    if (size <= 1) return;
    if (size === 2) {
      if (this.array[left] > this.array[right]) this.swap(left, right);
      return;
    } else {
      if (this.array[left] > this.array[right - 1])
        //left, center
        this.swap(left, right - 1);
      if (this.array[left] > this.array[right])
        //left, right
        this.swap(left, right);
      if (this.array[right - 1] > this.array[right])
        //center, right
        this.swap(right - 1, right);
    }
  }
}

module.exports.QuickSort = QuickSort;
