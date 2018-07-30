module.exports = function(array) {
  const output = array.slice();
  
  // To count how many iteraions.
  let iterations = 0;

  for (let i = 0; i < output.length; i++) {
    let min = output[i];
    let min_pos = i;

    for (let j = i; j < output.length; j++) {
      iterations++;

      if (output[j] < min) {
        min = output[j];
        min_pos = j;
      }
    }

    // Swap current item with min item.
    output[min_pos] = output[i];
    output[i] = min;
  }
  
  // console.log(array, 'iterations:', iterations);

  return output;
}
