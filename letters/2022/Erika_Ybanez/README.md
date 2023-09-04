## MDDN 242 2022 Assignment 2

"Meadow" Font

My letterform system started out using built-in shapes in p5.js however, I wanted to challenge myself by creating my own custom shape using quadratic vertices. Doing so allowed me to manipulate the letterforms in more unique ways using rotation. I was also able to achieve a flipping-into-place effect as well as an unfolding edge in my interaction. 

I'm not the best with colour so I wanted to build a solid enough foundation in terms of the silhouette before adding colour. Initially, I started out having 21 variables however, as I learnt more about my letterform system, I figured out more efficient ways to code it and got it down to 14 variables.

* size (1)
… controls the size of the object, it is actually the radius which means the final size is double the specified variable. I used this variable to make the custom shape using quadratic vertices as well as the dist function to create the cutout. I go more into the detail about the calculations in my code.

* orientation (2)
… these 2 variables controlled the flipped position (left = -1 /right = 1) of each side of the custom shape. I multiplied these variables to relevant areas within the quadratic vertices which would allow the flipping motion ie; offsetY - offset * orientation

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