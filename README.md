## MDDN 242 2020 Assignment 2

MDDN242 README

Refining Animation - 20/05/2020

My interpolation is functioning well and the animation between the letters look great! the two rectangles
smoothly transition to their next required position. The triangles transitioned nice as well in my opinion 
because they were sharp and full of excitment with their rotations and turns. I really like the animation for
the triangles already because it keeps my font interesting and once again it suits my spooky vampire like theme.

I did experiment with the animation to see if it did make the transition look any better. I started off with
changing the map's values from my standard 0 - 100 to -50-100 and (+)50-100, the animation changed to be even
more striking as the triangles would be even bigger and transition faster through the sizes. I still thought
this could be cool but it's a bit too messy. I didn't want my font to be changing all over the place.

I then tested animation refining with if statements. I started with if percent is < 50 stay in original state until
higher. This didn't look good at all because my squares would be finished with their animation while my triangle
would still be in the state of the other letter. I decreased the number to 10, this looks better but it is
still not better than the original. I have left my if statement for you to test if you would like and you can see
which one you prefer :)

My next step is to tidy up all my code and insert comments so that anyone can read my code with ease.

_____________________________________________________________________________________________________________
// THIS IS MY 15/05 INTERPOLATION README, ONLY RELEVANT IF YOU DIDN'T SEE MY PREVIOUS COMMITS //

Updated Interpolation - 15/05/2020
This is the upodated interpolation meaning it is up to date with the latest colours and parameter numbers.

I put my parameteters into the interpolate letter function and had a look at how my shades look when it's in the progress of forming the next letter.
It was awesome to look at all the transitions, in my opinion (based on the large sample I tested) there weren't any problems with the transition between
letters. There were some triangle points that stretched and touched the boundary box but it was fine. I believe my triangle made the transitions more
interesting because of its opacity stroke and colour fill that's the same as the background. There were just a lot of combinations that looked great!
you can have a look at the transition between these letters, I liked these ones the most:

M to R
4 to D
Y to X


The 14 parameters per letter:
 • "offsetx": 17, | x position for first rect (filled)
 • "offsety": 0, | y position for first rect (filled)
 • "rectlength": 28, | first rect length (filled)
 • "rectheight": 90, | first rect height (filled)
 • "nofill_length": 20, | second rect length (no fill)
 • "nofill_height": 82, | second rect height (no fill)
 • "rect_twoposx": 55,  | x position for second rect (no fill)
 • "rect_twoposy": 4, | y position for second rect (no fill)
 • "triangleleftx": 188, | tri first point x
 • "trianglelefty": 270, | tri first point y
 • "triangletopx": 228, | tri secong point x
 • "triangletopy": 198, | tri second point y
 • "trianglerightx": 266, | tri third point x
 • "trianglerighty": 270, | tri third point y

