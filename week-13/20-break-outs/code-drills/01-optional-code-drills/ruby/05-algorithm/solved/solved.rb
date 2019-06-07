def print_stairs(num)
  counter = 0
  steps = 1
  spaces = num
  while counter < num do
    str = ""
    if (spaces > 0)
      str+= " "* spaces
      str+= "#"*steps
      str+= " "* spaces
      puts str
    end
    steps +=2
    spaces-=1
    counter+=1
  end  

end


# Tests
print_stairs(0)
print_stairs(1)
print_stairs(2)
print_stairs(3)
print_stairs(7)
print_stairs(10)