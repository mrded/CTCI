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

  describe('rotate', () => {
    it('should be able to rotate 3x3 matrix', () => {
      const matrix = new Matrix(3, 3);

      matrix.matrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];

      const output = matrix.rotate();

      expect(output.matrix).toEqual([
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
      ]);
    });

    it('should be able to rotate 2x3 matrix', () => {
      const matrix = new Matrix(2, 3);

      matrix.matrix = [
        [1, 2, 3],
        [4, 5, 6],
      ];

      const output = matrix.rotate();

      expect(output.matrix).toEqual([
        [4, 1],
        [5, 2],
        [6, 3]
      ]);
    });

    it('should be able to rotate 3x2 matrix', () => {
      const matrix = new Matrix(3, 2);

      matrix.matrix = [
        [2, 3],
        [5, 6],
        [8, 9]
      ];

      const output = matrix.rotate();

      expect(output.matrix).toEqual([
        [8, 5, 2],
        [9, 6, 3]
      ]);
    });

    it('should be able to rotate 1x1 matrix', () => {
      const matrix = new Matrix(1, 1);

      matrix.matrix = [[42]];

      const output = matrix.rotate();

      expect(output.matrix).toEqual([[42]]);
    });
  });
  
  describe('minor', () => {
    it('should be able to minor 3x3 matrix');
    it('should be able to minor 2x3 matrix');
    it('should be able to minor 3x2 matrix');
  });

  describe('findMaxCombination', () => {
    it('3x3 matrix');
    it('2x3 matrix');
    it('3x2 matrix');
    it('1x1 matrix');
  });
});
