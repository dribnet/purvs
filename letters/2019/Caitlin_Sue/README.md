## PS2 MDDN 242 2019

When I was coming up with ideas for my alphabet I experimented with a lot of different ideas like using arcs, triangles, and lines. As I was looking at my concepts I realised they were very similar to past projects and I wanted to create something unique.

I started off with vertical lines representing letters. I quickly ran into a problem where letters like C and G could not be drawn with continuous vertical lines so I decided to add parameters for a quad that blocks out parts of the lines to create negative space. 

To keep parameters down I decided to have 4 lines for each letter with 8 parameters in total. There is an equal distance between each line, and they draw at the same x position for each letter, saving on parameters. There is a parameter specifying the top position and the length of the line, for each line.

For the quad I used 8 parameters, 2 to specify the x and y position of each of the 4 quad points. I coloured the quad the same as the background to act as the negative space.

This worked for most of the letters but I ran into another problem where some characters like X and 8 needed 2 quads and I didn't have enough parameters to do this. I had to rethink how these characters could be drawn with just one quad blocking out the necessary space. Hazel helped me use the quads more efficiently by swapping some of the x and y coordinates so that they crossed over, creating an X. 

At this point I had finished my alphabet and interpolated it but felt I could push it further. I had 4 parameters left and decided to add arcs to my letters which compliment and differentiate each letter. To help make the numbers and letters look different I only added arcs to the tops of the numbers, instead of a specific angle on the character. In order to keep it to 4 parameters, I kept the width and height of the circle the same and had 2 parameters for the x and y position, and 2 for the start and stop angle.

To make the interpolation and exhibition of my alphabet smoother I added quads to the letters that didn't require one, but hid it in the corner. This fixed an interpolation problem, where if a letter had a quad and it was interpolating to a letter that didn't, the quad just disappeared rather than interpolating smoothly. 

Overall I am really happy with my alphabet and think the addition of the quads really help to make each character look different.



Here is the full list of my 20 parameters:

ARC PARAMETERS

Xarc1 : x position for arc

Yarc1: y position for arc

arcStart : start angle of arc, specified in radians

arcStop : stop angle of arc, specified in radians

LINE PARAMETERS

Yshift1 : top of line position for first line

Yshift2 : top of line position for second line

Yshift3 : top of line position for third line

Yshift4 : top of line position for fourth line

length1 : length bottom of line position for first line

length2 : length bottom of line position for second line

length3 : length bottom of line position for third line

length4 : length bottom of line position for fourth line

QUAD PARAMETERS

Xquad1 : x position of first quad point

Xquad2 : x position of second quad point

Xquad3 : x position of third quad point

Xquad4 : x position of fourth quad point

Yquad1 : y position of first quad point

Yquad2 : y position of second quad point

Yquad3 : y position of third quad point

Yquad4 : y position of fourth quad point