## PS2 MDDN 242 2018

I wanted an alphabet that used simple shapes and involved transparency.

My original design only had three circles, but I quickly realised that I needed something else to make the letters more unique, so I added a line. I felt that adding anything else would make it too crowded.

To give a sense of connectivity between the letters, I didn't want the placement of the circles and line to be random. I only used 6 different line placements for all letters and numbers so no line position is unique. Some of the placements for the circles is unique but most use the same positions. 

I played around a lot with colour. The colour of the little circle is different for the letters and the numbers, so they can be told apart. I eventually settled on the big circle being black and the smaller one being red for letters and green for numbers. The red/green adds some colour which I think the characters needed, after looking at the monochromatic designs I previously tried. The black makes the red/green stand out. The line, the middle-sized circle and the stroke of the little circle are the same colour as the background and so they appear to cut through the large circle. I like this effect because it makes some interesting shapes, unlike having the circles and line sit inside the big circle like I'd originally planned. 

For the interaction I made the line fade in/out when changing to/from letters that have and don’t have lines. This is because I wanted to link it to the transparency I used for the little circle. I wanted the change in colour between letters/numbers to be a smooth change to match with the fading line. I added the parameters: "alpha", "r", "g" and "b" to make these transitions work. For the fading in/out of the line, I had to put the line parameter into all letters even when it's not seen. I chose to put the line in the centre for the letters that didn't have a line showing, so the line fades and moves to/away from the centre when changing letter.


When writing a word I wanted my letters to touch because I like the way the ‘cut-out’ parts look when the line up.

The twelve parameters I used:

*posx1: x position for the little circle
*posx2: x position for the medium circle
*posy1: y position for the little circle
*posy2: y position for the medium circle
*linex1: first x position for the line
*linex2: second x position for the line
*liney1: first y position for the line
*liney2: second y position for the line
*alpha: the alpha value of the line
*r: the red fill value for the little circle
*g: the green fill value for the little circle
*b: the blue fill value for the little circle

