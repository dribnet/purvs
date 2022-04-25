## MDDN 242 2022 Assignment 2

### 20/04/22 - FINISHING MY LETTERS

Today, I created the last few letters of my alphabet - N, W, X and the default value.

I am quite happy with the shape of the X as this was one I was struggling to figure out how to do. The way I have my code set up doesn't allow me to have a vertically symmetrical letter (like the K but with the left side separated in the middle). So, I have moved the center of the letter up so that the bottom legs are longer than the top legs. I think this looks good and has a similar balance to the Y shape wise.

I have made the M, N and W by repositioning the middle shape and changing its length to have a similar length to the diagonal line that would join the two legs (the N line is longer as it joins the two legs, whereas the M and W middle point is only half the height of the legs). I am still not 100% happy with this so I might get some feedback to see what I could do differently.

The default is just a single red square.

I also changed a few of my variable names to make them more descriptive. I changed all of the rect1 variables to rectYellow as that is the yellow rectangle, and rect2 to rectRed as that is the red rectangle.

The 15 parameters per letter:
  * `numLineSquares` : The number of squares to be drawn in the array
  * `lineSquaresX`: The x position of the square array
  * `lineSquaresY`: The y position of the square array
  * `rectYellowX`: The x position of the yellow rectangle
  * `rectYellowY`: The y position of the yellow rectangle
  * `rectYellowWidth`: The width of the yellow rectangle
  * `rectYellowHeight`: The height of the yellow rectangle
  * `rectRedX`: The x position of the red rectangle
  * `rectRedY`: The y position of the red rectangle
  * `rectRedWidth`: The width of the red rectangle
  * `rectRedHeight`: The height of the red rectangle
  * `square1X`: The x position of one of the first white squares
  * `square1Y`: The y position of the first white square
  * `square2X`: The x position of the second white square
  * `square2Y`: The y position of the second white square

My next steps are to further develop my letters and fix the ones I am not quite happy with. I also want to look more at the interpolations of my letters to see if I can make it more interesting. I still need to cut down the number of variables I have, but now that I have all of my letters done this will be easier to do.
