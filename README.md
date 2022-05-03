## MDDN 242 2022 Assignment 2

Got permission from Phoebe to change how many frames the animation has to slow it down.
Updated the interpolation to 'hang' on the default in between character for 10% of the animation.
I did this because I feel like it's a more satisfying transition between the two letters.
I tried having the default character rotated 90 degrees. I felt it looked too much like an 8, and didn't interpolate as good.

Updated G to fit more with the other letters.

I added another line to the middle, adding another coloured line. I feel like this adds more detail to the letters. The black middle line was a good start but I feel like this addition really adds on top of it.
I've been experimenting with indenting this line, and if it should be round or straight edges but I can't decide.

I gave in and added a third wave, I won't update all the letters again with a third wave. I just really wanted the H to fit the rest of the letters. I also added the top to the I.
The good thing about having this in between interpolation is that I don't have to add the third wave to every letter. I added it to the 'default' letter and it works. (I found out it was putting errors in the console, so I added values for wave 3 the same as wave 2 for every letter and number.)
Adding this third wave brings the parameter count to 19, close to the limit.

I added maps for negative peak amounts because when shifting to the default letter the peak amounts could be negative which was making one of the waves always yellow.
I don't know if there's an easier way to have the map be able to do positive and negative values in one map.
