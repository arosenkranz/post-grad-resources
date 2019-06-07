# Interview Series Part One Revisted


1. [General Overview](#general-overview)
2. [Whiteboarding](#whiteboarding)

<hr>

## General Overview


Welcome *BACK*! 

This time we will continue to work through the previously introduced steps: 

1. **Clarify** 
2. **Inputs/Outputs** 
3. **Test & Edge Cases** 
4. **Naive Solution**
5. **Reach an agreement**
6. **Code It Out**

*But* we will be adding a few additional Steps: 

7. **Analyze**
8. **Optimize**

<hr>
<hr>
<hr>

## Whiteboarding 

`Note`: If the interviewer presents a question that you are familiar with let them know. 

- They will likely be able to detect that you have worked through this question before
- If you let them know they will take note of your integrity and your welcoming of a challenge. 
- They are NOT interested in having you solve the problem, they are interested in working with you to observe your problem solving techniques.  

<hr>
<hr>
<hr>

### Example Prompt



```code
Input: Write a function that takes an array as input. 
Output: 

* If a duplicate value exist in the array the function returns true

* If no duplicate value exist in the array the function returns false

Case #1: 

Example Input: [1,3,13,3]
Expected Output: True. 
Reasoning: The number 3 exist twice within this input array.

Case #2: 

Example Input: [1,3,13,33]
Expected Output: False. 
Reasoning: No duplicates exist within this input array.

```

<hr>
<hr>
<hr>

### Communication Steps 


**1. Clarify** 

> Start by repeating the problem back to the interviewer and ask any clarifying questions and test assumptions about the problem. Request a sample input and expected output if one is not given. 

<hr>  

**2. Inputs/Outputs** 

> Talk through the following: Given a set of inputs what are expected outputs for the problem? 

<hr>  

**3. Test & Edge Cases** 

> Inquire about any edge cases. 

Example: 

* Single character / Empty string
* Empty array
* Negative Numbers

>Write down at least one original concrete test case - you will be using this test case to walk your interviewer through your Pseudocode. 

<hr>  

**4. Naive Solution**

>Start with pseudo/coding the most obvious/naive solution, and let interviewer know this is where you are starting. Remember to talk through your process out loud, and if you get stuck prompt your interviewer for feedback or hints.

For each step of your algorithm you should make the following items clear: 

1. What are you going to do?
2. How are you going to do it? 
3. Why are you going to do it? 

<hr>
<hr>
<hr>

**Example**:


#### **Step One**:

```
Q: What are you going to do? 
A: I want to iterate through the array.
```

```
Q: How are you going to do it? 
A: With a for loop
```
```
Q: Why are you going to do it? 
A: To examine each element of the Array. 
```

*Extra Step*

```
Q: What is the consequence / what is the expense? 
A: This has a O(n) time complexity. 
```

#### **Step Two**:

```
Q: What are you going to do? 
A: While examining each element within the array compare it to every other element
```

```
Q: How are you going to do it? 
A: With a **nested** for loop
```

```
Q: Why are you going to do it? 
A: To check for duplicate values 
```

*Extra Step*

```
Q: What is the consequence / what is the expense? 
A: The nested loop is a O(n^2) time complexity. 
```

####  **Step Three**:

```
Q: What are you going to do? 
A: Return True if the values are equal and we are not comparing values at the same indice.
```

```
Q: How are you going to do it? 
A: With comparison operators, by comparing for equal values and our iterators - i & j. 
```

```
Q: Why are you going to do it? 
A: To check for duplicate values. 
```

*Extra Step*

```
Q: What is the consequence / what is the expense? 
A: comparing value is an O(1) time complexity. 
```

####  **Step Four**:

```
Q: What are you going to do? 
A: once we compare all elements to all other elements / completed our initial for loop and no matches are found, return `false`
```

```
Q: How are you going to do it? 
A: by completing the for loop without returning true
```

```
Q: Why are you going to do it? 
A: To determine if a matching element exist in the array. 
```

*Extra Step*

```
Q: What is the consequence / what is the expense? 
A: returning `false` is a O(1) time complexity. 
```

**hint**

Play special attention to what you, as a human, are doing to solve the problem. 
Break down those steps into something you could communicate into code. 

<hr>  

**5. Reach an agreement**

> Only once you and your interviewer are both clear on what your intentions are, communicated with Pseudocode, do you begin to code. 

<hr>  

**6. Code It Out** 

> You will be coding it out on a whiteboard. No autocompletes, no syntax highlighting. Be sure to pay attention to the details and to utilizing proper style guides and conventions. 

While this is considered a `coding interview` this last section, the coding section, is actually the least important. While you should be mindful of syntax and naming convention the interviewer is primarily interested in your technical knowledge, ability to model problems in your head, and the clear communication of said model. 

Your Goal at the coding stage: 

a. Follow the Pseudocode.
b. Be mindful of syntax and naming convention.
c. Focus on clarity and communication (proper / indicative variable and function names). 

```javascript

var arrayOne = [10,6,7,8,3,2,1,6]//dups of 6
var arrayTwo = [1,3,2,5,4,6,7,8,9,10]//no dups

// time complexity O(n^2)
// Space complexity O(n) (includes input size n)
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


```

<hr>  

**7. Analyze**

> Analyze the total time and space complexity of the solution you provided. Can it be optimized? 

<hr>  

**8. Optimize**

Implement a better solution given time. If you do not have sufficient time talk about how you might implement a better solution, or even code it out.


>Start with pseudo/coding *your optimized* solution. Remember to talk through your process out loud, and if you get stuck prompt your interviewer for feedback or hints.

**hint**

* Often times the use of an object can assist in improving your time complexity. 
* Leveraging the use of another abstract data type such as a Binary Search Tree or Linked List may also be appropriate. 


##### Optimize Communication Steps


For each step of your algorithm you should make the following items clear: 

1. What are you going to do?
2. How are you going to do it? 
3. Why are you going to do it? 

**Example**:

Step One: 

Q: What are you going to do? 
A: Instantiate a new empty object 

Q: How are you going to do it? 
A: assign a variable to a new empty object `var tracker = {};`

Q: Why are you going to do it? 
A: To track elements found within the input array, setting a key for each element in the array

*Extra Step*

Q: What is the consequence / what is the expense? 
A: instantiating a new object is an O(1) time complexity. 

<hr> 

Step Two: 

Q: What are you going to do? 
A: I want to iterate through the array.

Q: How are you going to do it? 
A: With a for loop

Q: Why are you going to do it? 
A: To examine each element of the Array. 

*Extra Step*

Q: What is the consequence / what is the expense? 
A: This has an O(n) time complexity. 

<hr> 

Step Three: 

Q: What are you going to do? 
A: check to see if that element exist on my object (`search`); `tracker`.

Q: How are you going to do it? 
A: bracket notation for `tracker[arr[i]]`

Q: Why are you going to do it? 
A: check to see if we have seen it before

*Extra Step*

Q: What is the consequence / what is the expense? 
A: Lookup within an object is an O(1) time complexity. 

<hr> 

Step Four: 

Q: What are you going to do? 
A: Return true if element exist on object; `tracker`.

Q: How are you going to do it? 
A: `return true`

Q: Why are you going to do it? 
A: because a duplicate has been found.

*Extra Step*

Q: What is the consequence / what is the expense? 
A: returning true is an O(1) time complexity. 

<hr> 

Step Five: 

Q: What are you going to do? 
A: If that element does not exist on my object I will set it as a key on my object with a value of `true`; (`inserting`).

Q: How are you going to do it? 
A: bracket notation for `tracker[arr[i]]` and an assignment operator `tracker[arr[i]] = true`.

Q: Why are you going to do it? 
A: To track that we have seen it before. 

*Extra Step*

Q: What is the consequence / what is the expense? 
A: insertion on an object is an O(1) time complexity. 

<hr> 

Step Six: 

Q: What are you going to do? 
A: Return false if we have iterated through the entirety of the array and not returned `true`; it was not found on object; `tracker`.

Q: How are you going to do it? 
A: `return false`

Q: Why are you going to do it? 
A: If we have iterated through every element in the array, did not find it existing on the object, set it on the object, and never encountered it again; we have no duplicates. 

*Extra Step*

Q: What is the consequence / what is the expense? 
A: returning `false` is an O(1) time complexity. 


<hr>  

**9. Reach an agreement**

> Only once you and your interviewer are both clear on what your intentions are, communicated with Pseudocode, do you begin to code. 

<hr>  

**10. Code It Out** 

> You will be coding it out on a whiteboard. No autocompletes, no syntax highlighting. Be sure to pay attention to the details and to utilizing proper style guides and conventions. 

While this is considered a `coding interview` this last section, the coding section, is actually the least important. While you should be mindful of syntax and naming convention the interviewer is primarily interested in your technical knowledge, ability to model problems in your head, and the clear communication of said model. 

Your Goal at the coding stage: 

a. Follow the Pseudocode.

b. Be mindful of syntax and naming convention.

c. Focus on clarity and communication (proper / indicative variable and function names). 

```javascript
//time complexity O(n) - linear
//space complexity (including input size of N is 2N) reduces down to n (linear)

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

```

<hr>

**Good Luck**

<hr>





