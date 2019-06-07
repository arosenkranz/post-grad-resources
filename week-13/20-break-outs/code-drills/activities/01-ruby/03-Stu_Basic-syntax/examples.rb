### prints/puts

# In Ruby, we have two different alternatives to a console.log() in Javascript: print and puts

# Print behaves in the exact same way as console.log(), whereas puts creates a new line after the content of the log. 

# Additionally, parentheses are optional in ruby with puts and print.

print "This is essentially a console.log"

puts "I'm creating a new line below myself"

print("If ya feel like it, you can use parentheses.")


### Variables

# Variables in ruby work almost exactly the same as they do in Javascript. The only difference is that there is no need for any of the variable declaration key words (var, let, const). 


word = "word"

number = 8

animals = ["rhino", "hippo", "tiger"]


### Hashes
# Arrays, numbers, strings and booleans are the same in ruby and javascript.

# Objects however, are a little different. In Ruby, they're called hashes.

# You can write them in a couple of different ways:


profile1 = {
  "name": "John Die",
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


#We can access the values in hashes like so:

name = profile1["name"]

puts name

# OR, if we used hash rockets

name_alt = profile2[:name]

puts name_alt

### Array methods

# Arrays in Ruby look the same as arrays in javascript. However, the methods surrounding arrays are quite different.

# For example, we have a couple of alternatives to the push method or array destructuring in javascript:

nums = [1,2,3,4]

# This will add all of these values in the array below to the array above.
nums << [5,6,7,8]

# Or
# This functions exactly the same as the line of code above

nums += [9,10,11,12]

puts nums

# Removing elements from arrays is a lot more straightforward in ruby too:


evenNums = [1,2,3,4,5,6,7,8,9,10]

evenNums -= [1,3,5,7,9,11]

puts evenNums # Returns all numbers in the first array that were not present in the second


# Using variables within strings, we must use double quotes

person = "Joe"

puts "Hello, my name is #{person}"
