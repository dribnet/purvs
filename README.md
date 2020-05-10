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

I have put my own variables into the interpolate letter function and played around with changing between each letter. As I don't use the rect in every letter I noticed that when I go between a letter with the rect and a letter without, the rect goes off the screen through the animation. I don't like how this looks and with feedback from class today, I will change the position the rect is being drawn when I am not using it to solve this issue. 