## PS2 MDDN 242 2018

-FOLDED-

My final font plays off origami, with each letter consisting of two triangles that overlap, each letter consists of 12 parameters.

The 12 parameters per letter:
  * `pointone` : "ang" angle of point and "dist" distance from centre.
  * `pointTwo` : "ang" angle of point and "dist" distance from centre.
  etc..

The two triangles use different colours and transparency to appear folded over.

The transform for each function is done in such a way that it gives the illusion of refolding the paper to form a new letter.

//Process

The initial idea for the font was a more geometric angular design, but once looking at the outcome the font bared quite a resemblance to origami, so from there I took it down that path, looking at different ways to portray this idea.

My first parameter system used an x and y coord for each point, this worked and allowed for the points to animate etc, however upon animation the points travelled upon a straight line to the next point which took away from the origami aesthetic.

Upon realising this, I changed my system to use an angle and distance from central point, then using trig to calculate the x and y. This allowed the points to rotate to the next point, rather than travel directly there. 

The last change I made was the addition of code that centred each letter relative to its height, to streamline each line of text, after finishing the code I noticed that whilst animation, it furthered the "hand folded" feel of each transformation. This furthered the aesthetic I was going for.
