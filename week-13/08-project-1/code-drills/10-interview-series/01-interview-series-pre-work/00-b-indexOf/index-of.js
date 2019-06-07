function indexof(arr, element){
    for(var i =0;i<arr.length;i++){
// Q: What are you going to do? 
// A: I want to iterate through the array.
// Q: How are you going to do it? 
// A: With a for loop
// Q: Why are you going to do it? 
// A: To examine each element of the Array. 
        if(arr[i] === element)
            return i;
// Q: What are you going to do? 
// A: Return the index *if* the value at that index is the same as the input target
// Q: How are you going to do it? 
// A: With comparison operators, by comparing for equal values. 
// Q: Why are you going to do it? 
// A: To check for matching values. 
    }
    return -1;
// Q: What are you going to do? 
// A: once we compare all elements to the target return -1 if no matches are found
// Q: How are you going to do it? 
// A: With comparison operator, by comparing for equal values and completing the for loop
// Q: Why are you going to do it? 
// A: To determine if the element exist in the array. 
}

console.log(indexof([1,2,3,4],3))