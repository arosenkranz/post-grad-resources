el1 =  "^^^vv^^^v^^"
el2 = "v^^^"

def elevator(string):
  floor = 0
  
  for i in string: 
    if i == "^":
      floor += 1
    elif i == "v"  :
      floor -= 1
    
    if floor < 0:
      return "Your elevator crashed :("

  return floor    

print(elevator(el1)) # 5
print(elevator(el2)) # Your elevator crashed :(