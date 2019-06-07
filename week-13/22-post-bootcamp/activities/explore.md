

# Explore

* [Return to `Post Bootcamp`](../README.md)

<hr>

## Suggested Project Builds

<hr>


### Front End

#### Tic Tac Toe
For this challenge you are going to create the game of Tic-Tac-Toe. Here's a review of the rules:
- The game is played on a 3 by 3 grid of squares.
- One player is assigned the symbol "X" and the other player is assigned the symbol "O".
- Players take turns. On a player's turn they must put their symbol in an empty square.
- If a player has three of their symbol in a row, column or diagonal, they win the game.
- If no empty squares remain, and no player has won, then the game is declared a tie.

For this step, you will need to create and assign values to the following variables:
- NUM_ROWS and NUM_COLS for the number of rows and columns of tiles required to represent the grid of squares.
- SYMBOLS for the symbols assigned to each player. For this challenge, the first symbol in the array should be the symbol for the player who moves first.
- playerTurn to keep track of whose turn it is. It should hold the index for the symbol in the SYMBOLS array for whose turn it is.

<hr>

#### Connect Four
Connect Four is a two-player connection game in which the players first choose a color and then take turns dropping colored discs (like checkers) from the top into a seven-column, six-row vertically suspended grid. The pieces fall straight down, occupying the next available space within the column. The objective of the game is to connect four of one's own discs of the same color next to each other vertically, horizontally, or diagonally before your opponent.
A fun discourse on winning strategies at Connect Four is found here http://www.pomakis.com/c4/expert_play.html .
In this challenge you'll be given a set of game moves and then be asked to figure out who won and when (there are more moves than needed). You should safely assume that all moves should be valid (e.g. no more than 6 per column).
For sake of consistency, this is how we'll organize the board, rows as numbers 1-6 descending and columns as letters a-g. This was chosen to make the first moves in row 1.

```javascript
a b c d e f g
6   . . . . . . .
5   . . . . . . .
4   . . . . . . .
3   . . . . . . .
2   . . . . . . .
1   . . . . . . .
```

Input Description:
You'll be given a game with a list of moves. Moves will be given by column only (gotta make this challenging somehow). We'll call the players X and O, with X going first using columns designated with an uppercase letter and O going second and moves designated with the lowercase letter of the column they chose.

```javascript

C  d
D  d
D  b
C  f
C  c
B  a
A  d
G  e
E  g
```

Output Description

Your program should output the player ID who won, what move they won, and what final position (column and row) won. Optionally list the four pieces they used to win.

```javascript
X won at move 7 (with A2 B2 C2 D2)
```

Challenge Input:

```javascript
D  d
D  c    
C  c    
C  c
G  f
F  d
F  f
D  f
A  a
E  b
E  e
B  g
G  g
B  a
```

Challenge Output

```javascript
O won at move 11 (with c1 d2 e3 f4)
```

<hr>

### Models & DB CRUD

#### Todo Application
Make a to-do list that allows users to enter in and remove items. Your app should remember the items each time your user opens the app.

* Routes for Create (Create a new List, a new task on a list), Read (Read all Lists, all tasks on a list, and a single list), Delete (Delete a List, delete a task on a list), and Update (Update a List, Update a task on a list)

<hr>

#### Getting Real CRUD
* Reddit Clone w/ Firebase and ReactJS
Look at what users are able to do on [Reddit](https://www.reddit.com)
- Design User stories
- Begin your development Process

* Twitter Clone: Relationships!

<hr>

### Coding Challenge
Prototype one of the following projects:

#### 1: Rally Health

As you probably know if you’ve stopped at our booth, Rally is hiring! Unfortunately, ouroffice space has been fully incapable of keeping up with the pace, and we’ve had to remodela few times.  Each time, it seems harder to navigate the office – between rows of desks,construction, and engineers sharing the latest bit of Scala gossip, our DC, San Francisco, andChicago offices become awfully mazelike.Perhaps you can help us find our way through?Write a program that constructs and displays a maze (having a floor plan always helpswhen trying to get around) with a marked start and finish – or call it your desk and thecoffee machine ­­ and then solves it (and displays the solution).  The exact size, shape, andtype of maze is up to you.

<hr>

#### 2: Opendoor

The question below is meant to give candidates a sense of the problems we tackle at Opendoor. Please submit solutions in the form of a readme + working code. The problems should take under 2 hours to complete.

Write an API endpoint that returns a filtered set of listings from the data provided:

https://s3.amazonaws.com/opendoor-problems/listing-details.csv

API:
GET /listings?min_price=100000&max_price=200000&min_bed=2&max_bed=2&min_bath=2&max_bath=2

min_price: The minimum listing price in dollars.
max_price: The maximum listing price in dollars.
min_bed: The minimum number of bedrooms.
max_bed: The maximum number of bedrooms.
min_bath: The minimum number of bathrooms.
max_bath: The maximum number of bathrooms.

The expected response is a GeoJSON FeatureCollection of listings:

```javascript
{
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "geometry": {"type": "Point", "coordinates": [-112.1,33.4]},
      "properties": {
  "id": "123ABC", # CSV id
  "price": 200000, # Price in Dollars
  "street": "123 Walnut St",
        "bedrooms": 3, # Bedrooms
        "bathrooms": 2, # Bathrooms
        "sq_ft": 1500 # Square Footage
      }
    },
    ...
  ]
}
```

All query parameters are optional, all minimum and maximum fields should be inclusive (e.g. min_bed=2&max_bed=4 should return listings with 2, 3, or 4 bedrooms).

At a minimum:
- Your API endpoint URL is /listings
- Your API responds with valid GeoJSON (you can check the output using http://geojson.io)
- Your API should correctly filter any combination of API parameters
- Use a datastore

Bonus Points:
- Pagination via web linking (http://tools.ietf.org/html/rfc5988)

When you're done, please deploy your solution somewhere (Heroku works great) and push your code to a GitHub repository and send us the links. Also, please include a brief write-up in a README on what else you'd want to improve or add if you were going to spend more time on it.

<hr>

#### 3: Departure Times

Create a service that gives real-time departure time for public transportation (use freely available public API). The app should geolocalize the user.

Here are some examples of freely available data:

[511 (San Francisco)](http://511.org/developers/list/apis/)
[Nextbus (San Francisco)](http://www.nextbus.com/xmlFeedDocs/NextBusXMLFeed.pdf)
[Transport for London Unified API (London)](https://api.tfl.gov.uk/)

#### 4:SF Movies
Create a service that shows on a map where movies have been filmed in San Francisco. The user should be able to filter the view using autocompletion search.

The data is available on [DataSF](https://datasf.org/): [Film Locations](https://data.sfgov.org/Culture-and-Recreation/Film-Locations-in-San-Francisco/yitu-d5am).

<hr>

#### 5 Email Service

Create a service that accepts the necessary information and sends emails. It should provide an abstraction between two different email service providers. If one of the services goes down, your service can quickly failover to a different provider without affecting your customers.

Example Email Providers:

[SendGrid](https://sendgrid.com/docs/API_Reference/Web_API/mail.html) - [Simple Send Documentation](https://sendgrid.com/pricing/)
[Mailgun](https://www.mailgun.com/) - [Simple Send Documentation](https://documentation.mailgun.com/en/latest/quickstart.html#sending-messages)
[SparkPost](https://www.sparkpost.com/) - [Developer Hub](https://developers.sparkpost.com/)
[Amazon SES](https://aws.amazon.com/ses/) - [Simple Send Documentation](http://docs.aws.amazon.com/ses/latest/APIReference/API_SendEmail.html)

All listed services are free to try and are pretty painless to sign up for, so please register your own test accounts on each.

<hr>

#### 6 Food Trucks

Create a service that tells the user what types of food trucks might be found near a specific location on a map.

The data is available on [DataSF](https://datasf.org/): [Food Trucks](https://data.sfgov.org/Economy-and-Community/Mobile-Food-Facility-Permit/rqzj-sfat)


<hr>

