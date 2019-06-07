var alphabet = "abcdefghijklmnopqrstuvwxyz";

function cipher(str, offset) {
	// Q: What are you going to do? 
  // A: Create a function that takes two arguments - a string and an offset number
  
	// Q: How are you going to do it? 
  // A: with function declaration syntax and parameter listing
  
	// Q: Why are you going to do it? 
  // A: Update every character of the input string based on offset number
  
    str = str.toLowerCase();
    // Q: What are you going to do? 
    // A: Convert the current string to lower case
    
    // Q: How are you going to do it? 
    // A: Using the string method toLowerCase
    
    // Q: Why are you going to do it? 
    // A: To ensure we only use lower case characters for the purpose of comparing against alphabet array.

    var encryptedStr = "";
    // Q: What are you going to do? 
    // A: Instantiate an empty string
    
    // Q: How are you going to do it? 
    // A: with an assignment operator
    
    // Q: Why are you going to do it? 
    // A: to create a holding container for the solution - a string that represents an encrypted version of input string

    for (var i = 0; i < str.length; i++) {
      // Q: What are you going to do? 
      // A: Iterate through every element of the input string 
      
      // Q: How are you going to do it? 
      // A: with a for loop
      
      // Q: Why are you going to do it? 
      // A: to examine every character to be u
      
        if (str[i] === " ") {
            encryptedStr += " ";
            // Q: What are you going to do? 
            // A: Check if the current index of the string is a space
            
            // Q: How are you going to do it? 
            // A: with a conditional statement, an equivalence comparator, and a += (addition assignment) operator 
            
            // Q: Why are you going to do it? 
            // A: To simply add a space to our new string if the current index of the string is a space, since we don't need to encrypt it.
            
        }
        else {
          // Q: What are you going to do? 
          // A: Shift the the current indexed letter in the alphabet based on the offset value given
          
          // Q: How are you going to do it? 
          // A: with a conditional 'else' statement
          
          // Q: Why are you going to do it? 
          // A: to shift the input string for all indices of the string that are not spaces.
          
            if (alphabet.indexOf(str[i]) + offset >= 25) {
              // Q: What are you going to do? 
              // A: Check to see if the current index of the string will extend beyond "z" in the alphabet if we attempt to shift it
              
              // Q: How are you going to do it? 
              // A: with a conditional 'if' statement, the alphabet string, the built in 'indexOf' function, and a >= comparator
              
              // Q: Why are you going to do it? 
              // A: to examine each index for an edge case where we have to wrap to the beginning of the alphabet
              
                encryptedStr += alphabet[alphabet.indexOf(str[i]) + offset - 26]
                // Q: What are you going to do? 
                // A: Add the shifted / encrypted letter to the new string
                
                // Q: How are you going to do it? 
                // A: with a += (addition assignment) operator, array bracket notation, and the built-in indexOf function
                
                // Q: Why are you going to do it? 
                // A: if the current letter shifts outside of the alphabet, we will wrap to the beginning of the alphabet. For example,
                
            }
            else {
              // Q: What are you going to do? 
              // A: Creating a default condition to update into encryptedStr
              
              // Q: How are you going to do it? 
              // A: Using an else statement
              
              // Q: Why are you going to do it? 
              // A: To run this code when IF conditions are not met.
              var alphabetIndex = alphabet.indexOf(str[i]);
                // Q: What are you going to do? 
                // A: Instantiate a new variable to hold the index of the current string character at 'i'
                
                // Q: How are you going to do it? 
                // A: Using indexOf method on alphabet array passing in the argument of the current letter within string's index of 'i' 
                
                // Q: Why are you going to do it? 
                // A: To retrieve the index based on the alphabet.

                encryptedStr += alphabet[alphabetIndex + offset];
                // Q: What are you going to do? 
                // A: Appending the new letter to the current string.
                
                // Q: How are you going to do it? 
                // A: By using the "+=" to append new letter. New letter will be determined by alphabet array's calculated index. Calculated index is alphabetIndex plus the offset.
                
                // Q: Why are you going to do it? 
                // A: To update the encryptedStr that will be returned.
                
            }
        }
    }

    return encryptedStr;
    // Q: What are you going to do? 
    // A: Return the encryptedStr
    
    // Q: How are you going to do it? 
    // A: Return statement
    
    // Q: Why are you going to do it? 
    // A: The loop has completed - we have incremented through all characters of the input string. We now return the final updated string 'encryptedStr'
    
}

console.log(cipher("hey man", 3));
console.log(cipher("i am hungry", 9));
console.log(cipher("I'm not hungry.", 2)) // BONUS: Write an algorithm to modify "I'm not hungry." While maintaining alphanumeric characters (case sentitivity, punctuation, symbols).
