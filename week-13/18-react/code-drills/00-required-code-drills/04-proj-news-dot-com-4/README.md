# React

## `News.com` (Pt.4)

In this 5 part exercise, we'll be building a two-page news app!

The major topics covered in this project are react-router and axios. 

In part four, we'll start to integrate axios into our app.

### Instructions
1. Run `yarn add axios` from the root of your react project.
2. Within src, create a utils folder.
3. Within the utils folder, create the file `API.js`.
4. Hit [this link](https://newsapi.org/register) to get an API key for NewsAPI. It's a great, free, easy-to-use API for getting news stories from as many sources as you could want. Once you get your key, set it as a const in `API.js`.
5. Within your `API.js` file, `export default` an empty object.
6. Within the exported object, create a key `getNews` which points to a function that takes an argument `query` (we'll be using this in the next and final step).
7. Your function should execute the following line of code: 
```javascript
return axios.get(`https://newsapi.org/v2/top-headlines?sources=bleacher-report&apiKey=${key}`);
```
You can choose any of [these news outlets](https://newsapi.org/sources) if Bleacher Report isn't your cup of tea.
8. In `Home.js` we already made a componentDidMount function in the last step. Import our getNews function and invoke within componentDidMount. Then within a promise, console.log the respones.
9. If you see articles under data in the console.log, you've completed this part of the project.