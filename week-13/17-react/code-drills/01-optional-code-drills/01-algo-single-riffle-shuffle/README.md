# Algorithms

## Single Riffle Shuffle

 If you split a deck of cards into two halves and then, without changing the order of those halves, slid the two halves together back into a deck such that the cards from each half are now interspersed among the other half.

![Riffle Shuffle](riffle-shuffle.gif)

Image from [theknaveofclovers](http://theknaveofclovers.tumblr.com/post/41608490725/card-shuffle)

<br>

* Note that the order of the cards in each half does not change in relation to each other.
    * The cards do not have to perfectly alternate either, there could be any number of cards from one deck before coming from the other

### Instructions 

* Write a function `checkShuffle` that takes in 3 arrays of values. The first is the shuffled deck and the last two are two halves of the deck.
    * `checkShuffle` should check whether the shuffled deck is a possible configuration from a single riffle shuffle of the two halves.
    * Use ES6 wherever possible (do not use a for loop or `var` to declare variables)
        * i.e. declaring functions, variables, iterations, and array or object manipulation
        