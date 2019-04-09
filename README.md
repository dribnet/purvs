## PS2 MDDN 242 2019

INTERPOLATION:

When thinking about the animation of my letters and how they change to the next, I decided I wanted each fo the elements to move one at a time. So the line moves first, then the arcs, then the dots last. The way I controlled this animation is through using an if statement. When percentage is 20, the line starts moving to new position, when percentage is 60, the arcs start moving to new position and when percentage is 90, the circles/dots start moving, else if its less than these values, they stay in their old positions.

Parameters:
line_x1 = x position for starting point of line
line_y1 = y position for starting point of line
line_x2	= x position for end point of line
line_y2	= y position for end point of line
arc1_posx = x position for first arc
arc1_posy = y position for first arc 
arc2_posx = x position for second arc
arc2_posy = y position for second arc
start_a1 = start angle for arc 1
start_a2 = start angle for arc 2
circ1_offset_x = offset x position for circle 1
circ1_offset_y = offset y position for circle 1
circ2_offset_x = offset x position for circle 2
circ2_offset_y = offset y position for circle 2