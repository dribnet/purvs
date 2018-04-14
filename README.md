## PS2 MDDN 242 2018
 
 Currently my six variable per letter are:
  - vertX: X position of initial start of the line(anchor point)
  - vertY: Y position of initial start of the line(anchor point)
  - ctrlPx: X position of the control point for vertX
  - ctrlPy: Y position of the control point for vertY
  - vertX2: X position of the end point of the line(anchor point)
  - vertY2: Y position of the end point of the line(anchor point)

  In my experimental commit and previous commit I was using a pink stroke() and points of the rectangle as reference for how to draw my line. To speed up the process I have started using Adobe Illustrator as reference. Utilizing the info panel I screenshot my canvas and import the screenshot into a 960x500 artboard on Illustrator. I then use the pen tool to create a bezier curve and control the anchor points to create a certain type of curve. Using Illustrators Info window I am able to pin point the location of the vertex and handles and I round the number to end in a 5 or 0 because I want my font to be restrained since the project is about parameters.

  Utilizing just one quadratic curve to create a set of letters is possibly too challenging to be translatable for the viewer so I believe in my next iteration I will add a second quadratic curve but still keep it restrained as possible. Possibly not using an extra vertex as that would use up my 12 parameters.

  In this commit I've created the ABC. But it feels like it's just an A, rotated V and C. My original idea was to have a 'literal' font so I want to try create a convincing font just from the quadratic curves. The current iteration of my font has similiarities to the Comic Sans.