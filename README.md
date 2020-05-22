## MDDN 242 2020 Assignment 2

Finished the alphabet and moving onto the letters. 

I'm really cutting this down to the wire but I'm going to make sure everything looks nice with arcs first before moving to bezier curves. 

I know that it might be more work not changing to bezier curves now but because I want it to at least have something before moving onto something more tricky. 

The characters are still slightly overflowing the boxes but I plan to just scale everything down and have a small margin of space around the edges. 

In my drawn version I have the lines extending beyond the shape of the arc so I'm thinking if I have time I'll try and impliment that to give the letters a more interesting shape.

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

