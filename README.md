## PS2 MDDN 242 2019

So far ive been experimenting with removing shapes from a rectangle to create letters. Ive used a single curved rectangle with three circles placed to cut out and make letters. 

I tried to keep the variables to 6 by attaching the size variable for one of the circles to an if statement. However i needed more control so i added a single size variable to one of the circles. 

The parameters at the moment are 
  * `circle1x` : x position of the first circle
  * `circle1y` : y position of the first circle
  * `circle2x` : x position of the second circle
  * `circle2y` : y position of the second circle
  * `circle3x` : x position of the third circle
  * `circle3y` : y position of the third circle
  * `size` : radius of the first circle

  Originally i started working on a removing method of drawing the letters. However once i started putting the rest of the alphabet together i found it didnt look as nice. I went back to the drawing board, and came up with the idea of a binary like clock. 7 lines that hold true or false as to whether theyre drawn. 

  I started doing this, with letters resembling a digital clock (blocky). However i was encountering issues with certain letters like K. I decided to implement a curve into the lines. I changed the lines from true/falses to number variables. A 0 translates to no line, a 1 translates to a straight line and a 2 or higher is a curved line. Ive started placing this into the alphabet and have had a lot of success.

  However im reflecting and thinking it might work better using the lower case alphabet, as the letters would work better with the new curvy style. 

  Id also like to add more visuals rather than just plain lines, however for the time being i'll get my alphabet finalized and legible. 

  The current parameters are: 

  * `Line1` : Whether this line is visable and/or curved
  * `Line2` : Whether this line is visable and/or curved
  * `Line3` : Whether this line is visable and/or curved
  * `Line4` : Whether this line is visable and/or curved
  * `Line5` : Whether this line is visable and/or curved
  * `Line6` : Whether this line is visable and/or curved
  * `Line7` : Whether this line is visable and/or curved
  * `Horizontal` : True or false, if true the entire grid is rotated 90 degrees sideways. 