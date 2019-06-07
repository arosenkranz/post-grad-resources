# React

## `News.com` (Pt.3)

In this 5 part exercise, we'll be building a two-page news app!

The major topics covered in this project are react-router and axios. 

In part three, we'll grab a user's name, and greet them with it on another page.

### Instructions
1. Import `Input` to `Landing`.
2. Create a form tag, and place two `Input` components within it.
3. Using the props we set up in part 2, make one a text input, and the other a submit button (using value, you can change the text content of that button to whatever you like).
4. Give the text Input a name of "name".
5. Create a handleChange function that is passed to the text Input via props. 
6. As the user types into our Input, we should be updating thet state in a key that corresponds to the name we gave our Input. 
7. Create a submitForm function. Link it to our form by referring to it through onSubmit within the form tag. Like so:
```
<form onSubmit={this.submitForm}>
```
8. When the form is submitted we want to do the follwing:
  - Prevent default form behavior. Otherwise, we'll be taken to another page before we can execute the rest of our logic. 
  - Set this.state.name in local storage under name (you will need to create a state object in the Landing class to do this)
  - use this code:
  ```
  window.location.href = "/home"
  ```
  This will navigate us to /home, and by extension, the `Home` page we created. 
9. Our work on the landing page should now be complete. We can now navigate to home to do some work there. 
10. Create a state object in `Home` with the key of `name`. Set it to an empty string.
11. Create a componentDidMount function. 
12. Within that function, grab "name" from local storage, and set name in state to its value. 
13. Replace the a tag we made earlier as well as its content with the following: 
```
Welcome, {this.state.name}
```
14. If you enter your name on `Landing`, and submit the form you should see yourself being welcomed on `Home`.