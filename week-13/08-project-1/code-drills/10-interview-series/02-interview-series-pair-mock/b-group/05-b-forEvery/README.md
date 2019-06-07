# INTERVIEW QUESTIONS

## forEvery

## Instructions

Create a function `forEvery` that takes an array and a function as arguments. 
the `forEvery` function should execute the callback function for every element within the array

## Example
```javascript
function callBack(params){
	console.log("I think" + params + "are funny");
}

var arr = ["kittins","cats","felines","kitties"]

forEvery(arr, callBack)

```

Expected Output: 

"I think kittins are funny"
"I think cats are funny"
"I think felines are funny"
"I think kitties are funny"

## Optimal Time
O(n)