## MDDN 242 2021 Assignment 2

My plan for this project was to create a readable matrix inspired that you could see on a computer terminal hence there is a lot of straight lines and no corners  and the colours being green and black.

For this project I initally wanted to cheat the system and do a 10 sided polygon. This would have given me 20 coordinates/ parameters. But this would have been too easy for me to cheat the system. So given that most letters are symetrical I decided to use a 5 sided shape which I could either mirror horizontally or vertically which could then create 10 sided shaped with half as many parameters. This could also mean that I could apply no symmetry to make some of the unsymmetrical shapes. I also initally intended to use 1 ellipse to erase parts of the polygon but this was changed to 2 so I could create symmetry for it too.

I eventually settled on the parameters of:

 <b>Symmode</b> a string which controlled the symmetry options for both the polygon and the ellipses drawn on top of it. This probably technically should be 2 variables one for the polygon and one for the ellipses but I was trying to only need 1 parameter for both of these.
 <b>x1,x2,x3,x4,x5,y1,y2,y3,y4,y5</b> interger x and y coordinates of each point in the polygon relative to the centre of then letter being written. i would have prefered to just have have a x coord and y coord array but the system would let me (even if it counted as the same number of parameters) as it is more my style of coding.
 <b>ex,ey</b> The ellipses' coordinates relative to the centre of then letter being written
<b>ewidth,eheight</b> The width and height of the ellipse


But this approach made it quite hard to do some letters such as g, z and r which look kind of weird but are the best I could do with the limitations I set myself and the number of vertices I had to play with. I also kept all the letters in a certain grid of 70x100 to keep them a uniform size which has resulted in certain letters such as a and b being slightly less blocky than the rest which was another limitation of my system.


Interpolation:

For the interpolation I initally had the default one but changed it so the old letter shrunk out then the new one grew but this was boring. I then made it so the old letter shrunk out slowly then the new one grew in fast and while this was cool it didn't really fit with the design of matrix inspired font you would see in a terminal. So I changed it up where it randomly switches to 0 or 1 during the interpolation to make it look like the font is glitching. I used 0 and 1 because computers run off binary. I then toyed with the idea of having the binary version of each new character being interpolated to being used in the interpolation instead of the randomness but I decided not to as it would be seen for less than a second so wouldn't be readable and would look just the same as what I have. Plus who can actually read binary let alone super quickly?
Doing this with random has broken in between percentages the interaction  as it isn't sure whether to be a 0 or 1 so keeps switching but this is a controlled ussue hence I don't care that I have broken the system.

Overall I think I hit my target of making a readable matrix inspired that you could see on a computer terminal as I feel like my design is cohesive. Hence  I have decided to call it Glitched Matrix.
