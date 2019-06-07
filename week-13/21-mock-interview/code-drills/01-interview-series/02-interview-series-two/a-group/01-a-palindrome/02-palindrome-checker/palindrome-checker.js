// Palindrom Possibility Checker


// Solution
const possiblePalindrome = str => {
  // keeps track of all encountered characters and whether they're matched
  const unmatchedChar = {};
  // iterate through the string and update the object with each character
  for (let i=0; i<str.length; i++) {
    let currChar = str[i];
    unmatchedChar[currChar] = !unmatchedChar[currChar]
  }
  // only one character can be unmatched, so iterate through the object and check
  let unmatched = false;
  for (key in unmatchedChar) {
    if (unmatchedChar[key]) {
      if (unmatched) return false;
      unmatched = true;
    }
  }
  return true;
}

// Possible solutions
/*
  Instead of a boolean, unmatchedChar could keep track of how many times each character has appeared in the string. 
  Then in the end, they would be checking for how many odd characters there are
*/

/*
  Split the string into an array and then sort it
  Then iterate through the array and the second time you encounter an odd count character, return false
*/

/* 
  Iterate through the string and for each character, search through the string to find another copy of that character and remove both from the string if a copy is found
  If there are one or fewer characters left in the string at the end, return true
*/
