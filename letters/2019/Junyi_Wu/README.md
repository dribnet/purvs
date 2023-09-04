## PS2 MDDN 242 2019 - Final Alphabet

MintFont.

I wanted to create a font that was simple and readable, with soothing colours that aren't too bright. My initial plan from the sketch was to create letters made of one arc and one line each, and throughout the process I went with that idea but made adjustments and added more to it along the way to further develop that idea.

Each of my letters is made up of an arc and a line that work around a static triangle. The arc's fill is a little transparent to create an interesting shape and look when combined with with the triangle.
 
The size of the arc is fixed, but the length of the line and location and angles of both arc and line is controlled by eight parameters.

The eight parameters per letter:

  * `lineX1` : The x coordinate of the first point of the line
  * `lineY1` : The y coordinate of the first point of the line

  * `lineX2` : The x coordinate of the second point of the line
  * `lineY2` : The y coordinate of the second point of the line

  * `arcX` : The x coordinate of the center of the arc
  * `arcY` : The y coordinate of the center of the arc

  * `start` : The angle in degrees of where the arc starts
  * `stop` : The angle in degrees of where the arc stop

