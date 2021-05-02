## MDDN 242 2021 Assignment 2
3/05
There has been a long amount of time since this assignment was given to us, and I have sat out of the class for some time since the holidays. This assignment was due several days ago. My goal here is to quickly get an acceptable submission together and submit before the seventh day past the due date.

The last two hours have been spent reaquinting myself with this assignments layout. I added some new perimeters to the sketch, then migrated them over to draw_letters and letters. In the next sitting I will have a concept tightened up, but I'm thinking of something that evokes an alien type representation of an alphabet.

Got editor up and running with custom values. This will be indispensible when arranging my characters.

25/03
Pulled my sketch code over to the main draw letter function. Both Phoebe and Bex helped me to do so. My primitives are still oversized, as I'm not sure where I need to adjust them right now, either in draw_letters.js or letters.js. I will review the lecture video at home again before I continue on.

23/03
Updated my sketch with some adjustments I added to the existing parameters, namely setting up a square. Bex helped me set up a new variable, rotation. I'm still not sure which approach I will take with this assignment, as my alphabet still represents the clasic alphabet, but it is important I get my ideas down fast.

Each of my letters is composed with two circles. The size and position of the first circle is fixed, but the location and size of the second circle is controlled by three parameters.

The three parameters per letter:
  * `size` : radius of the second circle
  * `offsetx` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one

