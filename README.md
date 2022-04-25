## MDDN 242 2022 Assignment 2

Part 2: Design the Alphabet
Part 2b: Editor
26/4
Unfortunately I have not made much progress over the break but I did make a good amount of changes after our receiving feedback.

The core critiques included:
- the colour scheme
- the tangents
- the ascender/descender heights
- overall consistency across the letters

I completely changed the colour scheme to a light and navy shade of blue. I think the simplistic choice of colouring looks quite nice with the design so far. I's also like to add in some more details so it looks like the letters are glowing (kind of Atlantis: The Lost Empire vibes).
---
For the tangents, I'm experimenting with the lines and how they look when they're not fully touching. So far I like this look but I need to refine it more still.
---
To make the height of the letters more consistent and appealing to the eye, I moved all the median height of the letters up to the middle of the bounding box (100). Subsequently, the ascender/descender heights are now the same - I think this looks far more appealing as everything just looks more equal/even.
---
Some inconsistency in my design was the angles of the lines. The varying lengths of the lines also contributed to making the angles in question look super acute/obtuse. To 'solve' this I just took the angles away. I was already thinking of doing this for the editor though, so it didn't impede me too much. I've simplified it to just a horizontal and vertical line, and also added in a parameter so you can change the starting angle of the arc; so far this is working out better in the overall design.
---
These are the new parameters I'm currently working with:
* `arcStartAngle` : this is the 'start' angle that the arc will start at.
* `arcStopAngle` : this is the 'stop' angle that the arc will stop at.

* `Line1_X_startcoord` : x coordinate of the starting line point.
* `Line1_X_stopcoord` : x coordinate of the stopping line point.
* `horizontalLineY` : y position of the whole line.

* `verticalLineX` : x position of the whole line.
* `Line2_Y_startcoord` : y coordinate of the starting line point.
* `Line2_Y_stopcoord` : y coordinate of the stopping line point.

I've also added in the Editor. This corresponds with the above parameters and has been a big help the the new design. Moving forward I need to get my shit together and finish the alphabet - I don't have much more to do especially since I've got my previous design to go off, but regardless I need to get it done ASAP to get started on the interpolation and exhibition.
