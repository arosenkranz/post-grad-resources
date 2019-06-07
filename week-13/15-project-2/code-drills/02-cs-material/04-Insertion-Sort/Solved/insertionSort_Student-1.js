let inputArray = [];
const arrayLength = 10;

for(let i=0; i < arrayLength; i++){
  let random = Math.round(Math.random() * arrayLength * 10);
  inputArray.push(random);
}

console.log("input: ", inputArray.join(","));
console.log("output: ", insertionSort(inputArray).join(","));

function insertionSort(inputArray){

  for(let i=0; i< inputArray.length; i++){

    let num = inputArray[i];

    for(let j=i; j>=0; j--){
      
      if(inputArray[j] < inputArray [j-1]){
        var temp = inputArray[j-1];
        inputArray[j-1] = inputArray[j];
        inputArray[j] = temp;
      }
    }
  }

  return inputArray;
}