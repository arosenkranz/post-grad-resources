# JQuery

## `this` jQuery Business

_In this exercise, we're going to be making a very use(less) website. We're going to be practicing click listeners combined with key press listeners and getting even more practice with how the `this` pointer behaves in relation to jQuery click listeners_

### Instructions

1. We've provided an html with the necessary divs that is already linked to the `challenge-prompt.js`. You should not have to modify this html to complete this exercise.

2. There is a file skeleton available to you inside `challenge-prompt.js`. Do not change any of the code other than inside the areas designated for your own code.

3. Using jQuery, create three buttons in the `buttons` div
  * One should append "Hello" to the content of the `output` div
  * One should append "World" to the content of the `output` div
  * One should clear the content of the `output` div
  * Do not hard code the strings into the click listener logic
  * Do not store the values of these buttons into variables

4. Create a key press listener and a button in the `user-button-area` div
  * Append the value of each key press to the button you put into `user-button-area`
  * This should not change the text on the button.
  * When the user clicks on `user-button-area` clear the `output` div and then set the content of the `output` div to every key the user has typed
  * Then clear the values inside the button so that the user can type something again
  * The user key presses should only be stored inside the button. Do not use a variable to store the previous presses.