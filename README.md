## PS2 MDDN 242 2018

Applied the interpolation animation between my letters, all looking pretty good so far. Next step is to refine and customise this. Something to add is that I altered my parameters in drawletter function to be x, x2, y, y2 etc. instead of posx, pos2x etc. because I felt this was a bit confusing as these didn't need to have different names than their letterdata counterparts.

The twelve parameters per letter are:
  * `x` : x co-ordinate of first point of line segment
  * `y` : Y co-ordinate of first point of line segment
  * `x2` : x co-ordinate of second point of line segment
  * `y2` : Y co-ordinate of second point of line segment
  * `x3` : x co-ordinate of third point of line segment
  * `y3` : Y co-ordinate of third point of line segment
  * `x4` : x co-ordinate of fourth point of line segment
  * `y4` : Y co-ordinate of fourth point of line segment
  * `x5` : x co-ordinate of first point of individual line
  * `y5` : Y co-ordinate of first point of individual line
  * `x6` : x co-ordinate of second point of individual line
  * `y6` : Y co-ordinate of second point of individual line
  

