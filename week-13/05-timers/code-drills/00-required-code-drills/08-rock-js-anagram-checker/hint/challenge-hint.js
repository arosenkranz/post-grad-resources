// Anagrams


// This function takes in two strings and checks whether they're anagrams of each other.
// Return true if they are anagrams and false if they aren't anagrams.
function anagramCheck (str1, str2) {

  // ---------- Your Code Here ----------

  // remove all the white space from both strings

  

  // if the two strings aren't equal in length without white space, then they can't
  // be anagrams of each other

  

  // convert both strings to lowercase to remove case sensitivity from our logic

  

  // iterate through the first string

  
    // replace the first instance of the current character inside the second string
    // with an empty string. We are essentially subtracting characters contained within
    // the first string from the second string

    

  // Once we've finished our iteration through the first string, if the second string 
  // is empty, then it and the first string are composed of the same characters. If 
  // there was a difference, then the replace method wouldn't have found a character 
  // and the second string would still have characters inside it. We already checked 
  // to make sure the two strings are the same length, so we don't have to worry about 
  // the first string containing extra letters.

  

  // ----------- End Code Area -----------

}

// This should console log true
console.log(anagramCheck("I am Lord Voldemort", "Tom Marvolo Riddle"));

// This should console log true
console.log(anagramCheck("Astronomer", "Moon Starer"));

// This should console log false
console.log(anagramCheck("Hello World", "Llero Wod"));

// This should console log false
console.log(anagramCheck("Supercalifragilisticexpialidocious", "If you say it loud enough"));
