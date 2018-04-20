## PS2 MDDN 242 2018
=====
ArcLines

For this project I wanted to create a simple sleek typeface that is fairly legible. Through out the project I changed the design a bit, initially I started with three concentric arcs that had no fill, I think it was too simplistic and not as legible as my final, I then moved to the current design with two arcs and a line but still had no fill. I liked this new design as it was more legible and I could do a lot more with the letters but I felt it was still missing something so I tried adding the fill, the fill added some extra 'mass' to the letters and I found it made them more legible and more interesting to look at, I think that my final design is successful in showing the ideas I wanted to convey. I kept the colours simple with a dark grey background and light grey font to add to the sleek and simple aesthetic and so that the light letters popped against the dark background. I made the animations simple and added a little bounce to add some life to the font while still keeping it minimal.

My alphabet includes two concentric arcs and a line inside them, the arcs do not change size or position only the angles of the ends, the arcs also have a translucent fill to them to add mass and shape. To form my letters the arcs change 'length' or the angle at each end and the line inside roates around. I have 8 parameters per letter, these are the angles for each end of each arc and x/y positions for each end of the line. The outer arc is also thicker and the inner arc and line thinner to add some visual differences. For the animation between letters I added a little 'bounce' to the end of the arcs, so when they stop, they bounce back in and out, I left the inner line with a simple rotate and slight scale so that it isn't to distracting overall.

The eight parameters per letter are:
	`Outer Arc`
		*`Arc Start`: angle of one end of the arc
		*`Arc End`: angle of the other end of the arc
	`Middle Arc`
		*`Arc Start`: angle of one end of the arc
		*`Arc End`: angle of the other end of the arc
	`Line Position`
		*`LineX1`: x position of start of line
		*`LineX1`: x position of end of line
		*`LineY1`: y position of start of line
		*`LineY1`: y position of end of line
