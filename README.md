## PS2 MDDN 242 2019


Originally i started working on a removing method of drawing the letters. However once i started putting the rest of the alphabet together i found it didnt look as nice. I went back to the drawing board, and came up with the idea of a binary like clock. 7 lines that hold true or false as to whether theyre drawn.

I started doing this, with letters resembling a digital clock (blocky). However i was encountering issues with certain letters like K. I decided to implement a curve into the lines. I changed the lines from true/falses to number variables. A 0 translates to no line, a 1 translates to a straight line and a 2 or higher is a curved line. Ive started placing this into the alphabet and have had a lot of success.

Ive also had to include some exceptions, that are coded to rotate the entire letter, this has meant i was able to create letters like T and X without needing too many more parameters. 
 
I initially had used the upper case alphabet, however after implementing curved lines i found that it was much more effective to use lower case letters. I added a scale and position offset parameter so that they would be appropriate size and position, such as g/y/p/q being lower, and letters like a being shorter. 

Once i had finished the base alphabet i moved most of the letters scripts to a function, this meant i could call it repeatedly. I was able to draw the same letter several times in different colours and scales to create a more 3D bubble look. Im still experimenting with how to properly create lower case t and i, as the i currently looks too much like L and t doesnt transition very well.

The current parameters are:

* `Line1` :  Whether this line is visable and/or curved

* `Line2` : Whether this line is visable and/or curved

* `Line3` : Whether this line is visable and/or curved

* `Line4` : Whether this line is visable and/or curved

* `Line5` : Whether this line is visable and/or curved

* `Line6` : Whether this line is visable and/or curved

* `Line7` : Whether this line is visable and/or curved

* `Horizontal` : True or false, if true the entire grid is rotated 90 degrees sideways.

* `Scale` : The vertical height of the letter

* `Offset` : The y position offset

