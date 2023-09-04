## PS2 MDDN 242 2018 - FINAL DESIGN

In the process of designing my font for project 2 my ultimate goal was to create letters that are immediately obvious, with as little ambiguity as possible. Initially my idea to achieve this was independent lines, where each co-ordinate would be mapped in order to give total control. This would have more freedom and less obvious road blocks to moving or rotating a primitive in order to create a form. The issue with this idea was that the amount of independent lines that can be made from 12 co-ordinate values is 3, not quite enough to achieve my initial goal for all of the letters. An obvious solution to this is a set of lines where the last co-ordinate of one line is shared with the first co-ordinate of the next, which can make up to 5 lines. The issue with this is that there are cases where all lines needing to be connected to another means that in these cases the characters need to be abstracted to fit these paramaters. I decided to go for a mix of both these methods, using my total 12 paramaters, 8 for a segment of 3 connected lines using the latter technique, and 4 to create a single line with both co-ordinates defined independtly like my former idea. This allowed me to form the basis of the shape with 3 lines and use the final line to fill in the blank.

What I was left with was a thin and striking font with two identifiable style of letters, the boxy for letters like O, U, or E, and then the sharp for letters like P, Q and R. I was able to rarely break this rule, with the only obvious outlier being the 8, which I couldn't quite get to work the way I wanted, however I didn't want to compromise my style so I chose to leave it as is. My font converted easily into the interpolation stage of the project with the lines reshaping to form the next letter without jutter, and I finished it off in the exhibition by using a black on white colour scheme to accentuate the sharpness of my font, I tried using colour but it felt damper which didn't work for how thin my font is. 

The twelve parameters per letter are:
  * `x`  : x co-ordinate of first point of line segment
  * `y`  : y co-ordinate of first point of line segment
  * `x2` : x co-ordinate of second point of line segment
  * `y2` : y co-ordinate of second point of line segment
  * `x3` : x co-ordinate of third point of line segment
  * `y3` : y co-ordinate of third point of line segment
  * `x4` : x co-ordinate of fourth point of line segment
  * `y4` : y co-ordinate of fourth point of line segment
  * `x5` : x co-ordinate of first point of individual line
  * `y5` : y co-ordinate of first point of individual line
  * `x6` : x co-ordinate of second point of individual line
  * `y6` : y co-ordinate of second point of individual line
  

