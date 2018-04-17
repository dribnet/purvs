## PS2 MDDN 242 2018
For the interaction, I tried to put interpolate code directly into my drawLetter code, but the swiching bewteen two letters which in different "status" has some problems, so that I need to refine my code first and then use transparent function to slove the problems.

Because I need to design the interaction next and I had 4 kind of "status" which could make the change between two letters in different status very difficult to code and also very messy, so I cut off 2 status and changed design of some letters. At the same time, I cleaned up my code through moving the code in drawLetter function into new functions. Then these new functions could be called in drawLetter function.

Meanwhile, the name of my parameters and variables are now hard to understand. I will change them later when I refine my code.

The parameters per letter are now:
	* `status` : the status of cookies, standing or laying
	* `movex` : x position of where the coordinate of the first cookie will move to
	* `movey` : y position of where the coordinate of the first cookie will move to
	* `offsetx` : x offset of the second column of cookies relative to the first column
	* `offsety` : y offset of the second column of cookies relative to the first column
	* `r` : how many degrees the first cookies should rotate
	* `r2` : how many degrees the cookies should rotate
	* `rotoffset` : rotate offset of the third cookie
	* `rotoffset2` : rotate offset of the fourth cookie
	* `gx` : x position of the gap between two cookies in the first column
	* `gy` : y position of the gap between two cookies in the first column
	* `g2x` : x position of the gap between two cookies in the second column
	* `g2y` : y position of the gap between two cookies in the second column