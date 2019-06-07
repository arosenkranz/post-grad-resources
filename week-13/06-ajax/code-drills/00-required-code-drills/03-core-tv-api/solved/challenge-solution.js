$(document).submit(function () {
    // dont forget to prevent default
    event.preventDefault();
    // grab the show information from the form on the page
    var searchInformation = $("#showSearch").val()
    // console.log the input
    console.log(searchInformation)
    // this is the api we are using add your search variable to end of the queryURL
    var queryURL = "http://api.tvmaze.com/search/shows?q=" + searchInformation;
    // 
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        // console.log the response 
        console.log(response);
        // create a for loop and grab 3 response and append it to the page
        for (var i = 0; i < 3; i++) {
            // console.log the image and then append it to the page.            
            console.log(response[0].show.image.medium)
            $(".shows").append("<img src=" + response[i].show.image.medium + ">");
            // console.log the name of the show and append it to the page
            console.log(response[i].show.name)
            $(".shows").append("<div> <p>" + response[i].show.name + "</p></div>");
            // console.log the genres of the show and append it to the page
            console.log(response[i].show.genres)
            $(".shows").append("<div> <p>" + response[i].show.genres + "</p></div>");
            // console.log the summary of the show and append it to the page
            console.log(response[i].show.summary)
            $(".shows").append("<div> <p>" + response[i].show.summary + "</p></div>");
        }
    });

})
