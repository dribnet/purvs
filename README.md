## MDDN 242 2020 Assignment 2
 
Each of my letters will be composed with one circle, one rectangle and one arc. The size and x position of the first circle is fixed, but the positon and size of the arc and rect changes with each letter and is controlled by the parameters. I have started with very simpistic forms that are similar to my handwriting and have a soft, readible design.

The eleven parameters per letter:
  * `ellipseY` : y position of the main circle
  * `width` : size of the arc
  * `height` : size of the arc
  * `offsetx` : x offset of the arc in relation to the circle 
  * `offsety` : y offset of the arc in relation to the circle
  * `angleStart` : angle to start the arc
  * `angleStop` : angle to finish the arc
  * `rectX` : x positon of the rect
  * `rectY` : y positon of the rect
  * `rectW` : width of the rect
  * `rectH` : height positon of the rect

After thinking about my design further I decided to sketch out a new idea that was the same as my first idea but included a rectangle. I found that this allowed me to form the shapes easier and added another element to the design that made the letters more readable and have a cleaner look. I also realised that without the added rect I would not be able to draw the numbers very easy at all and did not like how they looked when I tried to sketch them. To incorporate this change, I have added 4 new parameters for the x and y position and the width and height of the rect, bringing my total to eleven. I am happy with how this turned out and I also changed the background colour slightly to look better with the green of the rect. 