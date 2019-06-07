// Firebase Chat

// creating a variable that references our database, so we don't have to type
// it out every time
var database = firebase.database();

// Document.ready shorthand
$(function() {

  // -------------------- Your Code Here --------------------

  // Setup an on "child_added" listener on our database
  // The first argument to the callback function we hand it will be the child
  // entry that was just added.
  database.ref().on("child_added", function (childSnapshot) {

    // create a new element `chatItem` that we will append into tho `chat-display`
    // after we give it some content
    var chatItem = $("<p>");

    // grab the value of the child entry that was just updated. This is the
    // chat message that was stored into our database, so we can store that as
    // the contents of `chatItem`
    chatItem.text(childSnapshot.val());

    // Append `chatItem` to the `chat-display`
    $("#chat-display").append(chatItem);
  })

  // Set up an on click listener on the submit button
  $(document).on("click", "button[type=submit]", function (event) {
    event.preventDefault();

    // Grab the chat message the user has input and then clear the input area
    var chatMessage = $("input[type=text]").val().trim();
    $("#chat-input").val("");

    // Push the chat message into the database
    database.ref().push(chatMessage);
  })

  // --------------------- End Code Area --------------------

})

