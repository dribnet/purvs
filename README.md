## MDDN 242 2022 Assignment 2

Starting to add final touches to the exhibition. I increased the percentage slightly to 110 to rotate faster at 50% which hopefully adds some resistance and the transition looks more controlled. I also added smooth(); which Phoebe had suggested during crit which sharpened the edges of the letterform. 
* edge (2)
… these 2 variables represented the edge of each side of the custom shape, whether it was rounded or cornered. It would be rounded if it = 0 or cornered if = size.

* offset x,y (4)
… these 4 variables determined the horizontal or vertical position for each side of the custom shape.

* angle (1)
… determines to rotation angle of the custom shape but not the rect

* rect x,y,w,h (4)
… are the variables needed to create the rect which is the green part of the letterform

When working on the interaction, I realised that the movement between the letterforms reminded me of butterflies fluttering into place so, I decided to go with a garden-like colour palette which fit nicely with the shapes within the letters. 

I struggled w/ controlling the rotation within the interaction. Because of the way I've coded the offset values, the rotation sometimes would create a distracting "cartwheel" effect. I tried to manipulate the values as much as I could in letter.js to minimise this from happening however, if I had more time I would probably continue working on this interaction using the dist function on the offset values so that it would never be too spaced apart (which is what is creating the crazy rotation).

Regardless, I am happy with the aesthetic of the letterform system and the narrative it has come to have. The interaction could be better but I'm happy I was able to do cool things with it especially with the flipping-into-place motion. 