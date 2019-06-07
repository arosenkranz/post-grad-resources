# CSS

## Absolute Positioning (The Basics pt.3)

#### _Learn to position things, absolutley_ ##

### Instructions

9. place boxes 1 and 2 in the top left and top right corners, respectively. You should only need to add top: , left: and right: in your CSS.

10. Put boxes three and four in the two remaining corners, respectively. 

This can be a little tricky. if you're stuck, just scroll down for a hint. 
























































<!------------------- HINT --------------------->


11. If you used 100% from the top, you'll notice that your box actually appeared below your main background color. This is because it will position the top-left corner of the box 100% from the top. 

A quick fix will be to use bottom: 0.

However, there is another cool property we didn't go over in class that can also fix this: `transform: translate();`

So instead of doing bottom: 0, let's use transform: translate(). For boxes three, and four, we'll translate their distance from the top. It'll look like this:

```
transform: translateY(-100%);

```  

Notice that we used translateY, as opposed to just translate. We're doing this, because we're not concerned with the X axis in this case, it's already working just fine. We just want the boxes to sit at the bottom properly.

If you can't scroll down, and you have four boxes on each corner of your screen, you did it!!!