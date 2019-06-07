# Javascript

## Ternaries

### Instructions

Ternaries are a great way to check whether data is true or false. 

In the following code, we have a variable function `fun` that takes in a argument. Using a ternary, the function logs something different to the console based on whether the argument given to the function is true or false. 

A ternary begins with the data in question, in this case, `arg`. The content to the right of the `?` will be returned if the value evalutes as true (or truthy, more on that in a sec). The content to the right of the `:` will be returned if the value evaluates to false (or falsey). 


```
  var bool = false;

  function fun(arg) {
    console.log(arg ? "Yea, it's true" : "Nah, it's false");
  }

  fun(bool)

```

In this case, when we call the fun function on line 20, we will expect to see "Nah it's false" in the console, because we have set the `bool` variable to false. 

One of the best uses for the ternary will be to also check whether or not a variable is defined. A variable with a defined value isn't explicitly true, but it is truthy. On the other side of that coin, an undefined variable, while not literally false, evaluates to falsey. 

If this is still confusing don't worry, practice makes perfect. We'll repeat this several times in the exercise. 


With that example in mind, move on to challenge-prompt.html. 