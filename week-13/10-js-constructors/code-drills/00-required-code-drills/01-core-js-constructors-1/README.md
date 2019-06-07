# Constructors

## It's all in the cards

### Instructions

_In this activity, we're going to be making a deck of cards using constructor functions. After you've defined your constructor functions, you will be exporting both of them so that you can run the test file._

* There should be two constructors we're defining for this activity: a `Deck` and a `Card`.

* `Card`s should be created with a value that is an integer from 1 to 13 and have a `print` function that displays a pretty representation of the card and its value.

* `Deck`s should be created with an initial array of `Card`s (this argument should be optional). They should have:
    * A `count` function that returns the number of Cards in the Deck
    * A `shuffle` function that shuffles the order of the Cards within the Deck
    * A `draw` function that draws the top Card of the Deck and returns that Card (this should also remove that Card from the Deck)
    * An `add` function that adds a Card into the Deck and `shuffle`s the Deck afterwards.

* After you've defined your constructor functions, use `module.exports` to export your Card and Deck constructors under the `Card` and `Deck` keys
    * By exporting your functions, you will be able to run the `test.js` file in order to see if your solution matches the expected outcomes.