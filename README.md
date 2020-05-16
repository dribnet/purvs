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

I have changed the interpolate function to make the size of the rectangle change when the percent is above 40 becuase only a couple of the letters have the width of the rect change and I liked the effect it had for those letters. I also sped up the transitions between the angle of the arc and the x and y offsets of the rect. I wanted the transition to the letters that do not use the rect to be smoother and have the rect disappear quicker. 