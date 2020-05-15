## MDDN 242 2020 Assignment 2

There are 15 parameters for the letters, which basically summarize to:
For each shape (so * 3)
	Shape type (eg tri, circ or rect)
	Shape pos1X
	Shape pos1Y
	Shape pos2X
	Shape pos2Y

The circles and rectangles are drawn using CORNERS mode, so pos1 and pos2 define the left top and bottom right corners of the shape.
By using CORNERS, it removes the need for me to define the size of the shape explicitly.
The triangles are drawn with a tiny bit of math. Pos1 is always the point when it's the only point on that particular y coordinate, and pos2 is always the point with another point on the same y coordinate. Point 3 on the triangle is found by find the difference between pos1x and pos2x, * by 2 to get width, and the y is the as pos2. My triangles are always isoceles triangles, with symmetry across the y axis.


In trying to implement interpolation, I have run into my first set of problems. Due to the way I use my parameters, each shape can be one of 4 things:
"tri", "circ", "rect", or "null" (in the case where it won't be drawn). 
Due to this difference between shapes, my interpolation between letters that do not share the same make up (eg E and F are both made up of 3 rectangles) isn't great. I've tried to put measures in place at current date, but things just get wild. 
I think my current approach, having if statements with multiple cases for each shape, is good but my implementation with the maps and variables for unusual interpolation needs some refining.
This will definitely be the most challenging part of the project for me, and I hope I can overcome it!
