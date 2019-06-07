
function groups(str) {
  // The final array
  var groups = []
  // Use this to check consecutive characters
  var currGroup = {
    letter: "",
    // Keep track of the indices of consecutive characters
    start: 0,
    stop: 0,
  }

  for (var i = 0 ; i <= str.length ; i++) {
    // If the current letter has changed
    if (str[i] !== currGroup.letter) {
      // If the current letter had a run of 3 or more sequential letters
      // add a new entry to the output array
      if ((currGroup.stop - currGroup.start + 1) >= 3) {
        groups.push([currGroup.start, currGroup.stop]);
      }
      // Set the letter to keep track of to the new letter
      currGroup = {
        letter: str[i],
        start: i,
        stop: i
      }
    // If the letter hasn't changed, update the stop index of the letter
    } else {
      currGroup.stop = i;
    }
  }
  return groups;
}

var input = "aabbbccdddddeefggggg"
var input2 = "aaabnaaaaaghghghghhhhhhhhhh"
console.log(groups(input))
console.log(groups(input2))