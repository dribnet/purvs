## Creative Coding 2: Custom Pixel

I have finished the eye glyph and have also changed it so it has a blue iris (which I might slightly tweak the colour of). 

I had some trouble creating the bank note and dollar sign. I spent a while drawing on grids and trying to figure out the x and y coordinates for each point I want to draw. I then had the problem of which curve function to use to draw the points. I initially used the curve function but after talking to Phoebe we decided to use curveVertex function. 

I also initially wanted the bank note to have a fill but we couldn't figure out how to make straight lines as well as curves so it ended up just being 2 separate curveVertexes and 2 straight lines. I also drew a dollar sign and placed both the bank note and dollar sign into functions. I then used one of Tom's randomise if statements and placed these functions into the randomise section, then put this inside the billboard mask. It now randomly draws the dollar sign and bank note on the billboard mask.

For the stroke of the bank note and dollar sign, I had some trouble thinking of a colour that would show up on all 3 of my images. Hazel showed me how to take pix and inverse this so that the stroke colour always shows up really well on every colour.

I am pretty happy with how this has turned out, and I like the bank note and dollar sign details in the billboard mask. One last thing I want to do is randomise the scale of the bank note and dollar sign glyph so it shows up a bit better at both far away and up close.