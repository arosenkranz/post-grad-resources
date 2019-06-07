// Only Once Function


// The function onlyOnce console logs "I'm RUNNING!" and 
// returns true the very first time it's run
// If it's not the first time it's invoke, it should do nothing
// and return null
function onlyOnce() {
  // Reassign the onlyOnce pointer from the current function to a
  // new function that just returns null
  onlyOnce = function() {return null};
  // Console log "I'm RUNNING!"
  console.log("I'm RUNNING!");
  // return true
  return true;
}

console.log(onlyOnce())
console.log(onlyOnce())
console.log(onlyOnce())
