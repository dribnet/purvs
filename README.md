## MDDN 242 2022 Assignment 2

(Replace this README with information about your alphabet. This is an example.)

Each of my letters is composed with two circles. The size and position of the first circle is fixed, but the location and size of the second circle is controlled by three parameters.

The three parameters per letter:
  * `size` : radius of the second circle
  * `offsetx` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one

29/3
 I've changed this to draw triangles in place of the second circle. Because these draw via each point rather anan dimensions, points are fixed and transformations (offset) is defined with translate() and (shape) with rotate()
 I also made the colour pallette sleek white-on-black-on-white so you can see letters as fully defined by the negative space created with the 2 shapes.
