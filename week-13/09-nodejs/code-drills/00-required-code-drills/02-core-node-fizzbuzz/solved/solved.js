
function fizzBuzz(n) {
  var allNums = []
  for (let i = n ; i > 0 ; i--) {
    allNums.push(i);
  }
  allNums.reverse();

  for (let i = 0 ; i < allNums.length ; i ++) {
    if (allNums[i] % 3 === 0 && allNums[i] % 5 === 0) {
      console.log("fizzbuzz")
    } else if (allNums[i] % 5 === 0) {
      console.log("buzz")
    } else if (allNums[i] % 3 === 0) {
      
      console.log("fizz")
    } else {
      console.log(allNums[i])
    }
  }
}

fizzBuzz(process.argv[2])
