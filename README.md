## MDDN 242 2022 Assignment 2: Cutout Shadows


I wanted to make a typeface with shadows that are a little abstract but seem plausible in the shapes that create them. They appear to run up the wall with a visible source, and are interpolated so the shaded form morphs nicely, and is "shuffled" with some rotation to the entire shape.

I do like how the character of the letters changed when I switched from the initial circle background shape to a square. I think this change did a lot to bring everything together, though each letterform is not perfect.
The entire idea does focus a lot more on the forms themselves than their animation, mainly due to the large amount of parameters I set in making a fully articulated bezier blob.

ALL DEVELOPMENT: https://imgur.com/a/Wp5Gb8u

NOTE: b.locks.org is down so I can't add my showcased commits right now.


5/5 Beziers!

-bezier design style
-made a shape editor in p5 web editor https://editor.p5js.org/verteks/sketches/_gDUaKeex
this is where I'll create letter shapes
-brought variables into draw_letters and R into letters gallery
-started experimenting with colour

7/5 Shadows!

I would have done better to find a way to put a list of precise values back into the editor to allow a consistent back-and-forth tweaking rather than reinventing the wheel whenever I go to make a change, but the p5 web editor I made helped me a little here, allowing this workflow but being more clunky.

I think these letters could still use some work; currently things are fun but ehh 60% there visual- consistency-wise. The numbers are blocky but look good and consistent. There's a few minor imperfections I want to work out but this is a little hard by design - could be due to how I've set everything up!

8/5 Animation!
I've done a lot of experimentation in different styles and decided to switch to a blocky form, using a secondary silhouette outline to communicate the shape casting a shadow.
I'm interpolating using an if/else statement to make the entire shape rotate by a slight amount to simulate the letter blocks being "shuffled" into their next appearance.
