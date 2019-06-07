// Defining the card constructor function
//
// -------------------- Your Code Here --------------------

function Card(value) {
  if (value >= 1 && value <= 13) {
    this.value = value;
  } else {
    this.value = 1;
  }
  this.print = function() {
    // This is a ternary statement and has the syntax of
    // <conditional> ? <value if true> : <value if false>
    var printValue = this.value<10 ? "0" + this.value : this.value;
    console.log(`
    -----------
    |${printValue}       |
    |         |
    |         |
    |         |
    |         |
    |       ${printValue}|
    -----------
    `)
  }
}

// --------------------- End Code Area --------------------



// Defining the deck constructor function
//
// -------------------- Your Code Here --------------------

function Deck(cards = []) {
  this.cards = cards;
  this.count = function () {
    return this.cards.length;
  }
  this.shuffle = function() {
    for (var i = this.cards.length - 1; i >= 0; i--) {
      var randIndex = Math.floor(Math.random()*(i+1));
      var tempCard = this.cards[i];
      this.cards[i] = this.cards[randIndex];
      this.cards[randIndex] = tempCard;
    }
  }
  this.draw = function () {
    return this.cards.pop();
  }
  this.add = function(card) {
    this.cards.push(card);
    this.shuffle();
  }
}

// --------------------- End Code Area --------------------



// Export your two constructor functions
//
// -------------------- Your Code Here --------------------

module.exports.Card = Card;
module.exports.Deck = Deck;

// --------------------- End Code Area --------------------
