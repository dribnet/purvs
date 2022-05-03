## MDDN 242 2022 Assignment 2

Turns out it was an easy fix for the numbers not having the right colour while interpolating, I forgot to add its map to interpolate_letter.

I added another line which follows the original to split up the line into two.
This makes the letters more interesting rather than being a single line being drawn.

I didn't have a default character, I've set this now as kind of infinity sign. I wanted it to be like a default sine wave look.

I'm using this default character as an in between for the interpolation. It changes from the original letter, to the default letter and then to the new letter.
This in between helps break up the letters especially when switching to a number because the colour changes.

Because it was too quick to even see if really change to the default character I changed the interpolation speed so it's slower. (I don't know if I'm allowed to do this yet)

Updated J,H,Y to change the layering of the two waves, Wave 2 is always on top so I essentially swapped the parameters between Wave 1 and Wave 2.

Updated L,Q,S,T,U,V because they felt too small compared to the rest of the letters.
Q was redesigned, I feel like this looks better and still is clear enough as a Q.
S is basically a flipped version of the Z now.

Cleaned up letters.js, quite a few had very long numbers for no reason with either multiple 0s or 9s so I rounded these numbers.
