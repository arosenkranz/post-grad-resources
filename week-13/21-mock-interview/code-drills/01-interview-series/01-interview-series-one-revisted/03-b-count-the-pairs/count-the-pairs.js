
//solution

//brute force  
//sort the array and then check adjacent elements
//O(n*log(n)) because sort() function is implemented based on quick sort
function countPairsBruteForce(arr){
  arr = arr.sort(function(a, b){return a - b});
  count =0;
  for(var i =0;i<arr.length-1;i++){
    if(arr[i]===arr[i+1]){
      count++;
      i++;
    }
  }
  return count
}

//optimal
//use object to keep a track of visited elements
//O(n)
var test = [1,2,1,3,2,4,2,3,3,1] // 3

function countPairs(arr) {
  var obj = {};
  var pairs = 0;

  for (var i = 0 ; i < arr.length ; i++) {
    if (obj[arr[i]]) {
      obj[arr[i]] = 0;
      // obj[arr[i]] = false;
      pairs++
    } else {
      obj[arr[i]] = true;
    }
  }
  return pairs
}


//console.log(countPairs([1,2,1,3,2,4,2,3,3,1,3,3]))
console.log(countPairsBruteForce([1,2,1,3,2,4,2,3,3,1,3,3]))

function countPairsMod(arr){
  var pairTracker = {};
  var pairCount = 0;
  for(var i = 0; i < arr.length;i++){
    if(pairTracker[arr[i]]){
      pairTracker[arr[i]] +=1;
    }
    else{
      pairTracker[arr[i]] =1;
    }
    
  }
  var keysArray = Object.keys(pairTracker)
  for(var i = 0; i < keysArray.length;i++){
    var countVal = pairTracker[keysArray[i]];
    if(countVal % 2 !== 0){
      countVal -=1 
      
    } 
    
    pairCount += countVal / 2
  }
  return pairCount;
}
console.log()
console.log(countPairsMod([1,2,1,3,2,4,2,3,3,1,3,3]))
