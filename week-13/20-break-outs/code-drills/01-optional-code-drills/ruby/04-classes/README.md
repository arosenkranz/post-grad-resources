# Ruby

## Classes

### Heroes vs. Villains
In this exercise, we'll be making a hero and villains game using `classes` in Ruby. 

`Classes` in ruby work very similarly to classes and constructors in Javascript. 

## Syntax

#### gets

In ruby, we don't need to import a package like inquirer as we need to in Node. Instead, interacting with the user through the command line is already built in. 

In javascript

```javascript

inquirer.prompt([{
     type: "list",
      name: "userGuess",
      message: "Enter someting",
      choices: ["1", "2", "3", "4", "5"]
}]).then(function(data) {
  console.log(data.userGuess)
})

```

As you can see in the example above, that's a fair amount of code just to get the user's feedback on one question.

Ruby, on the other hand, is quite a bit more straightforward. 

```ruby

answer = gets

```

See how much easier that is?

The gets method will automatically prompt the user for a response. Whatever variable we choose to set the prompt to will be the user's answer.

Note: Similar to the `.trim()` method in javascript, we can use `.chomps` in ruby to remove any excess whitespace from the user's answer.


#### Classes

As stated earlier, classes work very similarly in javascript to the way they work in ruby. 

In javascript: 

```javascript

class Person {
  constructor(name, age, job) {
    this.name = name,
    this.age = age,
    this.job = job
  }

  sayHi() {
    console.log(`Hi, ${this.name}`)
  }
}

```

In ruby: 
```ruby

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

```

Functionally, the two examples of classes above are exactly the same. 

You can think of `attr_reader` as the arguments passed to the constructor function.

Similarly, the variables prefixed with `@` act as `this.thing`.

Let's talk about instantiating an instance of a class...

```javascript
var joe = new Person("Joe", 30, "Bus Driver")
```

```ruby
joe = Person.new "joe", 30, "Bus Driver"
```

Again, the syntax here is very similar. 

Note: Parentheses are optional when making an instance of a class with ruby.

Accessing a property or method in a class is the same in both ruby and javascript. 

In javascript:
```javascript
joe.sayHi()
```

In ruby:
```ruby
joe.say_hi()
```

#### Convert strings to numbers

In javascript, we can convert string to numpers with the `parseInt()` method. In ruby, that works like this:

```ruby
string = "53"
# Will return 47
100 - string.to_i
```


## Instructions

In this exercise, we'll be making a hero vs. villain command-line game.

The goal of this exercise is to give the user a chance to give us some information about both a hero and a villain. Once we've gathered that information, we'll use it to feed data to both a hero and villain class we've made.

Finally, using methods from those classes, we'll make the hero and villain fight. If the fight isn't resolved after invoking those methods, we'll offer the user the chance to fight again. 

1. Create two additional files:
  - `helpers.rb`
  - `definitions.rb`

2. In `prompt.rb`, require both of the files you created in the last step.

3. First, we'll create our helper functions. In `helpers.rb`, Create a function `print_space`, which `puts` 30 `=` (equals signs) consecutively. This should be sandwhiched in between to empty string (in order to create blank lines on the comman line).

4. Also in `helpers.rb`, create a function `ask_continue`.
This function: 
- Takes two arguments:
  - hero
  - villain
- Asks the user "Would you like to attack? y/n"
- Retrieves the user's answer to the above question. 
- If the user answers "y" (yes):
  - Invoke the taunt method (which we'll create soon) from the villain argument. Pass the hero as an argument to this method.
  - Invoke the fight method from the hero argument. Pass villain as an argument.
- If the user answers no, puts "OK, fighting is bad anyway", and finish the script

5. Now in `definitions.rb`, we'll create our hero class, and our villain class. 

6. First, create a class called `Hero`.
- Hero has the following properties:
  - name
  - power
  - health
  - attack
- Create a method called fight
  - fight takes and argument `oponent`.
  - invoke the lose_health method of the `oponent` argument. 
  - Create a condition for when the `oponent`'s health drops below 0. 
  - Within that condition, display the opponents name and remaining health (the lose_health method we invoked above should reduce it. Don't worry, we'll write that logic soon).
  - Also within that condition, congratulate the user on defeating the villain (refer to th villain by his/her name).
  - If the oponent still has health, that is to say, more than 0 health, inform the user they have weakened their opponent, and display the oponent's remaining health.
  - Reduce the hero's health by the opponent's attack
  - Create a new condition (this condition is found within the condition of the user having more than 0 health). This condtion will trigger if the hero's health drops below 0.
    - Inform the user that the hero has been defeated.
    - Show the user the hero's health (should be 0 or a negative value)
    - Exit the script
  - If the hero has more than 0 health after the opponent's attack, inform the user that the hero has survived, and how much health the hero has left.

7. Create a class called `Villain`
- Villain has the following properties:
  - name
  - power
  - health
  - attack
- Create a method `taunt` that takes an argument `opponent`.
  - When invoked, the taunt method puts: "Prepare to meet your maker, <Insert opponent name>! I don't care if you can <Insert opponent power>, or if you have <Insert opponent attack> attack!"
- Create a method `lose_health`, which takes an argument `enemy_attack`. This method reduces the villain's health by the enemy's attack.

8. 