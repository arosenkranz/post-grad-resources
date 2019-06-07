[Return to Home](../../../README.md)

<hr>

# Student Resources

## Table of Contents

### Terminology & Links

01. [Client-side](#client-side)
02. [Server-side](#server-side)
03. [Local Storage](#local-storage)
04. [Session Storage](#session-storage)
05. [Cookies](#cookies)
06. [Firebase](#firebase)


### Audio Resources
01. [Podcasts](./podcasts.md)

<!-- ### Video Resources
01. [Video Listing](/video.md) -->

<hr>


#### Client Side

[Back to top](#student-resources)

> persistence might be useful for saving login information or information that would allow a web application to work offline. Client-side persistence is also useful for information relevant to having the page load quickly. i.e. widgets that will get run repeatedly on visits.

#### Server side

[Back to top](#student-resources)

> Obviously this is where you are going to store the hunk of your data for all your users, customers, locations, etc. Your local machine isn't going to store everyone's data every time. That would make no sense. You need an external storage center for data if you are using server-side persistence.


#### Local Storage

[Back to top](#student-resources)

> Stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser cache / Locally Stored Data.
> * It's there forever until we clear it or restart our computer.


#### Session Storage

[Back to top](#student-resources)

> The sessionStorage object stores data only for a session, meaning that the data is stored until the browser (or tab) is closed. Data is never transferred to the server.
> * It's there until we close the browser.


#### Cookies

[Back to top](#student-resources)
> Stores data that has to be sent back to the server with subsequent requests. Its expiration varies based on the type and the expiration duration can be set from either server-side or client-side (normally from server-side).
> * It's there until it expires or is manually cleared.

#### Firebase

[Back to top](#student-resources)

>Firebase offers an extremely easy to use system for relaying data between your application and their dedicated platforms.

>It offers an easy to use, intuitive GUI for seeing your data in real-time.

>It offers near instantaneous transmission of data between the Firebase database and your application. Of specific importance is the concept of "real-time" data binding (i.e. when your data changes in the database it will IMMEDIATELY reflect that change in your application.)

[Firebase: Saving Data](https://www.youtube.com/watch?v=7lEU1UEw3YI)

[Firebase: Retrieving Data](https://www.youtube.com/watch?v=NcewaPfFR6Y)

