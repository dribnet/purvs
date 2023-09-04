## MDDN 242 2020 Assignment 2

My alphabet is called Overlays, a name which should be fairly self-explanatory. The point was to make an alphabet purely using two, overlapping arcs, where the overlap defines the approximate shape of an English letter. The default character contains no overlap, as it does not signify any specific letter. For some letters, such as E, S, and N, this was wildly successful. For others, some more peculiar lettering was required. The resulting alphabet has worked out surprisingly readable, though that may just be because I've stared at it a lot.

Each letter has ten parameters, which are split into a set of five for each arc:

x1: X position of red arc
y1: Y position of red arc
s1: Size of red arc
stop1: At what angle the red arc stops
rot1: The rotation of the red arc (Effectively choosing the start position)

x2: X position of blue arc
y2: Y position of blue arc
s2: Size of blue arc
stop2: At what angle the blue arc stops
rot2: The rotation of the blue arc (Effectively choosing the start position)

As I worked, additional, soft rules popped up. The red arc started always being weighted towards the right and lower when possible. A handful of angles (90 degrees, 45 degrees, 55 degrees) became recurring pieces.

Colouring changed very little throughout the project. I lucked out on my original colour choices and only ever made mild tweaks to them from there, mostly just making it less green.

Most of my experimentation with the font was scrapped before pushing it because I didn't like it, which in retrospect was a bad move as it would have been good to show. The most notable of these was the addition of a third arc, drawn with the same position, size, and colour as one of the other arcs, only unique in its start and end points. This was to facilitate additional arms on letters like Y and R, but since it connected to the rest of form at only a point it looked absolutely hateful.

There was one major issue with my code I had to work out, which was with the animation. Originally the arcs were drawn more typically, based off a start and stop point. This however, caused a significant issue: When interpolating between some letters, the start and stop points would pass each other, causing them to pop in and out of existence in a rather alarming manner. The solution to this turned out to be surprisingly simple, though it required some significant reworking. I changed every arc to draw from 0 to a point, and then rotated it, rather than using arbitrary start and stop points for each character. This didn't cost any variables, as I was swapping the start point for a rotation, and fixed the issue, allowing the arcs to rotate and stretch in a satisfying manner in all the interpolations.

Outside of tinkering more with the details of how some letters are formed, I don't think I would do much more with extra time on this project. The letters I used are deliberately simple, using a minimal amount of imagery to create distinct letters. The most likely change I would make would be finding different ways to draw a small handful of letters, like Q and Y, that I'm not totally happy with. Playing more with the interpolate letters function is also something I'd try out - having the letters pop in and out during interpolation might be a fun addition, but I like that the current setup allows you to see them rotate and extend.

All in all, I think this was a successful project, and I am satisfied with the result.
