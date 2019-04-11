## PS2 MDDN 242 2019

So the last update outlined my plan to get the bugs to be evenly distributed along the curve in world space instead of the parametric t space (which goes from zero to one along the spline curve), but the problem turned out to be more complicated than I thought. My method for doing it was to set a variable bugSpacing, and start at t = 0 and then for each bug increment it until they're far enough apart. The algorithm looked something like this: While distance from last bug is less than bugSpacing, t+=0.1. The tricky part is what to do with the bugs when the length of the spline is less than the total length of the bugs (e.g. when all the spline points are very close together). My first though was to just loop around the spline and keep them going in a circle, but if all the points are too close together then you get into an infinite loop. I then wanted to try them just extending past the edge of the spline in a straight line, but I couldn't find a clear, built in function for interpolating a straight line, and the logistics of getting that to work with the way I'm currently doing the indexing for interpolating between all four splines was just a little beyond me. 

Instead, this commit is to mainly feature my experiment of getting the bugs to scatter around and then form the next letter. It came with a lot of challenges, even more so by the limitation of not begin able to use any sort of random numbers. My current implementation fake a random number by calculating a semi random number based on the points of the input. Something like this: 
`let offset = oldObj["point4_y"] * newObj["point3_x"] + oldObj["point1_y"] * newObj["point2_x"];`
And then pipe that semi-random number into a sine function with an offset per bug to map it to a more controllable range automatically. The problem arises when you interpolate that offset from 0 to the offset back to 0 again you get a spastic result. Because the offset number is very large, the sin function cycles multiple times each frame and the bugs teleport randomly around the screen. So I decided on a conjoined approach where I interpolate from the old vertex to a middle point and then to the new vertex with a function called conjoinedInterp(). I'm using the sin function to 'randomly' create the middle point, and then interpolate towards that. This way it's not the offset that's being interpolated but the resulting position of it. I still wanted an offset per bug, so I'm also passing in an `offset` parameter (which has been added to the bottom of the list below), which maps from 0 to 2*PI back to 0 when interpolating, and each bug gets a slight variation of that which acts as a local offset.

The final thing I got working with this commit was getting the bugs to look in the direction that they're moving. This was no small effort, but I'm pleased with the result, as it's finally starting to look like the bugs are skittering around.

There are still several things I have left to do. The obvious one is to actually finish the alphabet, but before I do that I want to add another tool for forming the words, which is a straight line that's separate from the spline. This will give me more flexibility when forming letters and numbers.

The other thing I want to add is having the legs twitch around when moving, to complete the look that they're actually skittering.

The current 8 parameters per letter:
  * `point1_x`: The x-position of the first point in the spline
  * `point1_y`: The y-position of the first point in the spline
  * `point2_x`: The x-position of the second point in the spline
  * `point2_y`: The y-position of the second point in the spline
  * `point3_x`: The x-position of the third point in the spline   
  * `point3_y`: The y-position of the third point in the spline
  * `point4_x`: The x-position of the fourth point in the spline
  * `point4_y`: The y-position of the fourth point in the spline
  * `offset`: The amount of offset to use when doing the scatter animation
      
