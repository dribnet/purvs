## MDDN 242 2022 Assignment 2

### 28/04/22 - INTERPOLATION AND FIBONACCI

Today, I have been working on the interpolations between my letters. Phoebe had mentioned on Thursday that I could look into the use of the golden ration in Mondrian art and see if that fits with my letter forms. I did a little bit of research into it and found some examples which gave me the idea of incorporating it into my interpolations. I thought that I could make one letter translate to a standard golden ratio grid before moving to the next letter. I drew up a few different options to see how I would fit it within the 3x5 grid of my letters and settled on my second option as I felt it looked the most balanced and worked with my code base (the third option wouldn't work as I am unable to draw a white rectangle, only two squares).

![Golden Ratio Sketches](Golden_ratio_sketches.jpg)

I tried a few different methods to get this working.

Firstly, I created a second set of interpolation values so that one set change for the first 50% and the second did from 51-100%. I then hard coded the values I wanted it to change to based on my sketches. While this went through the golden ratio grid, the parts started at a weird position outside the bounding box and not at the first letter positions.

I then decided to see what it would look like if rather than starting at the original letter, the interpolation started at the golden ratio grid and changed to the new letter from there. This worked better as the parts did not move randomly outside the bounding box and has a cool layering effect, however I can't decide if it looks a bit jolty as it is not a smooth transition between letters.

As a third variation, I went back to the two step idea but instead of hard coding the variables I created a new letter in my letters.js file to act as a golden ratio grid middle letter. I changed the hard coded bits to the variables of the new letter to see if it would work better than the hard coded version, however they just did the same thing.

I think my favourite option is the second one, where the letter starts from the golden ratio grid, but I think I will get some feedback and see if I can fix the other options.

The rectangles still go outside the border of the canvases in the background, but an easier solution might be to change the shape of the canvases rather than try and fix the interpolation.

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

My next steps are to fix this up a bit to make it nicer and to fix the canvases in the background as currently they make the exhibition page look a bit busy and the letters are a bit harder to read. I might make it one large canvas rather than eight separate ones if that is possible.
