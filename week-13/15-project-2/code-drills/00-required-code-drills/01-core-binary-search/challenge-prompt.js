// Binary Search


// This function takes in a string and an array of strings as arguments.
// The first argument is the target word we're searching for within
// the second argument which is a sorted array of words in alphabetical order.
// Use the binary search algorithm to return the index of the target word
// within the array. If the target word is not within the array, return -1.
function binarySearch(target, arr) {
  // -------------------- Your Code Here --------------------




  // -------------------- End Code Area ---------------------
}


// Tests - Do Not Modify
console.log('========================= Array 1 =========================');
var arr1 = ['australian shepherd', 'blood hound', 'border collie', 'boxer', 'bull dog', 'cocker spaniel', 'doberman', 'german shepherd', 'golden retriever', 'labrador', 'pit bull', 'poodle', 'pug', 'viszla']
// Should be 3
console.log(binarySearch('boxer', arr1));
// Should be 9
console.log(binarySearch('labrador', arr1));
// Should be 0
console.log(binarySearch('australian shepherd', arr1));
// Should be 13
console.log(binarySearch('viszla', arr1));
// Should be -1
console.log(binarySearch('corgi', arr1));

console.log('========================= Array 2 =========================');
var arr2 = ['bull dog', 'cocker spaniel', 'doberman', 'german shepherd', 'golden retriever', 'labrador', 'pit bull', 'poodle', 'pug']
// Should be 2
console.log(binarySearch('doberman', arr2));
// Should be 6
console.log(binarySearch('pit bull', arr2));
// Should be 0
console.log(binarySearch('bull dog', arr2));
// Should be 8
console.log(binarySearch('pug', arr2));
// Should be -1
console.log(binarySearch('corgi', arr1));
