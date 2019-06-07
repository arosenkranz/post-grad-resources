from helpers import *

def calculator():
  print("Welcome to the Python calculator!")
  print("=" * 10)
  num1 = input("Please enter a number ")
  operator = input("Please enter an operator ")
  num2 = input("Please enter a number ")

  if operator == "+":
    print(add_nums(num1, num2))
  elif operator == "-":
    print(subtract_nums(num1, num2))
  elif operator == "*":
    print(multiply_nums(num1, num2))
  elif operator == "/":
    print(divide_nums(num1, num2))
  else:
    print("Please enter a valid operator")
    calculator()

  print("=" * 10)

  if input("Would you like to do more calculations? (y/n)" ) == "y":
    calculator()
  else: 
    print("Thank you and have a nice day.")
     

calculator()