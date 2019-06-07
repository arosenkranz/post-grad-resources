// Chasing down a callback function

// DO NOT RUN THIS FILE before reading the prompt at the bottom of the page.



// This code is provided for you. The challenge is to figure out what the expected
// console logs are from when one of the functions is actually invoked
//--------------------------------------------------------------------------------
function minionOne(gru) {
  if (gru === true) {
    console.log("12 I have found Gru")
  } else {
    console.log("14 I haven't seen Gru")
  }
}

function minionTwo(gru, callback1, callback2, callback3) {
  if (gru === true) {
    console.log("20 I have found Gru")
  } else {
    console.log("22 I haven't seen Gru")
    callback1(gru, callback2, callback3)
  }
}

function minionThree(gru, callback1, callback2) {
  if (gru == true) {
    console.log("29 I have found Gru")
  } else {
    console.log("31 I haven't seen Gru")
    callback1(gru, callback2)
  }
}

function minionFour(gru, callback) {
  gru = true;  
  if (gru === true) {
    console.log("39 I have found Gru")
    return callback(gru) 
  } else {
    console.log("42 I haven't seen Gru")
  }
}
//--------------------------------------------------------------------------------


// WITHOUT running this file, try to predict the expected outcome from the following
// function call

// minionOne(minionTwo(false, minionThree, minionFour, minionOne))


// What are the expected console logs? What order do they appear in?
/*
 -=- YOUR ANSWER HERE -=-







 -=- END ANSWER AREA -=-
*/