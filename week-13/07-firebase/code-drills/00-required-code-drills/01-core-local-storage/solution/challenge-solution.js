// Local Storage


// Given a string of 1s and 0s, this function colors the buttons on the page
// depending upon the sequence of the digits
function displayButtons(buttons){
  for (var i = 0; i < buttons.length; i++) {
    $("#card-" + i).removeClass("bg-success bg-danger");
    if (buttons[i] === "1"){
      $("#card-" + i).addClass("bg-success");
    } else {
      $("#card-" + i).addClass("bg-danger");
    }

  }
}

// this function takes in a string, an index, a replacement string
// and inserts the replacement at the index within in the string,
// overwriting the existing characters within that string.
function replaceChar(str, index, val) {
  firstHalf = str.substr(0, index);
  secondHalf = str.substr(index + val.length)
  return firstHalf + val + secondHalf;
}

// Document.ready shorthand
$(function() {

  // This string represents which of our buttons are green and which are red
  var buttonColors = "111111111111";


  // This section of code should set the value of buttonColors to be whatever 
  // is stored in local storage. If there is no value stored within local storage,
  // use the default value of buttonColors as defined above.
  //
  // -------------------- Your Code Here --------------------

  var storedButtons = localStorage.getItem("buttons");
  if (storedButtons) {
    buttonColors = storedButtons;
  }

  // --------------------- End Code Area --------------------
  

  // This calls the displayButtons function in order to color the strings based upon
  // the value of buttonColors  
  displayButtons(buttonColors)

  // This is the listener for the user clicks on the button. It should swap the current
  // color of the button and store the new button color configuration into local storage
  $(document).on("click", ".user-card", function(event) {
    
    // Each button carries the index of the character in the buttonColors string
    // that is determining its color. We pull it out and store it inside the
    // `index` variable
    var index = parseInt($(this).data("button"));


    // Your code here should change the buttonColors string to reflect the change 
    // in color from the user click. You will have to use the `replaceChar` function
    // defined above. After you've updated button colors, store it inside local storage.
    //
    // -------------------- Your Code Here --------------------

    if (buttonColors[index] === "1"){
      buttonColors = replaceChar(buttonColors, index, "0");
    } else {
      buttonColors = replaceChar(buttonColors, index, "1");
    }
    localStorage.setItem("buttons", buttonColors)

    // --------------------- End Code Area --------------------


    // update the display of the buttons with the new color values.
    displayButtons(buttonColors);
  })
})