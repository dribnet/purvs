## MDDN 242 2020 Assignment 2

MDDN242 README

Interpolation - 13/05/2020

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

