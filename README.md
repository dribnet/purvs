## PS2 MDDN 242 2019

(Replace this README with information about your alphabet. This is an example.)

Each of my letters is composed with two circles. The size and position of the first circle is fixed, but the location and size of the second circle is controlled by three parameters.

The three parameters per letter:
  * `size` : radius of the second circle
  * `offsetx` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one

So far ive been experimenting with removing shapes from a rectangle to create letters. Ive used a single curved rectangle with three circles placed to cut out and make letters. 

I tried to keep the variables to 6 by attaching the size variable for one of the circles to an if statement. However i needed more control so i added a single size variable to one of the circles. 

The parameters at the moment are 
  * `circle1x` : x position of the first circle
  * `circle1y` : y position of the first circle
  * `circle2x` : x position of the second circle
  * `circle2y` : y position of the second circle
  * `circle3x` : x position of the third circle
  * `circle3y` : y position of the third circle
  * `size` : radius of the first circle