## PS2 MDDN 242 2018
I changed the colour of the little circle depending on if the character is a number or a letter. This was to make it possible to tell the numbers and the letters apart since there are no other differences. To do this I originally added a new parameter called 'colour'. Using an if statement, when colour equalled ‘1’ I set the fill to red and when it equalled ‘0’ I set the fill to the green. This worked fine for making the colour different for numbers and letters, but it meant that for the animation of changing between a letter/number the colour suddenly changed while I wanted it to gradually change between the colours to match the line animation.

To do this I removed 'colour' and added three new parameters: 'r', 'g' and 'b'. I set the fill to include these paraments. Now the colour change animation works.
I also made the line thicker, so it stands out more and 'cuts through' the big circle more. I like the effect this gives.

The twelve parameters per letter are:

*posx1: x position for the little circle
*posx2: x position for the medium circle
*posy1: y position for the little circle
*posy2: y position for the medium circle
*linex1: first x position for the line
*linex2: second x position for the line
*liney1: first y position for the line
*liney2: second y position for the line
*alpha: the alpha value of the line
*r: the red fill value for the little circle
*g: the green fill value for the little circle
*b: the blue fill value for the little circle
