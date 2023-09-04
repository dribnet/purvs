## PS2 MDDN 242 2018

neochalk

neochalk is the final version of my parametric alphabet. I drew inspiration from the example given by David Lu at the start of this project, Lu drew his alphabet from a single spline curve. I really liked how smooth and simple the letter forms were and decided that that would be something I would like to work on in my project. I was a bit clueless with my direction at the beginning but I felt that once I had the bezier curve idea down it gave me some clarity as to where I wanted to take this project. 

To begin with the bezier curve was quite difficult to make any forms with as I couldn't see a live feed of where I was placing the anchor points and control points. To solve this I looked up a bezier curve site https://www.desmos.com/calculator/cahqdxeshd and used this to make my forms. I placed all of the letter forms inside a box ranging from 0 - 4 on the x axis and -4 - 8 on the y axis. Once I had discovered this I could quickly make and change my letter forms to what I thought was the best look. I decided on lowercase letters for my alphabet as this was the best looking when I tried out different forms.

Once I began iterating on my bezier curve alphabet and playing with the colors I found a style which resembles somewhat of a futuristic chalk. I mapped the fill of the letters and added an opacity so that it didn't overwhelm the stroke of the letter form. Going from here I changed to overall look and colors of the sites given to us by Tom. I also implemented a dot parameter for punctuation and for the letters i and j.

I'm really happy with the overall outcome of my project and I think that the interpolation turned out better than I had expected with how smooth the transitions are. If I was to change anything I think I would try and figure out a work around for the letters which really needed another point such as M W or 3. I would have also liked to added a personal touch to the interpolation but couldn't figure how to do that. 




The eight parameters per letter:
	* 'pos1x' : X starting point of bezier
	* 'pos1x' : Y starting point of bezier
	* 'pos2x' : Second X point of bezier
	* 'pos2x' : Second Y point of bezier
	* 'pos3x' : Third X point of bezier
	* 'pos3x' : Third Y point of bezier
	* 'pos4x' : Last X point of bezier
	* 'pos4x' : Last Y point of bezier
	* 'pos5x' : X position of dot
	* 'pos5x' : Y position of dot