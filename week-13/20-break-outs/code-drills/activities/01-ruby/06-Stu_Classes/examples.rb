#### gets

# In ruby, we don't need to import a package like inquirer as we need to in Node. Instead, interacting with the user through the command line is already built in. 

# In javascript


# inquirer.prompt([{
#      type: "list",
#       name: "userGuess",
#       message: "Enter someting",
#       choices: ["1", "2", "3", "4", "5"]
# }]).then(function(data) {
#   console.log(data.userGuess)
# })



# As you can see in the example above, that's a fair amount of code just to get the user's feedback on one question.

# Ruby, on the other hand, is quite a bit more straightforward. 



answer = gets

# See how much easier that is?

# The gets method will automatically prompt the user for a response. Whatever variable we choose to set the prompt to will be the user's answer.

# Note: Similar to the `.trim()` method in javascript, we can use `.chomps` in ruby to remove any excess whitespace from the user's answer.


#### Classes

# As stated earlier, classes work very similarly in javascript to the way they work in ruby. 

# In javascript: 


# class Person {
#   constructor(name, age, job) {
#     this.name = name,
#     this.age = age,
#     this.job = job
#   }

#   sayHi() {
#     console.log(`Hi, ${this.name}`)
#   }
# }



# In ruby: 


class Person

  attr_reader :name, :age, :job

  def initialize(name, age, job)
    @name = name
    @age = age
    @job = job
  end

  def say_hi
    puts "Hi, #{@name}"
  end

end



# Functionally, the two examples of classes above are almost exactly the same. 

# You can think of `attr_reader` as the arguments passed to the constructor function.

# Conversely, we can have `attr_setter` or attr_accessor`. 
# These names are indicative of what they do. For attr_reader, we can only set values when we instantiate the class. With setter, we can retoractively change those values after we've already instantiated the class. attr_accessor lets us do both. As such, you will probably want to default to "accessor" unless you want some more explicit restrictions on your classes. 

# Similarly, the variables prefixed with `@` act as `this.thing`.

# Let's talk about instantiating an instance of a class...


# var joe = new Person("Joe", 30, "Bus Driver")

joe = Person.new "joe", 30, "Bus Driver"


# Again, the syntax here is very similar. 

# Note: Parentheses are optional when making an instance of a class with ruby.

# Accessing a property or method in a class is the same in both ruby and javascript. 

# In javascript:

# joe.sayHi()


#In ruby:

joe.say_hi()


#### Convert strings to numbers

# In javascript, we can convert string to numbers with the `parseInt()` method. In ruby, that works like this:


string = "53"
# Will return 47
100 - string.to_i


#### Passing n amount of aruments to a method

def print_nums(*others)
  puts others
end