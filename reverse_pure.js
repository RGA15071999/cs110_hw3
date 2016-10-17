const reverse = function(array) {
  let return_array = [];
  for(i=array.length-1, j=0; i>=0, j<array.length; i--, j++)
    return_array[j] = array[i];
  return return_array
};


const reversedArray = reverse([1, 2, 3, 4, 5, 6, 7]); //

console.log(reversedArray);
