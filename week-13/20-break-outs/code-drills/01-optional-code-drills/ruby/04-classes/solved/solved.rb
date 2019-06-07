# Import all other files
require "./helpers"
require "./definitions"


def start_fight()

  puts "Heroes VS. Villains! The battle for Earth!"

  print_space()
  
  # Gather hero info
  puts "First, please tell us about the hero"

  puts "What is the hero's name?"

  hero_name = gets.chomp

  puts "What is the hero's power?"

  hero_power = gets.chomp

  puts "How much health does the hero have?"

  hero_health = gets.chomp

  puts "What is the hero's attack power?"

  hero_attack = gets.chomp

  print_space()

  # Initialize new hero
  new_hero = Hero.new hero_name, hero_power, hero_health, hero_attack

  # Gather villain info
  puts "Now, please tell us about the villain"

  puts "What is the villain's name?"

  villain_name = gets.chomp

  puts "What is the villain's power?"

  villain_power = gets.chomp

  puts "How much health does the villain have?"

  villain_health = gets.chomp

  puts "What is the villain's attack power?"

  villain_attack = gets.chomp

  print_space()

  new_villain = Villain.new villain_name, villain_power, villain_health, villain_attack

  new_hero.fight(new_villain)
  puts "Our combatants are ready! Time to fight! "

  ask_continue(new_hero, new_villain)
end  


start_fight()