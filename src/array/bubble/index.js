module.exports = function(array) {
  const output = array.slice();

  let length = array.length;

  // To count how many iteraions.
  let iterations = 0;

  for (let i=0; i<length; i++) {
    for (let j=0; j<length; j++) {
      iterations++;

      const x = output[j];
      const y = output[j+1];

      if (x > y) {
        output[j] = y;
        output[j+1] = x;
      }
    }

    // No needs to check last element, because it will be max already.
    length--;
  }

  // console.log(array, 'iterations:', iterations);

  return output;
}
