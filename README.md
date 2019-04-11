## PS2 MDDN 242 2019
// April 8, 2019

Current progress. Making the alphabet.

In this part I set up and use the editor to design my font.
At first I want to use 25 parameter for my editor, but I find the maximum parameter of editor is 16 parameter.
On my first design I got 7 rectangle to help me design my font, but now I have to delete two of them, and I can not put x, y coordinate parameter and size parameter of my 5 rectangle because it more then
16 and I make my code looks messy, so I gave up the y parameter of my rectangle. I use “x” coordinate parameter, the width and height parameter to make my font

The 15 parameters per letter:
"r1x" - x coordinate of first rectangle
"r1y" – width of first rectangle
"r1l" – height of first rectangle
"r2x" - x coordinate of second rectangle
"r2y" – width of second rectangle
"r2l" – height of second rectangle
"r3x" - x coordinate of third rectangle
"r3y" – width of third rectangle
"r3l" – height of third rectangle
"r4x" - x coordinate of fourth rectangle
"r4y" – width of fourth rectangle
"r4l" – height of fourth rectangle
"r5x" - x coordinate of fifth rectangle
"r5y" – width of fifth rectangle
"r5l" – height of fifth rectangle

// April 1, 2019

My initial idea was to use slice circle (like a burger) to design my font. But when I try to do it, I find I can not use p5. Js to achieve my idea, so I change my design.
In this sketch, I use a radius 40px circle for my background and I draw some rectangle on it, it can make it looks like cut the circle as a slice. I can change the position and the size of my rectangle to draw the font.

coding: posx, posy,pos2x,pos2y control the position of the shapes.

color use: bright background and dark letters
