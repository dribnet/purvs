## PS2 MDDN 242 2018
Now I already finish the refine of my code. I deleted the IF statement and replace that with the transparent function. I kept the status in my letterData but use it as the data of transparent. So now when I draw each letter, it will draw both the side and front of the cookie at the same time, but one of them is hidden. 
Besides, I renamed my parameters and variables. They are easier to understand now.

The parameters per letter are now:
	* `status` : the status of two status of cookies, show or hide
	* `movex` : x position of where the coordinate of the first cookie will move to
	* `movey` : y position of where the coordinate of the first cookie will move to
	* `r` : how many degrees the first cookies should rotate
	* `r2` : offset degrees of the second cookies should rotate relative to the first one
	* `r3` : how many degrees the third cookies should rotate
	* `r4` : how many degrees the fourth cookies should rotate
	* `offset2x` : x offset of the second cookie relative to the first one
	* `offset2y` : y offset of the second cookie relative to the first one
	* `offset3x` : x offset of the third cookie relative to the second one
	* `offset3y` : y offset of the third cookie relative to the second one
	* `offset4x` : x offset of the fourth cookie relative to the third one
	* `offset4y` : y offset of the fourth cookie relative to the third one