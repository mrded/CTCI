class Matrix {
  constructor(height, width) {
    this.matrix = [];

    for (let i = 0; i < height; i++) {
      this.matrix[i] = Array(width);
    }
  }

  get(i, j) {
    return this.matrix[i][j];
  }

  set(i, j, value) {
    this.matrix[i][j] = value;
  }

  get height() {
    return this.matrix.length;
  }

  get width() {
    return this.matrix[0].length;
  }

  minor(i, j) {
    // Create a new matrix without deleted column & row.
    const newMatrix = new Matrix(this.height - 1, this.width - 1);

    for (let ii = 0; ii < this.height; ii++) {
      if (ii === i) continue;

      for (let jj = 0; jj < this.width; jj++) {
        if (jj === j) continue;

        // Adjusted index is one smaller after deleted index.
        let adjustedI = (ii > i) ? ii - 1 : ii;
        let adjustedJ = (jj > j) ? jj - 1 : jj;

        newMatrix.set(adjustedI, adjustedJ, this.get(ii, jj)); 
      }
    }

    return newMatrix;
  }

  findMaxCombination() {
    const height = this.height;
    const width = this.width;

    if (height === 1) {
      // In case only one row left - return max column.
      return Math.max.apply(null, this.matrix[0]);
    }

    if (width === 1) {
      // In case only one column left - return max row.
      return Math.max.apply(null, this.matrix.map(x => x[0]));
    }

    const values = [];

    for (let i = 0; i < height; i++) {
      for (let j = 0; j < width; j++) {
        const minorMatrix = this.minor(i, j);

        // Current value + next max value.
        values.push(this.get(i, j) + minorMatrix.findMaxCombination());
      }
    }

    return Math.max.apply(null, values);
  }
}

module.exports = Matrix;
