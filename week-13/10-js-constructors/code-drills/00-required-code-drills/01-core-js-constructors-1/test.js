var challengePrompt = require("./challenge-prompt.js");
var Card = challengePrompt.Card;
var Deck = challengePrompt.Deck;

// ------------------------------------------------------------------
console.log("\n==================== Test 01 ====================");
console.log("\nThe following should print the card number 5:");
var testCard = new Card(5)
testCard.print();

// ------------------------------------------------------------------
console.log("\n==================== Test 02 ====================");
console.log("\nThe following should print the card number 10:");
var testDeck = new Deck([new Card(10)]);
testDeck.draw().print();

// ------------------------------------------------------------------
console.log("\n==================== Test 03 ====================");
console.log("\nThe following should be undefined:");
console.log(typeof testDeck.draw());
console.log("\nThe following should be 0:");
console.log(testDeck.count());

// ------------------------------------------------------------------
console.log("\n==================== Test 04 ====================");
console.log("\nThe following should be 1:");
testDeck.add(new Card(7));
console.log(testDeck.count());
console.log("\nThe following should print the card number 7");
testDeck.draw().print();

// ------------------------------------------------------------------
console.log("\n==================== Test 05 ====================");
console.log("\nThe following should print the cards 1, 2, 3, 4, and 5 in random order");
for (var i=1; i<=5; i++) {
  testDeck.add(new Card(i));
}
testDeck.shuffle();
var deckSize = testDeck.count();
for (var i=0; i<deckSize; i++) {
  testDeck.draw().print();
}
