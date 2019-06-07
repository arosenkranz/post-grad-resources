/*
The median is the middle value,
so first you will have to sort the numbers 
then find the middle value
*/

function calculateSum(arr){
	var sum = 0;
	for (var i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum
}

function calculateMean(arr){
	var soultion = calculateSum(arr) / arr.length
	return soultion
}

function sortArr(arr){
	var sortedArr = arr.sort(function(a, b){return a - b})
	return sortedArr;
}

function calculateMedian(arr){	
	var median;
	var sortedArr = sortArr(arr);
	
	//if there are an even number of elements in the input array
	if(sortedArr.length % 2 === 0 ){
		
		//find the average of the middle two positions / indices
		var midIndex = sortedArr.length / 2;
		median = calculateMean([sortedArr[midIndex - 1], sortedArr[midIndex + 1]])
	}
	else {
		
		midIndex = Math.floor(sortedArr.length / 2)
		median = sortedArr[midIndex]
	}
	console.log("median", median)
	return median
}

var arrOne = [12,3 ,5];
var arrTwo = [3, 13, 7, 5, 21, 23, 39, 23, 40, 23, 14, 12, 56, 23, 29];
var arrThree= [3, 5, 7, 12, 13, 14, 21, 23, 23, 23, 23, 29, 40, 56];
calculateMedian(arrOne)//5
calculateMedian(arrTwo)//23
calculateMedian(arrThree)//22

/*
## Prompt #3 `median`

Create a function `median` that takes in an array of integers as an argument. 

Your function returns the median of your input array.


The median is the middle value, so first you will have to sort the numbers then find the middle value


Note: Complete only the Pseudocode

## List You Pseudocode Below: `median`


Step One:

Q: What are you going to do? 

A: create a function called SortArr() that takes an array as an argument

Q: How are you going to do it? 

A: Use the sort() method within this function to sort the array in numerical order, and then return that newly sorted array.

However, the sort() method needs to be passed a comparison function

Q: Why are you going to do it? 

A: The comparison function is necessary because the sort() method treats each value as a string as opposed to numbers

Step Two: 

Q: What are you going to do? 

A: Create another function that will calculate the median. Inside of this function instantiate 2 variables. 1 called median with no value assigned, and sortedArr which is assigned the return value of the sortArr() function.

Q: How are you going to do it? 

A: Check if the length of sortedArr is divisble by 2. If it is, instantiate a variable minIndex that is the value of the sortedArr's length divided by 2.

Then calculate the median using the calculateMean() function and pass it the sortedArr array at the index of the minIndex -1 and minIndex +1

Q: Why are you going to do it? 

A: To calculate the mean if the array is divisible by 2.

Step Three: 

Q: How are you going to do it? 

A: If the sortedArr is not divisible by 2, the median is middle value in the array

Q: Why are you going to do it? 

A: Set minIndex to the sortedArr.length divided by 2 and floored. The median is sortedArray[midIndex]

*/ 