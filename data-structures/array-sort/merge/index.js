const merge = (one, two) => {
  const output = new Array(one.length + two.length);
  console.log('one', one);
  console.log('two', two);

  let oneX = 0;
  let twoX = 0;
  let x = 0;

  while (oneX < one.length && twoX < two.length) {
    if (one[oneX] < two[twoX]) {
      output[x] = one[oneX];
      oneX++;
    } else {
      output[x] = two[twoX];
      twoX++;
    }

    x++;
  }

  for (; oneX < one.length; oneX++ && x++) {
    output[x] = one[oneX];
  }

  for (; twoX < two.length; twoX++ && x++) {
    output[x] = two[twoX];
  }

  return output;
}



const foo = merge([1, 3, 5, 7, 9], [2, 4, 6, 8]);

console.log('result -> ', foo)

module.exports = function(array) {
  const output = array.slice();

  return output;
}
