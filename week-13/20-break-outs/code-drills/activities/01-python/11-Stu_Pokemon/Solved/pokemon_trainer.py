# import one of the pokemon lists from pokemon_list as pokemon
from pokemon_list import gen_1_pokemon as pokemon

# Create a function called pokemon_trainer
def pokemon_trainer():
  # create an empty dictionary called trainer
  trainer = {}
  # Print the following dialogue "Welcome to the world of Pokemon! Are you ready to begin your journey?"
  print ("Welcome to the world of Pokemon! Are you ready to begin your journey?")

  # Add a key of "gender" to your trainer dictionary, whose value is the input of the following question
  # "First tell me a little about yourself! Are you a boy or girl? "
  trainer["gender"] = input("First tell me a little about yourself! Are you a boy or girl? ")
  # Add a key of "name" to your trainer dictionary, whose value is the input of the following question
  # "And what is your name?  "
  trainer["name"] = input("And what is your name? ")
  # Add a key of "age" to your trainer dictionary, whose value is the input of the following question
  # "Great! Now how old are you? "
  trainer["age"] = int(input("Great! Now how old are you? "))

  # Check the trainer's age. If the age is greater than or equal to 10
  # Tell the user they are ready to start their pokemon adventure
  # If the age is less than 10 tell the user they are too young for a Pokemon
  if trainer["age"] >= 10:
    print(f"Looks like you're able to start your pokemon journey {trainer['name']}!")
    print("Let's start by picking your starter Pokemon!")

    # Print each of the pokemon in the list
    for mon in pokemon:
      print(mon)

    # Add a key of "starter" to your trainer dictionary, whose value is the input of the following question
    # "Which Pokemon will you choose? "

    ## BONUS
    # Only continue onto the next line of code if the user entered a pokemon listed. 
    # If they entered something not in your list, re-prompt the question
    trainer["starter"] = None
    while trainer["starter"] not in pokemon:
      trainer["starter"]= input("Which Pokemon will you choose? ")

    # Based on the trainer's starter choice, slice their selection so that only the first 4 characters are printed.
    # This will become the pokemon's cry. Print the pokemon's cry twice followed by "Looks like <pokemon> is happy!"
    # For example if they chose pikachu print "Pika!! Pika!! Looks like Pikachu is happy"      
    pokemon_cry = trainer["starter"][0:4]
    pokemon_response = f"{pokemon_cry}!! {pokemon_cry}!! Looks like {trainer['starter']} is happy!"

    # Finally inform the user they are ready to start their Pokemon adventure
    print(f"{pokemon_response}\nYou're ready to start your adventure {trainer['name']}!")

  else: 
    print(f"Sorry you're not old enough for a Pokemon! ")
  
# Run your pokemon_trainer() function
pokemon_trainer()