# Answer

`n` represents the number of times the king will move.

The formula is `(2n + 1)^2`.

What we are essentially calculating here is the perimiter containing the spaces the king can move to in n moves.

Let's assume n is 3. The king can move 3 spaces up, or 3 spaces down. He can do the same horizontally, and the same diagonally. These movements form the square/perimiter, that our king can move within.

This is why we first calculate 2n. n * 2 calculates the furthest the king can move in any direction. He can move 3 spaces to the left, or three spaces to the right. 

So 2n forms our square, but we still need to add 1 to take into account the king's current square. 

Finally squaring the result of the entire above calculation gives us the area of the square, which is essentially the answer to the problem!