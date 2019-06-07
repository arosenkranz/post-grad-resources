# Constructors

## Recreate the zombie game using constructor functions

### Prerequisites
Install inquirer.

### Overview
In this exercise you are given a completed zombie game. Go ahead and run original.js to test it out.

You may notice that over a hundred lines of code are dedicated to defining our weapons and zombies. That's definitely overkill.

Furthermore, if we wanted to add more zombies or weapons to our game, we would have to write a lot more code to define those new objects.

Using the code in prompt.js, redesign this game so that it uses constructor functions. 

You will need to define constructors for zombies and for weapons.

Your game should run exactly the same as the one in original.js does.

It may be helpful for you to leave both the file you are working on and original.js open next to one another.

### Reminder
The zombie game has a lot of different moving pieces. Several stats are being tracked at once. Here is an overview of all the properties and what they do:
- Name: The name of a weapon or zombie
- Reach: The number of zombies a gun can potentially damage in a given round
- Attack: a range of possible damage. Damage is an array with two indices. The first is the minimum amount of damage a zombie or weapon can do. The second is the maximum amount of damage a zombie or weapon can do. 
- Reliability: The chance (in percentage) a weapon has of being on target.
- Uses: The amount of rounds a weapon can be used.
- Health: The amoun of health a zombie or hero has remaining.
- Agility: The chance (in percentage) a zombie has of dodging an attack from a weapon.


### Instructions
Follow the steps below to complete the assignment. There is a lot of code, but if you follow these steps, you should be able to navigate through it without doing a deep-dive into the code original.js.

You will also notice that each step is found in between comments. This is so you can easily refer back to the corresponding step in this README for instructions. 

You will not need to work outside of the sections demarcated by a step.

1. Navigate to `weapon.js`. In this file, you'll create a constructor called `Weapon`. We will use this constructor to easily create new weapons.

`Weapon` takes the following as arguments:
- name (string)
- reach (number)
- attack (array with two indices)
- risk (number)
- reliability (number)
- uses (number)

`Weapon` has the following properties:
- this.name, set to name 
- this.reach, set to reach
- this.attack, set to attack
- this.risk, set to risk
- this.reliability, set to reliabilitiy
- this.uses, set to uses
- this.didDam, set to false
- this.receivedDam, set to false
- this.roundDamage, set to 0
- this.used, a function which decrements this.uses by 1 when invoked
- this.damageBool, a function that, given a number representing a percentage, returns true or false depending on the probability of that percentage (can be found in original.js)
- this.calcDamage, a function that, given a min and a max (in other words, a range), sets this.roundDamage to a random number within the given range. 

Export the `Weapon` constructor once you've built the constructor.

2. Navigate to `zombie.js`. In this file, you'll create a constructor called `Zombie`. We will use this constructor to easily create new zombies.

`Zombie` takes the following as arguments:
- name (string)
- health (number)
- attack (array with two indices)
- agility (number)


`Zombie` has the following properties:
- this.name, set to name 
- this.health, set to health
- this.attack, set to attack
- this.agility, set to agility
- this.receivedDam, set to false
- this.roundDamage, set to 0
- this.damageBool, a function that, given a number representing a percentage, returns true or false depending on the probability of that percentage (can be found in original.js)
- this.calcDamage, a function that, given a min and a max (in other words, a range), sets this.roundDamage to a random number within the given range. 

Export the `Zombie` constructor once you've built the constructor.

3. Now that we've created constructors for Zombies and Weapons, we can navigate to prompt.js for all the remaining steps.

Require the following:
- inquire
- Your `Weapon` constructor
- Your `Zombie` constructor

4. Create six different weapons using your `Weapon` constructor. Feel free to use the properties given in original.js. If you are unsure what a given property does, please reference `reminder` in this README.

5. Create five different zombies using your `Zombie` constructor. Feel free to use the properties given in original.js. If you are unsure what a given property does, please reference `reminder` in this README.

6. In step 6, you have two options: You can rebuild the game from scratch (using original.js or not), or, using hint.js, you can follow the instructions and build the constructor step by step.
Keep in mind, the completed version will amount to roughly 300 lines of code. The benefit of doing it yourself is that you can truly claim the game as your own creation.  
- If you choose to build it yourself, simply navigate down to STEP 6 in prompt.js * 
- If you want to follow more detailed instructions, navigate to hint.js. Copy/paste paste the constructor into step 6 of prompt.js, and fill out the work. This should make it easier to test.

* Note: if you choose to make this constructor on your own, you may want to give it the following properties (all functions which map to a counterpart in original.js):
- playRound
- pickZombie
- fight
- nextRound
- checkRound