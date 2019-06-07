var input = 89657;

function addDigits(num) {

  var str = num.toString();

  while (str.length > 1) {
  
    var sum = 0 
  
    for (var i = 0 ; i < str.length ; i++){
       sum += parseInt(str[i])
    }

    str = sum.toString()
 
  }

  return parseInt(str)
    
}

console.log("final", addDigits(input))
