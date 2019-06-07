// Follow the pseudocode step-by-step as detailed below. It may help to think of this problem with a specific example in mind. Try imagining that we are given the number 3.
function spiralist(n) {
  // 1. Create an empty array that contains all the sub arrays. This is what we will ultimately return. For the sake of this pseudocode, let's call it "final".

  // 2. We will call the given number n. Push n arrays into final.
  
  // 3. Create a variable. Let's call it counter. This will represent the numbers we send to the matrix. Set counter to 1, since 1 is always at final[0][0].

  // 4. Create 4 new variables. One of the key parts of this problem is identifying where we currently are in our iteration. Using these helper variables will help us narrow the scope of where we can insert numbers.
  //    a. A variable to keep track of the starting column
  //    b. A variable to keep track of the ending column
  //    c. A variable to keep track of the starting row
  //    d. A variable to keep track of the ending row
  // Try to think what the above variables should be set to. Remember, these will be used to tell us where we're inserting our counter value. 
  

  // 5. Almost all of the rest of your logic should execute under the following condition: the start column is less than or equal to the end column AND the start row is less than or equal to the end row. 

  // In each of the iterations of all the following loops, you should increment counter.

  // Important note: You can assign values to a given index of an array, even if that array or that given index is empty.

  // 6. Iterate from the starting column to the end column. This first loop will fill out a row left to right.

  // 7. Increment the starting row.

  // 8. Iterate from the starting row to the ending row. This  loop will fill a column top to bottom.

  // 9. Decrement the ending column.
  
  // 10. Iterate from the end column to the start column. This loop will fill a row from right to left.

  // 11. Decrement the ending row.

  // 12. Iterate from the end row to the start row. This will fill out a column from bottom to top.

  // 14. Increment the starting column.

  // 15. Finally, outside the condition expressed in step 5. You should be ready to return the array we created in step 1.
}

console.log(0, spiralist(0))

console.log(1, spiralist(1))

console.log(2, spiralist(2))

console.log(3, spiralist(3))

console.log(9, spiralist(9))