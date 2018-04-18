## PS2 MDDN 242 2018

-I started to play around with the sliders and replaced the rectangles with arcs to make my letters with.
I made an A, B, and C with the arcs, and added their data to the sketch1 file.
-I tried playing around with adding another parameter per arc, I statred using a y-scale (changing the width) of the arcs but it just looked weird so I am sticking with just changing the angle of the all the arcs.
I now have a full alphabet, A-Z, and a default icon. I still need to tweek some of the letter forms and then create the number forms and special characters as well.
-I have implemented the interaction animation between letters, so there is now the default interpolation between letters when they are typed.
I have also started to develop a new alphabet that has two outer arcs and then a line on the inside that can be oriented in one of four postions. In my next commit I will have this new alphabet working.
-I have now changed my alphabet so that it has two outer arcs and a line inside, the line has six possible positions. i'm not sure if I will use this version as my final or the original three arc design, but I will finish the alphabet first and see which one looks better then.
-I have finished the alphabet and numbers for my 'line' typeface, I like this design more than my previous 'concetric' design. I had to add two extra orientations for the inner line, diagonals, to complete every letter and number. I am now adjusting some of the letters so they look better and I am going to play around with some extra things like fills to add extra 'pizzaz' to the typeface
-I have added a translucent fill to the arcs, this gives some substantiality to the letter forms, completely changing the silhouette and gives them mass. I had to go back and rework most the letters to better fit with the fill but I like them much more and think it is now a lot more legible. I now need to tweek the animtions between letter if I can and add my own words to the exhibition.
-I have tweeked my code to get it ready for submission and to smooth the animation. I now have eight parameters, two for each arc and four for the line (X x2, Y x2). Before I just had a line orientation and predefined line orientations but when animated it would jump between positions and looked weird, so I have added extra parameters so that the lines actually move and rotate now. This process also cleaned up my code a bit and it is easier to understand now

--
ArcLines

My alphabet includes two concentric arcs and a line inside them, the arcs do not change size or position only the angles of the ends, the arcs also have a translucent fill to them to add mass and shape. To form my letters the arcs change 'length,' I have 8 parameters per letter, these are the angles for each end of each arc and x/y positions for the line. The outer arc is also thicker and the inner arc and line thinner to add some visual differences.

The six parameters per letter are now:
	`Outer Arc`
		*`Arc Start`: angle of one end of the arc
		*`Arc End`: angle of the other end of the arc
	`Middle Arc`
		*`Arc Start`: angle of one end of the arc
		*`Arc End`: angle of the other end of the arc
	`Line Position'
		*'LineX1': X position of start of line
		*'LineX1': X position of end of line
		*'LineY1': Y position of start of line
		*'LineY1': Y position of end of line
