// Longest substring



// This function takes in a string and returns the longest substring that doesn't
// contain repeated characters
function longestSubstring(str) {
  // -------------------- Your Code Here --------------------

  // Initialize two variables to keep track of the longest substring so far and the
  // substring we're currently adding to
  var longest = "";
  var current = "";

  // Iterate through the string
  for (var i=0; i<str.length; i++) {
    // If the current character has already appeared in the substring
    var tempIndex = current.indexOf(str[i]);
    if (tempIndex !== -1) {
      // Update the longest substring if the current substring is longer
      if (longest.length < current.length){
        longest = current;
      }
      // Set the current substring to be a new substring consisting of the
      // characters after the previous time the current character appeared
      // up until and including the current character
      // We're basically shifting the current substring to include the current
      // character and removing the previous instance of the character and the
      // characters before that
      current = current.substr(tempIndex + 1) + str[i];
    } else {
    // If the current character has not already appeared in the substring,
    // add the current character to the end of the current substring
      current += str[i]
    }
  }

  // After we've iterated through the entire string, check if the final substring
  // is longer than the previous longest we've been keeping track of
  if (longest.length < current.length){
    longest = current;
  }

  // Return the longest substring we've kept track of
  return longest;

  // --------------------- End Code Area --------------------
}


// Export the longest substring for use by the testing function
module.exports = longestSubstring;
