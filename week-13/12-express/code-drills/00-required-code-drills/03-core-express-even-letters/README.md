# Express 

## String Filtering

### Instructions

_In this activity, we're going to be setting up a server with Express.js and writing an algorithm that will operate on the parameter we pass the server through a route parameter_

* Set up a server using Express.js
    * Remember to initialize npm and install Express!
    * Remember to set the server to listen to the PORT you specified!
    * Set up a `get` route that reads a parameter from the request route and calls on a `evenLetters` function with that string
    * Send the return of the `evenLetters` function as a json response.

* The `evenLetters` function should take in a string and return another string that contains all the letters of the alphabet that appears an even number of times within that string.
    * Zero is an even number, so include the letters that do not appear in the string.
    * The letters of the return string should be in alphabetical order.

    > evenLetters("chicken")

    should return

    > "abcdfgjlmopqrstuvwxyz"

```
Assuming you used PORT 3000, Navigating to "localhost:3000/hello" should show the string
"abcdfgijklmnpqrstuvwxyz" as the response

Assuming you used PORT 3000, Navigating to "localhost:3000/farley" should show the string
"bcdghijkmnopqstuvwxz" as the response

Assuming you used PORT 3000, Navigating to "localhost:3000/supercalifragilisticexpialidocious" should show the string
"behjkmnopqruvwyz" as the response
```


    