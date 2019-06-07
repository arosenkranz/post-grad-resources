// Efficiency 3


// -------------------- Question 1 --------------------
//
// `countCons` takes a string as the argument and returns 
// the number of consonants in that string.
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------

Complexity: O(n)

Why: While `includes` is O(n) complexity, we're using includes
on a constant length str so it is constant time for the
purpose of calculating time complexity in this function.

For clarification, we need to look to the worst case
scenario: the letter is a vowel and we iterate through
entire `cons` string. We will always be iterating through
21 characters even if the argument is 5 million characters, so
it is essentially a coefficient of 21 in front of O(n).

`toLowerCase` runs in O(n) time since it checks every character
of the string. But because this runs independent of any other
iterations, it is just another coefficient we drop.

   --------------- END ANSWER AREA ---------------- */
function countCons(str) {
  str = str.toLowerCase();
  var cons = 'bcdfghjklmnpqrstvwxyz'
  var numCons = 0;
  for (var i=0; i<str.length; i++) {
    if (cons.includes(str[i])) {
      numCons++;
    }
  }
  return numCons;
}



// -------------------- Question 2 --------------------
//
// `reverse` takes a strings consisting of words seperated
// by spaces as the argument and returns a new string with
// the words in reverse order.
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------

Complexity: O(n)

Why: The `split`, `reverse`, and `join` methods are all
O(n) time. Because they're called one after the other, the
time complexity stays O(n)

   --------------- END ANSWER AREA ---------------- */
function reverse(str) {
  var tempArr = str.split(" ")
  tempArr = tempArr.reverse();
  var reversedStr = tempArr.join(" ");
  return reversedStr;
}



// -------------------- Question 3 --------------------
//
// `anagramCheck` takes two strings as arguments and returns 
// whether they are anagrams of each other, ignoring spaces.
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------

Complexity: O(n*log(n))

Why: The `replace`, `toLowerCase`, `split`, and `join` methods
are all O(n). Even when you combine the function call by chaining
dot notation, they're still called one after the other. However,
the sort function is O(n*log(n)) so we use that as the time
complexity of the function.

   --------------- END ANSWER AREA ---------------- */
function anagramCheck (str1, str2) {
  str1 = str1.replace(/\s/g, '');
  str2 = str2.replace(/\s/g, '');
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  str1 = str1.split("").sort().join("");
  str2 = str2.split("").sort().join("");
  return (str1 == str2);
}



// -------------------- Question 4 --------------------
//
// This function takes in a string and returns the longest 
// substring that doesn't contain repeated characters.
// What is the time complexity of this function? Why?
//
/* --------------- YOUR ANSWER HERE ---------------

Complexity: O(n)

Why: `indexOf` and `substr` are both O(n), but if we look
at the maximum size of current, there are only 26 letters
in the english alphabet, so in the worst case, it's going
to be a iterating through a string of size 26, even if the
argument is millions of characters.

   --------------- END ANSWER AREA ---------------- */
function longestSubstring(str) {
  var longest = "";
  var current = "";
  for (var i=0; i<str.length; i++) {
    var tempIndex = current.indexOf(str[i]);
    if (tempIndex !== -1) {
      if (longest.length < current.length){
        longest = current;
      }
      current = current.substr(tempIndex + 1) + str[i];
    } else {
      current += str[i]
    }
  }
  if (longest.length < current.length){
    longest = current;
  }
  return longest;
}
