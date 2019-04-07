## PS2 MDDN 242 2019

My idea for an alphabet is to have a bunch of cute little bugs scurrying around and forming the alphabet out of their bodies. This is my first pass at it in sketch form, and currently each bugs x and y rotation is being passed in as its own parameter. I'm finding this method to be rather impractical, as I'm already finding it difficult to form even basic letters out of just 6 bugs, and I'm already using 18 parameters.

My next pass at the concept will instead pass in the vertices of a Catmull-Rom spline or bezier curve and interpolate along it to get the positions and orientations for the bugs. This will allow me to have as many bugs as I want. I think I'll also have a custom location for a bug or a separate little spline as one of the inputs to provide some flexibility for letters like Q or E or H. 

The current (soon to be retired) 18 parameters per letter:
  * `bug1_x`
  * `bug1_y`
  * `bug1_rot`
  * `bug2_x`
  * `bug2_y`
  *   `bug2_rot`
  *  `bug3_x`
  * `bug3_y`
  *    `bug3_rot`
  *   `bug4_x`
  *  `bug4_y`
  * `bug4_rot`
  *    `bug5_x`
  *   `bug5_y`
  *  `bug5_rot`
  *  `bug6_x`
  *  `bug6_y`
  *  `bug6_rot`
      
