const merge = (one, two) => {
  const output = new Array(one.length + two.length);

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

  while (oneX < one.length) {
    output[x] = one[oneX];
    oneX++;
    x++;
  }

  while (twoX < two.length) {
    output[x] = two[twoX];
    twoX++;
    x++;
  }

  return output;
}

const sort = (array) => {
  if (array.length <= 1) return array;

  const middle = Math.round((array.length-1) / 2);

  const one = array.slice(0, middle);
  const two = array.slice(middle, array.length);

  return merge(sort(one), sort(two));
}

module.exports = function(array) {
  const output = array.slice();

  return sort(output);
}
