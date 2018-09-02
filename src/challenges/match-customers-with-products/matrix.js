function Matrix(height, width) {
    this.matrix = [];
    
    for (let i = 0; i < height; i++) {
        this.matrix[i] = Array(width);
    }
}

Matrix.prototype.get = function(i, j) {
    return this.matrix[i][j];
}

Matrix.prototype.set = function(i, j, value) {
    this.matrix[i][j] = value;
}

Matrix.prototype.getHeight = function() {
    return this.matrix.length;
}

Matrix.prototype.getWidth = function() {
    return this.matrix[0].length;
}

Matrix.prototype.rotate = function() {
    const newMatrix = new Matrix(this.getWidth(), this.getHeight());
    
    for (let i = 0; i < this.getHeight(); i++) {
        for (let j = 0; j < this.getWidth(); j++) {
            newMatrix.set(j, newMatrix.getWidth() - 1 - i, this.get(i, j));
        }
    }
    
    return newMatrix;
}

Matrix.prototype.minor = function(i, j) {
    // Create a new matrix without deleted column & row.
    const newMatrix = new Matrix(this.getHeight() - 1, this.getWidth() - 1);
    
    for (let ii = 0; ii < this.getHeight(); ii++) {
        if (ii === i) continue;
        
        for (let jj = 0; jj < this.getWidth(); jj++) {
            if (jj === j) continue;
            
            // Adjusted index is one smaller after deleted index.
            let adjustedI = (ii > i) ? ii - 1 : ii;
            let adjustedJ = (jj > j) ? jj - 1 : jj;
            
            newMatrix.set(adjustedI, adjustedJ, this.get(ii, jj)); 
        }
    }
    
    return newMatrix;
}

Matrix.prototype.findMaxCombination = function() {
    const height = this.getHeight();
    const width = this.getWidth();
    
    if (height > width) {
        // The algorithm is iterating height, it supposed to be smaller.
        return this.rotate().findMaxCombination();
    }
    
    if (height === 1) {
        // In case only one row left - return max column.
        return Math.max.apply(null, this.matrix[0]);
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

module.exports = Matrix;
