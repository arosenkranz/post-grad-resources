

/*
The mean is the average, 
so sum all numbers and then 
divide by the total number of integers 
in the input array. 
*/ 

function calculateSum(arr){
	var sum = 0;
	for (var i = 0; i <arr.length; i++) {
		sum += arr[i];
	}
	return sum
}

function calculateMean(arr){
	// Step One:
	// Q: What are you going to do? 
	// A: Instantiate a variable `mean` with an 
	//assigned value of the sum divided by the number of datapoints
	// Q: How are you going to do it? 
	// A: Keyword `var`and  assignment operator
	// Q: Why are you going to do it? 
	// A: To track the cumulative sum.

	// Step Two:
	// Q: What are you going to do? 
	// A: Assigned value of the sum divided by the number of datapoints to the solutions variable
	// Q: How are you going to do it? 
	// A: assignment operator, calling on helper function `calculateSum` and passing it as argument the input array; utilize the Array `length` method. 
	// Q: Why are you going to do it? 
	// A: To calculate the Mean.

	var mean = calculateSum(arr) / arr.length

	// Step Three:
	// Q: What are you going to do? 
	// A: return solution
	// Q: How are you going to do it? 
	// A: With a return statement
	// Q: Why are you going to do it? 
	// A: To have the output / final return value of the function be the sum of all the integers in the input array
	return mean
}

console.log(calculateMean([1,2,3,4,5])) // 3

console.log(calculateMean([100,8,25,10,90])) // 46.6

