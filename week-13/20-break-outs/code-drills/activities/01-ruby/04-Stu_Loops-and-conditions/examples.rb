array = [1,2,3,4,5]

### Each loops
#Similar to javascript, ruby has a .each method. 

# array is the array we're looping through. item is an arbitrary word we've chosen to represent each element of our array in turn. end is essentially a closing curly brace. 
array.each do | item |
  puts item
end 


### While loops
# while loops start in much the same way they do in javascript, with the word while. There are a couple of differences though. 

# For one, we don't enclose the duration of the loop within parentheses. We can simply write it next to the keyword while. Instead of an opening curly brace, we use the word do. Instead of a closing curly brace, we use the word end.

count = 0

while count < 10 do
  puts count 
  count +=1
end  



### If statements
# If statements are syntactically very similar to the loops covered above. The condition is not enclosed in parentheses, end we finish our logic with the keyword end. However, there is no need for the keyword do in ruby if statements. 


number = 8

if number === 8 
  puts number
end  

# For Loops

for i in array
  puts "Value of local variable is #{i}"
end