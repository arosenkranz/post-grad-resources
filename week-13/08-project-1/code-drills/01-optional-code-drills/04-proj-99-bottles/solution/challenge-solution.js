// Sing along fun!


// In this activity, we're creating a function that sings the
// "99 Bottles of Beer on the Wall song"

// -------------------------------------------------------
//                Helper Functions (Optional)
//
// -------------------- Your Code Here --------------------

function display(str) {
  var displayElement = $("<p>").text(str);
  $("#output-area").append(displayElement);
}

function displayBottle(num) {
  switch (num) {
    case 1:
      return "1 bottle";
    case 0:
      return "no more bottles";
    default:
      return num + " bottles";
  }
}

// --------------------- End Code Area --------------------


// -------------------------------------------------------
//                  Singing 99-Bottles Function
// -------------------------------------------------------
function sing(maxBottles) {
  // -------------------- Your Code Here --------------------

  for (var i = maxBottles; i > 0; i--) {
    display(displayBottle(i) + " of beer on the wall, " + displayBottle(i) + " of beer.");
    display("Take one down, pass it around, " + displayBottle(i-1) + " of beer on the wall!");
  }

  // --------------------- End Code Area --------------------
}


// This sets up a listener that calls on the `sing` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();

    num = $("input").val().trim();
    $("#output-area").empty();
    sing(num);

  });
})