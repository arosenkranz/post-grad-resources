# Express/Algorithm

## Igpae Atinlae

### Instructions
1. Using Express, create a server listening on the PORT of your choice. 

2. Given a sentence, create a function that returns the same sentence in Pig Latin

#### Pig Latin:
Pig Latin takes the first consonant _sound_ (not just the first consonant in every case) of a word, and appends it to the back of that word. It the appends the sound "ae" to the back of that word. 

"Brag" becomes "agbrae". We remove and append all the characters until we hit a vowel, the we add "ae".

If a word starts with a vowel, we remove nothing, and simply append "wae". 

3. Once you've successfully returned the string we want, send it as JSON to the root route. When our server is hit in the browser, we should see our sentence in Pig Latin.

### Example

 Given the string, "The quick brown dog jumped over the lazy fox apple", your function should return: 
 
 "ethae uickqae ownbrae ogdae umpedjae overwae ethae azylae oxfae applewae"