# Ruby

## Classes

### Instructions

In this section, we'll be looking at classes, a pillar of Object-Oriented Programming. 

Similar to constructor functions (and classes in other languages), classes in Ruby let you set up a boilerplate or template for certain categories of data.

For example, I might make a class for cars. Then, I can create different instances of cars using the same class. One might be a Toyota, another a Ford, etc...

In this exercise, we'll make a Store class and an Item class. Then using only the methods and values we've defined within those classes, we'll create stores and their respective inventories. 

* _For steps 1-6, work in definitions.rb_

1. Create a class `Store`. It has the following attributes:
    - `store_name` 
    - `location`
    - `category`
    - `items` 

2. Set some default values for these arguments--values that will be applied to these attributes if they are not explicitly set.
    - `store_name`: "No name set yet"
    - `location`: "No location set yet"
    - `category`: "No category set yet"
    - `items`: [] (an empty array)

3. Give `Store` four separate methods:
    - `print_bio`: Will print, using the class's own attributes, the store's name, location, and category to the console.
    - `print_inventory`: loops through the store's inventory and prints the name of each item in turn.
    - `add_item`: Takes _an indefinite amount of arguments_, where each argument is an item to be added to the store's inventory. Regardless of how many arguments are given, `add_item` adds them all to the store's current inventory.
    - `remove_item`: Takes _an indefinite amount of arguments_, where each argument is an item to be removed from the store's inventory. Regardless of how many arguments are given, `remove_item` removes them all from the store's current inventory.

4. Create a class `Item`. It has the following attributes:
    - `item_name`
    - `price`
    - `stock`

5. Set some default values for these arguments--values that will be applied to these attributes if they are not explicitly set.
    - `item_name`: "No name set yet"
    - `price`: 0
    - `stock`: 0 (amount of items available)

6. Give `Item` three separate methods:
    - `set_price`: takes one argument. Using that argument, it overwrites the old price with the new, given value. 
    - `less_stock`; takes one argument. If the current stock minus the number passed in the argument is less than 0, print that the user must enter a different amount. Refer to the item name directly using the name given as an attribute. If the current stock minus the given amount is equal to or greater than 0, go ahead an subtract that value. 
    - `add_stock`: takes one argument. Adds the value given as an argument to the current stock. 

* _For the following steps, work in unsolved.rb_

7. Require definitions.rb

8. Use every method from both classes you defined in definitions.rb. Make sure each method works as expected.

9. Only attempt this if you have completed the above steps. 

* BONUS CHALLENGE: Make this application interactive. Ask the user what they would like to do. Use only their input create new Stores/Items and/or to use their respective methods.
