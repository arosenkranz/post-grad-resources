[Return to Home](../../../README.md)

<hr>

# Student Resources :books:

## Table of Contents

### Terminology & Links

01. [MVC](#mvc)
02. [ORM](#orm)
03. [Sequelize](#sequelize)

### Audio Resources
01.  [Podcasts](/podcasts.md)

### Video Resources
01. [Video Listing](/video.md)

<hr>

## MVC

[Back to top](#student-resources)

* [MVC - Wikipedia](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
* [MVCs are like sandwhich shops...](https://medium.freecodecamp.org/simplified-explanation-to-mvc-5d307796df30)
* [Take your pick of these forum explanations on MVC](https://softwareengineering.stackexchange.com/questions/127624/what-is-mvc-really)
* [MVC - 25 min explanation](https://www.youtube.com/watch?v=1IsL6g2ixak)
* [MVC - 10 min explanation](https://www.youtube.com/watch?v=pCvZtjoRq1I)
* [MVC - explained a little more colloquially](https://www.youtube.com/watch?v=fa8eUcu30Lw)
* [MVC with Penguins!](https://www.sitepoint.com/mvc-design-pattern-javascript/)
* [MVC explained by google chrome devs](https://developer.chrome.com/apps/app_frameworks)

#### Quick Synopsis
MVC, or Model-View-Controller, is a template file structure for full-stack projects.

* Model: Contains your data models. These are used for stating what data your interested in storing and querying and how that data is structured. Think of it as setting up tables and the data that goes into them.
* View: Kind of exactly what it sounds like. It's what you can actually SEE i.e. the front end. Some templating frameworks like handlebars allow you to inject data from your backend straight into your markup (HTML).
* Controller: The middle-man in this whole equation. This defines the methods you'll be using with your data and/or how you'll be using that data.

-----------------------------------------
## ORM

[Back to top](#student-resources)

* [ORM - wikipedia](https://en.wikipedia.org/wiki/Object-relational_mapping)
>Gerneral Data on a object relational mapping

* [ORM - explaintion](https://stackoverflow.com/questions/1279613/what-is-an-orm-and-where-can-i-learn-more-about-it)
>explaintion of what a ORM is with Pro's and Con's

* [ORM - video description](https://www.youtube.com/watch?v=LooPUh5_QKI)

> A simple answer is that you wrap your tables or stored procedures in classes in your programming language, so that instead of writing SQL statements to interact with your database, you use methods and properties of objects.
<!-- In other words, instead of something like this:
```
String sql = "SELECT ... FROM persons WHERE id = 10"
DbCommand cmd = new DbCommand(connection, sql);
Result res = cmd.Execute();
String name = res[0]["FIRST_NAME"];] -->
* [ORM - Visual Representation](https://www.developer.com/lang/article.php/3531871/How-to-Select-an-Object-Relational-Mapping-Tool-for-NET.htm)
------------------------------------------

## Sequelize

[Back to top](#student-resources)

Sequelize is a powerful ORM for, you guessed it, SQL. It supports all forms of SQL including mySQL and PostgresSQL.

* [Official Documentation](http://docs.sequelizejs.com/)
* [Using Sequelize with Node and Express](https://www.codementor.io/mirko0/how-to-use-sequelize-with-node-and-express-i24l67cuz)

