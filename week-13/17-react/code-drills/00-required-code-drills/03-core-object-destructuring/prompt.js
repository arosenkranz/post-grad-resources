
const hogwarts = {
  gryffindor: ["Seamus Finnigan", "Lee Jordan", "Parvati Patil"],
  slytherin: ["Pansy Parkinson", "Graham Montague", "Gregory Goyle"],
  ravenclaw: ["Cho Chang", "Roger Davies", "Padma Patil"],
  hufflepuff: ["Ernie MacMillan", "Justin Finch-Fletchley", "Hannah Abbott"]
}

// 1. Create four functions. Each function takes a student as an argument, and then sorts that student into a different house. 
// For example, if I invoke sortGryffindor passing "Hermione Granger" as an argument, Hermione is added to the key of gryffindor in the object above. 
// In each function, you must use an arrow function, object destructuring, and array destructuring
// Note that your goal is to manipulate the original object, not a copy of an array one of its keys points to

// ============ YOUR WORK HERE ===========





//  ============== END WORK ==============

// TESTS
sortGryffindor("Harry Potter")
sortSlytherin("Draco Malfoy")
sortRavenclaw("Luna Lovegood")
sortHufflepuff("Cedric Diggory")


// 2.
// In one line of code, create a function called "goToCommonRoom" which takes a house as an argument, and returns all the students from that given house.
// ============ YOUR WORK HERE ===========





//  ============== END WORK ==============

// TESTS
console.log(goToCommonRoom("gryffindor"))

// 3.
// Create a function called "battleOfHogwarts" that returns the students from all the houses except Slytherin in one array.
// You must use an arrow function, object destructuring and array destructuring.

// ============ YOUR WORK HERE ===========





//  ============== END WORK ==============

// TESTS
console.log(battleOfHogwarts())


// 4.
// Create a function called "letterP" which returns an array of all the hogwarts students who have a p in their names
// You must use an arrow function, object destructuring, array destructuring and the filter method


// ============ YOUR WORK HERE ===========





//  ============== END WORK ==============

// TESTS
console.log(letterP())

// 5. Create a function called "forgetThem" which returns all the students in hogwarts except for Seamus, Pansy, Cho, or Ernie
// You must use an arrow function, object destructuring and array destructuring.

forgetThem = () => {
  let {gryffindor, slytherin, ravenclaw, hufflepuff} = hogwarts
  gryffindor = gryffindor.slice(1)
  slytherin = slytherin.slice(1)
  ravenclaw = ravenclaw.slice(1)
  hufflepuff = hufflepuff.slice(1)
  return [...gryffindor, ...slytherin, ...ravenclaw, ...hufflepuff]
}
// ============ YOUR WORK HERE ===========





//  ============== END WORK ==============

// TESTS
console.log(forgetThem())

// 6. Create a function called houseSwap. You function must manipulate the original object so that all the students in Gryffindor move to Hufflepuff, all the Hufflepuffs move to Slytherin, all the Slytherins move to Ravenclaw, and all the Ravenclaws move to Gryffindor


// ============ YOUR WORK HERE ===========





//  ============== END WORK ==============

// TESTS
console.log(houseSwap())