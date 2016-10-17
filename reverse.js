const indexOf = function(array, element) { //basic search. can change algorithm for faster result
  for(let i = 0; i < array.length; i++) {
    if(array[i] === element)
      return i;
  }
  return "error";
}

const reverse = function(array) {
  return array.map(function(current_element) {
    return array[array.length - indexOf(array, current_element) - 1];
  });
};


const reversedArray = reverse([1, 2, 3, 4, 5, 6, 7]); //

console.log(reversedArray);
