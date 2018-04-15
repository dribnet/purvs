## PS2 MDDN 242 2018 Animation
   
I tested out some animations so far nothing has much of a visible an effect on my letter forms. I tried out the versions that we were shown however they did not work and did nothing so I figured that I would test out something like changing the variables but no luck. 
Since nothing worked I decided to test out the animation were it peaks and gets pulled back down again. This worked slightly so I make the numbers bigger and it looked pretty interesting but not really what I want to go for so playing around some more I changed the if(percent >  50) to if(percent => -50) which turned out pretty cool however numbers are a bit too extreme which made it spilt too wide. For the if else I changed it to percent < 55 which gave it an even wider split which started off at one letter then it would go up until the end before it snapped back together to form another letter. I think this looks pretty interesting however I think it would be better if snap earlier or more gradual instead of immediately. However I like how wide it opens. 
Something I noticed was that there the animation of rotation I had before is gone so now that when you change the letters you won't see the rotation of the letters turning into the next letter like before. This version without the rotation animation is interesting but I miss the rotation animation as it was interesting to see. With this the letter forms will get pulled apart then snapped back but in a different form so you don't see the rotation of it changing. 


pos2x this draws the x position of the first point 
pos2y this draws the y position of the first point 
pos3x this draws the x position of the second point 
pos3y this draws the y position of the second point 
arcAngle is the size of the arcs for both arcs
rotatearc2 this rotates the outer arc
rotatearc3 this rotates the inner arc


