module.exports = function(array) {
  const output = array.slice();

  // To count how many iteraions.
  let iterations = 0;

  for (let i = 0; i < array.length; i++) { // O(n) 
    let swaps = 0;

    // No needs to check last element, because it will be max already.
    for (let j = 0; j+i < array.length; j++) { // O(n-i); i = (n-1) + (n-2) + (n-n)
      iterations++;

      const x = output[j];
      const y = output[j+1];

      if (x > y) {
        swaps++;
        output[j] = y;
        output[j+1] = x;
      }
    }

    // If no swaps - return, because it's already sorted.
    if (swaps === 0) {
      // console.log(array, 'iterations:', iterations);
      return output;
    }
  }

  // console.log(array, 'iterations:', iterations);

  return output;
}
