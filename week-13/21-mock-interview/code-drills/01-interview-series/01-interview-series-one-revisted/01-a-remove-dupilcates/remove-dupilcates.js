
// solution:


function removeDuplicateNested(arr){
  var soltuionArr = [];
  for (var i = 0; i < arr.length; i++) {
    var found = false
    for (var j = 0; j < solutionArr.length; j++) {
      if(arr[i] === soltuionArr[i]){
        found = true;
      }
    }
    if(!found){
      soltuionArr.push(arr[i])
    }
  }
  return soltuionArr;
}


//brute force
//sort the array and check adjacent elements
//O(n*log(n)) because sort() function is implemented based on quick sort
function removeDuplicateBruteForce(arr){
  arr = arr.sort();
  var temp = []; 
    // Start traversing elements 
    for (var i=0; i<arr.length-1; i++) {
        // If current element is not equal 
        // to next element then store that 
        // current element 
        if (arr[i] != arr[i+1]) 
            temp.push(arr[i]); 

        temp.push(arr[arr.length-1])
    }
  
      
  
    return temp;

}

//optimal
 // Answer: will start a for looping and keep an object/ associated array. 
 // If i find an element for the first time i will set its value as true (that will tell me element added once.). 
 // if i find a element in the exists object, i will not insert it into the return array.
//O(n)
 function removeDuplicate(arr){
  var exists ={};
  var outArr = []; 


  for(var i =0; i < arr.length; i++){
    var elm = arr[i];
    if(!exists[elm]){
      outArr.push(elm);
      exists[elm] = true;
   }
  }
  return outArr;
}




console.log(removeDuplicateBruteForce([1,3,3,3,1,5,6,7,8,1]));
//// = [1, 3, 5, 6, 7, 8]

// made it with two seperate loops and replacement with string value. 
