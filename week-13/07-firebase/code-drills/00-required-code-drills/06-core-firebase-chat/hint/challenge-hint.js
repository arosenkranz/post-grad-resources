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

  

    // create a new element `chatItem` that we will append into tho `chat-display`
    // after we give it some content

    

    // grab the value of the child entry that was just updated. This is the
    // chat message that was stored into our database, so we can store that as
    // the contents of `chatItem`

    

    // Append `chatItem` to the `chat-display`

    


  // Set up an on click listener on the submit button

  

    // Grab the chat message the user has input and then clear the input area

    

    // Push the chat message into the database

    
    

  // --------------------- End Code Area --------------------

})

