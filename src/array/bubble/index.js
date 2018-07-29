module.exports = function(array) {
  let iterations = 0;
  let length = array.length;

  for (i=0; i<length; i++) {
    for (j=0; j<length; j++) {
      iterations++;

      const x = array[j];
      const y = array[j+1];

      if (x > y) {
        array[j] = y;
        array[j+1] = x;
      }
    }

    // No needs to check last element, because it will be max already.
    length--;
  }

  console.log('length', array.length);
  console.log('iterations', iterations);

  return array;
}
