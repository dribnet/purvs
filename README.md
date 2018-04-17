## PS2 MDDN 242 2018

I have adjusted the size and position of the circles and the line to fit better with exhibition.js. I wanted the circles to touch because I thought it looked better and matched with how some of the inner circles touch the biggest circle.

I added a new parameter: "alpha". This is the alpha value of the lines stroke. I added it so that the line would fade in and out when the letter changed to/from a letter that did/did not have a line. I also had to put the line parameter into all letters for this to work. I chose to put the line in the centre for the letters that didn't have a line showing, despite not normally being viewable, this line is visible when changing to a letter that does have a line.

The eight parameters per letter are now:

*posx1: first x position for the first circle
*posx2: second x position for the first circle
*posy1: first y position for the first circle
*posy2: second y position for the first circle
*linex1: first x position for the line
*linex2: second x position for the line
*liney1: first y position for the line
*liney2: second y position for the line
*alpha: the alpha value of the line