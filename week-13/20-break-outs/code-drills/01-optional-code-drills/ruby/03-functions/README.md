# Ruby

## Functions and imports - store owner pt.3 

## Intro
Functions in ruby work and look a lot like they do in javascript. When we covered loops, we saw that ruby did not inlcude curly braces as a way to contain logic. The same is true for ruby's functions. 

We will also see that import content from other files. 

## Syntax

### Functions
Rather than using curlies, we use indentation and the `end` keyword to contain our logic. 

So in javascript, a typical function will look like this:

```javascript

function math(num1, num2) {
  return num1 + num2
}

```

Whereas in ruby, the same function looks like:

```ruby
def math(num1, num2) 
  return num1 + num2
end

```

### Imports
Remember how we require files or packages in Node? We can actually use the exact same keyword here!

In Javascript, it looked like this
```javascript
require("./helpers")
```

In ruby, it's almost exactly the same!
```ruby
require "./helpers" 
```

If we had functions written in the helpers file referenced above, we could simply refer to them as though they were in the file we're currently working in. In other words, no need for a helpers.function_name. We could simply refer to function_name as though it was defined in the file we're currently working in. 


## Instructions

1. In this exercise, you'll notice you have two files to work in rather than the single prompt.rb you're used to. `helpers.rb` will host all of the functions we'll write in this exercise. They'll be invoked in `prompt.rb`. Paste your shop hash inside of `prompt.rb`.

2. Require `helpers.rb` in `prompt.rb`.

3. In `helpers.rb`, write a function called `print_spaces`, which prints 20 equals signs ("=").

4. In `helpers.rb`, write a function called `convert_items_to_obj`, which takes an hash and a key as arguments. `convert_items_to_obj` converts each item in your items array into a hash. Each hash should have a key of `name`, which points to the item originally in that spot in the array, a key of `id`, which points to a unique id, a key of `sell_price`, which points to the value 2.50 (a float), and a key of `cost`, which points to the value 1.15 (a float).

5. In `helpers.rb`, write a function called `add_props`, which takes a hash, a key and a value as arguments. `add_props` adds the given key to the given hash. The given key points to the given value. Your function should also print out the value it add to the given hash. 

6. In `helpers.rb`, write a function called `net_profit`, which takes in an array as an argument. `net_profit` calculates the sum of every item's sell_price, and every item's cost. It subtracts the total cost from the cumulative sell price, and returns a net profit.

7. In `helpers.rb`, write a function called `goodbye`, which takes a name (string) as an argument. `goodbye` writes a farewell message addressed to the given name. 

8. Invoke each function from `helpers.rb` in `prompt.rb`. Each function should be invoked in between to invocations of the `print_spaces` function.
  - Any time a hash is taken as an argument, pass in your own store as that argument. 
  - for `add_props`, add a store owner with your own name as the value. 
  - Print out (or use `puts`) the `net_profit` function. 
  - Pass in the added store owner key as an argument to your `goodbye` function.

