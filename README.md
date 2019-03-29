## PS2 MDDN 242 2019 - Sketch

I decided to work on the alphabet. I like the overall look of my sketch, so I'm going with its design to start, except I may add more to it or modify it a little. I also want to see what the rest of the letters would look like.

Each of my letters is composed with one arc and one line. The size and position of the arc is fixed, but the location and length of the line and the angles of both arc and line is controlled by six parameters.

The six parameters per letter:

  * `x` : The x coordinate of the first point of the line
  * `y` : The y coordinate of the first point of the line

  * `x2` : The x coordinate of the second point of the line
  * `y2` : The y coordinate of the second point of the line
  
  * `start` : The angle in degrees of where the arc starts
  * `stop` : The angle in degrees of where the arc stops

However after creating more letters, I realised that I may need more parameters to control the arc's x and y coordinates, because at the moment there's more spacing between a few of the letters than others depending on the angle of the arc. In short, the spacing isn't consistent, so the position of the arcs need to be adjusted with each letter.

I think I'll either work on that next, or finish the draft alphabet before doing so.


