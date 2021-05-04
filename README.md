## MDDN 242 2021 Assignment 2
4/5
Over the last day I was looking at various different forms of inspiration, looking at various fantasy fonts from different media. I was thinking of something that resembles the Hylian alphabet from Zelda, or "Alien Language 1" from Futurama, but make them resemble the Greek alphabet. I'm leaving this behind however, and I don't wish to just recreate a font that already exists.

I have settled on the theme of my font, music notes. I have constucted a variety of shapes and perimetres I can control, and they work reasonably well together to formulate into letter of the alphabet. The three objects are the parts of a classic musical quater note, the note head, the stem and the flag. I am looking at a boolean to control whether is is a quater, half or full note, to go along with the them. Unfortunately I cannot get the sketch.js to co-operate with a custom vertex shape, and the scale and translate tools. All it seems to want to do is replicate the shapes in boxes it shouldn't belong. I don't have much time before the last possible point of hand-in, but I'm going to at least submit something to get's the message accross.

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

