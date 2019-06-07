// Make Change


// Takes in a value in number of cents and returns an object that denotes how many of each coin is needed to create that value
function makeChange(cents) {
  // Initialize the coins object
  var coins = {};
  // store the number of quarts as the dividend of the argument value divided by 25
  coins.quarters = Math.floor(cents / 25);
  // store the remainder as the new value we're going to be calculating coin counts off ot
  cents = cents % 25;
  // repeat for dimes, nickels and finally pennies
  coins.dimes = Math.floor(cents / 10);
  cents = cents % 10;
  coins.nickels = Math.floor(cents / 5);
  coins.pennies = cents % 5;
  // return the final coins object
  return coins;
}


/* Should be
{
  quarters: 8,
  dimes: 1,
  nickels: 1,
  pennies: 4
}
*/
console.log(makeChange(219));
