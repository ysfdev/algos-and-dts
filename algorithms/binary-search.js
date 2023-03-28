"use strict";
/*
 *   BynarySearch Implementation
 *   @param {Number} key
 *   @param {Array} Sorted Array of values to search key on
 */

module.exports.binarySearch = (key, array) => {
  let min = 0;
  let max = array.length - 1;
  let guess,
    totalGuessesCount = 0;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);
    totalGuessesCount += 1;
    if (array[guess] === key) {
      return guess;
    } else if (array[guess] < key) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }

  return -1;
};
