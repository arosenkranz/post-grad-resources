# React

## Promises are meant to be broken 😢  

React is great for many reasons. Among many other things, it allows us to rerender part of a page without refreshing the entire thing. These rerenders are triggered everytime we setState. 

setState works great to rerender elements on the DOM, but it can also cause some issues in our logic. The setState function is actually asynchronous. It does not execute immediately.

If we setState and run a console.log for the key in state we just changed, it's very likely that we won't get the updated value. 

There are two solutions to this problem: declaring an asynchronous function, or invoking a callback after setState. 

* Note: You will notice here that we are not using the great infrastructure provided to us by `create-react-app`. Instead, we are simply importing a CDN, like we would with JQuery, and initializing our script tag to use `Babel`. This is a great way to write React if you're in a hurry or just want to test something out quickly. 

### Instructions

1. Navigate to prompt.js and examine the code therein. 
2. Open the html file in your browser of choice. Open dev tools/inspect the page too.
3. When you click on one of the buttons, you should see a discrepancy between them. The rendered value is the most up-to-date, whereas the console.logged value is not current, even though it was invoked AFTER state was set.
4. Fix the function `increment` using `async/await`.
5. Fix the function `decrement` using a `callback` after setState

## Syntax Demo

### Async/Await
```javascript

async doThing() {
  await takesTooLong()
  console.log(someThingTheAboveFunctionChanged)
}

```
### Callback
```javascript

this.setState({
  name: "Ricky Bobby"
}, () => console.log(this.state.name))

```