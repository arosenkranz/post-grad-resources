var arr = [{
	name: 'kittens',
	status: 'sleepy'
}, {
	name: 'cat',
	status: 'hungry'
}, {
	name: 'dog',
	status: 'happy'
}, {
	name: 'cow',
	status: 'hungry'
}]

function statusCheck(obj, str) {
	// Q: What are you going to do? 
	// A: Create a function that takes two arguments - an object and a string

	// Q: How are you going to do it? 
	// A: with function declaration syntax and parameter listing

	// Q: Why are you going to do it? 
	// A: To have a function to do some calculations or validation

	return (obj['status'] === str)
	// Q: What are you going to do? 
	// A: Return true or false

	// Q: How are you going to do it? 
	// A: return statement that returns a conditional check with the object's status against the input string.

	// Q: Why are you going to do it? 
	// A: To confirm whether a status is the same
}

function filter(arr, cb, status) {
	// Q: What are you going to do? 
	// A: Create a function that takes two arguments - an array and a call back function

	// Q: How are you going to do it? 
	// A: with function declaration syntax and parameter listing

	// Q: Why are you going to do it? 
	// A: to have a function to execute on every element of the input array

	var returnArr = []
	// Q: What are you going to do? 
	// A: Instantiating an empty array 

	// Q: How are you going to do it? 
	// A: assignment operator and brackets 

	// Q: Why are you going to do it? 
	// A: to create an array to be returned

	for (var i = 0; i < arr.length; i++) {
		// Q: What are you going to do? 
		// A: Iterate through every element of the input array 

		// Q: How are you going to do it? 
		// A: with a for loop

		// Q: Why are you going to do it? 
		// A: to examine every element

		if (cb(arr[i], status)) {
			// Q: What are you going to do? 
			// A: if the call back funciton returns a true statement then run the following code

			// Q: How are you going to do it? 
			// A: Using an if statement

			// Q: Why are you going to do it? 
			// A: To run validation based on a call back function

			returnArr.push(arr[i]);
			// Q: What are you going to do? 
			// A: For each valid element, push it to the newly-created array

			// Q: How are you going to do it? 
			// A: with a built-in array method `push` and the array bracket notation

			// Q: Why are you going to do it? 
			// A: to add each and every element of the input array after the added value
		};
	}

	return returnArr
	// Q: What are you going to do? 
	// A: Return the filtered array

	// Q: How are you going to do it? 
	// A: return statement

	// Q: Why are you going to do it? 
	// A: we have iterated through the entirety of the array and returning the filtered array
}

console.log(filter(arr, statusCheck, "hungry"))

// --------- Bonus: Create a filter method for Objects ---------
// Example of passing a callback function to a method within an object.
var myDataStorage = {
	arr: [{
		name: 'kittens',
		status: 'sleepy'
	}, {
		name: 'cat',
		status: 'hungry'
	}, {
		name: 'dog',
		status: 'happy'
	}, {
		name: 'cow',
		status: 'hungry'
	}],
	// Q: What are you going to do? 
	// A: Create a key, `arr`, on an object, myDataStorage, with an associated value of an array with comma separated values

	// Q: How are you going to do it? 
	// A: with object key/value syntax

	// Q: Why are you going to do it? 
	// A: to have a place to store our data

	filtered: function (cb) {
		// Q: What are you going to do? 
		// A: Create a method called `filter` on `myDataStorage` object passing a string called status and a function as argument

		// Q: How are you going to do it? 
		// A: using dot notation on our object

		// Q: Why are you going to do it? 
		// A: pass an anonymous function into the user-created filtered method

		var returnArr = []
		// Q: What are you going to do? 
		// A: Instantiating an empty array 

		// Q: How are you going to do it? 
		// A: assignment operator and brackets 

		// Q: Why are you going to do it? 
		// A: to create an array to be returned

		for (var i = 0; i < this.arr.length; i++) {
			// Q: What are you going to do? 
			// A: Iterate through every element of the input array 

			// Q: How are you going to do it? 
			// A: with a for loop

			// Q: Why are you going to do it? 
			// A: to examine every element

			if (cb(this.arr[i])) {
				// Q: What are you going to do? 
				// A: if the call back funciton returns a true statement then run the following code

				// Q: How are you going to do it? 
				// A: Using an if statement

				// Q: Why are you going to do it? 
				// A: To run validation based on a call back function

				returnArr.push(this.arr[i]);
				// Q: What are you going to do? 
				// A: For each valid element, push it to the newly-created array

				// Q: How are you going to do it? 
				// A: with a built-in array method `push` and the array bracket notation

				// Q: Why are you going to do it? 
				// A: to add each and every element of the input array after the added value
			};
		}

		return returnArr
		// Q: What are you going to do? 
		// A: Return the filtered array

		// Q: How are you going to do it? 
		// A: return statement

		// Q: Why are you going to do it? 
		// A: we have iterated through the entirety of the array and returning the filtered array
	}
}
var validStatus = 'happy'

function checkStatusHappy(obj) {
	// Q: What are you going to do? 
	// A: Create a function that takes an argument - a call back function.

	// Q: How are you going to do it? 
	// A: with function declaration syntax and parameter listing

	// Q: Why are you going to do it? 
	// A: To have a modular function to do some calculations or validation
	
	return (obj['status'] === validStatus)
	// Q: What are you going to do? 
	// A: Return true or false

	// Q: How are you going to do it? 
	// A: return statement that returns a conditional check with the object's status against the valid string.

	// Q: Why are you going to do it? 
	// A: To confirm whether a status is the same
}

//Both logs below print out "[ { name: 'dog', status: 'happy' } ]", when validStatus is "happy"
console.log('\n--TEST user-defined "filtered" method in object--')
// console.log(myDataStorage.filtered(checkStatusHappy)) // User defined 'filtered' method in object.
console.log('\n--Example from prebuilt filter method for arrays--')
// console.log(myDataStorage.arr.filter(checkStatusHappy))


// Example: Prebuilt with filter for array.
// console.log(arr.filter(function(obj) {return obj.status==='happy'}))
// console.log(arr.filter(checkStatusHappy))
// Both console.logs above using filter for array should return "[ { name: 'dog', status: 'happy' } ]"