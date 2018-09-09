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

    // @TODO: 1. Draw 1/4 and mirrow.
    for (var i = 0; i<A; i++) {
      for (var j = 0; j<A; j++) {
        output[i][j] = (i < j) ? A-i : A-j;

        // Mirror.



      }
    }

    return output;
  }
};

