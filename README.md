## PS2 MDDN 242 2018

Updated my code to show the entire alphabet + numbers. Here I ran into a bit of trouble when I got to 8 and found out I didn't have enough lines to create a convincing looking 8, or at least in the style I'd already established. I thought about changing my paramaters to be made up of a continuous 6 line segment rather than the 3 line segment and 1 line on its own. This would make make me able to add extra lines to some of my current letters and complete the 8 properly, but would also mean I'd have to redesign my E and 3 characters to something more basic and less consistent. With either of these options I have to compromise, so maybe a plan C to think about.

The twelve parameters per letter are:
  * `posX` : x co-ordinate of first point of line segment
  * `posY` : Y co-ordinate of first point of line segment
  * `pos2X` : x co-ordinate of second point of line segment
  * `pos2Y` : Y co-ordinate of second point of line segment
  * `pos3X` : x co-ordinate of third point of line segment
  * `pos3Y` : Y co-ordinate of third point of line segment
  * `pos4X` : x co-ordinate of fourth point of line segment
  * `pos4Y` : Y co-ordinate of fourth point of line segment
  * `pos5X` : x co-ordinate of first point of individual line
  * `pos5Y` : Y co-ordinate of first point of individual line
  * `pos6X` : x co-ordinate of second point of individual line
  * `pos6Y` : Y co-ordinate of second point of individual line
  

