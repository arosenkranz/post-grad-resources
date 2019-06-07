// 1. 
const animals = {
  rhino: "mammal",
  eagle: "bird",
  frog: "amphipian",
  shark: "fish",
  tiger: "mammal",
  parrot: "bird"
}

logAnimalsAndTypes = () => {
  const animalNames = Object.keys(animals)
  animalNames.map(anims => {
    console.log(`${anims}: ${animals[anims]}`)
  })
}
logAnimalsAndTypes()



// 2. 
// ES5
function addStrings(str1, str2) {
  return str1 + str2
}

// ES6
addStrings1 = (str1, str2) => str1 + str2

console.log(addStrings("hello", " there"))

console.log(addStrings1("hello", " there"))

// 3. 
// Given this function...
function doStuff(arg1, arg2, callback) {
  callback(arg1, arg2)
}

// In one line of code, invoke the above function, passing in two numbers and an anonymous function which returns their added value.
doStuff(3,3, (num1, num2) => num1 + num2)


// 4.

// ES5

function whoChanging() {
  var counter = 0;
  var bool = true
  var incrementer = 2
  while (bool) {

    if (counter = 20) {
      bool = false
    }

    counter+=incrementer
  }
}


// ES6
whoChanging = () => {
  let counter = 0;
  let bool = true
  const incrementer = 2
  while (bool) {

    if (counter = 20) {
      bool = false
    }

    counter+=incrementer
  }
}

// 5. 
// ES5
function madLibs(occupation, transportVerb, adverb, adjective, animal, presentTenseVerb, adjective2) {
"The "+occupation+" "+transportVerb+" on his/her way to the church very "+adverb+". The surrounding crowd could not believe he/she would do so on such a/an "+adjective+" day. Meanwhile, across the street, an "+animal+" was "+presentTenseVerb+". It was truly a/an "+ adjective2 +" sight to see"
}

// ES6

madlibs = (occupation, transportVerb, adverb, adjective, animal, presentTenseVerb, adjective2) => {
  `The ${occupation} ${transportVerb} on his/her way to the church very ${adverb}. The surrounding crowd could not believe he/she would do so on such a/an ${adjective} day. Meanwhile, across the street, an ${animal} was ${presentTenseVerb}. It was truly a/an ${adjective2} sight to see`
}