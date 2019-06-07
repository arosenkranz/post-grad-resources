# Sass

## Media Queries

Congratulations on making it to this point. If you've done all the prior exercices, you may see that Sass isn't so intimidating. At the end of the day, it is really alot like normal CSS, just with some extra features. 

The final topic we'll cover is media queries. Using the power of `mixins`, media queries become a lot easier with Sass. 

The most efficient, and easiest way to write media queries in sass requires a bit of setup. That setup will take the form of writing mixins. 

In `abstracts/_mixins.scss`, paste the following code. 

```scss
@mixin responsive($breakpoint) {
  @if $breakpoint == phone {
    //em number calculated by dividing the amount of px by default font size (16px) 
    @media only screen and (max-width: 37.5em) { @content }; //600px 
  }

  @if $breakpoint == t-port {
    @media only screen and (max-width: 56.25em) { @content }; //900px
  }

  @if $breakpoint == t-land {
    @media only screen and (max-width: 75em) { @content }; //1200px
  }

  @if $breakpoint == l-desk {
    @media only screen and (min-width: 112.5em) { @content }; //1800px
  }
}

``` 

In responsive design, it is best practice to write breakpoints for whenever the design needs them. In some cases though, we select a few different breakpoints, and create a different design for each. That is what the above code is accomplishing. 

You'll notice the if statements work a lot like they do in javascript. You may also notice that `$breakpoint` is acting like a parameter to a function called `responsive`.

What the if statements do is change allow for us to specify different styling for each breakpoint. As you may notice in the comments, em is calculated by dividing the amount of px in the breakpoint by the default font size (16px). So the breakpoints we've chosen here are 1800px, 1200px, 900px and 600px. 

The `@content` keyword is a placeholder for... content. It also acts like a parameter that we can fill in when we invoke this "function" (it isn't really a function, but syntactically shares many similarities).

Remember, the above code is just the declaration of the mixin. We have not actually specified any new styling yet. 

Another thing to note are the words on the right hand side of the equals signs. These are arbitrary words. You can name them anything you'd like. The same with `$breakpoint`. What is important is that you refer to them properly later. t-land, t-port etc... represent differen device sizes. These informed the breakpoints chosen. 

In `base/_base.scss` paste in the following code within your styling for the HTML tag:

```scss
  @include responsive(l-desk) {
    font-size: 75%; //1rem = 12px 12/16 = 75%
  }

  @include responsive(t-land) { // width < 1200?
    font-size: 56.25%; //1rem = 9px 9/16 = 56.25%
  }

  @include responsive(t-port) { // width < 900?
    font-size: 50%; //1rem = 8px 8/16 = 50%
  }

  @include responsive(phone) { // width < 600?
    font-size: 37.5%; //1rem = 6px 6/16 = 37.5%
  }
```

Just like the `mixin` syntax we covered before, we use the `@include` keyword is still used to invoke these mixins. There are two important things to note here: the argument passed, and what is found between the curly braces. 

Notice that in `base/_base.scss`, we are changing the overall font-size of our app. As we discussed before, this will effect the `rem` unit. Notice the comments next to these media queries. The way we had it set up originally is that 10px = 1rem. As we shrink the screen, 10px = progressively fewer pixels. 

Another thins to note is that the font size is standing in for the `@content` we saw earlier. This is how we can write media queries in Sass. We simply nest the media query inside of the class we'd like to change. In this case, we were just writing media queries for the HTML tag.

A normal media query will look like this:

```scss

.box {
  width: 200px;
  height: 200px;
  background-color: blue;

  @include responsive(l-desk) { 
    width: 190px;
    height: 190px;
  }

  @include responsive(t-land) { // width < 1200
    width: 150px;
    height: 150px;
  }

  @include responsive(t-port) { // width < 900
    width: 120px;
    height: 120px;
  }

  @include responsive(phone) { // width < 600
    width: 80px;
    height: 80px;
  }
}

```

## Instructions
Given the tools explained above, write your own media queries for this app. Make sure that the app looks acceptable at each breakpoint.

* BONUS: Create a breakpoint of your own, and write some media queries for it. 