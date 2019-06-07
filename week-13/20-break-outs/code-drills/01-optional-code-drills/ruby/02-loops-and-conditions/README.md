# Ruby

## Loops and conditions - store owner pt.2 

## Intro
In the last exercise, we covered some of the most basic syntax in Ruby. In this exercise, we'll be diving a little deeper, covering loops and conditions. 

## Syntax
While there are some similarities in Ruby's and Javascipt's syntax, there are also several differences. 

One example is that Ruby does not use curly braces as containers for logic. Instead, Ruby uses a `do` and `end` syntax. You will see some examples of how this plays out in the examples below. 

### Each loops
Similar to javascript, ruby has a .each method. 

```ruby
# array is the array we're looping through. item is an arbitrary word we've chosen to represent each element of our array in turn. end is essentially a closing curly brace. 
array.each do | item |
  print item
end 

```
### While loops
while loops start in much the same way they do in javascript, with the word `while`. There are a couple of differences though. 

For one, we don't enclose the duration of the loop within parentheses. We can simply write it next to the keyword `while`. Instead of an opening curly brace, we use the word `do`. Instead of a closing curly brace, we use the word `end`.

```ruby

count = 0

while count < 10 do
  print count 
  count +=1
end  

```

### If statements
If statements work are syntactically very similar to the loops covered above. The condition is `not` enclosed in parentheses, and we finish our logic with the keyword `end`. However, there is no need for the keyword `do` in ruby if statements. 

```ruby
number = 8

if number == 8 
  print number
end  

```

## Instructions
In this exercise, we'll be continuing with the store theme.

To start, copy the dictionary you created in the last exercise, and paste it into `prompt.rb`

1. Loop through the items in your store, and print each item on a separate line.

2. Convert each item in your items array into a hash. Each hash should have a key of name, which points to the item originally in that spot in the array. They should also have a key of id, which points to a unique id. You should already have the tools to accomplish this, but there is pseudocode for you in prompt.rb if you get lost.

3. Your store has had to cut down on production because of rising costs! Dynamically create an array of every other item from your inventory (So if my inventory was [1,2,3,4,5,6], I would create [2,4,6]).

4. No that we've listed all the items to be reomved, we're going to go ahead and remove them. Remove all the items in the array you created in the last exercise from your inventory.

5. To keep our store afloat, we need to set prices for the rest of our items. For each item, add a key of price and set it to `2.50`.