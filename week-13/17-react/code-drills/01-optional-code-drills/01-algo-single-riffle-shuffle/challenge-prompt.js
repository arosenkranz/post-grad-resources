// Single Riffle Shuffle


// Given three arrays where the first is a full deck and the second and third are halves of that deck
// `checkShuffle` returns true if the full deck is achievable from a single riffle shuffle of the two halves
//
// -------------------- Your Code Here --------------------







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
