/*
The mode is the number that is repeated 
more often than any other, so 13 is the mode.
*/
function sortArr(arr){
	var sortedArr = arr.sort(function(a, b){return a - b})
	return sortedArr;
}

function calculateMode(arr){
	// Step One:
	// Q: What are you going to do? 
	// A: Checking for empty array, if empty - return out of function
	// Q: How are you going to do it? 
	// A: with a conditional check and return statement
	// Q: Why are you going to do it? 
	// A: Handle edge case 
	if(arr.length < 0){
		return "empty array"
	}
	// Step Two:
	// Q: What are you going to do? 
	// A: Instantiate a variable `sortedArr` with an 
	// assigned value of the the input array sorted
	// Q: How are you going to do it? 
	// A: Keyword `var`and  assignment operator
	// Q: Why are you going to do it? 
	// A: To have a pointer to the value of the array sorted

	// Step Three:
	// Q: What are you going to do? 
	// A: Sort the array
	// Q: How are you going to do it? 
	// A: calling on helper function `sortArr` and passing the input array as argument
	// Q: Why are you going to do it? 
	// A: to sort the array as that is a requirment for solving for `mode`

	var sortedArr = sortArr(arr);

	//track the max number and the number of times it has occured
	
	// Step Four:
	// Q: What are you going to do? 
	// A: Instantiate two variables - `maxNum` & `maxCount` and assigne them to be the value of the first index of the input array and 1.
	// Q: How are you going to do it? 
	// A: Keyword `var`and  assignment operator
	// Q: Why are you going to do it? 
	// A: We are certain the array is not empty, we know that there is an element is at index 1 and that it has occured once. 
	// at this point in time this is the element that has occured the most. 

	var maxNum = sortedArr[0];
	var maxCount = 1;

	//track the current number and the number of times it has occured
	
	// Step Five:
	// Q: What are you going to do? 
	// A: Instantiate two variables - `maxNum` & `maxCount` and assigne them to be the value of the first index of the input array and 1.
	// Q: How are you going to do it? 
	// A: Keyword `var`and assignment operator
	// Q: Why are you going to do it? 
	// A: We need a way of tracking the current num and count to compare it against the final max num and max count. 
	var currentNum = sortedArr[0];
	var currentCount = 1;

	// Step Six:
	// Q: What are you going to do? 
	// A: iterate over the array starting at element 2
	// Q: How are you going to do it? 
	// A: with a for loop starting at index 1
	// Q: Why are you going to do it? 
	// A: to exmine each element
	for(var i = 1; i < sortedArr.length;i++){
		// Step Seven:
		// Q: What are you going to do? 
		// A: check to see if the element at index `i` is equal to the value of the variable `currentNum`
		// if it is the same element we will `increment count of currentCount`
		// Q: How are you going to do it? 
		// A: comparision operator
		// Q: Why are you going to do it? 
		// A: To count the number of times we see a value
		if(sortedArr[i] === currentNum){
			currentCount++
		}else {
			// Step Eight:
			// Q: What are you going to do? 
			// A: compare `currentCount` to `maxCount`
			// and assign `maxNum` to be `currentNum` and `maxCount` to be `currentNum`
			// in and only if `currentCount` is greater then `maxCount`
			// Q: How are you going to do it? 
			// A: comparision operator, assignment operator
			// Q: Why are you going to do it? 
			// A: To accuratly track the elemnt that has occured the max number of times
			if(currentCount > maxCount){
				maxNum = currentNum;
				maxCount = currentCount;
			}else {
				// Step Nine:
				// Q: What are you going to do? 
				// A: Reassign the value of `currentNum` to be element at index `i` and `currentCount` to `1`
				// Q: How are you going to do it? 
				// A: assignment operator
				// Q: Why are you going to do it? 
				// A: Start a new count for the new current element
				currentNum = sortedArr[i];
				currentCount = 1;
			}
		}

	}
	// Step Ten:
	// Q: What are you going to do? 
	// A: return `maxNum`
	// Q: How are you going to do it? 
	// A: With a return statement
	// Q: Why are you going to do it? 
	// A: To have the output / final return value of the function be the `maxNum`, number that has occured with the most frequency.
	return maxNum
		
}



var testCaseOne = [13, 18, 13, 14, 13, 16, 14, 21, 13];//13

console.log(calculateMode(testCaseOne));

var testCaseTwo =[1,3,1,1,8];//1
console.log(calculateMode(testCaseTwo));

var testCaseThree = [2,14,9,10,18,14];//14
console.log(calculateMode(testCaseThree));

var testCaseFour = [2,3,4,5,6];//2
console.log(calculateMode(testCaseFour));

/*
## Prompt #4 `mode`

Create a function `mode` that takes in an array of integers as an argument. 

Your function returns the mode of your input array.


The mode is the number that is repeated more often than any other.


Note: Complete only the Pseudocode

## List You Pseudocode Below: `mode`


Step One:

Q: What are you going to do? 

A: 

Q: How are you going to do it? 

A: 

Q: Why are you going to do it? 

A: 

Step Two: 

Q: What are you going to do? 

A: 

Q: How are you going to do it? 

A: 

Q: Why are you going to do it? 

A: 

Step Two: 

Q: What are you going to do? 

A: 

Q: How are you going to do it? 

A: 

Q: Why are you going to do it? 

A: 

*/ 