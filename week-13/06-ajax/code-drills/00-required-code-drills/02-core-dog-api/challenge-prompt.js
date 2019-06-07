$(document).submit(function () {
    // prevent the default behavior of the submit
    event.preventDefault();

    var dogSearch;
    // grab the value of the users search and store it in dogSearch




    // We are defining the query URL here. By concatinating strings together, we're able to change our query based upon user input
    var queryURL = "https://dog.ceo/api/breed/" + dogSearch  + "/images/random";
    // this forloop iterates 10 times
    for (var i = 0; i < 10; i++) {
        // this is how we are using an api call in the front end
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // console.log the response 
            
            
            // append the image within the response to the page 

        });
    }
})
