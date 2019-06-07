[Return to Home](../../../README.md)

<hr>

# Student Resources

## Table of Contents

### Terminology & Links

* [Ruby](#ruby)
    1. [Ruby Installation](#Ruby-installation)
    2. [Ruby Variables](#ruby-variables)
    3. [if, elif, and else](#if,-elif,-and-else)
    4. [Booleans](#booleans)
    5. [Numeric Types](#Numeric-Types-—-int,-float,-complex)
    6. [For Loops](#for-loops)
    7. [Methods](#methods)
* [Python](#python)
    1. [Python Installation](#python-installation)
    2. [Python Variables](#python-variables)
    3. [if, elif, and else](#if,-elif,-and-else)
    4. [Booleans](#booleans)
    5. [Numeric Types](#Numeric-Types-—-int,-float,-complex)
    6. [For Loops](#for-loops)
    7. [Methods](#methods)
    8. [Functions](#create-and-use-python-functions)
    9. [CSV](#csv)
    10. [Helpful Links](#helpful-links)
* [Flask](#flask)
* [Sinatra](#sinatra)
* [Django](#django)
* [Rails](#rails)
* [Testing with Chai](#testing)
* [Testing with Jest](#testing)
* [Testing with Mocha](#testing)


<hr>


## Ruby

## Ruby Installation

### For Macs
If you have a mac, Ruby is already installed on your device. Nevertheless, we will still want to install a different instance of ruby. The reason for this is that we want separate projects to each be concerned with their own environments. 

Different projects will have their own dependencies, and we don't want to install ALL of these dependencies to our device. Rather, we want to install them only within each application's environment.

[Here's how its done](https://www.digitalocean.com/community/tutorials/how-to-install-ruby-and-set-up-a-local-programming-environment-on-macos)

### For PCs
[Install Ruby on Windows](https://rubyinstaller.org/)

## Ruby Variables
[Ruby Variables](https://www.tutorialspoint.com/ruby/ruby_variables.htm)

## if, elif, and else
[Ruby conditionals](https://www.rubyguides.com/ruby-tutorial/ruby-if-else/)

## Booleans
[Ruby Booleans](https://learn.co/lessons/booleans-ruby-readme)

## Numeric Types
[Ruby Numeric Types](https://ruby-doc.org/core-2.2.0/Numeric.html)

## For Loops
[Ruby Loops](https://www.tutorialspoint.com/ruby/ruby_loops.htm)

## Methods
[Ruby Methods](https://www.tutorialspoint.com/ruby/ruby_methods.htm)


## Python

[Back to top](#student-resources)

* [Python 3 Documentation](https://docs.python.org/3/)

* [Python Style Guide](https://www.python.org/dev/peps/pep-0008/#naming-conventions)

* [Hitchhiker's Guide to Python](http://docs.python-guide.org/en/latest/)

* [The Python Standard Library](https://docs.python.org/3/library/index.html)

* [Python Install](https://www.python.org/downloads/release/python-363/)

* [What is __pycache__?](https://stackoverflow.com/questions/16869024/what-is-pycache)

* [What is the purpose of self?](https://stackoverflow.com/questions/2709821/what-is-the-purpose-of-self)

* [Exploring built-in modules](https://www.learnpython.org/en/Modules_and_Packages)

* [*args and \**kwargs?](https://stackoverflow.com/questions/3394835/args-and-kwargs)

* [Python Math](http://anh.cs.luc.edu/python/hands-on/3.1/handsonHtml/integer.html#division-and-remainders)

-----------------------------------------

## Python Installation

[Back to top](#student-resources)

Run `python --version`

You should be running `Python 3.4.x.`

Try running `python3 --version` instead of `python --version`. On some systems, both are installed, but referred to differently.

### Installing Python

*Installing Python on Windows*

Installing Python on Windows is easy. Just find the Windows Executable Installer on the [Python downloads page](https://www.python.org/downloads/release/python-363/), run it, and you're good to go.


*Installing Python on OS X*

Mac users should install [Homebrew](http://brew.sh), and then run `brew install python3`.

If you're on Linux, you're probably already running Python 3.4.x+. Users of Ubuntu 12.10+ already have Python 3.4.x: Just use `python3` and `pip3` instead of `python` and `pip`. Users of other distributions presumably know what they're doing.

## Python Variables

[Back to top](#student-resources)

### [lists](https://docs.python.org/3/library/stdtypes.html?highlight=lists#lists)

Lists are mutable sequences, typically used to store collections of homogeneous items (where the precise degree of similarity will vary by application).

Lists may be constructed in several ways:

* Using a pair of square brackets to denote the empty list: `[]`
* Using square brackets, separating items with commas: `[a]`, `[a, b, c]`

Less Common:
> Using a list comprehension: [x for x in iterable]

> Using the type constructor: list() or list(iterable)


Lists are another tool used widely throughout Python, commonly used to hold data. They allow more than one value to be assigned to a variable. These values can be accessed and manipulated through various methods, making lists very flexible and powerful.

```
animals = ["dog", "cat", "rabbit"]

print(animals)
```
> ['dog', 'cat', 'rabbit']

In the above example, the variable animals is assigned multiple values within square brackets; these brackets tell us that we are working with a list.

The print statement returns all values within the list.

List indexing is a method to call particular values, or items, from the list.

```
animals = ["dog", "cat", "rabbit"]

print(animals[2])
```
> rabbit

To print a single animal from the list, note that inside the print statement the variable is followed by a number within square brackets.

Each value within the list is assigned an index number. By specifying an index number, we are able to choose a single value from the list.

.append() is a method used to add a value to an existing list. Let's add another animal to our animals list.

```
animals.append("hamster")
print(animals)
```

> ['dog', 'cat', 'rabbit', 'hamster']

-------------------------------------

### [dict (dictionary)](https://docs.python.org/3/library/stdtypes.html#mapping-types-dict)

Dictionaries can be created by placing a comma-separated list of key: value pairs within braces, for example: `{'jack': 4098, 'sjoerd': 4127}` or `{4098: 'jack', 4127: 'sjoerd'}`, or by the dict constructor.


To illustrate, the following examples all return a dictionary equal to {"one": 1, "two": 2, "three": 3}:

```Python
>>> a = dict(one=1, two=2, three=3)
>>> b = {'one': 1, 'two': 2, 'three': 3}
>>> c = dict(zip(['one', 'two', 'three'], [1, 2, 3]))
>>> d = dict([('two', 2), ('one', 1), ('three', 3)])
>>> e = dict({'three': 3, 'one': 1, 'two': 2})
>>> a == b == c == d == e
True
```

Dictionaries provide another way to hold data. Whereas a value in a list is accessed by its position, a value in a dictionary is accessed by its key. The ordering of values matters in lists, but it does not matter in dictionaries.

Instead of using brackets to create it, curly braces are used.

The keys of a dictionary are enclosed within single or double quotes, followed by a colon then the key value. Each key and value pair are separated by a comma, and all pairs reside within a set of curly braces

```
birds_sighted = {'dove': 3, 'chickadee': 5, 'hawk': 1}

# Printing the dictionary
print(birds_sighted)
```

> {'dove': 3, 'chickadee': 5, 'hawk': 1}

```
# Printing a single value using a dictionary key
print(birds_sighted['hawk'])
```

> 1

-------------------------------------

### if, elif, and else

[Back to top](#student-resources)

An if statement is programming logic: a conditional that will execute a part of code if the condition is met.

Syntax Notes: Directly following each conditional statement is a colon, followed again by a new indented line. The code will not run without this specific structure. It is Python convention to indent by four spaces.


```
# Save a variable
n = 35

# Write a conditional that will print a message if met
if n > 25:
    print("Greater than 25")
```

> Greater than 25

Now let's break this down.

* First, a number of 35 is assigned to a variable named n n.

* Next, we create an if statement stating that if n is greater than 25, print "Greater than 25" to the console.

* Notice that since the conditional statement (35 is greater than 25) has been met, the print statement was generated.

When multiple conditions exist, an if statement can be partnered with elif (else if) and else.


```
# Save a variable
n = 15

# Write three conditionals for the code to check
if n > 25:
    print("Greater than 25")
elif n >= 20:
    print("Greater than or equal to 20")
else:
    print("Less than 25")

```

> Less than 25

Expanding upon the simple if statement earlier, now we have an if statement with two additional statements: elif and else.

The code checks the variable against each statement before moving to the next, skipping the inner print statement. When the conditional is satisfied, the code outputs the inner print statement and ceases to run.


-------------------------------------

### [Booleans](https://docs.python.org/3/library/stdtypes.html#truth)

[Back to top](#student-resources)

Truth Value Testing
>Any object can be tested for truth value, for use in an if or while condition or as operand of the Boolean operations below.

>By default, an object is considered true unless its class defines either a __bool__() method that returns False or a __len__() method that returns zero, when called with the object. Here are most of the built-in objects considered false:

* constants defined to be false: None and False.
* zero of any numeric type: 0, 0.0, 0j, Decimal(0), Fraction(0, 1)
* empty sequences and collections: '', (), [], {}, set(), range(0)

> Operations and built-in functions that have a Boolean result always return 0 or False for false and 1 or True for true, unless otherwise stated. (Important exception: the Boolean operations or and and always return one of their operands.)

*Boolean Operations*

>These are the Boolean operations, ordered by ascending priority:


| Operation        | Result          | Notes  |
| ------------- |:-------------:| -----:|
| x or y      | if x is false, then y, else x | (1) |
| x and y      | if x is false, then x, else y     |   (2) |
| not x | if x is false, then True, else False     |    (3) |

Notes:

1. This is a short-circuit operator, so it only evaluates the second argument if the first one is false.
2. This is a short-circuit operator, so it only evaluates the second argument if the first one is true.
3. `not` has a lower priority than non-Boolean operators, so not `a == b` is interpreted as `not (a == b)`, and `a == not b` is a syntax error.


*Comparisons*

> There are eight comparison operations in Python. They all have the same priority (which is higher than that of the Boolean operations). Comparisons can be chained arbitrarily; for example, x < y <= z is equivalent to x < y and y <= z, except that y is evaluated only once (but in both cases z is not evaluated at all when x < y is found to be false).

>This table summarizes the comparison operations:

| Tables        | Are          |
| ------------- |------------- |
| `<`  | strictly less than    |
| `<=` | less than or equal    |  
| `>`  | strictly greater than |   
| `>=` | greater than or equal |  
| `==` | equal                 |  
| `!=` | not equal             |  
| `is` | object identity       |  
| `is not` | negated object identity |

>Objects of different types, except different numeric types, never compare equal. Furthermore, some types (for example, function objects) support only a degenerate notion of comparison where any two objects of that type are unequal. The <, <=, > and >= operators will raise a TypeError exception when comparing a complex number with another built-in numeric type, when the objects are of different types that cannot be compared, or in other cases where there is no defined ordering.

> Non-identical instances of a class normally compare as non-equal unless the class defines the __eq__() method.

>Instances of a class cannot be ordered with respect to other instances of the same class, or other types of object, unless the class defines enough of the methods __lt__(), __le__(), __gt__(), and __ge__() (in general, __lt__() and __eq__() are sufficient, if you want the conventional meanings of the comparison operators).

> The behavior of the is and is not operators cannot be customized; also they can be applied to any two objects and never raise an exception.



-----------------------


### [Numeric Types — int, float, complex](https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex)

[Back to top](#student-resources)

>There are three distinct numeric types: integers, floating point numbers, and complex numbers.

>Integers have unlimited precision.

>Floating point numbers are usually implemented using double

>Complex numbers have a real and imaginary part, which are each a floating point number.


Numbers are created by numeric literals or as the result of built-in functions and operators.

>Python fully supports mixed arithmetic: when a binary arithmetic operator has operands of different numeric types, the operand with the “narrower” type is widened to that of the other, where integer is narrower than floating point, which is narrower than complex.

| Operation       | Result        |
| ------------- |------------- |
| `x + y`  | sum of x and y    |
| `x - y` | difference of x and y |  
| `x * y`  | product of x and y |   
| `x / y` | quotient of x and y |  
| `x // y` | floored quotient of x and y |  
| `x % y` | remainder of x / y             |  
| `-x` | x negated |  
| `+x` | x unchanged |
| `abs(x)` | absolute value or magnitude of x |
| `int(x)` | x converted to integer |
| `float(x)` | x converted to floating point |
| `pow(x, y)` | x to the power y |
| `x ** y` | x to the power y |





---------------------------

### For Loops

[Back to top](#student-resources)

The for loop that is used to iterate over elements of a sequence, it is often
used when you have a piece of code which you want to repeat "n" number of time.

It works like this: " for all elements in a list, do this "

A for loop in Python is versatile, simple, and flexible. When a for loop is used, it cycles through a section of code a specified number of times.

```
for n in range(5):
    print(n)
```

> 0

> 1

> 2

> 3

> 4


In the above example, n is a variable that will increment itself at the end of each loop. Next, the word in is a specific keyword within the for loop syntax; it specifies the starting end ending points of the loop, otherwise known as the range.

Notice the printed output. Python, similar to many other programming languages, starts counting at 0. It is also important to note that Python will stop counting before it reaches the end of the range. For example, in range(5): means that it will count up to, but not include, 5.


Let's say that you have a list


```Python
computer_brands = ["Apple", "Asus", "Dell", "Samsung"]
for brands in computer_brands:
    print brands
```

That reads, for every element that we assign the variable brands,
in the list computer_brands, print out the variable brands

```Python
numbers = [1,10,20,30,40,50]
sum = 0
for number in numbers:
    sum = sum + number
print sum
```

```Python
for i in range(1,10):
    print i
```
Break
> To break out from a loop, you can use the keyword "break".

```Python
for i in range(1,10):
    if i == 3:
	break
    print i
```

Continue
> The continue statement is used to tell Python to skip the rest of the statements
in the current loop block and to continue to the next iteration of the loop.


```Python
for i in range(1,10):
    if i == 3:
	continue
    print i
```
While Loop

> The while loop tells the computer to do something as long as the condition is met
it's construct consists of a block of code and a condition.

> It works like this: " while this is true, do this "


```Python
computer_brands = ["Apple", "Asus", "Dell", "Samsung"]
i = 0
while i < len(computer_brands):
    print computer_brands(i)
    i = i + 1


```

That reads, as long as the value of the variable i is less than the length of the
list (computer_brands), print out the variable name.

```Python
while True:
    answer = raw_input("Start typing...")
    if answer == "quit":
        break
    print "Your answer was", answer
```

```Python
counter = 0
while counter <= 100:
    print counter
    counter += 1
```


### Methods

[Back to top](#student-resources)

* [print](https://docs.python.org/3/library/functions.html#print)
>All non-keyword arguments are converted to strings like str() does and written to the stream

* [input](https://docs.python.org/3/library/2to3.html?highlight=input#2to3fixer-input)
>https://docs.python.org/3/library/2to3.html?highlight=input#2to3fixer-input

* [append (list)](https://docs.python.org/3/library/array.html?highlight=append#array.array.append)
>Append a new item with value x to the end of the array.



### Create and use Python functions

[Back to top](#student-resources)

* [User-Defined Functions in Python](https://www.codementor.io/kaushikpal/user-defined-functions-in-python-8s7wyc8k2)

*Functions*
Lists and dictionaries hold data. Functions do things with data. They are also extremely useful in saving code that will be used again later. This way, you won't need to re-write the same block of code repeatedly.

A function is defined by using the keyword def before the function name, followed by a set of parenthesis and a colon.

The print statement, on the next indented line, acknowledges that the function is being called.

```
def say_hello():
    print("Hello!")
```

To call the function, type the function name followed by a set of parenthesis on a new line.

```
say_hello()
```

Hello!
A function can also can also act on data input by a user, called an argument.

```
name = "Bob"

def say_hello(name):
    print(f"Hello, {name}!")

```

```
say_hello(name)
```
Hello, Bob!

### CSV

[Back to top](#student-resources)


.csv Files
When working in Python, you will often find yourself importing data from different sources, such as .csv files. 

This method of reading in .csv files works on Windows and Mac operating systems, allowing you to access the saved data using Python code.

*Reading a .csv file*

```
# Import the necessary dependencies for os.path.join()
import os
import csv

# Read in a .csv file
csv_file = os.path.join("folder_name", "file.csv")
```


Notice that there are no back- or forwardslashes in the filepath. Using os.path.join() nullifies the hindrance of cross-platform bugs when reading in .csv files.

*Writing a .csv file*

```
# Import necessary dependencies
import csv

# Create the path for the filename
data_output = os.path.join("folder_name", "data.csv")

# Write data to a .csv file
with open(data_output, "w", newline="") as csvfile:
    writer = csv.writer(csvfile)
    # To save specific data input as a row in the csv
    writer.writerow(["row1", "row2"])

```

To learn more about reading and writing .csv files, visit the [Python documentation](https://docs.python.org/3/library/csv.html) webpage.

## Helpful Links

[Back to top](#student-resources)

* [Python - Tutorial](https://docs.python.org/3/tutorial/index.html)

* [Python - Beginner](https://www.learnpython.org/)

* [Python Scripting](https://automatetheboringstuff.com/)

* [Python f-strings](https://www.python.org/dev/peps/pep-0498/)

* [Python - Dictionary](https://www.tutorialspoint.com/python/python_dictionary.htm)

* [Python DataStructures](https://docs.python.org/3/tutorial/datastructures.html)

* [Python CSV Module](https://docs.python.org/3/library/csv.html)

* [Python Zip](https://docs.python.org/3/library/zipfile.html)

* [Input and Output](https://docs.python.org/3/tutorial/inputoutput.html)

* [random — Generate pseudo-random numbers](https://docs.python.org/3/library/random.html)

* [string — Common string operations](https://docs.python.org/3/library/string.html)

* [str.title()](https://docs.python.org/3/library/stdtypes.html#bytes.title)

* [os Module](https://docs.python.org/3/library/os.html)
s
* [Python CheatSheet](Supplemental/Python_Reference_Guide.pdf)

* [Python-GettingStarted.md](Supplemental/Python-GettingStarted.md)

* [Virtual Environments](Supplemental/conda_pip.pdf)

* [Conda Cheatsheet](Supplemental/conda-cheatsheet.pdf)

* [Code Style](https://docs.python-guide.org/writing/style/)

[Back to top](#student-resources)


## Flask
[Flask](http://flask.pocoo.org/)

## Sinatra
[Sinatra](http://sinatrarb.com/)

## Django
[Django](https://www.djangoproject.com/)
[Django Tutorial](https://simpleisbetterthancomplex.com/series/beginners-guide/1.11/)

## Rails
[Rails](https://rubyonrails.org/)

## Testing

### Chai
[Testing with Chai](https://www.chaijs.com/)

### Mocha

[Testing with Mocha](https://mochajs.org/)

### Jest
[Testing with Jest](https://jestjs.io/)

