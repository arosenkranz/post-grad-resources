// Day 02
// Activity 5


// This function takes in two strings and checks whether they're anagrams of each other.
// Return true if they are anagrams and false if they aren't anagrams.
function anagramCheck (str1, str2) {

  // ---------- Your Code Here ----------

  // remove all the white space from both strings
  str1 = str1.replace(/\s/g, '');
  str2 = str2.replace(/\s/g, '');

  // if the two strings aren't equal in length without white space, then they can't
  // be anagrams of each other
  if (str1.length !== str2.length) {
    return false;
  }

  // convert both strings to lowercase to remove case sensitivity from our logic
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // iterate through the first string
  for (var i=0; i < str1.length; i++) {
    // replace the first instance of the current character inside the second string
    // with an empty string
    str2 = str2.replace(str1[i], "");
  }

  // if the second string is empty, then it and the first string are composed of the
  // same characters. If there was a difference, then the replace method wouldn't have
  // found a character and the second string would still have characters inside it. We
  // already checked to make sure the two strings are the same length, so we don't have
  // to worry about the first string containing extra letters.
  if (str2.length === 0) {
    return true;
  } else {
    return false
  }

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
