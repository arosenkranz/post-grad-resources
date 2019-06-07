# Express/Algorithm

## How many times have we been here?

### Instructions

1. Using Express, create a server listening on the PORT of your choice. 

2. Given an array of domains, and how many times, each has been visited, return an object that has each subdomain as a key, and the number of times it has been visited as values.

3. Once you've successfully returned the object we want, send it as JSON to the root route. When our server is hit in the browser, we should see an object displaying how many times each subdomain was hit in the given array.

### Example 
Given the following array...
var input = ["50 jerome.code.org", "30 ricky.code.com", "60 robert.chicken.com", "8 sasha.chicken.org"]

Our function should output the following object:
```
{
  jerome: 50,
  code: 80,
  org: 58,
  ricky: 30,
  com: 90,
  robert: 60,
  chicken: 68,
  sasha: 8
}
```

Notice, "jerome" is not repeated anywhere else in the array. Therefore, it only appears 50 times. However, "code" is found at index 1 as well. Therefore, it appears 80 times (50 + 30).

"org" is found at index 0 and index 3. Therefore, it appears 58 times (50 + 8). And so on... 