// Compare the solutions below, in the designated section, write out their respective runtimes and which is faster

  
  
  // ****************************  1. *************************
  
  // ======================= Compressor ========================= 
  
  // Given a string like the following: "hhhkkkkkkttttttttt", compress the string so that it read like so "h3k6t9", where the number indicates how many times the number preciding it appears in the string.
  
  // #1    
      function compressor(str) {
        var newString = ""
        for (var i = 0; i < str.length; i++) {
          inc = 0
          for (var j = 0; j < str.length; j++) {
            if (str[i] === str[j]) {
              inc++
            }
          }
          if (!(newString.includes(str[i]))) {
            newString += (str[i] + inc.toString())
          }
        }
        return newString
      }
  
  // #2
      function compressor(str) {
        var newString = ""
        var compare = str.split("");
        var obj = {}          
        for (var i = 0; i < str.length; i++) {
          if (obj[str[i]]) {
            obj[str[i]]++
          } else {
            obj[str[i]] = 1
          }       
        } 
        for (var i = 0; i < str.length; i++) {
          if (!(newString.includes(str[i]))) {
            newString+=(str[i]+obj[str[i]])
          }     
        } 
        return newString
      }
  
  
  
    
    // _______________________ ANSWERS HERE _______________________
    
    // Time complexity for #1: O(n^2)
    
    // Time complexity for #2: O(n)
    
    // Which solution, if any, is faster: #2
    
    // ____________________________________________________________
    
    // =============================================================
  
  
  
  
  
  
  
  
    // ****************************  2. *************************
  
  // ======================= Largest Sum ========================= 
  
  // Given an array of numbers, create a function which returns the largest sum of any of the two numbers in that array.
  
  // #1
  function largestSum(arr) {
    var largest = 0;
    var secondLargest = 0;
    for (var i = 0 ; i < arr.length + 1 ; i++) {
      if (arr[i] > largest) {
        secondLargest = largest
        largest = arr[i]
      } else if (arr[i] > secondLargest) {
        secondLargest = arr[i]
      }
    }
    var sum = largest + secondLargest
    return sum
  }
  
  
  // #2
  function largestSum(arr) {
    var largestSum = 0;
    for (var i = 0 ; i < arr.length ; i++) {
      for (var j = 0; j < arr.length; j++) {
        if (i !== j) {
          var sum = arr[i] + arr[j]
          if (sum > largestSum) {
            largestSum = sum;
          }
        }
      }
    }
    return largestSum
  }
    
    // _______________________ ANSWERS HERE _______________________
    
    // Time complexity for #1: O(n)
    
    // Time complexity for #2: O(n^2)
    
    // Which solution, if any, is faster: #1
    
    // ____________________________________________________________
    
    // =============================================================
  
  
  
  
  
  
  
  
  
    // ****************************  3. *************************
  
  // ======================= Unique Characters ========================= 
  
  // Given a string, return true if any character in that string occurs more than once. Otherwise, return false
  
  // #1     
  function unique(str) {
    var compare = str.split("");
    var obj = {}
    for (var i = 0; i < str.length; i++) {
      if (obj[str[i]]) {
        return false
      } else {
        obj[str[i]] = 1
      }
    }
    return true
  }
  
  
  // #2
  function unique(str) {
    var compare = str.split("");
    for (var i = 0; i < str.length; i++) {
      var temp = compare.indexOf(str[i])
      compare.splice(temp, 1)
      if (compare.indexOf(str[i]) > -1) {
        return false
      }
    }
    return true
  }
    
    // _______________________ ANSWERS HERE _______________________
    
    // Time complexity for #1: O(n)
    
    // Time complexity for #2: O(n^2)
    
    // Which solution, if any, is faster:  #1. Don't forget that built-in methods have their own time-complexity. Let's look at indexOf, for example. Index of iterates through an array until it finds the value passed to it in the argument. That means that for every iteration of our loop, we are looking through the array again. 
    // ____________________________________________________________
    
    // =============================================================
  
  
  
  
  
  
  
  
  
    // ****************************  4. *************************
  
  // ======================= Repeat Characters ========================= 
  
  // Given two strings, output how many times any of the characters in the first string appear in the secon
  
  // #1
  function repeatChars(s, c) {
  
    var total = 0;
  
    for (var i = 0 ; i < c.length ; i++) {
      for (var j = 0 ; j < s.length ; j++) {
        if (s[j] === c[i]) {
          total++
        }
      }
    }
  
    return total
  }
  
  
  // #2
  
  function repeatChars(s, c) {
    var obj = {};
    var total = 0; 
  
    for (var i = 0 ; i < s.length ; i ++) {
      obj[s[i]] = true ;
  
    }
  
    for (var i = 0 ; i < c.length ; i ++) {
      if (obj[c[i]]) {
        total++
      }
        
    }
  
    return total
  }
    
    // _______________________ ANSWERS HERE _______________________
    
    // Time complexity for #1: O(n^2)
    
    // Time complexity for #2: O(n)
    
    // Which solution, if any, is faster: #2. There are two loops, but they are not nested. Therefore, the time it takes to run this function still grows with the input in linear time. 
    
    // ____________________________________________________________
    
    // =============================================================



    // **************************  5. ************************

// ========================= GROUPS =========================== 

// Return an array of arrays. Each subarray should contain the beginning and ending index of each sequence of thrre or ore consecutive, reappearing characters.

// #1
function groups(str) {
  // The final array
    var groups = []
  
    for (var i = 0 ; i < str.length ; i++) {
      // Use this to check consecutive characters
      var counter = 0;
      // Keep track of the indices of consecutive characters
      var group = []
      // Compare current char against the others
      for (var j = 0 ; j < str.length + 1; j++) {
    //  increment  the counter for consecutive characters
        if (str[i] === str[j]) {
          counter++
          
        }
        // Checks the end of a match
        if (str[i] !== str[j] && str[i] === str[j-1]) {
          // Ensures we only get the first to last index, not those in between
          var indices = [];
          for (var k = 0 ; k < groups.length ; k++) {
            indices.push(groups[k][1])
          }
          // No duplicate entries
          if (!indices.includes(j-1)) {
            group.push(i,j-1)
          }
          
          // Makes sure the group is larger than 3
          if (group[1]-group[0] >= 2 && !groups.includes(group)) {
  
                groups.push(group)
  
          }
        }
        // reset the counter
        if (str[i] !== str[j]) {
          counter = 0;
        }
  
      }
      
    }
  
    return groups
  
  }
  
  // #2
  function groups(str) {
    // The final array
    var groups = []
    // Use this to check consecutive characters
    var currGroup = {
      letter: "",
      // Keep track of the indices of consecutive characters
      start: 0,
      stop: 0,
    }
  
    for (var i = 0 ; i <= str.length ; i++) {
      // If the current letter has changed
      if (str[i] !== currGroup.letter) {
        // If the current letter had a run of 3 or more sequential letters
        // add a new entry to the output array
        if ((currGroup.stop - currGroup.start + 1) >= 3) {
          groups.push([currGroup.start, currGroup.stop]);
        }
        // Set the letter to keep track of to the new letter
        currGroup = {
          letter: str[i],
          start: i,
          stop: i
        }
      // If the letter hasn't changed, update the stop index of the letter
      } else {
        currGroup.stop = i;
      }
    }
    return groups;
  }
  
  // _______________________ ANSWERS HERE _______________________
  
  // Time complexity for #1: O(n^3). This is a tricky one. The loop using the letter k is what takes this algorithm to the next level. It has to check an array of consecutive entries. So if we want [0,5], we'll get [0,1], [0,2], [0,3], [0,4], [0,5]. The loop extracts just the last. Worst case scenario, we get a string like "aaaaaaaaaaaaaa", in which case, this become O(n^3)
  
  // Time complexity for #2: O(n)
  
  // Which solution, if any, is faster: #2
  
  // ____________________________________________________________
  
  // =============================================================