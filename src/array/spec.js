module.exports = function(fn) {
  it('empty array', function() {
    const array = [];
  
    expect(fn(array)).toEqual([]);
  });

  it('one ellement', function() {
    const array = [2];
  
    expect(fn(array)).toEqual([2]);
  });

  it('already sorted', function() {
    const array = [1, 2, 3];
  
    expect(fn(array)).toEqual([1, 2, 3]);
  });

  it('revers sorted', function() {
    const array = [3, 2, 1];
  
    expect(fn(array)).toEqual([1, 2, 3]);
  });

  it('contain duplicates', function() {
    const array = [2, 3, 1, 3, 1];
  
    expect(fn(array)).toEqual([1, 1, 2, 3, 3]);
  });

  it('odd number of elements in array', function() {
    const array = [2, 3, 1, 5, 4];
  
    expect(fn(array)).toEqual([1, 2, 3, 4, 5]);
  });

  it('even number of elements in array', function() {
    const array = [2, 3, 1, 4];
  
    expect(fn(array)).toEqual([1, 2, 3, 4]);
  });
}
