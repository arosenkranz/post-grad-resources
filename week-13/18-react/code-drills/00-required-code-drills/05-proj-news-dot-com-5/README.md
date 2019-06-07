# React

## `News.com` (Pt.5)

In this 5 part exercise, we'll be building a two-page news app!

The major topics covered in this project are react-router and axios. 

In part five, we'll finish our app by filling out our `Card` and `Button` components, and using them in a way that allows the user some power over what news they get.

* `This is the longest and most challenging part of this 5-part project`

When we are done, our `Home` page will involve the following:
- A user is greeted by their name
- News stories automatically render
- The user sees three buttons, each with a different news source.
- When a user clicks on one of those buttons, he/she sees news stories from that source

We will be working on four files in this exercise:
- API.js--to change how we've structured our call to the News API.
- Button.js--to configure our Button component
- Card.js--to configure our Card component
- Home.js--to put all the pieces together

You will work on more than 5 files if you're including some css (optional).

The final product will work as such: 
<img src="demo.gif">

## Instructions
1. When we created our getNews function in API.js in the last exercise, we made the function take an argument (query). In place of the hard-coded news source, concatenate the query variable into our query url.
2. Navigate to Button.js. 
  - Insert a button tag into that component. 
  - Make the text content of that button {props.text}
  - Make the onClick function for that button {props.onClick}.
3. Navigate to Card.js. 
  - Create an h2 whose text content is {props.title}
  - Wrap that h2 inside an a tag whose href is {props.link}
  - Add an image tag whose src is {props.img}
  - Create a p tag whose text content is {props.description}
4.  Navigate to Home.js
  - Because we concatenated the query into our getNews function, we'll need to pass a news source as an argument to our getNews function. Visit [this link](https://newsapi.org/sources) to pick news sources.
  - Import our Card and Button Components
  - In React, a component reloads when its state is changed... In our API.getNews function within componentDidMount, instead of console.logging state, we'll be pushing to an array
    - In state, add a key of stories set to an empty array
    - `map` through our API response, and push to that array
    - NOTE: to push to an array, we don't need to set state. The key in state is still pointing to the same array, so it's not actually getting a new value. This causes a problem for us though. We'll be using this API response to populate our cards with information. We need to update state so the dom can be aware of our API returns.
    - To solve the above problem, we can chain another promise to the last one. (.then(x => {}).then(y => {})). Within the second promise, add the setState where we set our name from local storage. This ensures that we update this component and thus render the cards propertly
  - Within the render function, map through this.state.stories. Render a card passing in the url, title, image and description as props for each iteration of the map.
  - Hard-code three Button components above your map function from the prior step.
    - For the source prop, pass in three news sources of your choice (remember this is just text, it does not need to be used for a query)
    - For the onClick prop on all three buttons, use this syntax: 
    ```javascript
    () => this.pickNews("bleacher-report")
    ```
    - Pass in the query term for each newsource as an argument in place of "bleacher-report".
    - This lets us pass arguments into an onClick prop when we wouldn't otherwise be able to
  - Create a pickNews function. The logic will closely mirror what we did in componentDidMount. pickNews takes an argument of news, which we'll use to pass the appropriate query to our API call. Don't forget to update state if your buttons arent working
5. If you've completed all the above steps, your app should be fully functional!!!!


