// Is Palindrome - Example Solution



// Solution
const palindromeCheck = (str) => {
  for (let i=0; i<str.length/2; i++)
    if (str[i] !== str[str.length - 1 - i]) return false;
  return true;
}


// Cheeky Solution
const palindromeCheck2 = str => str.split("").reverse().join("") === str;