## MDDN 242 2022 Assignment 2

The M looking kind of like McDonalds wasn't noticed during a crit, so I guess it's not as bad as I thought.

I added a new colour for the numbers to help differentiate them from the letters based on feedback. I already had this red colour ready to go when I was researching what digital oscilloscopes typically look like.
The original red I had was a bit dark so I increased the red value a bit but I also don't want it to be too 'bright'.

I fixed letters N and R to have less of a crazy rotate when interpolating. I think this was an issue before because I didn't have rotation going negative in the editor originally.
I thought the Z might need to be fixed too but it seemed fine rotation wise. I changed it anyway so it was made with one stroke instead of two. I'm not sure if I like it because of the short bottom.

The colour map for the numbers doesn't smoothly change like the colour map for the letters. I figured out this was because the 'default' colour is being set by the else statement I have for the letters colour. If I make this else statement only work for letters it breaks everything because there is no colour for the in between interpolation.
So I need to figure out how to give the numbers it's own map as its 'default' colour.

Letters I don't like:
H - Needs a third wave but want to stick with just having 2 lines
I - same with H
U,V - very similar
Z - short bottom

Todo:
Make it more interesting, adding decoration?.
Fix colours for the numbers.
