
# Python

## Putting the pieces together


## Intro
Now that we've had some practices using Python syntax, it's time to put all those skills into one context. 

This next exercise will have mostly the same functinality as the product first exercise, but will instead use the tools we picked up in the last exercise. 

## Instructions
In this exercise, we'll essentially be doing the same thing as the first exercise, but instead using objects and loops. 

In promt.py, your are not given any code. Follow the pseudocode below to create this program.

1. Create a variable users, and initialize it to an empty array.
2. Create an infinite while loop. This may seem counterintuitive, but it is the use of the continue and break key words that will allow this structure to work. There are many ways to create an infinite loop. See if you can come up with one. 
3. Initialize an object with the following keys. Each key should point to an empty string.
   - first_name
   - last_name 
   - middle_initial 
   - address 
   - email 
   - phone_number 
4. Using bracket notation (like you would in javascript), assign each key in the object to an input asking the user for the piece of information associated with the key.
  - (Example: user["first_name"] = input("what is your first name?"))
5. Loop through the updated object, and reiterate the user's information to them (use the keys and the values). We will need to use the .items() and the .format() methods to make this work. The syntax looks like this:
```
obj = {
  "name": "john"
}

for key, value in obj.items():
  print("My {0} is {1}".format(key, value))
```
* The .items() method is grabbing key/value pairs from the object we invoke it on. 

* The .format() method is informing the string it is invoked on what each value in curly braces corresponds to. For example, {0} will refer to key, because key is the first argument passed into the format method. 

6. Once you've reprinted the user's own information to them (step 5), ask them if their information is correct (it is recommended to ask them to input y or n). Create an if statement that checks to see whether the user affirmed the input or not. The rest of our logic can lie in this if statement. Because we set up an infinite loop, any input that does not meet the condition we set, will trigger the loop again.

7. If the user affirms their information is correct, insert their information into the users array. This is done using the .append() method, which works exactly the same as the .push method in javascript.

8. Ask the user if they'd like to input another user's information. If they say yes, use the continue key word to start the loop again. 

9. If the user is not interested in entering more users, reprint their information again, and then use the break key word to stop the entire program from running.

10. Test your work! See if there are any bugs, or any cosmetic changes you'd like to make. Take time to review syntax you found confusing, and make sure you understand exactly what each line of code is doing. Commenting above each line of code might be helpful.
