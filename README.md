## MDDN 242 2020 Assignment 2

Craig Springett | 300441513

---

The concept for my alphabet is to base it on the [Aurebesh Alphabet](https://omniglot.com/images/writing/aurekbesh.gif) from the Star Wars universe.

### Galaxsic
| Variables List |															  |
|:--------------:|------------------------------------------------------------|
|	 `offsetX1`	 | _x_ Position of first arc/circle (limited to ±15)		  |
|	 `offsetY1`	 | _y_ Position of first arc/circle (limited to ±80)		  |
|	  `start1`	 | First arc's starting angle (DEGREES, 0-360)				  |
|	   `end1`	 | First arc's ending angle (DEGREES, 0-360)				  |
|	 `offsetX2`	 | _x_ Position of second arc/circle (limited to ±15)		  |
|	 `offsetY2`	 | _y_ Position of second arc/circle (limited to ±80)		  |
|	  `start2`	 | Second arc's starting angle (DEGREES, 0-360)				  |
|	   `end2`	 | Second arc's ending angle (DEGREES, 0-360)				  |
|	`lineWidth`  | Width of the central rectangle (0-80)					  |
|	`lineHeight` | Height of the central rectangle (0-80)					  |

The design of my typeface is based on a sketch I made that used two arcs and a straight line in order to create the first few letter forms of the Galactic Basic/Aurebesh Alphabet from the Star Wars franchise. Ultimately, I wanted to create at least a semi-legible version of the Aurebesh characters using this form, and limited to 10 variables I found this was achievable with some "artistic license". What I decided early on in the process was to set particular standards for how to represent certain shapes, such as diagonals, or if the character contains fullsize vertical or horizontal lines (in the event of both, a decision being made as to which is more important to the form). The letter interpolation was then altered such that it appeared as if it was being written, however, I wanted to keep the motion smooth so did not make each shape move one by one, and instead added a small delay to the second arc and central rectangle.

| Date		 | Update Information											  |
|:----------:|----------------------------------------------------------------|
| 20/05/2020 | Added purview.json. Changed colours to better represent the space/galatic origins of the alphabet.										 |
| 18/05/2020 | Finished refinement of characters, pretty happy with interpolation timing where the 2nd arc is slightly delayed to the first and the bar makes the fastest motion from halfway through. This is to emulate the idea that it is being drawn/written so therefore one must be ending before the next could be starting, but I also want to keep the character smoothly interpolating, hence why it isn't one by one. Updated README to include variables list and outline of design parameters.							  |
| 17/05/2020 | Continued refinement of character shapes. I am limiting the x-axis to ±15 in order to keep my shapes within the bounds. I also have key design elements, such as forms that have vertical or horizontal lines in them will include a horizontal or vertical straight line in them too, proportionally (aside from 0). Also most angular shapes will have the two circles offset to represent this.											  |
| 16/05/2020 | Finished base character shapes, will revise and clean them up as required (as some don't fit within the bounds, and others have tails due to rounding errors on my part). Fixed width = 0 && height = 0 leaving a dot in the centre and instead that now makes it invisible.							  |
| 13/05/2020 | Managed to get letterA to work however, my variables are starting to balloon trying to get the other shapes, and is becoming a bit of a headache to produce. I'm having to add variables for each letter and I imagine as I do the whole alphabet I would discover even more will be needed. With this in mind I will likely be changing my design to work with the arcs/triangles idea I also had hand-sketched. <br/> Switched design to arc and I'm pretty happy with how it is looking. 10 variables for now and looks fairly neat. The colours are somewhat placeholder for now; considering this a prototype scheme and will investigate something more fitting for the final design. <br/> As of this afternoon I have now ported my sketch.js into the appropriate areas, and I've slightly modified the background colour to better suit the scheme. The editor works and has provided me with my default character (for now at least). <br/> This evening I was able to start creating the rest of the alphabet, whilst also fixing the interpolation.				  |
| 11/05/2020 | Initial work on sketch letters. Deciding on horizontal lines as the design I want to pursue, I have modified the draw variables to work for that.																		 |
| 10/05/2020 | Current design direction is to base the characters off the Aurebesh Alphabet from the Star Wars universe. Initial drawn sketch idea replaced.																	 |