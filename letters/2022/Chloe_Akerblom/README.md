## MDDN 242 2022 Assignment 2

### 05/05/22 - FINAL DESIGN AND HAND IN

This is my final font, titled 'De Stijl'.

My inspiration for this project was the art of Piet Mondrian, a Dutch painter who used rectangles to create pieces of abstract artwork. His colour palette for these pieces was limited to the three primary colours, along with black, white and grey, and often used the golden ratio to determine the placement of squares and colours. His artwork is a staple of the De Stijl art movement.

My letters use a range of rectangles and squares in a 3x5 grid. I have kept the colour palette of Mondrian art, by using just red, yellow, blue, white, and black. Each letter consists of a red rectangle, a yellow rectangle, two white squares and a stack of squares which are drawn in a for loop. The number of squares drawn is determined by a variable, and the second square in the stack will always be blue while the rest are white. In some letters one or both of the white squares are hidden if they are unnecessary, but all of the other shapes are used in every letter.

I have used 15 parameters per letter. They are:
  * `numLineSquares` : The number of squares to be drawn in the stack
  * `lineSquaresX`: The x position of the square stack
  * `lineSquaresY`: The y position of the square stack
  * `rectYellowX`: The x position of the yellow rectangle
  * `rectYellowY`: The y position of the yellow rectangle
  * `rectYellowWidth`: The width of the yellow rectangle
  * `rectYellowHeight`: The height of the yellow rectangle
  * `rectRedX`: The x position of the red rectangle
  * `rectRedY`: The y position of the red rectangle
  * `rectRedWidth`: The width of the red rectangle
  * `rectRedHeight`: The height of the red rectangle
  * `square1X`: The x position of the first white square
  * `square1Y`: The y position of the first white square
  * `square2X`: The x position of the second white square
  * `square2Y`: The y position of the second white square

For the interpolations between letters, I wanted to do something that focused on the idea of the golden ratio. I did a bit of research into this and drew up some grids that follow the pattern of the ratio but also fit within the constraints of my design. I decided that I wanted my letters to move to this basic grid before changing to the new letter, using it as a transition character. I created a new letter in my letters.js file called 'interpol' that held the data for the grid position. I then tried to make the old letter transition to the grid character for the first half of the transition and then move to the new letter for the second half. However, when I did this the positioning of the rectangles in the old letter shifted and were way outside the bounding box. So instead, my letters interpolate straight from the grid character to the new letter, ignoring the old letter. While technically the transition is not smooth, they way it moves still looks smooth to the eye and gives the interpolation a more abstract feel, rather than just moving from one character to another.

For the background of my design, I have added little canvases behind each letter as a nod to the art movement it is based on. This was something one of my tutors suggested and after playing around with the colour and strokes, I feel that it adds a nice detail to the final exhibition. I initially had a border around the whole canvas but it made the exhibition page look too busy and the letters became hard to read as there were too many lines. Having just a border along the top and bottom is a nice compromise that gives the effect I was hoping for.

Overall, I am really happy with how this project went. I had a clear vision of where I wanted to take this from the start and I think that really helped me develop it. I like my colours and the readability of my font, and I feel that the background ties it all together. I am quite proud of my interpolation and feel that it really works with the rest of my design as it adds to the abstract nature of the font and ties in nicely with the values of Mondrian art. There is not a lot I would have done differently with this project as I didn't have any major hiccups along the way.
