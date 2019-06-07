# Ruby

## Methods (functions) and imports

## Intro
Methods in ruby work and look a lot like functions in javascript. When we covered loops, we saw that ruby did not inlcude curly braces as a way to contain logic. The same is true for ruby's methods. 

In addition to covering methods, we will also discuss importing content from other files. 

## Instructions

1. In `helpers.rb`, create a method `print_spaces` which simply displays 20 `=` to your console.
    - Note: Multiplying strings in ruby works similarly to javascript's `repeat` method.

2. In `helpers.rb`, create a method `convert_items_to_hash` which takes in two arguments: a hash and a key, where the key points to an array. This method converts each element in the array to a hash (object). Each hash has four keys:
    - name: set to value in element in the array provided to this function with the key
    - id: each unique from the next. This value will increment for each element in the array.
    - sell_price: set to 2.50
    - cost: set to 1.15
This method then prints the given key in the given array to the console. 

3. In `helpers.rb`, create a method `add_props`, which takes a hash, a key and a value as arguments. This method adds a new key set to the given value as part of the given hash. It then prints the value it just added to the hash.

4. In `helpers.rb`, create a method `net_profit` which takes an array of hashes as an argument, where each has has the keys: "sell_price" and "cost". The function tallies the sum of the sell_price values as well as the sum of the cost values. It returns the difference. 

5. In `helpers.rb`, create a method `goodbye` which takes a string as a argument. It prints a goodbye message addressed to whichever string was passed as an argument. 

6. In `solved.rb` require `helpers.rb`

7. Paste the hash you made in the last exercise into `solved.rb`

8. Invoke all of the methods you create in `helpers.rb`
    - In between each method, invoke `print_spaces`
    - Pass your store hash and its inventory as arguments to `convert_items_to_hash`
    - Pass your store hash, and a key and value of your choosing as arguments to `add_props`
    - Pass your store's inventory as an argument to `net_profit`
    - Pass any string as an argument to `goodbye`

