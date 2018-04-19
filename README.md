## PS2 MDDN 242 2018

Each of my letters is composed using three equilateral triangles. Each triangle has 3 parameters, an X and Y position and a rotation. All three triangles receive a size parameter too.

I created a draw triangle function which takes x, y, size and rotation and creates a equilateral triangle out of the parameters.

using some trigonometry and pythagorus I was able to figure out the position of each point of a triangle as well as its centre point. 

Then by translating the canvas so the the 0,0 becomes the centre of the trinagle, the triangle is able to be rotated. After the triangle is rotated, the canvas position and rotation is reset. 

These are the 10 parameters per letter:
  * `size` : length of the sides of the triangle

  * `offx` : X position of the first triangle
  * `offy` : Y position of the first triangle
  * `rot` : rotation of the first triangle in degrees

  * `offx1` : X position of the second triangle
  * `offy1` : Y position of the second triangle
  * `rot2` : rotation of the second triangle in degrees


  * `offx2` : X position of the third triangle
  * `offy2` : Y position of the third triangle
  * `rot3` : rotation of the third triangle in degrees

most of the math was worked out on paper, which made it considerably easier to implement. 