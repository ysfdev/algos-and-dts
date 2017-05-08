/**
 * Sorting array using insertionSort
 * Efficiency: O(N^2)
 * @param {Array} array 
 */

module.exports.insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    let current = array[i];
    let count = i;

    while(count > 0 && array[count -1] >= current) {
      array[count] = array[count -1];
      --count;
    }
    array[count] = current;
  }

  return array;
};

