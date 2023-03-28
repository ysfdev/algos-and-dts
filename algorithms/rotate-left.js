/**
 * Rotate Array of N elements given K times to rotate items to the left
 * @param {Array} array
 * @param {Number} rotateTimes
 */

function rotateLeft(array, rotateTimes) {
  if (!array || !rotateTimes) throw new Error("Missing array or rotateTimes");
  const size = array.length;
  let temp;
  for (let i = 0; i < rotateTimes; i++) {
    temp = array[0];
    for (let b = 0; b <= size - 1; b++) {
      array[b] = array[b + 1];
    }
    array[size - 1] = temp;
  }

  //Convert array output to string
  // const output = array.reduce((out, curr, i) => { return out += (i !== 0) ? ' ' + curr : curr}, "")
  return array;
}

module.exports.rotateLeft = rotateLeft;
