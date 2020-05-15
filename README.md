## MDDN 242 2020 Assignment 2

there are 18 parameters as of now

 //front-right face
 size1 = width and height
 size1cont = width and height of contour

 xpos1cont = x position of contour

 ypos1cont = y position of contour

//front-left face
 size2 = width and height
 size2cont = width and height of contour
 size2cont2 = width and height of contour

 xpos2cont = x position of contour
 xpos2cont2 = x position of contour

 ypos2cont = y position of contour
 ypos2cont2 = y position of contour

// top face
 size3 = width and height
 size3cont = width and height of contour
 size3cont2 = width and height of contour

 xpos3cont = x position of contour
 xpos3cont2 = x position of contour

 ypos3cont = y position of contour
 ypos3cont2 = y position of contour

ReadMe
Added another contour shape inside of the front left and top faces as they are used primarily, this put me back up to 18 paramaters. This allowed me to create all of the alphabet, except for the x, I'm thinking I will use an if statement that duplicates one of the contour across to the other side in order to create the x, as I would need another 6 variables to create it following the same pattern that I have been using. Also in the process of creating these I discovered some hierachy issues with some of the 3d elements, Im not sure these can be avoided by just rearranging my code so I need to play around and patch these up. I also need to get rid of the faces that get drawn on the outside of the shape, when I use a contour on the edge of a face. This gives me something fun to do this weekend. Over all im very happy with how accurately I have been able to recreate my original plan, especially since when I made that illustrator image I didnt fully understand the limits of this project, so its been really cool to follow through with it, and not just make it simpler in order to create it easier. I also checked out the interpolation between each letters and it looks fantastic in my view, Because all of the faces are being drawn on the same pretend 3d plane, and because the origin point of all of the shapes is at 0,0, or the centre of the letter, then the animation when they switch is very smooth, and retains some of the 3d feeling to an extent. In saying that I have played around with the interpolation so I dont know If I can make it even better
