# Ruby

## Syntax basics - store owner

## Intro
We're going to be setting up shop in Ruby in the follwing exercises. Ruby is a programming language like Javascript (`except it can only be used on the back-end`).


## Syntax

### Prints/puts
In Ruby, we have two different alternatives to a console.log() in Javascript: `print` and `puts`

`Print` behaves in the exact same way as console.log(), whereas `puts` creates a new line after the content of the log. 

Additionally, parentheses are optional in ruby with `puts` and `print`.

```ruby

print "This is essentially a console.log"

puts "I'm creating a new line below myself"

print("If ya feel like it, you can use parentheses.")
```

### Variables
Variables in ruby work almost exactly the same as they do in Javascript. The only difference is that there is no need for any of the variable declaration key words (`var`, `let`, `const`). 

```ruby
word = "word"

number = 8

animals = ["rhino", "hippo", "tiger"]
```

### Hashes
Arrays, numbers, strings and booleans are the same in ruby and javascript.

Objects however, are a little different. In Ruby, they're called hashes.

You can write them in a couple of different ways:

```ruby
profile1 = {
  "name": "John Doe",
  "phone": 415-555-5555,
  "email": "john@doe.com"
}


# OR
# This arrow notation is called a hash rocket
profile2 = {
  :name => "John Doe",
  :phone => 415-555-5555,
  :email => "john@doe.com"
}
```

We can access the values in hashes like so:

```ruby

name = profile["name"]

# OR, if we used hash rockets

name = profile[:name]
```


### Array methods
Arrays in Ruby look the same as arrays in javascript. However, the methods surrounding arrays are quite different.

For example, we have a couple of alternatives to the push method or array destructuring in javascript:

```ruby

nums = [1,2,3,4]
# This will add all of these values in the array below to the array above.
nums << [5,6,7,8]

# Or
# This functions exactly the same as the line of code above
nums += [5,6,7,8]

```

Removing elements from arrays is a lot more straightforward in ruby too:

```ruby
evenNums = [1,2,3,4,5,6,7,8,9,10]

evenNums -= [1,3,5,7,9]

print evenNums #Returns all numbers in the first array that were not present in the second
```


## Instructions
In this exercise, we'll be setting up a shop using ruby!

First, let's make sure you have ruby installed. Within your terminal/command line simply type `ruby -v`

If you do not have ruby installed, fret not, you can install it from their [official website](https://www.ruby-lang.org/en/downloads/).

To run a file in ruby, simply enter `ruby` (just as you would `node`) and then the file name in the command line.

In `prompt.rb`: 

1. Create your store's profile using a hash. You must include at least 4 different keys, and one of those keys must point to an array of items your store sells. The keys can include things like number of store locations, headquarters, profits, etc...

2. Print out a short bio about your store using some of the keys in the hash you just created.

3. Print all the items your store sells.

4. Add 5 new items to your "warehouse" (array) and print out your updated stores.

5. Remove three items from your "warehouse" (array) and print out your updated stores.