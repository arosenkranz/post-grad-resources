// ====================== STEP 4 ======================
//Require Inquirer, the Weapon constructor, and the Zombie Constructor



// ====================================================


// OUR HERO'S STATS
var hero = {
  health: 100,
}


// ====================== STEP 4 ======================
//CREATE 6 WEAPONS



// ====================================================




// ====================== STEP 5 ======================
//CREATE 5 ZOMBIES



// ====================================================


//Used for the inquire prompt. When a zombie is defeated, it is removed from this array so that the user can no longer choose to attack it. If you have not chosen the strings below as the names for your zombies, change the values in this array to the names you chose for your zombies.
var zombieChoices = ["zombie1", "zombie2", "zombie3", "zombie4", "zombie5"]

//For Gameplay. If you have not chosen the variable names below as the names for your zombies, change the values in this array to the names you chose for your zombies.
var zombieFighters = [zombie1, zombie2, zombie3, zombie4, zombie5]

// For inquirer prompt. When a gun has no more uses, it is removed from this array.
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

var fightZombies = new Game();

fightZombies.playRound();


// ====================== STEP 6: CHALLENGE ======================
//CREATE A CONSTRUCTOR FOR THE GAME



// ====================================================