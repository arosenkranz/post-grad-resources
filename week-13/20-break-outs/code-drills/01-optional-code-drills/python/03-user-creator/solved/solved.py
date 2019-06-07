

# "Global" users list.
users = []

while True:

    # Initialize a new user. This uses fromkeys as a shorthand for literally
    # creating a new dictionary and setting its values to None, which is fine.
    # But, show this to users, since it's much faster.
    # user = dict.fromkeys(['first_name', 'last_name', 'middle_initial', 'address','email', 'phone_number'])
 
    user =	{
    "first_name": "",
    "last_name": "",
    "middle_initial": "",
    "address": "",
    "email": "",
    "phone_number": ""
    }

    # Prompt user for user's identification information...
    user['first_name'] = input('Please enter your first name. ')
    user['last_name'] = input('Please enter your last name. ')
    user['middle_initial'] = input('Please enter your middle initial. ')
    
    # Prompt user for user's contact information...
    user['address'] = input('Please enter your address. ')
    user['email'] = input('Please enter your email. ')
    user['phone_number'] = input('Please enter your phone_number. ')
    
    # Print a separator...
    print('-' * 18)
    
    # Print all to the console...
    for key, value in user.items():
        print('your {0} is {1}.'.format(key, value))
    
    # Print a separator...
    print('-' * 18)
    
    # Prompt for confirmation. Use lower so users can enter either Y or y.
    if input('Is this information correct? (Y/n) ').lower() == 'y':
        users.append(user)
        print(users)

        # Prompt users to add more user information.
        if input ('Would you like to input another user\'s information? (Y/n)').lower() == 'y':
            continue
        else:
            print('You\'ve entered the following user profiles:')

            print('-' * 18)

            # Print information for every user in the list.
            for user in users:
                for key, value in user.items():
                    print('your {0} is {1}.'.format(key, value))

            print('-' * 18)

            break

