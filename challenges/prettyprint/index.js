module.exports = { 
  //param A : integer
  //return a array of array of integers
  prettyPrint : function(A){
    var size = (A * 2) - 1;

    var output = Array(size);

    // Init matrix.
    for (var i = 0; i < size; i++) {
      output[i] = Array(size);
    }

    // Draw 1/4 and mirrow.
    for (var i = 0; i<A; i++) {
      for (var j = 0; j<A; j++) {
        var value = (i < j) ? A-i : A-j;

        // Mirror.
        output[i][j] = value;
        output[i][2*A-j-2] = value;
        output[2*A-i-2][j] = value;
        output[2*A-i-2][2*A-j-2] = value;
      }
    }

    return output;
  }
};

