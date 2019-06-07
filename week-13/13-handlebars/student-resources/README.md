[Return to Home](../../../README.md)

<hr>

# Student Resources

## Table of Contents

### Terminology & Links

01.  [Handlebars](#handlebars)

### Audio Resources
01.  [Podcasts](/podcasts.md)

### Video Resources
01. [Video Listing](/video.md)

<hr>

<img src="../../00-admin-resources/assets/images/handlebars.jpg" width="100">

## Handlebars

[Back to top](#student-resources)

* [Official Documentation](https://handlebarsjs.com/)
* [A beginner's guide](https://www.sitepoint.com/a-beginners-guide-to-handlebars/)


> Handlebars expressions are written like this ``{{ }}``(a double stash before, followed but the content to be evaluated, followed a double closing double stash):  ``{{ }}``

> Triple Stash ``{{{ }}}`` For Non-escape HTML
Ordinarily, you use Handlebars’s double stash ``{{ }}`` for expressions, and by default, Handlebars content in this standard double stash is escaped to “protect you against accidental XSS problems caused by malicious data passed from the server as JSON.” 1This ensures that nefarious code in the HTML cannot be injected into the page.  But sometimes you want the raw (un-escaped) HTML instead. For this, you can use Handlebars’s triple stash instead ``{{{ }}}``. The triple stash tag signifies to handlebars to do not escape the HTML content contained in the triple stash.

The `{{#if}}` helper does just what you would expect it to do. It allows you to implement an if block into your Handlebars code.

The `{{#if}}` helper outputs the block that it contains if the value given to it is truthy.

The `{{#unless}}` statement is pretty much the exact opposite of the `{{#if}}` statement.

It will run the block of code contained inside of it if the given expression is false.

Support a directory of partials; e.g., `{{> foo/bar}}` which exists on the file system at `views/partials/foo/bar.handlebars`, by default.

----------------------------------------