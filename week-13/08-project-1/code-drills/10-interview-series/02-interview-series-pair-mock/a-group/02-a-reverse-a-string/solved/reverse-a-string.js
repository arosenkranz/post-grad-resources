//solution

function reverse(str){
  var rtnStr = '';
// Q: What are you going to do? 
// A: instatiate an empty string
// Q: How are you going to do it? 
// A: assignment operator
// Q: Why are you going to do it? 
// A: to create a holding container for the solution - the str reversed
  for(var i = str.length-1; i>=0;i--){
// Q: What are you going to do? 
// A: interate through the input str from the end to the start
// Q: How are you going to do it? 
// A: for loop with i starting at the end index
// Q: Why are you going to do it? 
// A: to examine every element
    rtnStr +=str[i];
// Q: What are you going to do? 
// A: add / concat each element to rtnStr
// Q: How are you going to do it? 
// A: += operator
// Q: Why are you going to do it? 
// A: to add each element from the end to start (in reverse)
  }
  return rtnStr;
// Q: What are you going to do? 
// A: return the final rrnStr variable
// Q: How are you going to do it? 
// A: with our explicit return statement
// Q: Why are you going to do it? 
// A: to return the final solution str with the input string in reverse
};
var str = "apple"
reverse(str);


// OR

function reverse(str){
  var rtnStr = [];
// Q: What are you going to do? 
// A: instatiate an array
// Q: How are you going to do it? 
// A: assignment operator
// Q: Why are you going to do it? 
// A: to create a holding container for the final solution - the str reversed
  if(!str || typeof str != 'string' || str.length < 2 ) return str;
// Q: What are you going to do? 
// A: check for edge cases, is the input a string? Is it less then two characters? 
// Q: How are you going to do it? 
// A: Logic Gates OR ||, comparison operator, less then operator, and return statement
// Q: Why are you going to do it? 
// A: check if input is a string, longer then 2 characters - if it is not the return out of the functions / just return the the string
  for(var i = str.length-1; i>=0;i--){
// Q: What are you going to do? 
// A: interate through the input str from the end to the start
// Q: How are you going to do it? 
// A: for loop with i starting at the end index
// Q: Why are you going to do it? 
// A: to examine every element
    rtnStr.push(str[i]);
// Q: What are you going to do? 
// A: add / push each element to rtnStr
// Q: How are you going to do it? 
// A: with the Array built in method, push
// Q: Why are you going to do it? 
// A: to to push each element from the end to start (in reverse)
  }
  return rtnStr.join('');
// Q: What are you going to do? 
// A: return the final string in reverse
// Q: How are you going to do it? 
// A: using the Array built in method, Join which takes in an argument of what to join on - join on nothing
// Q: Why are you going to do it? 
// A: to join together all elements of all elements of the rtnStrArr
}



//Bonus
function reverseInPlace(str){
  return str.split(' ').reverse().join(' ').split('').reverse().join('');
// Q: What are you going to do? 
// A: returnt the output of the following built in methods (method chaining) - .split(' ').reverse().join(' ').split('').reverse().join('')
// Q: How are you going to do it? 
// A: Using the .split(' ').reverse().join(' ').split('').reverse().join('')
// Q: Why are you going to do it? 
// A: to .split(' ').reverse().join(' ').split('').reverse().join('') the input string
}

reverseInPlace('I am the good boy');
 // = "I ma eht doog yob"



