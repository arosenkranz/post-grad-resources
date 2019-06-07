# 1. CREATE A DICTIONARY
# Remember, dictionaries are essentially objects.
# Make a dictionary with five different keys relating to your favorite celebrity. You must include at least four different data types as values for those keys.

# ================ CODE HERE ================
steph_curry = {
    "championships": 3,
    "position": "Point Guard",
    "retired": False,
    "teammates": ["Klay Thompson", "Kevin Durant", "Draymond Green", "Demarcus Cousins"],
    "nickname": "Chef Curry"
}
# ================ END CODE ================

# 2. FOR LOOPS
# Loop through the array below. For each iteration of the loop, print: "A <ONE OF THE FRUITS IN THE ARRAY> is a fruit."

fruits = ["apple", "banana", "strawberry", "orange", "grape"]
# ================ CODE HERE ================
for i in fruits: 
    print("A " + i + " is a fruit.")
# ================ END CODE ================

# 3. WHILE LOOPS   
# Create a while loop that prints the one number in each iteration. It should print the numbers 1 through 10, and then stop.

count = 1
# ================ CODE HERE ================
while count < 11:
    print(count)
    count += 1
# ================ END CODE ================

# 4. CONDITIONALS
# Loop through the fruits array again. If the fruit starts with the letter b, print "vegetable", otherwise, simply print the fruit.

# ================ CODE HERE ================
for i in fruits:
    if i[0] == "b":
        print("vegetable")
    else:
        print(i)    
# ================ END CODE ================