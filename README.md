## PS2 MDDN 242 2019

I have made the refactor stated in the last commit, where instead of listing the x/y positions and orientation for each bug, the bugs are now evenly distributed along a spline controlled by four vertices. I've also updated editor.js to be controlled by control points that you can click and drag, to make the editing of the vertices less of a headache. 

Currently, the bugs are evenly distributed along each section of the curve. So if two vertexes are far apart, the distribution of bugs get further apart as well. I'm investigating changing this so that they are all evenly spaced. There are a couple of risks associated with that approach though. The first one is that the only way I can think of for doing this is to walk the bugs along the curve until they are far enough apart, which isn't a very elegant system, and could lead to some performance and jitter issues. However, I feel the resulting letters would be less cluttered and messy, and if you play around with the editor now you can see that's a real issue.  

Other than that, still in the change list is getting the bugs to look in the direction they're moving when interloping between letters, and getting the legs to shuffle around when moving between letters as well.  

The current 8 parameters per letter:
  * `point1_x`: The x-position of the first point in the spline
  * `point1_y`: The y-position of the first point in the spline
  * `point2_x`: The x-position of the second point in the spline
  *` point2_y`: The y-position of the second point in the spline
  * `point3_x`: The x-position of the third point in the spline   
  * `point3_y`: The y-position of the third point in the spline
  * `point4_x`: The x-position of the fourth point in the spline
  * `point4_y`: The y-position of the fourth point in the spline
      
