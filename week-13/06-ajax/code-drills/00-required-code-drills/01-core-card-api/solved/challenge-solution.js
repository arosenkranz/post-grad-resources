$(document).submit(function () {
    // prevent default
    event.preventDefault();
    // this is the api we are using add your
    var queryURL = "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1";
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log the response 
        console.log(response);
        // console.log the remaining cards
        console.log(response.remaining);
        // console.log the deck id too
        console.log(response.deck_id);
    });

})

