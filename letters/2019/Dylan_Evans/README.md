## PS2 MDDN 242 2019

Each of my letters is composed of three ellipses. The size and position of the first circle is fixed with 4 parameters for changing colour and turning it into a semi circle and rotating it. The location, width, height, degree of rotation, and colour of the other two ellipses are controlled by 16 parameters.

(I had to make a parameter for each colour for the map function/transition to work)

This design focuses on negative space created by the overlapping ellipses. Each character is made out of what's left of the darker sections after getting partially covered by the lighter ellipses.

I couldn't quite get the transition of the semi-circles to work because to make it fit within 20 parameters I put the semicircle and rotation options all in one parameter. (Checks if the field is null, if not it rotates it by the number in the field).

I decided to follow this design because I wanted to see if I could follow my initial idea of only using ellipses and negative space to create characters. I'm happy with the result, which is a very non-serious/playful typeface. Some of the letters such as the 'E' look pretty abstract but I think if the user knows to focus on the negative space, it's a decently legible font.

I think I need to learn more in the field of shape manipulation with using translate, rotate, etc.


The twenty parameters per letter:
  * `smallWidth` : width of the small ellipse
  * `smallHeight` : height of the small ellipse
  * `smallAngle` : degree of rotation of the small ellipse
  * `offsetx` : x offset of the small ellipse relative to the big circle
  * `offsety` : y offset of the small ellipse relative to the big circle
  * `AcolorR` : red color value of the small ellipse
  * `AcolorG` : green color value of the small ellipse
  * `AcolorB` : blue color value of the small ellipse

  * `BsmallWidth` : width of the other small ellipse
  * `BsmallHeight` : height of the other small ellipse
  * `BsmallAngle` : degree of rotation of the other small ellipse
  * `Boffsetx` : x offset of the other small ellipse relative to the big circle
  * `Boffsety` : y offset of the other small ellipse relative to the big circle
  * `BcolorR` : red color value of the other small ellipse
  * `BcolorG` : green color value of the other small ellipse
  * `BcolorB` : blue color value of the other small ellipse

  * `backColorR` : red color value of the big background ellipse
  * `backColorG` : green color value of the big background ellipse
  * `backColorB` : blue color value of the big background ellipse
  * `semiRotate` : Turns the background ellipse into a semicircle and rotates it. If the value is null it will keep the ellipse as a circle

