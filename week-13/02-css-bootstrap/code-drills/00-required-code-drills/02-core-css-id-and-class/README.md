# HTML & CSS

## IDs and Classes (The Basics pt. 2)

### Instructions

5. NEST four divs inside of your section element. This means you will create CHILD ELEMENTS, for the section element, the PARENT. For example: 
<!------------ PARENTS & CHILDREN -------------->


<!-- Parent -->
<div>

<!-- These p tags are both `children` of the above div-->
  <p>

  <!-- This span tag is a child of the p tag, and a grandchild of the div -->
  helloooo, I am very <span>cool</span>.

  </p>
  <!-- Side note: the two <p> tags are siblings, as they share the same parent (<div>) -->
  <p>What's up</p>

</div>

<!------------ PARENTS & CHILDREN -------------->

6. Give each of these divs a UNIQUE class. You can name these classes whatever you want, but it is good to make class names indicative of what the element is, or what it is doing. box-1, box-2 etc... will work for now. 

7. In your CSS file, set up styling for each of our four boxes. Like so:
<!-- Notice how we put a dot before "box-1". Remember, dots are used to represent classes, whereas # are used to represent ids -->

```
.box-1 {

}

.box-2 {

}

etc...
```
8. All of these boxes should have some things in common: 
  - a width of 100 pixels
  - a height of 100 pixels
  - a background-color (each unique. Try to make these colors as different as possible so you can see your beautiful work!!)
  - position: absolute

You will know it worked when you see one colored box in the top left corner. Not to worry, your other three boxes are still there!