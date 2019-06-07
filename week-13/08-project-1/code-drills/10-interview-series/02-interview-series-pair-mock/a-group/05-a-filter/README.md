# INTERVIEW QUESTIONS

## filter

## Instructions
Create a function called `filter` that takes an array of objects, a callback function `statusCheck`, and a string.

`filter` returns an array based on the response of the callback function.

`statusCheck` uses the string (3rd argument) to validate whether that string exists in the array element with a key of "*status*".


## Example
**Test Case 1:** 
```[ {name: kittens, status: sleepy}, {name:cat, status:hungry}, {name:dog, status:happy}, {name:cow, status:hungry} ]```

Callback conditional: status is **hungry**

Expected Output: ```[ {name:cat, status:hungry}, {name:cow, status:hungry} ]```

Explanation: From the input array, the following objects with the status "hungry" are returned. 


**Test Case 2:**
```[ {name: kittens, status: sleepy}, {name:cat, status:hungry}, {name:dog, status:happy}, {name:cow, status:hungry} ]```

Callback conditional: status is **sleepy**

Expected Output: ```[ {name: kittens, status: sleepy} ]```

Explanation: There is one only one animal with the status **sleepy**. 

## Optimal Time
O(n)

<hr>

## Bonus: Create a filter method for Objects
Create a **"filtered"** method onto an **object** similar to an **array's filter** method using the array below. 

**Note:** The array should be a key within the object and the **filtered** method should behave exactly the same as the **array filter** method.

**Array:** 
```javascript
[ {name: kittens, status: sleepy}, {name:cat, status:hungry}, {name:dog, status:happy}, {name:cow, status:hungry} ]
```
Expected Output: `[ { name: 'dog', status: 'happy' } ]`
```javascript
//Both logs below print out "[ { name: 'dog', status: 'happy' } ]", when validStatus is "happy"
console.log('\n--TEST user-defined "filtered" method in object--')
console.log(myDataStorage.filtered(checkStatusHappy)) // User defined 'filtered' method in object.
console.log('\n--Example from prebuilt filter method for arrays--')
console.log(myDataStorage.arr.filter(checkStatusHappy))
```

Explanation: An empty array is returned because no animals are angry. 
