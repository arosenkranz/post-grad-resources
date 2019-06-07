patsel_grocery = {
  :owner => "Sasha P",
  :location => "San Francisco",
  :num_stores => 8,
  :foods => ["beans", "cream cheese", "hummus", "guacamole", "cookies", "pizza", "twix", "peach"]
}

# 1.
patsel_grocery[:foods].each do | food |
  puts food
end 

# 2.
all_foods = patsel_grocery[:foods]

patsel_grocery[:foods] = []

count = 0

while count < all_foods.length do
  patsel_grocery[:foods] << {
      :name => all_foods[count],
      :id => count
  }
  count += 1  
end  

print patsel_grocery[:foods]

#3
gone_prods = []

patsel_grocery[:foods].each do | food |
  if food[:id] % 2 != 0
    gone_prods << food
  end  
end 


#4
patsel_grocery[:foods] -= gone_prods

puts patsel_grocery[:foods]

#5

patsel_grocery[:foods].each do | food |
  food[:price] = 2.50
end 

puts patsel_grocery[:foods]