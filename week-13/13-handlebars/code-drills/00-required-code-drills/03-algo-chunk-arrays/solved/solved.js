function chunk(array, size) {
  const chunked = [];
  for (var index = 0; index < array.length; index+= size){
    chunked.push(array.slice(index, index + size));
  }

  return chunked;
}

console.log(chunk([1, 2, 3, 4], 2))
console.log(chunk([2,4,7,3,1,7,9,4,8,0,4,7,9,3,5,5,6,3,2,2,2,2,1], 3))