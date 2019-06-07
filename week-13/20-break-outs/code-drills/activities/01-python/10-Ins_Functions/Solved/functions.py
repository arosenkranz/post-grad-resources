# Define the function and tell it to print "Hello!" when called
def printHello():
    print(f"Hello!")


# Call the function within the application to ensure the code is run
printHello()
# -------------#


# Functions that take in and use parameters can also be defined
def printName(name):
    print("Hello " + name + "!")


# When calling a function with a parameter, a parameter must be passed into the function
printName("Bob Smith")
# -------------#

# The prime use case for functions is in being able to run the same code for different values
listOne = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
listTwo = [11, 12, 13, 14, 15]


def listInformation(simpleList):
    print(f"The values within the list are...")
    for value in simpleList:
        print(value)
    print("The length of this list is... " + str(len(simpleList)))


listInformation(listOne)
listInformation(listTwo)
