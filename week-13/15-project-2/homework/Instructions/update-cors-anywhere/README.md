
## Updating a cors-anywhere app to use its own node API proxy

* In your project repo, create a `public` folder and move all of your files into it

* Run `heroku create`

* Run the following command to set your app's heroku URL as an environment variable:

`heroku config:set ORIGIN_URL=$(heroku apps:info -s | grep web_url | cut -d= -f2)`

* Create a file called `server.js`

* `npm init`

* `npm install express request`

* Copy the code in [example-cors-server.js](./example-cors-server.js) to serve static assets from your `public` folder and enable the CORS URL

* Change any API calls in your project using cors-anywhere to use your new server like so:

  * Change things like: `https://cors-anywhere.herokuapp.com/https://my-api.com`

  * To: `/api/https://my-api.com`

* Commit and deploy your app to Heroku
