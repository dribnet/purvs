## PS2 MDDN 242 2019

### Bug World


My idea for the project was to have a army of little bugs skitter around and form the letters out of their bodies. What seemed like a somewhat simple project at face value rapidly became more and more complicated. 

The first iteration which you can still see in `sketch.js` passed the x and y positions and the rotation of each bug in it's own parameter. This worked as a proof of concept in being able to draw the bugs at an arbitrary position with an arbitrary rotation. And while that seems like it would be half the challenge of the project, I actually got that working very quickly (in the very first sketch).

The complexity started rising when I changed the parameters from being each bugs position and rotation to the x and y positions of four vertices that form a spline using p5's curve function. I then used this spline and a `t` parameter (which goes from 0 to 1, 0 being the first point in spline 0.5 being halfway through and 1 being the end) to sample the spline's position and draw a bug at each of those positions.

The next problem was getting the bugs to be rotated in the direction of the spline. I did this by calculating the next position of the spline by incrementing t by a small amount. I then subtract the current position from the next position and find the angle of that vector. I then rotated the bug by that angle.

Now the interpolation. Luckily, interpolating the positions of the vertices was very easy, and one of the main advantages to using that method.

I noticed however, that if you sample the spline uniformly (i.e. at currentBugIndex/totalBugs), you get an uneven distribution of bugs in actual world space. If two vertices are further apart, the bugs distributed between them will be further apart. You can see my earlier entry for trying to fix that, but suffice it to say that had quite a few challenges associated with it and proved too much for the time I had.

At one point I managed to get the bugs to face in the direction of their movement, but an alteration along the way seems to have disrupted that feature.

I eventually added another two points which define a separate section of spline that forms a straight line. This was the final piece I needed to make start constructing the alphabet.

In terms of the design of the alphabet, I went with this kind of bubbly, loopy font to go with cute nature of the bug graphic and the concept. 


The current 13 parameters per letter:
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
