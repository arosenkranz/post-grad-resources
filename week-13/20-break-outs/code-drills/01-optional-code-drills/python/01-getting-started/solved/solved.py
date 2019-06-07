# In python we don't need to use variable declaration key words, we just go ahead and declare the variable
first_name = input('Please enter your first name. ')
last_name = input('Please enter your last name. ')
middle_initial = input('Please enter your middle initial. ')

# Prompt user for user's contact information...
address = input('Please enter your address. ')
email = input('Please enter your email. ')
phone_number = input('Please enter your phone_number. ')

# Print a separator. This wasn't part of the assignment, so it's okay if you
# don't have this part. :)
print('-' * 18)

# Print everything to the console...
print('Your first name is {0}'.format(first_name))
print('Your last name is {0}'.format(last_name))
print('Your middle initial is {0}'.format(middle_initial))

print('Your address is {0}'.format(address))
print('Your email is {0}'.format(email))
print('Your phone number is {0}'.format(phone_number))

# Print a separator. 
print('-' * 18)

# Prompt for confirmation, and save what user entered.
confirmation = input('Is this i\formation correct? (Y/n) ')