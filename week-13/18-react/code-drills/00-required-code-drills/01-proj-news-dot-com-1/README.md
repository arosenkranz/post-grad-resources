# React

## `News.com` (Pt.1)

In this 5 part exercise, we'll be building a two-page news app!

The major topics covered in this project are react-router and axios. 

In part one, we'll be creating two pages, and links between them.

### Instructions
1. Run `create-react-app news.com` wherever you would like to store this project.
2. Once you've finished installing, navigate to the root of your react app from the command line and run `yarn add react-router-dom`.
3. Within your src folder, create a folder called `pages`.
4. Withing `pages`, create two new folders: 
  - `Landing`: Should contain `Landing.js` and `landing.css`
  - `Home`: Should contain `Home.js` and `home.css`
5. Create classes for Home and Landing.
  - Within their render functions, nest any string (so long as its different from the other) within an a tag. The href on home should lead to `/` (the root route), and the href on landing should lead to `/home`
6. Delete all the html content within App.js (yes, all of it).  
7. Paste the following import to the top of App.js
```
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
``` 
8. Import the two pages you created
9. Using React-router's Router, Switch and Route components, render your Landing page at `/` and your Home page at `/home`.
10. Clicking the links you made, you should now be able to navigate back and forth between pages. 