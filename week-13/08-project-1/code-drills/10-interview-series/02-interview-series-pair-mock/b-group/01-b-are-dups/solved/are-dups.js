var arrayOne = [10,6,7,8,3,2,1,6]//dups of 6
var arrayTwo = [1,3,2,5,4,6,7,8,9,10]//no dups


var areDupsBrute = function(array){
	for(var i =0;i < array.length; i++){
// Q: What are you going to do? 
// A: interate through every element of the input array 
// Q: How are you going to do it? 
// A: for loop
// Q: Why are you going to do it? 
// A: to examine every element
		for(var j =0;j < array.length; j++){
// Q: What are you going to do? 
// A: while examining the intial element examine every other element 
// Q: How are you going to do it? 
// A: nexted for loop
// Q: Why are you going to do it? 
// A: to be able to compare every element to every other element
			if (array[i] === array[j] && i !== j){ //make sure we are not looking at the same index/item
// Q: What are you going to do? 
// A: conditional comparision check - check to see if the intial element if the same as any other value that is not at the same indices
// Q: How are you going to do it? 
// A: comparision operators, if condiional checkers, array bracket notation
// Q: Why are you going to do it? 
// A: to see if any element is the same as any other - is the a duplicate value? 
				return true
// Q: What are you going to do? 
// A: return true if a dup is found
// Q: How are you going to do it? 
// A: return statement
// Q: Why are you going to do it? 
// A: we found a duplicate value - return true
			}
		
		}
	}
	return false
// Q: What are you going to do? 
// A: return true
// Q: How are you going to do it? 
// A: 
// Q: Why are you going to do it? 
// A: Once we have iterated through the entire input array and compared every element against every other element and not found a match return true - no dup found
};


console.log(areDupsBrute(arrayOne));
console.log(areDupsBrute(arrayTwo));


//time complexity O(n) - linear
//space complexity (includeing input size of N is 2N) reduces down to n (linear)

var areDupsHash = function(array){
	var tracker = {};
// Q: What are you going to do? 
// A: instantiating an empty object 
// Q: How are you going to do it? 
// A: assignment operator and curly braces 
// Q: Why are you going to do it? 
// A: to create a tracker for all items we have seen 
	for(var i =0;i < array.length; i++){
// Q: What are you going to do? 
// A: interate through every element of the input array 
// Q: How are you going to do it? 
// A: for loop
// Q: Why are you going to do it? 
// A: to examine every element
		if (tracker[array[i]]){
// Q: What are you going to do? 
// A: Do a `look up` for a key in our object - if there is a key of array[i] with a truthy value on our tracker object the continue
// Q: How are you going to do it? 
// A: contional checker obejct and array bracket notation
// Q: Why are you going to do it? 
// A: to see if we have seen it before.
			return true
// Q: What are you going to do? 
// A: return true
// Q: How are you going to do it? 
// A: return statement
// Q: Why are you going to do it? 
// A: If the key of array[i] exist on our tracker object then we have seen it before - a dup exist
		}
		else{
			tracker[array[i]] = true;
// Q: What are you going to do? 
// A: if it doe snot exist on the tracker object set array[i] as a key with an associated value of true as a value
// Q: How are you going to do it? 
// A: with arry and object bracket notation and assignmet operator
// Q: Why are you going to do it? 
// A: to track what we have seen from the input array
		}
	}
	return false
// Q: What are you going to do? 
// A: Return false
// Q: How are you going to do it? 
// A: return statement
// Q: Why are you going to do it? 
// A: we have incremented through all elements in the input array and not found a duplicate value / not returned true - return false - no dup found
};

console.log(areDupsHash(arrayOne));
console.log(areDupsHash(arrayTwo));

