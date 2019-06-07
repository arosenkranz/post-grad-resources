# Javascript 

## Only Once Function

### Instructions

_In this activity, we're going to be writing a function that only does its work the first time it's called. For subsequent invocations, nothing will happen and the function will return null. This and the following 3 code drills are fairly common interview questions, so please try your best!_ 

* Create a function that when called the first time, console logs "I'm RUNNING!" and returns `true`.

* The second time it's called and all subsequent calls, it doesn't do anything and returns `null`.

* Do not use global variables for this activity

* This can be a very challenging exercise if you've never seen it before, so refer to the hints section for guidance if you're stuck.
    * There are also different approaches to solving this drill. For this activity, we're not testing your mastery of closure, so we're looking for the pointer reassignment method.

* The expected outcome of these function calls are:

```javascript
onlyOnce()
// Console logs "I'm RUNNING!"
// returns true

onlyOnce()
// returns null

onlyOnce()
// returns null
