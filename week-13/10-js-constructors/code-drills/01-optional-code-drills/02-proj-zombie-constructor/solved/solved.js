var inquirer = require("inquirer")
var Weapon = require("./weapon")
var Zombie = require("./zombie")


// OUR HERO'S STATS
var hero = {
  health: 100,
}


//Create new instances of our weapons
var bearHands = new Weapon("Bear Hands", 1, [5, 5], 95, 90, 100000000000000)
var machete = new Weapon("Machete", 1, [40, 60], 80, 90, 5)
var shotgun = new Weapon("Shotgun", 2, [30, 50], 65, 80, 5)
var pistol = new Weapon("Pistol", 1, [25, 40], 50, 75, 5)
var machineGun = new Weapon("Machine Gun", 1, [15, 30], 30, 65, 5)
var sniper = new Weapon("Sniper", 1, [40, 60], 30, 20, 5)
var rpg = new Weapon("RPG", 1, [20, 35], 95, 40, 5)



//Create new instances of zombies
var zombie1 = new Zombie("zombie1", 100, [0, 5], 15)
var zombie2 = new Zombie("zombie2", 90, [1, 6], 18)
var zombie3 = new Zombie("zombie3", 85, [2, 4], 20)
var zombie4 = new Zombie("zombie4", 80, [2, 5], 22)
var zombie5 = new Zombie("zombie5", 60, [7, 10], 10)


//For inquirer prompt
var zombieChoices = ["zombie1", "zombie2", "zombie3", "zombie4", "zombie5"]

//for Gameplay
var zombieFighters = [zombie1, zombie2, zombie3, zombie4, zombie5]


var guns = ["Bear hands", "Machete", "Shotgun", "Pistol", "Machine Gun", "Sniper", "RPG", "View Weapon Stats"]


// Starts the game!
console.log("\nWELCOME TO ZOMBIE FIGHTER PRO. USE STRATEGY AND GRIT TO ELIMINATE THE HORDE OF ONCOMING ZOMBIES. HERE ARE THE WEAPONS YOU CAN CHOOSE. YOU WILL PICK ONE FOR EACH FIGHT!")

console.log("\n===========================================\n")

console.log("Bear hands: Zombies don't feel punches the same way humans do. Only use these as a last resort \n uses: ∞ \n\n",

  "Machete: Go up close and personal for critical damage to a single zombie. \n uses: " + machete.uses + " \n\n",

  "Shotgun: A reliable, close-range weapon. Can hit two zombies at once. \n uses: " + shotgun.uses + " \n\n",

  "Pistol: A solid mid-range weapon. Can hit two zombies at once \n uses: " + pistol.uses + " \n\n",

  "Machine Gun: An erratic weapon. Can hit three zombies at a time though. \n uses: " + machineGun.uses + " \n\n",

  "Sniper: A low-risk, high-reward weapon that can damage a single zombie. It's tough to hit shots with it though. \n uses: " + sniper.uses + " \n\n",

  "RPG: An incredibly difficult weapon to use. If you can manage to get it to work, it will deal damage to up to 4 zombies. \n uses: " + rpg.uses + " \n\n")

var fightZombies = new Game()
fightZombies.playRound();


function Game() {
  // This function holds the game logic
  this.playRound = function () {
    console.log("\n=============================\n")
    for (var i = 0; i < zombieFighters.length; i++) {

      if (zombieFighters[i].health > 0) {

        console.log(zombieFighters[i].name + " Health: ", zombieFighters[i].health)

      }
    }

    console.log("\nHero Health: " + hero.health + "")
    console.log("\n=============================\n")

    var play = this

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

        case "Bear hands":

          bearHands.calcDamage(bearHands.attack[0], bearHands.attack[1])

          bearHands.didDam = bearHands.damageBool(bearHands.reliability)


          bearHands.used()

          play.pickZombie(bearHands)

          break;

        case "Machete":
          machete.calcDamage(machete.attack[0], machete.attack[1])

          machete.didDam = machete.damageBool(machete.reliability)


          machete.used()

          play.pickZombie(machete)
          break;
        case "Shotgun":
          shotgun.calcDamage(shotgun.attack[0], shotgun.attack[1])

          shotgun.didDam = shotgun.damageBool(shotgun.reliability)


          shotgun.used()

          play.pickZombie(shotgun)
          break;
        case "Pistol":
          pistol.calcDamage(pistol.attack[0], pistol.attack[1])

          pistol.didDam = pistol.damageBool(pistol.reliability)


          pistol.used()

          play.pickZombie(pistol)
          break;
        case "Machine Gun":
          machineGun.calcDamage(machineGun.attack[0], machineGun.attack[1])

          machineGun.damageBool(machineGun.reliability)



          machineGun.used()

          play.pickZombie(machineGun)
          break;
        case "Sniper":
          sniper.calcDamage(sniper.attack[0], sniper.attack[1])

          sniper.didDam = sniper.damageBool(sniper.reliability)


          sniper.used()

          play.pickZombie(sniper)
          break;

        case "RPG":
          rpg.calcDamage(rpg.attack[0], rpg.attack[1])

          rpg.didDam = rpg.damageBool(rpg.reliability)


          rpg.used()

          play.pickZombie(rpg)
          break;

        case "View Weapon Stats":
          console.log("Bear Hands:\n reach: 1\n attack: 5 \n risk:95\n reliability: 90 \n uses: ∞\n\n Machete: \n reach: 1\n attack: min(40), max(60)\n risk: 80\n reliability: 90\n uses: " + machete.uses + "\n\nShotgun: \n reach: 2\n attack: min(30), max(50)\n risk: 65\n reliability: 80\n uses: " + shotgun.uses + "\n\nPistol: \n reach: 2\n attack: min(25) max(40)\n risk: 50\n reliability: 75\n uses: " + pistol.uses + "\n\nMachine Gun:\n reach: 3\n attack: min(15), max(30)\n risk: 30\n reliability: 65\n uses: " + machineGun.uses + "\n\nSniper:\n reach: 1\n attack: min(40) max(60)\n risk: 30\n reliability: 20\n uses: " + sniper.uses + "\n\nRPG:\n reach: 4\n attack: min(20), max(35)\n risk: 95\n reliability: 40\n uses: " + rpg.uses + "\n\n")

          play.nextRound()
          break;
      }


    });
  }

  this.pickZombie = function (weapon) {
    var play = this
    inquirer.prompt([
      {
        type: "list",
        name: "zombie",
        message: "Pick a zombie to attack",
        choices: zombieChoices
      }

    ]).then(function (zombie) {
      switch (zombie.zombie) {
        case "zombie1":
          play.fight(zombie1, weapon)
          break;
        case "zombie2":
          play.fight(zombie2, weapon)
          break;
        case "zombie3":
          play.fight(zombie3, weapon)
          break;
        case "zombie4":
          play.fight(zombie4, weapon)
          break;
        case "zombie5":
          play.fight(zombie5, weapon)
          break;
      }

    })
  }

  this.fight = function (zombie, weapon) {
    // Determine reach
    var zombieVictims = []
    zombieVictims.push(zombie)
    for (var i = 0; i < zombieFighters.length; i++) {
      if (zombieVictims.length < weapon.reach && zombieFighters[i].name !== zombie.name) {
        zombieVictims.push(zombieFighters[i])
      }
    }

    if (!weapon.didDam) {
      console.log("\nShot on target")

      for (var i = 0; i < zombieVictims.length; i++) {
       
        zombieVictims[i].damageBool(zombieVictims[i].agility)

        if (zombieVictims[i].receivedDam === true) {
          console.log("\nCongrats, you landed a shot for " + weapon.roundDamage + " damage on " + zombieVictims[i].name + "!")
          zombieVictims[i].health -= weapon.roundDamage

        } else {
          console.log("\n" + zombieVictims[i].name + " dodged your attack")
        }




      }
    } else {
      console.log("\nOooooh, tough miss. Your shot was not on target.")
    }

    //If a zombie is defeated


    for (var i = 0; i < zombieVictims.length; i++) {
      if (zombieVictims[i].health <= 0) {
        console.log("\nCongrats, you defeated " + zombieVictims[i].name)
        //Make the zombie unable to attack anymore
        zombieVictims[i].attack = [0, 0]
        //Remove the zombie as a choice in the inquirer prompt
        zombieChoices.splice(zombieChoices.indexOf(zombieVictims[i].name), 1)
      }
    }



    // If the hero takes damage
    if (!weapon.damageBool(weapon.risk)) {
      
      zombie1.calcDamage(zombie1.attack[0], zombie1.attack[1])
      zombie2.calcDamage(zombie2.attack[0], zombie2.attack[1])
      zombie3.calcDamage(zombie3.attack[0], zombie3.attack[1])
      zombie4.calcDamage(zombie4.attack[0], zombie4.attack[1])
      zombie5.calcDamage(zombie5.attack[0], zombie5.attack[1])
      
      var zombieDamSum = zombie1.roundDamage + zombie2.roundDamage + zombie3.roundDamage + zombie4.roundDamage + zombie5.roundDamage;

      hero.health -= zombieDamSum
      console.log("\nThe hero has been dealt " + zombieDamSum + " damage.")
      console.log("\nThe hero has " + hero.health + " health.")

    } else {
      console.log("\nPhew, that was a close one. You avoided all damage")
    }

    if (weapon.uses < 1) {
      guns.splice(guns.indexOf(weapon.name), 1)
    }

    this.nextRound()
  }

  this.nextRound = function () {
    var play = this
    inquirer.prompt([
      {
        type: "input",
        name: "continue",
        message: "Press ENTER to continue"
      }
    ]).then(function (res) {
      play.checkRound()
    })
  }

  // Created a generic function that checks if the user won or lost.
  this.checkRound = function () {


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
    this.playRound();

  }
}

