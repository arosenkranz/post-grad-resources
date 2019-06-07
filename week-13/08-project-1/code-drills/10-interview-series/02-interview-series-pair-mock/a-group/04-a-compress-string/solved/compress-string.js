
//solution

var custom_input = 'AAAABBBBCCCCCDDEEEE'

var compress = function(str){
  var finalString = '';
// Q: What are you going to do? 
// A: instatiate an empty string
// Q: How are you going to do it? 
// A: assignment operator
// Q: Why are you going to do it? 
// A: to create a holding container for the solution - a string that represents a compressed version of input string
  var currentLetter = str[0];
// Q: What are you going to do? 
// A: declare a variable 'currentLetter' with an intial value of the first character of the input string
// Q: How are you going to do it? 
// A: assignment operator and array bracket notation
// Q: Why are you going to do it? 
// A: to a pointer to the first value of our input string
  var count = 1;
// Q: What are you going to do? 
// A: declare a variable 'count' with an intial value of 1
// Q: How are you going to do it? 
// A: assignment operator
// Q: Why are you going to do it? 
// A: to create a holding container for the solution - the str reversed
  if(!str.length){
// Q: What are you going to do? 
// A: If the Input String length is 0 (Note: 0 is false !0 is true)
// Q: How are you going to do it? 
// A: With an 'if' conditional, bang symbol and str.length
// Q: Why are you going to do it? 
// A: to see if the length of the input string is 0
    return ' 0';
// Q: What are you going to do? 
// A: return 0
// Q: How are you going to do it? 
// A: return keyword
// Q: Why are you going to do it? 
// A: Because the length of the input string is 0
  }else if(str.length === 1){//edge case: string of one character
// Q: What are you going to do? 
// A: Conditional check to see if the Input String length is 1
// Q: How are you going to do it? 
// A: With an 'else if' conditional, str.length and triple === comparison operator
// Q: Why are you going to do it? 
// A: to see if the tring length is 1
    finalString += currentLetter;
// Q: What are you going to do? 
// A: concatenate the current letter to the `finalString` variable 
// Q: How are you going to do it? 
// A: += operator
// Q: Why are you going to do it? 
// A: to add the letter to the final output
    finalString += count;
// Q: What are you going to do? 
// A: concatenate the current count to the `finalString` variable 
// Q: How are you going to do it? 
// A: += operator
// Q: Why are you going to do it? 
// A: to add the count number to the final output
  }
  for(var i = 1; i < str.length; i++){
// Q: What are you going to do? 
// A: iterate through every character of the input string starting at index 1 (second character)
// Q: How are you going to do it? 
// A: for loop
// Q: Why are you going to do it? 
// A: to examine every character
    if(str[i] !== currentLetter && i !== str.length - 1){
// Q: What are you going to do? 
// A: check to seeif the character at index `i` is no the current letter 
// Q: How are you going to do it? 
// A: Conditional check 
// Q: Why are you going to do it? 
// A: to see if we have completed examining the intial element so that we can move on an concatenate both the character and the count before progressing onto the next character
      finalString += currentLetter
      finalString += count
      currentLetter = str[i] 
      count = 1
// Q: What are you going to do? 
// A: concatenate both the `currentLetter` and count to `finalString` before reassigning `currentLetter` and resetting count back to 1.
// Q: How are you going to do it? 
// A: += operator and the assignment operator
// Q: Why are you going to do it? 
// A: to add the currentLetter and count before moving onto the next character. 
    }else if(i === str.length - 1){
// Q: What are you going to do? 
// A: check to see if the current index `i` is the last character of the string
// Q: How are you going to do it? 
// A: `else if` Conditional check 
// Q: Why are you going to do it? 
// A: if the character is the last character of the string then add that character and count to the final output. 
      count++
      finalString += currentLetter
      finalString += count
// Q: What are you going to do? 
// A: increment count, concatenate both the `currentLetter` and count to `finalString` before reassigning `currentLetter` and resetting count back to 1.
// Q: How are you going to do it? 
// A: += operator and the assignment operator
// Q: Why are you going to do it? 
// A: to add the currentLetter and count before moving onto the next character. 
    }else{
      count++
// Q: What are you going to do? 
// A: increment count
// Q: How are you going to do it? 
// A: += operator
// Q: Why are you going to do it? 
// A: if it is not a different character and not the final character of the string then increment count
    }
  }
  return finalString
// Q: What are you going to do? 
// A: Return the finalString
// Q: How are you going to do it? 
// A: Return statement 
// Q: Why are you going to do it? 
// A: the for loop has completed - we have incremented through all characters/indices of the input string. Return the final Value of `finalString`
}

  
var custom_input = 'AAAABBBBCCCCCDDEEEE'

console.log(compress(custom_input) == 'A4B4C5D2E4')
// str = 'AaaHHHHhhhhhHHhAAA'
console.log(compress(custom_input))