# Node

## Request Package

### Instructions

* Write a node app that takes in a zip code as a command line argument and displays the temperature forecast for the next 5 days

* Use `request` and the [Open Weather Map API](https://openweathermap.org/api) for your queries

* Output the date and time of each of the three hour forecasts you get back from the API

Your output should look something like:
> node weather.js 94123

```
2018-08-24 21:00:00 69.64
2018-08-25 00:00:00 68.7
2018-08-25 03:00:00 62.87
2018-08-25 06:00:00 56.75

...

2018-08-29 06:00:00 58.2
2018-08-29 09:00:00 58.54
2018-08-29 12:00:00 58.78
2018-08-29 15:00:00 59.19
2018-08-29 18:00:00 62.61
```