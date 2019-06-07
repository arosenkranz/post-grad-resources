# HTML

## Linking to other Pages (The Basics pt.4)

### Instructions

12. Outside of our first section, make another section. Give this section it's own unique class. It should have the same dimensions as the section above it, and its own unique background color. 

Finally give the section an id. Remember, an id MUST be unique. We won't use this id for styling, but we will still use it later.

13. Inside of our FIRST section--not the new one we just made-- create an anchor tag (<a>). Give it a unique class and write "scroll down" in between the openining and closing tags

14. CHALLENGE: Put the a tag smack-dab in the middle of our first section. 
HINT: You will use absolute position, and transform: translate().
BIGGER HINT: translate() without X or Y takes in two arguments. so translate(<number>, <number>). Use the , to separate the two numbers. If you're still a little confused, look up translate css. 

Also: maybe change the text color and/or size (just using color:) if you're having trouble reading it.

15. Give your <a> tag an `href` equal to the same id name you gave to your second section. Don't forget to prepend it with a #. Like so: href="#name"

You will know this works if you click on your link, and it scrolls down to your second section.