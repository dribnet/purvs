## MDDN 242 2020 Assignment 2

there are 18 parameters as of now as the premise is, 3 parameters per shape, 2 shapes per face, 3 faces.

 //front-right face
 size1 = width and height
 size1cont = width and height of contour
 xpos1 = x position of face
 xpos1cont = x position of contour
 ypos1 = y position of face
 ypos1cont = y position of contour

//front-left face
 size2 = width and height
 size2cont = width and height of contour
 xpos2 = x position of face
 xpos2cont = x position of contour
 ypos2 = y position of face
 ypos2cont = y position of contour

// top face
 size3 = width and height
 size3cont = width and height of contour
 xpos3 = x position of face
 xpos3cont = x position of contour
 ypos3 = y position of face
 ypos3cont = y position of contour

ReadMe

05/05/20 I've done a lot of illustrator work trying to figure out what I want to do. One thing that I'm really interested in doing is creating depth in each letter, from this I had the idea to have the letters be made from faces within a 3d isometric cube. I made a complete alphabet in illustrator based on this, however when I got about to trying to create it in code, I realised it was way too complex, I then went back and simplified it further and its pretty similar to the a b c that I've done in this commit. I really like this simple style however I can see it being tricky for letters that require a lot of 'faces' as a b c don't which made them easy to create. I also managed to create these shapes using only the original variables as I'm not too sure how to add new ones yet
06/05/20 I have a pretty clear idea on how I want my letters to look and therefore what parameters I need to set up, one of the bigger issues that I encounted in this was trying to make an l shape on one of the cubes faces as if I draw it manually it takes up two many parameters, one solution I thought was to use another square that maskes out a portion of the larger face making the shape, however the issue with this is that you wouldnt be able to see faces behind that, I ended up using contours following the same premise in each face. next plans for each face is to create a loop that moves backwards at a tangent giving the appearance of depth for each of the faces, I want to also use opacity here so the different faces can overlap
The parameters I have set for this are:
