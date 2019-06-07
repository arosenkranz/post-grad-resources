function spiralist(n) {
  // This array is the container for our final matrix. This is what we will ultimately return.
  var final = [];

  // Push n amount of arrays to final. This fills out half the dimensions of the final matrix
  for (var i = 0 ; i < n ; i++) {
    final.push([])
  }

  // This represents the numbers that will be push into the matrix. 
  var counter = 1;

// Keep track of columns. sc = Start Column, ec = End Column
  var sc = 0;
  var ec = n;


// Keep track of rows. sr = Start Row, er = End Row
  var sr = 0;
  var er = n;

  // As long as the start column is less than or equal to the end column AND the start row is less than or equal to the end row...
  while (sc <= ec && sr <= er) {
// Loop from the start column to the end column
    for (var i = sc ; i < ec ; i++) {
      final[sc][i] = counter;
      counter++;
    }

    //Increment Starting row
    sr++;

    for (var i = sr ; i < er  ; i++) {
      final[i][ec - 1] = counter;
      counter++;
    }
   //Decrement end column
    ec--

    for (var i = ec - 1 ; i >= sc ; i--) {
      final[er - 1][i] = counter;
      counter++;
    }
    // Decrement end row
    er--
 
    for (var i = er - 1 ; i >= sr ; i--) {
      final[i][sc] = counter;
      counter++ 
    }

    // Decrement start column
    sc++
    
  }
  // Ta-Da
  return final
}

console.log(0, spiralist(0))

console.log(1, spiralist(1))

console.log(2, spiralist(2))

console.log(3, spiralist(3))

console.log(9, spiralist(9))