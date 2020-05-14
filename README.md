## MDDN 242 2020 Assignment 2

there are 12 parameters as of now

 //front-right face
 size1 = width and height
 size1cont = width and height of contour

 xpos1cont = x position of contour

 ypos1cont = y position of contour

//front-left face
 size2 = width and height
 size2cont = width and height of contour

 xpos2cont = x position of contour

 ypos2cont = y position of contour

// top face
 size3 = width and height
 size3cont = width and height of contour

 xpos3cont = x position of contour

 ypos3cont = y position of contour

ReadMe

Culled 6 parameters which determined the position of the overall face as I chose to keep that stationery.
I worked on making all of the faces have the 3d effect which is great, I started to create some of the letters that I could, really this was just the c. The issue im having at the moment is that because the height of a face is a multiple of tan30 due to its isometric shape, its difficult to work out the x and y positions to draw the contours in. I think I will right a few if statements, where depending on the x position of the contour, raise the y level by a certain ammount. this is because I cant use tan in letters.js as It breaks when I try and change the anglemode. Another thing I want to do is find a way to simplify down my code, im not sure if this can be done but atm there is a big wall of scary code
