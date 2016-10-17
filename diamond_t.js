const print = function(number, symbol) {
  if(number <= 0) {
    return '';
  }

  return symbol + print(number-1, symbol);
};

const triangleStars = function(count, row_count) {
  if(count === 0)
    return '';

  return triangleStars(count - 1, row_count) + "\n" + print((row_count - count), ' ') + print((2 * count - 1), '*');
};

const reverseTriangleStars = function(count, row_count) {
  if(count === 0)
    return '';

  return "\n" + print((row_count - count), ' ') + print((2 * count - 1), '*') + reverseTriangleStars(count - 1, row_count);
};

const diamond = function(size) {
  if(size === 0) {
    return '';
  }

  if(size % 2 === 0) {
    return diamond(size+1);
  }

  return triangleStars(size-1, size) + reverseTriangleStars(size, size);
};


console.log(diamond(3));
