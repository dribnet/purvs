## PS2 MDDN 242 2018

My final alphabet is called Bubblegum which is mostly inspired by my chosen colour of my text which consists of a light pink colour. The name was also inspired by the soft curves of the circles and the rounded edges of the line. It is a lowercase alphabet which proved quite challenging when trying to create the letters and numbers within the twelve parameter guide line. 

When creating my alphabet I ran into the problem of having too many parameters. I solved this by making the x start position of my line equal to the x end position of my line. This allowed me to have enough parameters to control my arc but resulted in my line being only able to be drawn straight down vertically. 

The tweleve parameters per letter are now:
* `size` : radius of the first circle
* `posx` : first circle x position
* `posy` : first circle y position
* `size2` : radius of the second circle
* `offsetx` : x offset of the second circle relative to the first one
* `offsety` : y offset of the second circle relative to the first one
* `x1` : the starting x position of the line
* `y1` : the starting y position of the line
* `y2` : the ending y position of the line
* `posarc` : the position of the arc (either in a positive or negative half circle)
* `arcx` : the x position of the arc
* `arcy` : the y position of the arc

