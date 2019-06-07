# Dictionaries

## Instructions

* Another data type that is commonly used in Python is that of the dictionary.

  * Like lists and tuples, dictionaries can contain multiple values and types of data within them.

  * Unlike lists and tuples, however, dictionaries store data in key-value pairs. The key in a dictionary is a string referenced to collect the value it is associated with.

* Open up [dictionaries.py](Solved/dictionaries.py) and explain the code contained within. Make sure to explain the following...

  * A pair of curly-braces are used to create a dictionary: `variable = {}`

  * Values are added to dictionaries at declaration by creating a key stored within a string, following it with a colon, and then placing the value desired afterwards.

  * Referencing a value within a dictionary is as simple as calling the dictionary and following it up with a pair of brackets containing the key for the value desired.

    ![basic dictionary](Images/02-Dictionary_OneValue.png)

  * Dictionaries can hold multiple pieces of information by following up each key-value pairing with a comma and then placing another key-value pair afterwards.

  * Dictionaries can also store lists. They are accessed by first calling the key and then indexing the list. Assure students they just need a basic understanding of this for now and that when they get into APIs they will get a lot more practice.

  * Dictionaries can also contain other dictionaries. To access the values inside nested dictionaries, simply add another key to the reference.

    ![Advanced Dictionaries](Images/02-Dictionary_MultiValue.png)

  * It is important to note how dictionaries in Python will always auto-sort alphabetically. This means that the order in which key-value pairs were declared may not be the order they would be when printed in the console.
