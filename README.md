## MDDN 242 2020 Assignment 2

Completed number set. 

Some of the numbers I feel cheat a bit, like with the number 7. 
However I cannot think of a good way to create the numbers 8 with the space inside the arc and with the lines without it looking funny or hard to read. 

now that I've completed all the numbers and with the time I have, I've decided I'm going to forgo using beziere curves. I'm going to fiddle with transformations so that I can make my letters fit within the green boxes and play around with the lines so that some of them purposfully overflow from the arc and for some, cross over each other to give it a more stiched feel. 


I have 12 parameters per letter:
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
  * `size` : radius of the second circle
  * `width` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one

