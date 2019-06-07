[Return to Home](../../../README.md)

<hr>

# Student Resources

## Table of Contents

### Terminology & Links

01. [Express](#express)
02. [Express Routing](#express-routing)
03. [Response methods](#response-methods)
04. [Restful Routes](#restful-routes)
05. [body-parser](#body-parser)
06. [Developing template engines for Express](#developing-template-engines-for-express)
07. [Serving static files in Express](#serving-static-files-in-express)
08. [express.Router](#expressrouter)
09. [window.location.origin;](#windowlocationorigin)
10. [Location.reload()](#locationreload)
11. [HTTP Module](#http-module)

### Audio Resources

01.  [Podcasts](./podcasts.md)

<!-- ### Video Resources

01. [Video Listing](/video.md) -->

<hr>

## Express

[Back to top](#student-resources)

>The following examples illustrate defining simple routes.

>Respond with Hello World! on the homepage:

```JavaScript
app.get('/', function (req, res) {
  res.send('Hello World!')
})
```
Respond to POST request on the root route (/), the application’s home page:

```JavaScript
app.post('/', function (req, res) {
  res.send('Got a POST request')
})
```
Respond to a PUT request to the /user route:

```JavaScript
app.put('/user', function (req, res) {
  res.send('Got a PUT request at /user')
})
```
Respond to a DELETE request to the /user route:

```JavaScript
app.delete('/user', function (req, res) {
  res.send('Got a DELETE request at /user')
})
```

## Express Routing

[Back to top](#student-resources)

Routing refers to the definition of application end points (URIs) and how they respond to client requests. For an introduction to routing, see Basic routing.

The following code is an example of a very basic route.


```JavaScript
var express = require('express')
var app = express()

// respond with "hello world" when a GET request is made to the homepage
app.get('/', function (req, res) {
  res.send('hello world')
})
```

Route methods
A route method is derived from one of the HTTP methods, and is attached to an instance of the express class.

The following code is an example of routes that are defined for the GET and the POST methods to the root of the app.

```JavaScript
// GET method route
app.get('/', function (req, res) {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', function (req, res) {
  res.send('POST request to the homepage')
})
```
Route paths
Route paths, in combination with a request method, define the endpoints at which requests can be made. Route paths can be strings, string patterns, or regular expression

```JavaScript
app.get('/', function (req, res) {
  res.send('root')
})
```
This route path will match requests to /about.

```JavaScript
app.get('/about', function (req, res) {
  res.send('about')
})
```
This route path will match requests to /random.text.

```JavaScript
app.get('/random.text', function (req, res) {
  res.send('random.text')
})
```


Examples of route paths based on regular expressions:

This route path will match anything with an “a” in the route name.
```JavaScript
app.get(/a/, function (req, res) {
  res.send('/a/')
})

```


Route parameters
Route parameters are named URL segments that are used to capture the values specified at their position in the URL. The captured values are populated in the req.params object, with the name of the route parameter specified in the path as their respective keys.

```
Route path: /users/:userId/books/:bookId
Request URL: http://localhost:3000/users/34/books/8989
req.params: { "userId": "34", "bookId": "8989" }
```

To define routes with route parameters, simply specify the route parameters in the path of the route as shown below.


```JavaScript
app.get('/users/:userId/books/:bookId', function (req, res) {
  res.send(req.params)
})
```

```
The name of route parameters must be made up of “word characters” ([A-Za-z0-9_]).
```

## Response methods

[Back to top](#student-resources)


The methods on the response object (res) in the following table can send a response to the client, and terminate the request-response cycle. If none of these methods are called from a route handler, the client request will be left hanging.

| Method	  | Description  |
| :---: | :---: |
| **---------**     | **--**  |
| [res.download()](http://expressjs.com/en/4x/api.html#res.download)     | Prompt a file to be downloaded. |
| [res.json()](http://expressjs.com/en/4x/api.html#res.end)   | Send a JSON response. |
| [res.jsonp()](http://expressjs.com/en/4x/api.html#res.json)  | Send a JSON response with JSONP support. |
| [res.redirect()](http://expressjs.com/en/4x/api.html#res.redirect)  | Redirect a request. |
| [res.render()](http://expressjs.com/en/4x/api.html#res.render) | Render a view template. |
| [res.send()](http://expressjs.com/en/4x/api.html#res.send) | Send a response of various types. |
| [res.sendFile()](http://expressjs.com/en/4x/api.html#res.sendFile)  | Send a file as an octet stream. |
| [res.sendStatus()](http://expressjs.com/en/4x/api.html#res.sendStatus)  | Set the response status code and send its string representation as the response body. |

[More about HTTP Status Codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

## Restful Routes

[Back to top](#student-resources)

What is REST?
The foundation of RESTful routing is generally considered to be Roy Fielding’s doctoral thesis, [Architectural Styles and the Design of Network-based Software Architectures](http://www.ics.uci.edu/~fielding/pubs/dissertation/top.htm).

REST, an acronym for Representational State Transfer, boils down to two main principles for our purposes:
* Using resource identifiers (which, for the purposes of discussion, you can think of as URLs) to represent resources
* Transferring representations of the state of that resource between system components.

CRUD, Verbs, and Actions
RESTful route provides a mapping between HTTP verbs, controller actions, and (implicitly) CRUD operations in a database.

The seven different routes in your application:

| **URL** | **HTTP Verb** |  **Action**| **Used For** |
|------------|-------------|------------|------------|
| /photos/         | GET       | index  | display a list of all photos
| /photos/new      | GET       | new    |  return an HTML form for creating a new photo
| /photos          | POST      | create |  create a new photo
| /photos/:id      | GET       | show   |  display a specific photo
| /photos/:id/edit | GET       | edit   |  return an HTML form for editing a photo
| /photos/:id      | PATCH/PUT | update |  update a specific photo
| /photos/:id      | DELETE    | destroy|  delete a specific photo

Note: These routes can build. For example:


| **URL** | **HTTP Verb** |  **Action**| **Used For** |
|------------|-------------|------------|------------|
| users/:id/photos/         | GET       | index  | display a list of all photos belonging to a single user
| users/:id/photos/new      | GET       | new    |  return an HTML form for creating a new photo for a user
| users/:id/photos          | POST      | create |  create a new photo for a user
| users/:id/photos/:id      | GET       | show   |  display a specific photo belonging to a user
| users/:id/photos/:id/edit | GET       | edit   |  return an HTML form for editing a photo belonging to a single user
| users/:id/photos/:id      | PATCH/PUT | update |  update a specific photo belonging to a single user
| users/:id/photos/:id      | DELETE    | destroy|  delete a specific photo belonging to a single user

-----------------------------------------

## body-parser

[Back to top](#student-resources)

**What is middleware?**

* Middleware is a function which we set to run between our server receiving a request and it being available inside of our routes.

* Middleware is any number of functions that are invoked by the Express.js routing layer before your final request handler is, and thus sits in the middle between a raw request and the final intended route. We often refer to these functions as the middleware stack since they are always invoked in the order they are added.

* Middleware can be defined using the app.use method.

* Middleware can transform the request from the browser before we work with it. In the case of body-parser, it takes the unreadable request and turns it into a readable object and attaches it to req.body. By the time the request gets to our routes, body-parser has already formatted it for us.

body-parser is an example of middleware.

**[body-parser](https://github.com/expressjs/body-parser)**


Node.js body parsing middleware.
Parse incoming request bodies in a middleware before your handlers, available under the req.body property.
Example:

**[bodyParser.urlencoded([options])](https://github.com/expressjs/body-parser#bodyparserurlencodedoptions)**

Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option. This parser accepts only UTF-8 encoding of the body and supports automatic inflation of gzip and deflate encodings.

A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body). This object will contain key-value pairs, where the value can be a string or array (when extended is false), or any type (when extended is true).

**Options**

The urlencoded function takes an optional options object that may contain any of the following keys:

**extended**

The extended option allows to choose between parsing the URL-encoded data with the querystring library (when false) or the qs library (when true). The "extended" syntax allows for rich objects and arrays to be encoded into the URL-encoded format, allowing for a JSON-like experience with URL-encoded.

**[bodyParser.json([options])](https://github.com/expressjs/body-parser#bodyparserjsonoptions)**

Returns middleware that only parses json and only looks at requests where the Content-Type header matches the type option. This parser accepts any Unicode encoding of the body and supports automatic inflation of gzip and deflate encodings.

A new body object containing the parsed data is populated on the request object after the middleware (i.e. req.body).

```JavaScript
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
```
## [Developing template engines for Express](https://expressjs.com/en/advanced/developing-template-engines.html)

[Back to top](#student-resources)

Use the app.engine(ext, callback) method to create your own template engine. ext refers to the file extension, and callback is the template engine function, which accepts the following items as parameters: the location of the file, the options object, and the callback function.

The following code is an example of implementing a very simple template engine for rendering .ntl files.

```JavaScript
var fs = require('fs') // this engine requires the fs module
app.engine('ntl', function (filePath, options, callback) { // define the template engine
  fs.readFile(filePath, function (err, content) {
    if (err) return callback(err)
    // this is an extremely simple template engine
    var rendered = content.toString().replace('#title#', '<title>' + options.title + '</title>')
    .replace('#message#', '<h1>' + options.message + '</h1>')
    return callback(null, rendered)
  })
})
app.set('views', './views') // specify the views directory
app.set('view engine', 'ntl') // register the template engine
```

## [Serving static files in Express](https://expressjs.com/en/starter/static-files.html)

[Back to top](#student-resources)

To serve static files such as images, CSS files, and JavaScript files, use the express.static built-in middleware function in Express.

The function signature is:
```JavaScript
express.static(root, [options])
```

The root argument specifies the root directory from which to serve static assets.

-----------------------------------------

## [express.Router](https://expressjs.com/en/guide/routing.html)

[Back to top](#student-resources)

Use the express.Router class to create modular, mountable route handlers. A Router instance is a complete middleware and routing system; for this reason, it is often referred to as a “mini-app”.

The following example creates a router as a module, loads a middleware function in it, defines some routes, and mounts the router module on a path in the main app.

-----------------------------------------

## window.location.origin;

[Back to top](#student-resources)

Definition and Usage
The origin property returns the protocol, hostname and port number of a URL.

Note: If the port number is not specified in the URL (or if it is the scheme's default port - like 80, or 443), some browsers will not display the port number.

Our Usage: Getting back the value of http://localhost:3000/ for use in our $.get() where we specify the URL you wish to request. Example: http://localhost:3000/api/tables

Note: This property is read-only.

Our Use:

We get the location of the root page.
We use this instead of explicitly saying the URL is localhost:3001 because the url will change when we deploy.
The AJAX function uses the complete URL of our API to GET the data associated with it (initially set to localhost) - complete URL is not needed.

## [Location.reload()](https://developer.mozilla.org/en-US/docs/Web/API/Location/reload)

[Back to top](#student-resources)

The Location.reload() method reloads the resource from the current URL. Its optional unique parameter is a Boolean, which, when it is true, causes the page to always be reloaded from the server. If it is false or not specified, the browser may reload the page from its cache.

# [HTTP module](https://nodejs.org/api/http.html)

This, in essence, is a package ("small box") which allows our server ("big box") to have the capability of handling http requests and responses.
HTTP is package that comes with the standard Node library.



## server.listen([port][, hostname][, backlog][, callback])
Begin accepting connections on the specified port and hostname.
[server.listen([port][, hostname][, backlog][, callback])](https://nodejs.org/api/http.html#http_server_listen_port_hostname_backlog_callback)

## http.createServer([requestListener])

[http.createServer([requestListener])](https://nodejs.org/api/http.html#http_http_createserver_requestlistener)
Returns a new instance of http.Server.

The requestListener is a function which is automatically added to the 'request' event.

## request.end([data[, encoding]][, callback])
[request.end([data[, encoding]][, callback])](https://nodejs.org/api/http.html#http_request_end_data_encoding_callback)
Finishes sending the request. If any parts of the body are unsent, it will flush them to the stream.

## response.writeHead(statusCode[, statusMessage][, headers])
Sends a response header to the request. The status code is a 3-digit HTTP status code, like 404. The last argument, headers, are the response headers. Optionally one can give a human-readable statusMessage as the second argument.
This method must only be called once on a message and it must be called before response.end() is called.
[response.writeHead(statusCode[, statusMessage][, headers])](https://nodejs.org/api/http.html#http_response_writehead_statuscode_statusmessage_headers)

-----------------------------------------

#Ports
80: Hypertext Transfer Protocol (HTTP) used in the World Wide Web
registered ports are those from 1024 through 49151
[Port (computer networking)](https://en.wikipedia.org/wiki/Port_(computer_networking))

-----------------------------------------