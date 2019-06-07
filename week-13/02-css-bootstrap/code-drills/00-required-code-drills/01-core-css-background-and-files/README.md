# CSS

## The Basics

### Instructions

1. Create a section tag in the body of your starter HTML file

2. Make sure your style.css file is properly linked. Replace the hashes in the link tag, found nested in the head tag of index.html. 

You will know it's working when your page has a black background. (remove the body styling in style.css so that the background is white again).

3. Give the section element you created a class (something like "main" will be fine). 

4. Using that class, style the section element in the following way:

```
.main {
  height: 100vh;
  width: 100%;
  background-color: <COLOR OF YOUR CHOOSING>;
  position: relative;
}
```
vh stands for View Height. 100 vh means 100% of the height of your browser window. 100vw would work instead of a % for the width as well.

You'll know this works when your entire page is the color that you used as a background color.

You may notice that some of these properties are not needed. If we get rid of the width property, nothing changes. Elements will have 100% width by default. We will do it here just for practice. The same is true for position: relative, but this one will come in handy later. 