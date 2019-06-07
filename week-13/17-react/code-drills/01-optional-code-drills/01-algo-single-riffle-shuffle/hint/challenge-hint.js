// Single Riffle Shuffle


// Given three arrays where the first is a full deck and the second and third are halves of that deck
// `checkShuffle` returns true if the full deck is achievable from a single riffle shuffle of the two halves
//
// -------------------- Your Code Here --------------------

// Declare the function `checkShuffle`


  // Declare a variable to keep track of where we are in the first half

  
  // Declare a variable to keep track of where we are in the second half

  
  // Declare a variable to keep track of whether the deck is a single riffle shuffle and set it to be true by default

  
  // Iterate through the deck

  
    // If we haven't reached the end of the first half and the current card is identical to the current card in the first half, increment the index of the first half to move to the next card

    
    // Otherwise, if we haven't reached the end of the second half and the current card is identical to the current card in the second half, increment the index of the second half to move to the next card

    
    // If neither of the above are true, then the deck is not a valid single riffle shuffle, so we will set the variable we have keeping track of the riffle shuffle validity to false

    
  // If the variable we've using to keep track of the riffle shuffle validity is true and we've reached the end of both halves, return true
  // Return false otherwise

  
// --------------------- End Code Area --------------------


// Tests
// All tests should be true
// --------------------------------------------------------------
console.log("==================== Test 01 ====================");
var deck = [ 1,2,3,4,5,6,7,8 ];
var half1 = [ 1,3,5,7 ];
var half2 = [ 2,4,6,8 ];
console.log(checkShuffle(deck, half1, half2));

// --------------------------------------------------------------
console.log("==================== Test 02 ====================");
var deck = [ 1,2,3,4,5,6,7,8 ];
var half1 = [ 1,2,3,4,5,6,7,8 ];
var half2 = [];
console.log(checkShuffle(deck, half1, half2));

// --------------------------------------------------------------
console.log("==================== Test 03 ====================");
var deck = [ 1,2,3,4,5,6,7,8 ];
var half1 = [ 1,2,3,4 ];
var half2 = [ 5,6,7,8 ];
console.log(checkShuffle(deck, half1, half2));

// --------------------------------------------------------------
console.log("==================== Test 04 ====================");
var deck = [ 1,1,2,2,2,3,4,4 ];
var half1 = [ 1,2,2,4 ];
var half2 = [ 1,2,3,4 ];
console.log(checkShuffle(deck, half1, half2));

// --------------------------------------------------------------
console.log("==================== Test 05 ====================");
var deck = [ 1,2,3,4,5,6,7,8 ];
var half1 = [ 1,3,5 ];
var half2 = [ 2,4,6 ];
console.log(checkShuffle(deck, half1, half2) === false);

// --------------------------------------------------------------
console.log("==================== Test 06 ====================");
var deck = [ 1,2,3,4,5,6,7,8 ];
var half1 = [ 1,2,5,7 ];
var half2 = [ 3,4,8,6 ];
console.log(checkShuffle(deck, half1, half2) === false);
