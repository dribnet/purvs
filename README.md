## PS2 MDDN 242 2018

-I started to play around with the sliders and replaced the rectangles with arcs to make my letters with.
I made an A, B, and C with the arcs, and added their data to the sketch1 file.
-I tried playing around with adding another parameter per arc, I statred using a y-scale (changing the width) of the arcs but it just looked weird so I am sticking with just changing the angle of the all the arcs.
I now have a full alphabet, A-Z, and a default icon. I still need to tweek some of the letter forms and then create the number forms and special characters as well.
-I have implemented the interaction animation between letters, so there is now the default interpolation between letters when they are typed.
I have also started to develop a new alphabet that has two outer arcs and then a line on the inside that can be oriented in one of four postions. In my next commit I will have this new alphabet working.
-I have now changed my alphabet so that it has two outer arcs and a line inside, the line has six possible positions. i'm not sure if I will use this version as my final or the original three arc design, but I will finish the alphabet first and see which one looks better then.
-I have finished the alphabet and numbers for my 'line' typeface, I like this design more than my previous 'concetric' design. I had to add two extra orientations for the inner line, diagonals, to complete every letter and number. I am now adjusting some of the letters so they look better and I am going to play around with some extra things like fills to add extra 'pizzaz' to the typeface

--

My alphabet includes two concentric arcs and a line inside them, the arcs do not change size or position only the angles of the ends. To form my letters the arcs change 'length,' I have 5 parameters per letter, these are the angles for each end of each arc and an orientation parameter for the line, the lines has eight postions which are the outside edges of a square and then horizontal or vertical inside it, the line can be of of each of these, the values for each position are stored in if statements which are called by which number orientation is set at. The outer arc is also thicker and the inner arc and line thinner to add some visual differences

The six parameters per letter are now:
	`Outer Arc`
		*`Arc Start`: angle of one end of the arc
		*`Arc End`: angle of the other end of the arc
	`Middle Arc`
		*`Arc Start`: angle of one end of the arc
		*`Arc End`: angle of the other end of the arc
	`Line Orientation`: chooses one of eight positions
