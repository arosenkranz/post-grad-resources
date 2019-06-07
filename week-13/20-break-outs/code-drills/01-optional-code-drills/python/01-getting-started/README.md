# Python

## Learning the basics

Python is a server-side scripting language. In other words, `it can only be used on the back-end`. You can think of it as an alternative to Node.

Python has many syntactic differences to Node, but for the most part, functions in much the same way.

As you see more Python, you will notice it looks very much like regular text. This is pn purpose. Python was designed to look like the English language.

In this exercise, we'll be making a command-line application that records user data.

## Intro

We'll start out with the basics of Python syntax:
- Declaring variables
- Console.log(ging).
- Commenting
- Inputs

### Variables
In Python, we do not need a variable declaration like var, let or const. Instead, we skip all of that and just make the variable declaration. 

In Node:
```
var animal = "chicken"
```

In Python:
```
animal = "chicken"
```

See, not too much of a difference. The key thing to remember is, in Python, just drop the key word var, let or const. Otherwise it's exactly the same.

### Console.logs
In Python, we don't log to the console. Rather, we `print` to it.

In Node:
```
console.log("chicken")
```

In Python:
```
print("chicken")
```

Again, that's it, that's really the only difference. Instead of `console.log()`, we simply write `print()`


### Comments
Finally, we'll cover comments. In Python, we use one hash for a comment as opposed to two slashes. So:


In Node:
```
// I'm writing something informative about my code
```

In Python:
```
# I'm writing something informative about my code
```

Python and Javascript also both support mulit-line comments:

In Node:
```
/* I'm writing something informative about my code */
```

In Python:
```
""" I'm writing something informative about my code """
```

In Python, we use three quotation marks `"""` as opposed to a `/` and a `*`. However, it is convention to use the has syntax, so as much as possible, write single line comments using the hash `#`.


### Inputs
Think back to when you started with node.js. We used a package called `inquirer`. In Python we don't need to import an external package for that functionality; it's already built in.

In Python:
```
first_name = input("What is your first name?")
``` 

In Node, we would need to use a promise to grab the value of the user's response to our prompt. In Python, we can refer to the user's response using the variable we assigned to it. Consider the below example.

```
print('The student\'s first name is {0}'.format(first_name))
```


## Instructions
- In prompt.py, ask the user for their: 
  - first_name
  - last_name
  - middle_initial
  - address
  - email
  - phone_number 
- Print a separator (a series of `=` for example). In Python you can multiply strings to print them as many times as you'd like.   
- Once they've filled all the inputs, reprint their own information to them. For example:
  - print('The student\'s first name is {0}'.format(first_name))
- After the user has seen their information, ask them to confirm whether or not it is accurate (using another input).
