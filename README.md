## MDDN 242 2022 Assignment 2

I struggled w/ the chaotic-ness of my interaction. There was a lot going on w/ all the uncontrolled crazy flipping, rotating and scaling. The animation that bothered me the most was the rotation. I modified my code for the custom shape hoping it would minimise this so instead of having 2 separate (half) shapes which rotate at their own respective angles, I decided to condense it into one custom shape instead with only one angle. I had to change the 'T' to work w/ the new parameters. From this, I realised that my letterforms would benefit from utilising colours to emphasise the shapes in the letterforms so, I experimented with different colour palettes and landed on the one currently shown. The flipping animation reminded me of butterflies fluttering so I was looking for a garden theme colour palette. 

Learning from a lack of doing this in project one, I thought I would talk about my code in my read me as I like to be intentional with it. <3

I have a total of 14 variables;

* size (1)
... controls the size of the object, it is actually the radius which means the final size is double the specified variable. I used this variable to make the custom shape using quadratic vertices as well as...
offset = dist(radius, radius / 5, radius - radius / 5, radius / 5);
...which controlled how wide the cut-out on the half-circle.

* orientation (2)
... these 2 variables controlled the flipped position (left = -1 /right = 1) of each side of the custom shape. I multiplied these variables to relevant areas within the quadratic vertices which would allow the flipping motion ie; offsetY - offset * orientation

* edge (2)
... these 2 variables represented the edge of each side of the custom shape, whether it was rounded or cornered. It would be rounded if it = 0 or cornered if = size.

* offset x,y (4)
... these 4 variables determined the horizontal or vertical position for each side of the custom shape.

* angle (1)
... determines to rotation angle of the custom shape but not the rect

* rect x,y,w,h (4)
... are the variables needed to create the rect which is the green part of the letterform

I created a function for half the shape of the custom shape to simplify my code.