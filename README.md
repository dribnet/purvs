19/05/20
Experiment: curves. 

For this experiment I used the curveVertex function on my pre-existing parameters. At first everything was missing the last line, so I added another parameter. All of the letters also went outside of their 100x200 boxes, so this needed a lot of tweeking. 

In my mind when creating this, I was drawing inspration from very abstrtact works like this inked artwork (https://www.flickr.com/photos/swahiligonzili/8316978053/in/contacts/) and the work of a.creature on Instagram, who uses a lot of wiggly line imagery (https://www.instagram.com/a.creature/). The colour scheme for this version is also inspired by their work.

This  version of the font looks more like earthworms and less like the tomb engravings that my first version of the font was going for.  It is a lot more chance, most of the curves and forms are accidental. 

The waves through the letters are meant to visually relate to the ridges in worms, and the circles in the background relate to my artist precidents. The position of them is based off the last x,y  coordinate of the letter. The size is random, determined by the pointtwoX value of each letter, with a bit of math added. If it is spiky or not is determined by a new paramater, points. If the letter has a soft round sound when spoken, for example, O, the circle is round. The harsher sounding letters have a spikier circle.

The letters I chose for this version of the font are ABSTRACT, SLIPPERY, and BLUEWORM.

Parameters:
  "pointoneX" - first vertex X
  "pointoneY": - first vertex Y
  "pointtwoX": - second vertex X
  "pointtwoY": - second vertex Y
  "pointthreeX": - third vertex X
  "pointthreeY": - third vertex Y
  "points": - how spiky the circles are

