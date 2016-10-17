const abs = function(number) {
  if (number < 0)
    return -number;
  else
    return number;
}

const print = function(number, symbol)
{
  let buffer = '';
  for(let i = 0; i < number; i++) {
    buffer += symbol;
  }
  return buffer;
};

const diamond = function(n) {
  let return_value = '';

  if(n % 2 === 0) {
    n = n + 1;
  }

  for(let i = 1; i < 2 * n; i = i + 2) {
    let space_count = abs((n - i) / 2);
    let star_count = n - 2 * space_count;
    return_value += print( space_count, ' ' ) + print(star_count, '*') + '\n';
  }

  return(return_value);
};

console.log(diamond(25));
