## PS2 MDDN 242 2018

Conceptual Development and "Research"

I tentatively call what I did research as there wasn't really much involved before I came up with the idea for this font. I basically just looked a upstract fonts/letterforms on google, although I found nothing there. I ended up taking most of my inspiration from the example in the notable examples - Type me, type me not.

I have been mostly inspired by the inbetween letters parts and how it is represented in the screenshot rather than the acutal font. I like the idea of a layered font with a few things going into making the font. As you can see in my last git upload I have all ready estiblished some font parameters etc but I will go into them here as I made the sheet of notes on the left before I created that.

I have come up with a series of parameters as shown below in a possibly more comprehensive way then in my preview image. I added a rotation parameter as well I could shift to verticle rather than horizontal if needed. 

The basis of the letterform is that is is contstructed of 3 triangles and the overlapping of the alpha colour, in conjunction with the shape of each triangle will create an abstract form representative of each letter.

They all share one x and y coordinates and two of the triangle share another x coordinate just in case I need one parameter later on because I've all ready taken up 11.
 
The layout of my variables and how they interact with the letterforms:

  1 triangle(xMain, yMain, tri1X, tri1Ya, tri1X, tri1Yb);
  2 triangle(xMain, yMain, xQuad, tri2Ya, xQuad, tri2Yb);
  3 triangle(xMain, yMain, xQuad, tri3Ya, xQuad, tri3Yb);

  rotate - is there just the letter structure requires the xQuad variable
  to relate to the y axis rather than the x. however it simply rotates the
  letterforms so that they can use the settings all ready in place.