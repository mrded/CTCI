const Lib = require('./index.js');

describe('prettyprint', function() {
  it('1', () => {
    const input = 1;
    const output = [[1]];

    expect(Lib.prettyPrint(input)).toEqual(output);
  });

  it('2', () => {
    const input = 2;
    const output = [
      [2, 2, 2],
      [2, 1, 2],
      [2, 2, 2]
    ];

    expect(Lib.prettyPrint(input)).toEqual(output);
  });

  it('3', () => {
    const input = 3;
    const output = [
      [3, 3, 3, 3, 3],
      [3, 2, 2, 2, 3],
      [3, 2, 1, 2, 3],
      [3, 2, 2, 2, 3],
      [3, 3, 3, 3, 3]
    ];

    expect(Lib.prettyPrint(input)).toEqual(output);
  });

  it('4', () => {
    const input = 4;
    const output = [
      [4, 4, 4, 4, 4, 4, 4],
      [4, 3, 3, 3, 3, 3, 4],
      [4, 3, 2, 2, 2, 3, 4],
      [4, 3, 2, 1, 2, 3, 4],
      [4, 3, 2, 2, 2, 3, 4],
      [4, 3, 3, 3, 3, 3, 4],
      [4, 4, 4, 4, 4, 4, 4],
    ];

    expect(Lib.prettyPrint(input)).toEqual(output);
  });
});
