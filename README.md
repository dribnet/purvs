## PS2 MDDN 242 2018

In the process of creating the entire alphabet I've made a few changes to my font and the paramaters that make it up. For starters I created a 3 line segment that re-uses the posX and posY of the previous point in order to cut down on parameters, and also added an individual line with both points defined individually. This way I have more lines to work with in creating my letters (4 instead of 3), but don't need to sacrifice the ability to use an extra line where joining to the end of one of the line segment may be tricky. Still using 12 paramaters but with a lot more efficiency than my last design.

The twelve parameters per letter are now:
  * `posX` : x co-ordinate of first point of line segment
  * `posY` : Y co-ordinate of first point of line segment
  * `pos2X` : x co-ordinate of second point of line segment
  * `pos2Y` : Y co-ordinate of second point of line segment
  * `pos3X` : x co-ordinate of third point of line segment
  * `pos3Y` : Y co-ordinate of third point of line segment
  * `pos4X` : x co-ordinate of fourth point of line segment
  * `pos4Y` : Y co-ordinate of fourth point of line segment
  * `pos5X` : x co-ordinate of first point of individual line
  * `pos5Y` : Y co-ordinate of first point of individual line
  * `pos6X` : x co-ordinate of second point of individual line
  * `pos6Y` : Y co-ordinate of second point of individual line
  

