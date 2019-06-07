var arrayOne = [10,6,7,8,3,2,1,6]//dups of 6
var arrayTwo = [1,3,2,5,4,6,7,8,9,10]//no dups

// time complexity O(n^2)
// Space compexiity O(n) (includes input size n)
var areDupsBrute = function(array){
	for(var i =0;i < array.length; i++){
		for(var j =0;j < array.length; j++){
			if (array[i] === array[j] && i !== j){ //make sure we are not looking at the same index/item
				return true
			}
		
		}
	}
	return false
};


console.log(areDupsBrute(arrayOne));
console.log(areDupsBrute(arrayTwo));


//time complexity O(n) - linear
//space complexity (includeing input size of N is 2N) reduces down to n (linear)

var areDupsHash = function(array){
	var tracker = {};
	for(var i =0;i < array.length; i++){
		if (tracker[array[i]]){
			return true
		}else{
			tracker[array[i]] = true;
		}
	}
	return false
};

console.log(areDupsHash(arrayOne));
console.log(areDupsHash(arrayTwo));

// 1) Clarify - start by repeating the problem back to the interviewer and ask any clarifying questions and test assumptions about the problem. 
// 2) Inputs/Outputs - Talk through: Given  a set of inputs what are expected outputs for the problem? 
// 3) Test Cases - Write down at least one concrete test case  
// 4) Naive Solution -start with pseudo/coding the most obvious/naive solution, and let interviewer know this is where you are starting. Remember to talk through your process out loud, and if you get stuck prompt your interviewer for feedback or hints.
// 5) Big O - analyze the time complexity of the solution you provide
// 6) Implement a better solution given time - if you have time left, talk about how you might implement a better solution, or even code it out.

