def print_space()
  puts ""
  puts "="*30
  puts ""
end

def ask_continue(hero, villain)

  puts "Would you like to attack? y/n"
  answer = gets.chomp
  if answer == "y"
    villain.taunt(hero)
    hero.fight(villain)
  else 
    puts "OK, fighting is bad anyway"
    return  
  end  
end