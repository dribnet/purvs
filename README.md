## PS2 MDDN 242 2018
For my interaction of the alphabet, I used moving for the changes of the side look of oreo and transparence for the changes between front and side look of oreo. 
Also, when I test my interaction and the process of letter swiching, I found some weird rotate of my letter parts such as when the J changing into K, the third part of the letter will rotate in a very exaggerated way. That was because I put a wrong number in the letterData so it was looks good when it was in the alphabet but weird when it moved and swiched to next letter. I double checked all the letters and updated some numbers in rotation so the weird rotating will not happen.

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