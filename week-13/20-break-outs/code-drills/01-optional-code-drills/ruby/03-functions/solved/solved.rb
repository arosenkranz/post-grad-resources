require "./helpers"


patsel_grocery = {
  :owner => "Sasha P",
  :location => "San Francisco",
  :num_stores => 8,
  :foods => ["beans", "cream cheese", "hummus", "guacamole", "cookies", "pizza", "twix", "peach"]
}


print_spaces()

convert_items_to_obj(patsel_grocery, :foods)

print_spaces()

add_props(patsel_grocery, "other owner", "Jimmy Tutron")

print_spaces()

puts net_profit(patsel_grocery[:foods])

print_spaces()

goodbye(patsel_grocery[:owner])

print_spaces()