class Hero
  attr_reader :name, :power, :health, :attack

  def initialize(name, power, health, attack)
    @name = name
    @power = power
    @health = health
    @attack = attack
  end
  
  def fight(opponent)
    opponent.lose_health(@attack)
    if opponent.health < 0 
      puts "#{opponent.name} health: #{opponent.health}"
      puts "You have destroyed #{opponent.name} and restored balance to the world!"
      exit
    else   
      puts "You have weakened #{opponent.name}. #{opponent.name} now has #{opponent.health} health."
      @health = @health.to_i - opponent.attack.to_i
      if @health < 0
        puts "#{opponent.name} has struck back. The attack was fatal. The hero has been defeated"
        puts "#{@name} health: #{@health}"
        exit
      else   
        puts "#{opponent.name} has struck back. You survived with #{@health} health"
      end  
    end    
  end

end  

class Villain
  attr_reader :name, :power, :health, :attack

  def initialize(name, power, health, attack)
    @name = name
    @power = power
    @health = health
    @attack = attack
  end


  def taunt(opponent)
    puts "Prepare to meet your maker, #{opponent.name}! I don't care if you can #{opponent.power}, or if you have #{opponent.attack} attack!"
  end
  
  def lose_health(enemy_attack)
    @health = @health.to_i - enemy_attack.to_i
  end  
end  