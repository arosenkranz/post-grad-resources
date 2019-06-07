// Find Factors


// In this activity, we're creating a function that finds the
// factors of a number the user gives.

// -------------------------------------------------------
//                   Find Factor Function
// -------------------------------------------------------
function factor(num) {
  // -------------------- Your Code Here --------------------


  

  
  
  // --------------------- End Code Area --------------------
}


// This listens for and calls on the `factorial` function with the user input
$(function() {
  $(document).on("click", "button[type=submit]", function(event){
    event.preventDefault();
    
    num = $("input").val().trim();
    $("#output-area").text(factor(num));

  });
})