$(document).on("submit", "#signUpForm", function(e) {
    console.log("eyo")
    e.preventDefault()
    var username = $("#username").val().trim()
    $.ajax({
        url: `/api/signin/${username}`,
        method: "POST"
    }).then(function(data) {
        window.location.href = "/home"
    })
})