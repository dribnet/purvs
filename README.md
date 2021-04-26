## MDDN 242 2021 Assignment 2
**Animating the letters**

I worked on the animation of the letters, leaving the value of the starting and ending value of the arcs at 0, because I already like how they swoosh slowing from one position to another. I tried to increase the value to 25 and 50 and they go to quickly swooshing multiple times.

I did consider maybe having letters transition quickly and having the effect of jumping them out but I feel because the letter design is already busy this might be to harsh on the viewers eyes.

I changed the map values for the sizes of all the shapes to 25 and it makes the transition between each letter smoother which I like.

**Problems**
SOLVED
The rotation of the texture(dots) I added.
There was a problem with the translation of the rotated texture(dots), and the only way to fix it to its exact precision was to add 2 extra parameters. The transition of the x axis, and the transition of the y axis allowing me to get the position perfect. I am trying to keep my parameters as low as possible.

**Letters**
I have tweaked some letters to look better.

Currently I have 15 parameters:

*Shape1 the arc*
1. size: The size of the arc
2. offsetx: x offset of the arc
3. offsety: y offset of the arc
4. arcStart: starting angle for the arc
5. arcEnd: ending angle for the arc

*Shape2 the second circle*
6. size1: The size of the ciccke
7. offsetx2: x offset of the circle
8. offsety2: y offset of the cicrle

*Shape3 the rectangle*
9. width: width of the rectangle
10. height: height of the rectangle
11. offsetx3: x offset of the rectangle
12. offsety3: y offset of the rectangle
13. angle: angle of rotation of the rectangle
