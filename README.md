## MDDN 242 2020 Assignment 2

Made small adjustments to the letters to give it a more "sewn" feel to the characters. 
As I posted before, I did this by extending the lines beyond the edge of the arch and crossing them over if two lines intersect. 

I've shrunken all the characters so that they all fit inside the box. They float above the line bottom most line but are centred so that the character's middle is the same as the middle dotted line.

Before I had in my code a if statement that could eliminate a line as some of the letters only require 1 line. I've gotten rid of it so that the animation between letters looks nicer. 


I've update the variables as looking at them I realised that previous parameters were not correctly labeled.

I have 14 parameters per letter:
  * `offsetx` : x offset of the arc's centre (the middle of the circle's x position)
  * `offsety` : y offset of the arc's centre (the middle of the circle's y position)
  * `height` : the height of the arc 
  * `width` : the width of the arc

  * `line 1 x1` : x coordinate of first point of first line
  * `line 1 y1` : y coordinate of first point of first line
  * `line 1 x2` : x coordinate of second point of first line
  * `line 1 y2` : y coordinate of second point of first line
  
  * `line 2 x1` : x coordinate of first point of second line
  * `line 2 y1` : y coordinate of first point of second line
  * `line 2 x2` : x coordinate of second point of second line
  * `line 2 y2` : y coordinate of second point of second line
  
  * `angleStart` : begining angle of arc
  * `angleEnd` : ending angle of arc

