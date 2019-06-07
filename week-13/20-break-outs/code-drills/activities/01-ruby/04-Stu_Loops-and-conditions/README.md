# Ruby

## Loops and Conditions

### Instructions
In this exercise, we'll be continuing with the store theme.

To complete this exercise, you'll need to learn some ruby syntax. Open up `examples.rb` to examine some code. Everything you need to complete this exercise will be found in that file.

To start, copy the dictionary you created in the last exercise, and paste it into prompt.rb

1. Loop through the items in your store, and print each item on a separate line.

2. Convert each item in your items array into a hash. Each hash should have a key of name, which points to the item originally in that spot in the array. They should also have a key of id, which points to a unique id. You should already have the tools to accomplish this, but there is pseudocode for you in prompt.rb too. 

3. Your store has had to cut down on production because of rising costs! Dynamically create an array of every other item from your inventory (So if my inventory was [1,2,3,4,5,6], I would create [2,4,6]).

4. No that we've listed all the items to be reomved, we're going to go ahead and remove them. Remove all the items in the array you created in the last exercise from your inventory.

5. To keep our store afloat, we need to set prices for the rest of our items. For each item, add a key of price and set it to `2.50`.