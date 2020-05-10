## MDDN 242 2020 Assignment 2

6/5/2020

Each of my letters is made up of a combination of 3 shapes, each can be a triangle, rectangle or circle. Each shape is represented in a different colour
(first is green, second is yellow, third is orange)

There are 15 parameters for the letters, which basically summarize to:
For each shape (so * 3)
	Shape type (eg tri, circ or rect)
	Shape pos1X
	Shape pos1Y
	Shape pos2X
	Shape pos2Y

The circles and rectangles are drawn using CORNERS mode, so pos1 and pos2 define the left top and bottom right corners of the shape.
By using CORNERS, it removes the need for me to define the size of the shape explicitly
The triangles are drawn with a tiny bit of math. Pos1 is always the point when it's the only point on that particular y coordinate,
and pos2 is always the point with another point on the same y coordinate. Point 3 on the triangle is found by find the difference between
pos1x and pos2x, * by 2 to get width, and the y is the as pos2. My triangles are always isoceles triangles, with symmetry across the 
y axis.

