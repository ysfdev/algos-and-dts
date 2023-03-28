"use strict";
/*
 *   selectionSort Implementation
 *   @param {Array} Array to be sorted
 */

module.exports.selectionSort = (array) => {
  let minIndex;
  for (let i = 0; i < array.length; i++) {
    minIndex = indexOfMinimum(array, i);
    swap(array, minIndex, i);
  }
  return array;
};

const swap = (array, firstIndex, secondIndex) => {
  let temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
};

const indexOfMinimum = (array, startIndex) => {
  let minValue = array[startIndex];
  let minIndex = startIndex;

  for (let i = minIndex + 1; i < array.length; i++) {
    if (array[i] < minValue) {
      minIndex = i;
      minValue = array[i];
    }
  }
  return minIndex;
};
