## MDDN 242 2020 Assignment 2

(Replace this README with information about your alphabet. This is an example.)

I have completed my alphabet and added animation functionality. When I had mapped the letters together, I originally found the snap of the arc, when it changes from a positive to a negative difference, to be quite jarring. I began to work on adding in an exception where if the difference between the start and end of the old arc was inversed to that of the new arc, the arc would first rotate 180 degrees before completing the map to its new position. However I found that this caused more issues than it solved, speeding up the animation greatly, and appearing to be more out of place that the snapping animation I originally had. So in the end I decided to keep it.

Each of my letters contains circles and arcs. The arc size and position is fixed, but the angle is affected by parameters. The circles can change their position.

The 6 parameters in my program are:
  * `offset1x` : x offset of the first circle relative to the arc
  * `offset1y` : y offset of the first circle relative to the arc
  * `offset2x` : x offset of the second circle relative to the arc
  * `offset2y` : y offset of the second circle relative to the arc
  * `arcStart` : starting angle of the arc (degrees)
  * `arcEnd` : ending angle of the arc (degrees)

04/05/2020 -------------
Setting up

08/05/2020 -------------
I have chosen a colour palette along with a rough arrangement. Further details above.

14/05/2020 -------------
I have finished of the alphabet. I began by sketching each letter, and then bringing them into the program. Some letters looked different once in the program so I made small changes for some of them. I also eliminated one of the parameters by making each of the circles the same size for each letter.

21/05/2020 -------------
I added in a new background colour while experimenting, to give it more of a berry feel like the name suggests. I also went over the animation, and though I originally thought the snapping animation (when the arc's go from negative to positive), to be jarring, I actually find that I like it now. I believe it still matches the feel of the alphabet that I was trying to achieve. The three words picked out for my exhibition are the name of the alphabet "RedBerry", and two other words that I believe show off some of the nicer letters to be designed, "Critical" and "Piercing". Finally I changed the X. It was by far the most difficult letter to find a shape for, but I am happy that I have achieved a reasonable outcome.