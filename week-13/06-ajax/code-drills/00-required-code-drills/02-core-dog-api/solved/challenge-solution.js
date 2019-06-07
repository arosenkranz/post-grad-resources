$(document).submit(function () {
    // prevent the default behavior of the submit
    event.preventDefault();
    // grab the value of the users search and store it in dogSearch
    var dogSearch = $("#dogSearch").val()
    // We are defining the query URL here. By concatinating strings together, we're able to change our query based upon user input
    var queryURL = "https://dog.ceo/api/breed/" + dogSearch + "/images/random";
    // this forloop itterates 20 times
    for (var i = 0; i < 20; i++) {
        // this is how we are using an api call in the front end
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            // console.log the response
            console.log(response);
            console.log(response.message)
            // append the image within the response to the page 
            $(".dogImage").append("<img src=" + response.message + " >");
        });
    }
})
