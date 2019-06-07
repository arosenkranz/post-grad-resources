var inquirer = require("inquirer");


// OUR HERO'S STATS
var hero = {
  health: 100,
}

//Game vars
var playerDam = 0;
var playerDidDam = false;


//Game functions
function calcDamage(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function damageBool(perc) {
  var comp = Math.floor(Math.random() * 100) + 1

  if (perc - comp > 0) {
    return false
  } else {
    return true
  }
}


//For inquirer prompt
var zombieChoices = ["zombie1", "zombie2", "zombie3", "zombie4", "zombie5"]

//For object lookup
var zombieIndex = ["zombie1", "zombie2", "zombie3", "zombie4", "zombie5"]

var weapons = {
  bareHands: {
    name: "Bare Hands",
    //number of zombies affected
    reach: 1,
    //Range of possible damage
    attack: [5, 5],
    //chance of landing damage (%)
    accuracy: 90,
    //"health" of gun
    uses: 1000000000000000
  },

  machete: {
    name: "Machete",
    //number of zombies affected
    reach: 1,
    //Range of possible damage
    attack: [40, 60],
    //chance of landing damage (%)
    accuracy: 90,
    //"health" of gun
    uses: 5
  },

  shotgun: {
    name: "Shotgun",
    //number of zombies affected
    reach: 2,
    //Range of possible damage
    attack: [30, 50],
    accuracy: 80,
    //"health" of gun
    uses: 5
  },

  pistol: {
    name: "Pistol",
    //number of zombies affected
    reach: 2,
    //Range of possible damage
    attack: [25, 40],
    accuracy: 75,
    //"health" of gun
    uses: 5
  },

  machineGun: {
    name: "Machine Gun",
    //number of zombies affected
    reach: 3,
    //Range of possible damage
    attack: [15, 30],
    accuracy: 65,
    //"health" of gun
    uses: 5
  },

  sniper: {
    name: "Sniper",
    //number of zombies affected
    reach: 1,
    //Range of possible damage
    attack: [75, 90],
    accuracy: 50,
    //"health" of gun
    uses: 3
  },

  rpg: {
    name: "RPG",
    //number of zombies affected
    reach: 4,
    //Range of possible damage
    attack: [20, 35],
    accuracy: 40,
    //"health" of gun
    uses: 5
  }
}

var zombies = {

  zombie1: {
    health: 100,
    attack: [0, 5],
    accuracy: 15
  },

  zombie2: {
    health: 90,
    attack: [1, 6],
    accuracy: 18
  },

  zombie3: {
    health: 85,
    attack: [2, 4],
    accuracy: 20
  },


  zombie4: {
    health: 80,
    attack: [2, 5],
    accuracy: 22
  },


  zombie5: {
    health: 60,
    attack: [7, 10],
    accuracy: 10
  }
}

var guns = ["Bare hands", "Machete", "Shotgun", "Pistol", "Machine Gun", "Sniper", "RPG", "View Weapon Stats"]


// Created a function that checks if the user won or lost.
function checkRound() {


  console.log("");
  console.log("");

  // If the user has less than 0 health.... then the user lost.
  if (hero.health <= 0) {

    console.log("###############################################");
    console.log("");
    console.log("Game over dude. It looks like you're dead.");
    console.log("");
    console.log("###############################################");

    // Exit the game
    process.exit();
  }



  // If the zombie has less than 0 health.... then the user won.
  if (zombieChoices.length === 0) {

    console.log("###############################################");
    console.log("");
    console.log("Victory! You defeated the zombies and survived!");
    console.log("");
    console.log("###############################################");

    // Exit the game
    process.exit();
  }

  // After performing the "check", the next round is initiated.
  playRound();

}


// This function holds the game logic
function playRound() {
console.log("\n=============================\n")
  for (var i = 0; i < zombieIndex.length; i++) {
    // Pass in the names of the zombies in the array to locate them in the object.
    var zIndex = "zombie" + (i + 1)

    if (zombies[zIndex].health > 0) {
      
      console.log(zombieIndex[i] + " Health: ", zombies[zIndex].health)

    }
  }
  
  console.log("\nHero Health: " + hero.health + "")
  console.log("\n=============================\n")


  // We create a list prompt. Specifying that the user must pick a random number between 1 and 5.
  inquirer.prompt([
    {
      type: "list",
      name: "gun",
      message: "Choose your Weapon",
      choices: guns
    }

  ]).then(function (game) {
    console.log("You chose a " + game.gun + "!")
    switch (game.gun) {

      case "Bare hands":
        playerDam = calcDamage(weapons.bareHands.attack[0], weapons.bareHands.attack[1]);
        playerDidDam = damageBool(weapons.bareHands.accuracy)

        weapons.bareHands.uses--

        pickZombie(weapons.bareHands)
        break;
      case "Machete":
        playerDam = calcDamage(weapons.machete.attack[0], weapons.machete.attack[1]);
        playerDidDam = damageBool(weapons.machete.accuracy)
        weapons.machete.uses--
        pickZombie(weapons.machete)
        break;
      case "Shotgun":
        playerDam = calcDamage(weapons.shotgun.attack[0], weapons.shotgun.attack[1]);
        playerDidDam = damageBool(weapons.shotgun.accuracy)
        weapons.shotgun.uses--
        pickZombie(weapons.shotgun)
        break;
      case "Pistol": 
        playerDam = calcDamage(weapons.pistol.attack[0], weapons.pistol.attack[1]);
        playerDidDam = damageBool(weapons.pistol.accuracy)
        weapons.pistol.uses--
        pickZombie(weapons.pistol)
        break;
      case "Machine Gun":
        playerDam = calcDamage(weapons.machineGun.attack[0], weapons.machineGun.attack[1]);
        playerDidDam = damageBool(weapons.machineGun.accuracy)
        weapons.machineGun.uses--
        pickZombie(weapons.machineGun)
        break;
      case "Sniper":
        playerDam = calcDamage(weapons.sniper.attack[0], weapons.sniper.attack[1]);
        playerDidDam = damageBool(weapons.sniper.accuracy)
        weapons.sniper.uses--
        pickZombie(weapons.sniper)
        break;

      case "RPG":
        playerDam = calcDamage(weapons.rpg.attack[0], weapons.rpg.attack[1]);
        playerDidDam = damageBool(weapons.rpg.accuracy)
        weapons.rpg.uses--
        pickZombie(weapons.rpg)

        break;

        case "View Weapon Stats":
        console.log( "Bare hands:\n reach: 1\n attack: 5\n accuracy: 90 \n uses: ∞\n\n Machete: \n reach: 1\n attack: min(40), max(60)\n accuracy: 90\n uses: "+ weapons.machete.uses +"\n\nShotgun: \n reach: 2\n attack: min(30), max(50)\n accuracy: 80\n uses: "+ weapons.shotgun.uses +"\n\nPistol: \n reach: 2\n attack: min(25) max(40)\n accuracy: 75\n uses: "+ weapons.pistol.uses +"\n\nMachine Gun:\n reach: 3\n attack: min(15), max(30)\n accuracy: 65\n uses: "+ weapons.machineGun.uses +"\n\nSniper:\n reach: 1\n attack: min(40) max(60)\n accuracy: 20\n uses: "+ weapons.sniper.uses +"\n\nRPG:\n reach: 4\n attack: min(20), max(35)\n accuracy: 40\n uses: "+ weapons.rpg.uses +"\n\n")

        nextRound()
        break;
    }


  });
}

function pickZombie(weapon) {
  inquirer.prompt([
    {
      type: "list",
      name: "zombie",
      message: "Pick a zombie to attack",
      choices: zombieChoices
    }

  ]).then(function (zombie) {

    // Determine reach
    var zombieVictims = []
    zombieVictims.push(zombie.zombie)
    for (var i = 0; i < zombieChoices.length; i++) {
      if (zombieVictims.length < weapon.reach && zombieChoices[i] !== zombie.zombie) {
        zombieVictims.push(zombieChoices[i])
      }
    }

    if (!playerDidDam) {
      console.log("\nShot on target")
      for (var i = 0; i < zombieVictims.length; i++) {
          console.log("\nCongrats, you landed a shot for " + playerDam + " damage on " + zombieVictims[i] + "!")
          zombies[zombieVictims[i]].health -= playerDam
      }
    } else {
      console.log("\nOooooh, tough miss. Your shot was not on target.")
    }

    //If a zombie is defeated
      for (var i = 0; i < zombieVictims.length; i++) {
        if (zombies[zombieVictims[i]].health <= 0) {
          console.log("\nCongrats, you defeated " + zombieVictims[i])
          //Make the zombie unable to attack anymore
          zombies[zombieVictims[i]].attack = [0, 0]
          //Remove the zombie as a choice in the inquirer prompt
          zombieChoices.splice(zombieChoices.indexOf(zombieVictims[i]), 1)
        }
      }



    // If the hero takes damage
      var zombieDamSum = calcDamage(zombies.zombie1.attack[0], [1]) + calcDamage(zombies.zombie2.attack[0], [1]) + calcDamage(zombies.zombie3.attack[0], [1]) + calcDamage(zombies.zombie4.attack[0], [1]) + calcDamage(zombies.zombie5.attack[0], [1]);

      hero.health -= zombieDamSum
      console.log("\nThe hero has been dealt " + zombieDamSum + " damage.")
      console.log("\nThe hero has " + hero.health + " health.")


    
    if (weapon.uses < 1) {
      guns.splice(guns.indexOf(weapon.name), 1)
    }

    nextRound()
  })
}

function nextRound() {
  inquirer.prompt([
    {
      type: "input",
      name:"continue",
      message: "Press ENTER to continue"
    }
  ]).then(function(res) {
    checkRound()
  })
}


// Starts the game!

console.log("\nWELCOME TO ZOMBIE FIGHTER PRO. USE STRATEGY AND GRIT TO ELIMINATE THE HORDE OF ONCOMING ZOMBIES. HERE ARE THE WEAPONS YOU CAN CHOOSE. YOU WILL PICK ONE FOR EACH FIGHT!")

console.log("\n===========================================\n")

console.log("Bare hands: Zombies don't feel punches the same way humans do. Only use these as a last resort \n uses: ∞ \n\n", 

"Machete: Go up close and personal for critical damage to a single zombie. \n uses: " + weapons.machete.uses + " \n\n", 

"Shotgun: A reliable, close-range weapon. Can hit two zombies at once. \n uses: " + weapons.shotgun.uses + " \n\n", 

"Pistol: A solid mid-range weapon. Can hit two zombies at once \n uses: " + weapons.pistol.uses + " \n\n", 

"Machine Gun: An erratic weapon. Can hit three zombies at a time though. \n uses: " + weapons.machineGun.uses + " \n\n", 

"Sniper: A low-risk, high-reward weapon that can damage a single zombie. It's tough to hit shots with it though. \n uses: " + weapons.sniper.uses + " \n\n", 

"RPG: An incredibly difficult weapon to use. If you can manage to get it to work, it will deal damage to up to 4 zombies. \n uses: " + weapons.rpg.uses + " \n\n")

playRound();
