## MDDN 242 2021 Assignment 2
5/5
Another commit in case something dreadful happens to my code in the eleventh hour. Almost got my entire alphabet populated. Eight more to go before I start beautifying my code and looking into the interpolation. I have an idea of how I am going to do that, by leaning into the music notation side of my theme.

5/5
Another commit. Figured out what was the issues with my editor. I added a rectMode when I first started with it and it was changing the debug box location. I have started outlining and designing my alphabet from my shapes and functions. Some letters have come out rather well, some are a compromise with the shapes I selected.

5/5
Today is the last oportunity I have to get things submitted and sent through before 10am tomorrow morning. A quick commit before I continue to work on my font. I have worked out some issues with the editor and it adding a my sketch with working A, B and C, getting creative with how I manage to make the different shapes with only three objects I can scale rotate and pivot. I was happy with adding a seperate parameter that controls a mirror flip of the note flag through the y co-ordinate of a scale. This was very quick and easy implimentation which will give me much more control over the shapes I can make.
I am using a simple x and y position text feature we shown given in first year with the co-ord space snippit. This is invaluable to allowing me to pick out certain points with my cursor making finding the translate point for rotations and scales.

I'm still having trouble with making the same shapes with the editor and the draw_letters file. I still have no idea why it seems to be working differently.

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

