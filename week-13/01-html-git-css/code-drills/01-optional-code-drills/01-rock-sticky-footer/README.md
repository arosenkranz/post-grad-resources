# CSS Basics

## The Sticky Footer

If you've ever made an app that takes up only the viewport's height--that is to say, you can't scroll up or down in that app--you may have noticed that it can be tricky to have a footer stick to the bottom of the page. 

Normally, we don't have to worry about our footer too much. If it's simply the last thing we write in HTMl, then it will just be at the bottom anyway (assuming there is no other styling saying otherwise). If you open almost any website today, you will see that it has scroll functionality. An app that does not have enough content for the user to scroll though, may present some challenges when it comes to placing a footer directly at the bottom of it. 

In this exercise, we'll make a footer that STICKS to the bottom of the page. In this exercise, we will also cover how to make that footer stop sticking once we reduce the height of the browser window. When the browser window shrinks, we should then have enough content to give our app scrolling functionality. In that case, we will no longer want our footer to stick as it will block out some of our other content and begin to make the page looks awkward. 

## Instructions

Note: You will not need to change the HTML in prompt. You will only be working within the style tags of prompt.html.

1. Navigate to prompt.html and examine the code. Open the document in your browser to see what's going on too. 

* You may notice that, though there is some distance between the main content (in green) and our footer, that is only because of the margin we specified for that main content. We could increase that margin until that footer is right at the bottom, but then we end up creating an extremely sensitive design. The smallest change to our browser window size will likely break our design.

2. One thing we know for sure, is that our app is meant to only occupy 100% of the browser window's height. The good news is that there is a unit in CSS that can help us do just that. Research the unit `vh`, which stands for `viewport height`. We can use this to set the height of our browser window. Remember, all of our HTML content is contained within the `<body>` tag, so that is what we want to be styling. 

3. As we discussed before the instructions, our app will not always assume 100% of the viewport's height. If we shrink the height of the screen, we would be left with a very awkward design, trying to cram all of our content into a smaller and smaller space. The property `max-height` can help us with this. Using the `vh` unit from the last step, we can specify that our body should assume the entire height of the browser window, but can also be less than that if it needs to.

4. In the last couple of steps we did some setup, but we did not actually touch the footer. That is what we'll be doing in this step. If we think about it, what we want is for the footer to be `positioned` at the bottom of our page. If we say that our footer should have no distance from the bottom, then that bottom will be the bottom of the body, it's parent element. `Position` the footer so that it is directly at the bottom of the body.

5. In the last step you should have managed to keep your footer at the bottom of the browser window no matter what. Shrink the height of your browser window. When you do so, you'll see that awkwardness in design we spoke about. The footer begins to appear over the rest of our content, which is not a recipe for a good user experience. In this case, since we are concerned with a change in design based on the size of the browser window, we want to write a media query. In the past, you have likely written media queries concerning the browser window's width. That is not the concern in this case. What we're worried about here is the browser window's `height`. Write a media query for a broswer height of 750px. in that media query, remove the position of the footer.

6. If you've completed all the above steps, your footer should stick to the bottom of the page when the broswer window's height is greater than 750px, otherwise, you should need to scroll down to see it.

`Congratulations on your sticky footer!`