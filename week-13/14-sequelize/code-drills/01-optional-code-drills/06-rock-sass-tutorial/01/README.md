# SASS

## Setup

Like many other technologies, the best way to learn SASS is to use it. Throughout the next few exercises, we'll be building an app in SASS!

SASS stands for Syntactically Awesome Style Sheets. The name speaks for itself. SASS may seem intimidating at first, but once you learn a couple basics, it makes life a lot easier and more organized!

In this first step, we won't be writing any code. Instead, we'll just be doing some setup.

## Instructions
1. Create a brand new directory wherever you like on your computer. Call it puppy-pal. Within that new folder, create a file called `index.html`.

2. Create a folder called `assets`.
  - Within that folder, create two other folders:
    - `css` and `images`

3. Within `css`, create a file called `style.css`.

4. The above steps should all be stuff you're pretty used to. Now we're going to start implementing our sass files. Within assets, create a folder called `sass`.

5. Within `sass`, create five new folders:
  - `abstracts`
  - `base`
  - `components`
  - `layout`
  - `pages`
6.  Within `sass`, create a file called `main.scss`. Sass files have the .scss file extension. main.scss is going to serve as our central hub. We won't write any styling there, but that's where we'll import all the files we're working on. 

7. Navigate to `abstracts` and create three new files:
  - `_functions.scss`
  - `_mixins.scss`
  - `_variables.scss`

* You'll notice that these files are all prefixed with an underscore, `_`. This is on purpose. It is this underscore that will allow us to import these files to main.scss.

8. Navigate to `base` and create four new files:
  - `_animations.scss`
  - `_base.scss`
  - `_typography.scss`
  - `_utilities.scss`
9. In Sass, we can import files with the following syntax:

```scss
@import "abstracts/functions";
@import "abstracts/mixins";
@import "abstracts/variables";

@import "base/animations";
@import "base/base";
@import "base/typography";
@import "base/utilities";

```
Notice that we did not include the underscore. We do not have to. The underscore has signaled that the files in question will be imported elsewhere. Feel free to copy this into your  `main.scss` file.

10. To this point, we've create a professional-grade file structure for Sass projects. We've even imported several files into one central one. However, the browser cannot parse Sass code. It must first be compiled to css, which all browsers are equipped to read. We will be using an external package to help us with this compilation. 

* Note: Node is a prerequisite for this next step. You do not need to know Node, but you must at least have it installed. 

11. Navigate to the root of your folder, and run `npm init --y` from the command line. If successful, you should see a file by the name of `package.json` at the root of your folder. 

12. Run `npm install node-sass`. If you look in your package.json, you should now see node-sass listed under dependencies.

13. In the last step we installed a package that will allow us to compile our sass code into css. Now we need to actually make that happen. In your package.json, you should see an object called "scripts" (if you don't, add one). Within scripts, add the following line: `"sass": "node-sass assets/sass/main.scss assets/css/style.css -w"`. 

14. Throughout the development of this app, you should keep the process listed above running. In other words, run this command: `npm run sass` from the command line. It will start a process that won't stop until you make it (you can do so by hitting ctrl + c). This command compiles all your sass code and writes it to style.css. `You will not need to work within style.css at all`. 

15. Link `style.css` to your HTML document. Remember, though we won't be working in this file, it will ultimately contain ALL of our css code. 

