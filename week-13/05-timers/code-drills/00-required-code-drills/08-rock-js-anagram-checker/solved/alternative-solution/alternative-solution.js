// Day 02
// Activity 5


// This function takes in two strings and checks whether they're anagrams of each other.
// Return true if they are anagrams and false if they aren't anagrams.
function anagramCheck (str1, str2) {

  // ---------- Your Code Here ----------

  // remove all the white space from both strings
  str1 = str1.replace(/\s/g, '');
  str2 = str2.replace(/\s/g, '');

  // convert both strings to lowercase to remove case sensitivity from our logic
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();

  // sort str1 and str2 into alphabetical order
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  // compare if the two strings are equivalent
  return (str1 == str2);

  // ----------- End Code Area -----------

}

// This should console log true
console.log(anagramCheck("I am Lord Voldemort", "Tom Marvolo Riddle"));

// This should console log true
console.log(anagramCheck("Astronomer", "Moon Starer"));

// This should console log false
console.log(anagramCheck("Hello World", "Goodnight Sun"));

// This should console log false
console.log(anagramCheck("Supercalifragilisticexpialidocious", "If you say it loud enough"));
