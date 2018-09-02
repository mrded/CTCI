const Matrix = require('./matrix');

describe('Matrix', function() {
  describe('getHeight & getHeight', () => {
    it('can get size', () => {
      const matrix = new Matrix(3, 4);

      expect(matrix.getHeight()).toBe(3);
      expect(matrix.getWidth()).toBe(4);
    });
  });

  describe('set & get', () => {
    it('should be able to set and get value', () => {
      const matrix = new Matrix(3, 3);

      matrix.set(1, 1, 42);
      expect(matrix.get(1, 1)).toBe(42);
    });

    it('getting empty value should return empty value', () => {
      const matrix = new Matrix(3, 3);

      expect(matrix.get(1, 1)).toBe(undefined);
    });
  });
  
  describe('minor', () => {
    it('should be able to minor 3x3 matrix', () => {
      const matrix = new Matrix(3, 3);

      matrix.matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];

      const output = matrix.minor(1, 1);

      expect(output.matrix).toEqual([
        [1, 3],
        [7, 9]
      ]);
    });

    it('should be able to minor 2x3 matrix', () => {
      const matrix = new Matrix(2, 3);

      matrix.matrix = [
        [1, 2, 3],
        [4, 5, 6],
      ];

      const output = matrix.minor(1, 1);

      expect(output.matrix).toEqual([ [1, 3] ]);
    });

    it('should be able to minor 3x2 matrix', () => {
      const matrix = new Matrix(3, 2);

      matrix.matrix = [
        [2, 3],
        [5, 6],
        [8, 9]
      ];

      const output = matrix.minor(1, 1);

      expect(output.matrix).toEqual([ [2], [8] ]);
    });
  });

  describe('findMaxCombination', () => {
    it('variant 1', () => {
      const matrix = new Matrix(3, 3);

      matrix.matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];

      expect(matrix.findMaxCombination()).toBe(9+5+1);
    });

    it('variant 2', () => {
      const matrix = new Matrix(2, 3);

      matrix.matrix = [
        [1, 2, 3],
        [4, 5, 6],
      ];

      expect(matrix.findMaxCombination()).toBe(6+2);
    });

    it('variant 3', () => {
      const matrix = new Matrix(2, 3);

      matrix.matrix = [
        [5, 3, 1],
        [6, 4, 2],
      ];

      expect(matrix.findMaxCombination()).toBe(6+3);
    });

    it('variant 4', () => {
      const matrix = new Matrix(3, 2);

      matrix.matrix = [
        [1, 2],
        [3, 4],
        [5, 6]
      ];

      expect(matrix.findMaxCombination()).toBe(6+3);
    });

    it('variant 5', () => {
      const matrix = new Matrix(1, 1);

      matrix.matrix = [ [42] ];

      expect(matrix.findMaxCombination()).toBe(42);
    });

    it('variant 6', () => {
      const matrix = new Matrix(3, 3);

      matrix.matrix = [
        [ 6, 7, 6 ],
        [ 4.5, 6, 6.75 ], 
        [ 6, 5, 9 ]
      ];

      expect(matrix.findMaxCombination()).toBe(21);
    });

    it('variant 7', () => {
      const matrix = new Matrix(6, 6);

      matrix.matrix = [
        [ 9, 13.5, 9, 9, 13.5, 9 ],
        [ 6, 6, 13.5, 9, 6, 9 ],
        [ 22.5, 22.5, 14, 14, 22.5, 14 ],
        [ 9, 9, 8, 8, 9, 8 ],
        [ 7.5, 7.5, 12, 8, 7.5, 8 ],
        [ 18, 18, 10, 10, 18, 10 ]
      ];

      expect(matrix.findMaxCombination()).toBe(83.50);
    });

    it('variant 8', () => {
      const matrix = new Matrix(7, 6);

      matrix.matrix = [
        [ 13.5, 13.5, 13.5, 6, 13.5, 13.5 ],
        [ 4.5, 4.5, 4.5, 4, 4.5, 4.5 ],
        [ 10.5, 10.5, 10.5, 10, 10.5, 10.5 ],
        [ 11.25, 11.25, 11.25, 3, 11.25, 11.25 ],
        [ 7.5, 11.25, 11.25, 15, 7.5, 11.25 ],
        [ 7.5, 7.5, 7.5, 8, 7.5, 7.5 ],
        [ 13.5, 13.5, 13.5, 9, 13.5, 13.5 ]
      ];

      expect(matrix.findMaxCombination()).toBe(71.25);
    });
  });
});
