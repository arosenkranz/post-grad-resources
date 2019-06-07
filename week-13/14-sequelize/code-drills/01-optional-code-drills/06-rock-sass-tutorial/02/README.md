# Sass 

## Base and Variables

In the last section, we did a lot of setup, but barely wrote any code. In this section, we'll be doing a little more setup, but we'll also jump into some sass code and already get a taste of some of sass's perks.

The setup we did in the last step gave us a lot of different files to work in. This structure works great for larger projects. For smaller projects, there is no need to create all these files. 

## Instructions
1. From the root of your project, run `npm run sass` from the command line. `npm run` will look through your package.json for the next argument it receives. In this case, we wrote `sass`. Because we added something under that name in the last part, it will run the code we entered next to that command. 

2. We'll start our setup in `base/_base.scss`. This is where we will put all of our resets or any other very general styling that will apply to almost every element.

3. Within `_base.scss`, style the `body` tag as you normally would in css. Make the background color red. This is just a test to make sure that our sass is compiling properly. Remember you should have a process running on the command line in the background. Open index.html in your browser of choice. If the background is indeed red, you're ready to proceed to the next step. If not, review the prior steps carefully to see if you missed anything. 

4. Remove the background color in the styling of the body tag in `_base.scss`. Instead, we'll replace it with the most basic of resets. We'll write: 

```scss

body {
  margin: 0;
  padding: 0;
}

```
Some browsers will add margin and padding to the body. This creates white space around an app's interface. We want to avoid this.

5. Set the `font-size` of the `html` tag to `62.5%`. This will supercede the inherent font sizes of different text tags like headings and p tags, among others. That is ok, since we'll want to define the size of those fonts anyway. What this does open up, is a very cool alternative to defining absolute measurements. You are probably familiar with using pixels, the px at the end of a number. 

The unit rem is relative to an elment's font-size. If we use rem instead of pixels, we can simply reduce the page's font-size at different breakpoints. This will solve several responsiveness issues without us even writing additional code. 

The number 62.5% comes from the fact that a browser's default font-size is 16px. We want to make it so that 1rem = 10px. That way we can easily use them as an alternative. 10/16 = 62.5%. 

* Note: This rem trick is not inherent to sass. You can use this in the exact same way with css. 

6. For now, this is all the work we will do in _base.scss. Again, in the future, this is where you will add all of your resets and very general styling. 

Navigate to `abstracts/_variables.scss`. This will be our first exposure to some of the features in Sass. 

7. One of the most convenient uses for variables is for an app's colors. Most apps have color schemes. They make heavy use of a primary, secondary, and sometimes even tertiary color. Imagine that we developed an app with a certain color scheme, and then all the sudden the company we built it for decided to re-brand with new colors. In css, we would have to go through every line of code making sure that we changed the colors to the new, approptiate ones. In sass, we can set values as variables. 

Now imagine we built that same app in sass. We would have styled all colors using variables. That way, we can simply change the color of the variable, and the rest of the styling will follow suit. 

The syntax for variables looks like this:

```scss
// COLORS
$color-primary: #018B78;
$color-primary-light: #3AAB9B;
$color-primary-dark: #00574B;

$color-secondary: #DE8F01;
$color-secondary-light: #FFC356;
$color-secondary-dark: #8A5900;

$color-tertiary: #D70115;
$color-tertiary-light: #F75464;
$color-tertiary-dark: #86000D;

```

The $ symbol siginifies that the following text will be a variable. What we set it to after the colon will be the value of that variable. 

In `abstracts/_variables.scss`, set variables for a primary, secondary and tertiary color. Feel free to use the colors in the example above. 

The way we reference a variable is the exact same way we declare it. So to use the primary color we could do the following 

```scss
.box {
  background-color: $color-primary;
}

```

Give the body tag a background color again. This time, set it using a variable. If it worked, you're ready to proceed to the next section. 


* Note: Sometimes, you may notice that your stying is not applying. You've tried everything, triple-checked your syntax, and still no changes. 
Sometimes, there is an error in the compilation process. No worries! All we have to do is stop the process (where you ran `npm run sass`, exit that process by hitting `ctrl + c`). You can restart the process by simpy running `npm run sass` again. Make any change and save it to retest whether your code was not compiling correctly