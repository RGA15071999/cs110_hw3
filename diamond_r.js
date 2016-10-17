const print = function(number, symbol) {
  if(number === 0) {
    return '';
  }

  return symbol + print(number-1, symbol);
};

const diamond = function(size) {
  if(size === 0) {
    return '';
  }

  if(size % 2 === 0) {
    return diamondHelper(size+1, 1);
  }

  return diamondHelper(size, 1);
};

const diamondHelper = function(size, row) {

  if(row > size) {
    return '';
  }

  if( row <= (size + 1)/2 ) {
    const space_count = (size+1)/2 - row;
    const star_count = size - 2 * space_count;
    return print(space_count, ' ') + print(star_count, '*') + '\n' + diamondHelper(size, row + 1);
  }
  else {
    const space_count = row - (size+1)/2;
    const star_count = size - 2 * space_count;
    return print(space_count, ' ') + print(star_count, '*') + '\n' + diamondHelper(size, row + 1);
  }

};

console.log(diamond(10));
