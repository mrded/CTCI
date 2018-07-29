module.exports = function(array) {
  const output = array.slice();

  // To count how many iteraions.
  let iterations = 0;

  for (let i = 0; i < array.length; i++) { // O(n) 
    // No needs to check last element, because it will be max already.
    for (let j = 0; j+i < array.length; j++) { // O(n-i); i = (n-1) + (n-2) + (n-n)
      iterations++;

      const x = output[j];
      const y = output[j+1];

      if (x > y) {
        output[j] = y;
        output[j+1] = x;
      }
    }
  }

  // console.log(array, 'iterations:', iterations);

  return output;
}
