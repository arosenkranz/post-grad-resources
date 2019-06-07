[Return to Home](../../../README.md)

<hr>

<img src="../../00-admin-resources/assets/images/react.jpg" width="100">

# Student Resources

## Table of Contents

### Terminology & Links

01. [ES6](#ES6)
02. [React](#REACT)

### Audio Resources
01. [Podcasts](./podcasts.md)

<!-- ### Video Resources
01. [Video Listing](/video.md) -->

<hr>

## ES6

[Back to top](#student-resources)

* [ES6 CheatSheet](https://github.com/DrkSephy/es6-cheatsheet)
* [What is ES6](https://medium.freecodecamp.org/write-less-do-more-with-javascript-es6-5fd4a8e50ee2)
* [`var` vs `let` vs `const`](https://medium.com/javascript-scene/javascript-es6-var-let-or-const-ba58b8dcde75)
* [Arrow notation `() => {}`](https://medium.freecodecamp.org/when-and-why-you-should-use-es6-arrow-functions-and-when-you-shouldnt-3d851d7f0b26)
* [Class Construction](https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/)
* [ES6 Array Methods](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    * This includes all available array prototype methods, but some new to ES6 are `forEach()`, `map()`, etc.
* [Recursion](https://codeburst.io/learn-and-understand-recursion-in-javascript-b588218e87ea)
    * You can learn more about recursion [here](#student-resources)


## REACT

[Back to top](#student-resources)

[Presentational and Container Components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)
This article written by Dan Abramov (Redux Author, React Core Contributor, Create React App Core Contributor).

He describes the pattern of separating components into "container" and "presentational" components.
In a nutshell, this can be explained as follows:

- Container components are primarily concerned with how things work and render very little, if any of their own markup. Instead they mostly render other components and pass down the logic and data they need to work.

- Presentational components are concerned with how things look and typically don't contain any logic that doesn't have to do with their own individual UI.

- This pattern helps us build components with little to no coupling that can more easily be reused in different parts of app or even across applications. It also lets us stub out our applications appearance by writing presentational components first, and then writing container components once we're ready to make things work.

The most important takeaway should be that there should be a few of these "container" components which act as the "brain" for their children.

* [React Lifecycle Methods- how and when to use them](https://engineering.musefind.com/react-lifecycle-methods-how-and-when-to-use-them-2111a1b692b1)

* [Forms](https://reactjs.org/docs/forms.html)

* [Lifting State Up](https://reactjs.org/docs/lifting-state-up.html)


* [State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)


- Create React App allows us to use ES7 property initializer syntax. This allows us to attach properties to the class instance without writing out a constructor method - https://babeljs.io/docs/en/babel-plugin-transform-class-properties/

- `setState` is built-in to all class components. We use this method to update our component's state by passing it an object containing parts of the component's state we want to update and their new values.

- Children: https://reactjs.org/docs/introducing-jsx.html#specifying-children-with-jsx (edited)

-----------------------------------------