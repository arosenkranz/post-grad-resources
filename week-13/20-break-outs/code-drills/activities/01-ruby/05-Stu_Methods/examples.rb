### Functions

# Rather than using curlies, we use indentation and the `end` keyword to contain our logic. 

# So in javascript, a typical function will look like this:



# function math(num1, num2) {
#   return num1 + num2
# }



# Whereas in ruby, the same function looks like:


def math(num1, num2) 
  return num1 + num2
end



### Imports
# Remember how we require files or packages in Node? We can actually use the exact same keyword here!

# In Javascript, it looked like this
# require("./helpers")


# In ruby, it's almost exactly the same!

require "./helpers" 

# Note: There is no need to write exports from the file we want to import from.


# If we had functions written in the helpers file referenced above, we could simply refer to them as though they were in the file we're currently working in. In other words, no need for a helpers.function_name. We could simply refer to function_name as though it was defined in the file we're currently working in.