## PS2 MDDN 242 2018
 
 Currently my 10 variable per letter are:
  - vertX: X position of initial start of the line(anchor point)
  - vertY: Y position of initial start of the line(anchor point)
  - ctrlPx: X position of the control point for vertX
  - ctrlPy: Y position of the control point for vertY
  - vertX2: X position of the end point of the line(anchor point)
  - vertY2: Y position of the end point of the line(anchor point)
Added:
  - ctrlPx2: X position of the control point for the second curve
  - ctrlPy2: Y position of the control point for the second curve
  - vertX3: X position of the end point of the second curve(anchor point)
  - vertY3: Y position of the end point of the second curve(anchor point)

Starting to progress through the alphabet. Because of how I wrote my code for the "ABC" part I had to manipulate some of my code so that it would work with and in the alphabet framework. 

With the help of Michael I was able to incorporate the rectangle into my drawLetter function and cleaned up by transformations by his suggestion to use the push() and pop() function. For the code to work with the alphabet framework I had to translate my lines from being drawn at locations such as 200,300,400 etc, to inside the the 100x200 rectangle of alphabet. I did this by changing the anchor point locations of the parameters to 0-100,0-200.

After this the code was able to be drawn, I then added a transformation for scale and translation to make it fit inside the rectangle. The alphabet code differs slighty from the initial "ABC" but still looks like it fits the font family.