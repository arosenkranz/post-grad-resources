// Keyboard Row


// the `keyboardRow` function takes in an array of strings and
// returns a new array containing all the words that can be
// individually typed on a single row of a standard "QWERTY"
// keyboard.
function keyboardRow(arr) {
  // This object stores which row each letter is in
  var keyboard = {
    q: 1, w: 1, e: 1, r: 1, t: 1, y: 1, u: 1, i: 1, o: 1, p: 1,
    a: 2, s: 2, d: 2, f: 2, g: 2, h: 2, j: 2, k: 2, l: 2,
    z: 3, x: 3, c: 3, v: 3, b: 3, n: 3, m: 3
  }
  var sameRow = [];
  for (var i = 0; i < arr.length; i++) {
    var currWord = arr[i];
    // Because we started counting the row from 1, row will be
    // truthy if the character is a letter
    var row = keyboard[currWord[0]];
    // We stop the iteration through the word when we hit
    // a letter thats on a different row
    for (var j = 1; j < currWord.length && row; j++) {
      // If a letter in the word is on a different row from
      // the first letter, then it fails the test and we set
      // row to be false
      if (row != keyboard[currWord[j]]) {
        row = false;
      }
    }
    // If row is still truthy after the iteration, the word
    // can be typed on the same row
    if (row) {
      sameRow.push(currWord);
    }
  }
  return sameRow;
}

var wordArray = ["pet", "world", "bc", "hello", "a", "flash", "blastoff", "to"]
// Should be [ 'pet', 'bc', 'a', 'flash', 'to' ]
console.log(keyboardRow(wordArray))
