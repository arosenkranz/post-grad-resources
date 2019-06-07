# Python

## MORE SYNTAX!!!

## Intro

In this exercise, we'll be expanding our knoledge of python to include functions and imports. 

With that knowledge, we'll be making a command-line calculator!

## Examples

### Functions
Functions in python are defined using the term `def`. As you've seen with other code in python, the colon and indentation will replace the use we would get from curly braces in javascript.

```python

def greeting(name):
  """
  In Python, there is commenting syntax other than hashes. 
  You'll often find comments like this one inside of functions in python. 
  These are called docstrings. They are multi-line comments that describe what a function does. 
  """
  print("Hello, " + name)

```

### Imports
Imports in Python are incredibly straightforward. There is no need to even export code.

We can import variables and functions from other files with ease.

```python
from helpers import greeting

# We can use the asterix to import multiple functions too. As in several other languages, the * means all.

from helpers import *
```

### elif
In addition to functions and imports, let's take note of the `elif` key word. `elif` is simply the equivalent of `else if` in javascript.

### int()
The int() method operates in the same way the parseInt method in Javascript does. 

## Instructions
In this exercise, we'll be making a command-line calculator

1. In helpers.py, create four functions:
  - A function that, given two numbers, returns the sum of those numbers.
  - A function that, given two numbers, returns the difference betwwen those numbers.
  - A function that, given two numbers, returns the product of those numbers.
  - A function that, given two numbers, returns the quotient of those numbers.  
2. Import all of those functions in prompt.py.
3. Your calculator should ask the user to enter a number, and operator, and another number. 
4. If the operator is invalid, ask the user to input a valid one.
5. Display the result of the ensuing calculation to the user using your helper functions
6. Once the user has been shown the result of their calculation, ask them if they'd like to make another. 
  - If they do, rerun the prompt.
  - if they don't, wish them a nice day and close the program. 