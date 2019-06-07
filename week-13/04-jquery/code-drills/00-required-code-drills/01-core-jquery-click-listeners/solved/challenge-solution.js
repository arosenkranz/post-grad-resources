

// document.ready makes sure the javascript doesn't load before the html page
$(document).ready(function () {

    // Write a series of on click listeners for each letter in the html
    // Whenever the user clicks on a letter, you want to append the corresponding letter to the `text-div` element
    //
    // You will need to set up an on click listener for each letter

    // Within the document, set an on click listener for the element with a class of "letterA"
    $(document).on("click", ".letterA", function () {
        // When that element is clicked, append the string "A" to the `text-div` element
        $("#text-div").append("A");
    })
    // Within the document, set an on click listener for the element with a class of "letterB"
    $(document).on("click", ".letterB", function () {
        // When that element is clicked, append the string "B" to the `text-div` element
        $("#text-div").append("B");
    })
    // Continue for the other letters
    $(document).on("click", ".letterC", function () {
        $("#text-div").append("C");
    })
    $(document).on("click", ".letterD", function () {
        $("#text-div").append("D");
    })
    $(document).on("click", ".letterE", function () {
        $("#text-div").append("E");
    })
    $(document).on("click", ".letterF", function () {
        $("#text-div").append("F");
    })
    $(document).on("click", ".letterG", function () {
        $("#text-div").append("G");
    })
    $(document).on("click", ".letterH", function () {
        $("#text-div").append("H");
    })
    $(document).on("click", ".letterI", function () {
        $("#text-div").append("I");
    })
    $(document).on("click", ".letterJ", function () {
        $("#text-div").append("J");
    })
    $(document).on("click", ".letterK", function () {
        $("#text-div").append("K");
    })
    $(document).on("click", ".letterL", function () {
        $("#text-div").append("L");
    })
    $(document).on("click", ".letterM", function () {
        $("#text-div").append("M");
    })
    $(document).on("click", ".letterN", function () {
        $("#text-div").append("N");
    })
    $(document).on("click", ".letterO", function () {
        $("#text-div").append("O");
    })
    $(document).on("click", ".letterP", function () {
        $("#text-div").append("P");
    })
    $(document).on("click", ".letterQ", function () {
        $("#text-div").append("Q");
    })
    $(document).on("click", ".letterR", function () {
        $("#text-div").append("R");
    })
    $(document).on("click", ".letterS", function () {
        $("#text-div").append("S");
    })
    $(document).on("click", ".letterT", function () {
        $("#text-div").append("T");
    })
    $(document).on("click", ".letterU", function () {
        $("#text-div").append("U");
    })
    $(document).on("click", ".letterV", function () {
        $("#text-div").append("V");
    })
    $(document).on("click", ".letterW", function () {
        $("#text-div").append("W");
    })
    $(document).on("click", ".letterX", function () {
        $("#text-div").append("X");
    })
    $(document).on("click", ".letterY", function () {
        $("#text-div").append("Y");
    })
    $(document).on("click", ".letterZ", function () {
        $("#text-div").append("Z");
    })
});
