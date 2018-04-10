## PS2 MDDN 242 2018

Starting from scratch I decided to make my life easier with the short time I have to finish this project. I am using beziers and the fill created by them to make my alphabet. I randomised the fill and the background so that each refresh puts in a new color. The look I am going for is something like that of a kids show/cartoony. I still need to work on the shape of the letters but this is a good start. I also can't seem to get the letters.js working.

The three parameters per letter:
  * `size` : radius of the second circle
  * `offsetx` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one

The eight parameters per letter:
	* 'posx1' : X starting point of bezier
	* 'posy1' : Y starting point of bezier
	* 'posx2' : Second X point of bezier
	* 'posy2' : Second Y point of bezier
	* 'posx3' : Third X point of bezier
	* 'posy3' : Third Y point of bezier
	* 'posx4' : Last X point of bezier
	* 'posy4' : Last Y point of bezier