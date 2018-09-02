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
    describe('3x3', () => {
      it('variant 1', () => {
        const matrix = new Matrix(3, 3);

        matrix.matrix = [
          [1, 2, 3],
          [4, 5, 6],
          [7, 8, 9]
        ];

        expect(matrix.findMaxCombination()).toBe(9+5+1);
      });
    })

    describe('2x3', () => {
      it('variant 1', () => {
        const matrix = new Matrix(2, 3);

        matrix.matrix = [
          [1, 2, 3],
          [4, 5, 6],
        ];

        expect(matrix.findMaxCombination()).toBe(6+2);
      });

      it('variant 2', () => {
        const matrix = new Matrix(2, 3);

        matrix.matrix = [
          [5, 3, 1],
          [6, 4, 2],
        ];

        expect(matrix.findMaxCombination()).toBe(6+3);
      });
    });

    describe('3x2', () => {
      it('variant 1', () => {
        const matrix = new Matrix(3, 2);

        matrix.matrix = [
          [1, 2],
          [3, 4],
          [5, 6]
        ];

        expect(matrix.findMaxCombination()).toBe(6+3);
      });
    });

    describe('1x1', () => {
      it('variant 1', () => {
        const matrix = new Matrix(1, 1);

        matrix.matrix = [ [42] ];

        expect(matrix.findMaxCombination()).toBe(42);
      });
    });
  });
});
