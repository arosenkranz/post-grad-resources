# 1. Create you store's profile using a hash. You must include at least 4 different keys, and one of those keys must point to an array of items your store sells.
patsel_grocery = {
  :owner => "Sasha P",
  :location => "San Francisco",
  :num_stores => 8,
  :foods => ["beans", "cream cheese", "hummus", "guacamole", "cookies", "pizza", "twix", "peach"]
}

# 2. Print out a short bio about your store using some of the keys in the hash you just created.

puts "Welcome to Patsel Grocery. We have #{patsel_grocery[:num_stores]} locations in #{patsel_grocery[:location]}!"
puts("="*10)

# 3. Print all the items your store sells.
puts "At Patsel Grocery, we sell #{patsel_grocery[:foods]}."
puts("="*10)

# 4. Add 5 new items to your warehouse and print out your updated stores.
patsel_grocery[:foods] << ["half and half", "English muffins", "beer", "eggs", "Cap\'n Crunch"]

puts patsel_grocery[:foods]
puts("="*10)

# 5. Remove three items from your warehourse and print out your updated stores.

patsel_grocery[:foods] -= ["pizza", "twix", "Cap\'n Crunch"]

puts patsel_grocery[:foods]
puts("="*10)

