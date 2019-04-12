## PS2 MDDN 242 2019

I have finished adding the two extra points needed to form a separate line. I've also added a parameter that governs how many bugs to display on line, for added flexibility. The reason that it changees how many are *displayed* and not how many there *are* is to help with interpolation. The way it works is that the bugs slide on top of each other onto a stack instead of just vanishing. It also means that the parameter doesn't have to be rounded and can be a floating point.  

I've also removed the offset parameter, as it's only used in interpolation so it isn't worth storing in the letterData object or the `letters.js` file.

But the main change is that the alphabet is done!! Look at that sexy beast! It took a bit longer than I thought, but it was helped immensely by changing the editor into a fully featured one.

Now I'll make some finishing touches to the interpolation stuff, and then I'll be done! 

The current 8 parameters per letter:
  * `point1_x`: The x-position of the first point in the spline
  * `point1_y`: The y-position of the first point in the spline
  * `point2_x`: The x-position of the second point in the spline
  * `point2_y`: The y-position of the second point in the spline
  * `point3_x`: The x-position of the third point in the spline   
  * `point3_y`: The y-position of the third point in the spline
  * `point4_x`: The x-position of the fourth point in the spline
  * `point4_y`: The y-position of the fourth point in the spline
  * `point5_x`: The x-position of the first point in the line
  * `point5_y`: The y-position of the first point in the line
  * `point6_x`: The x-position of the second point in the line
  * `point6_y`: The y-position of the second point in the line
  * `numLineBugs`: The number of bugs to display on the line 
