# Bootstrap

## Grid System

_If you can create this obnoxiously-overly-complicated grid, you've mastered Bootstrap's grid system_

<!-- To see this image, either open the image contained in this folder, or click on a little logo with a small magnifying glass on it on the top right of your text editor (if you're using VS code) -->

### Your final product should look like this
<img src="grid.png">

### Instructions

The goal of this excercise is to replicate the above image. The colors do not need to match the ones in the picture, but adding color will be the only way to see your work on the DOM. 

Some of these are simple columns nested in rows. However, you WILL need to nest rows within columns (and sometimes more rows within the cloumns nested inside said rows 🤯).

#### Getting started
You'll find that the css file already contains a fair amount of styling. There are several classes which add a color to your divs (following the format: blue1, blue2, blue3, red1, red2 etc...) as well as classes that add height to your columns. 

In addition to specifying the width of your columns--how many total columns a given column encapsulates (col-8 or col-4, for example)--you will also need to specify each columns height and its color. 

Feel free to add a random color class to each column. The height classes though, must be used in the right place. For columns without "grandparents", in other words, columns nested in rows whose only parent is the body, we will use the `primary` class (giving a height of 100px). One level deeper, when a row is nested inside of a column, we give it the `secondary` class. One level deeper, give it the `tertiary class`. Finally, the deepest level will use the `fourth` class. 