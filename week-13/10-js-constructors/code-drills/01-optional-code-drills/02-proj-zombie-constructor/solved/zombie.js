//Zombie constructor
function Zombie(name, health, attack, agility) {
  this.name = name
  this.health = health
  this.attack = attack
  this.agility = agility
  this.receivedDam = false
  this.roundDamage = 0

  this.damageBool = function (perc) {
    var comp = Math.floor(Math.random() * 100) + 1

    if (perc - comp > 0) {
      this.receivedDam = false
    } else {
      this.receivedDam = true
    }
  }

  this.calcDamage = function (min, max) {
    this.roundDamage = Math.floor(Math.random() * (max - min) + min);

  }
}

module.exports = Zombie