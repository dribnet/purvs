## PS2 MDDN 242 2019

Each of my letters is composed with three ellipses. The size and position of the first circle is fixed with 2 parameters for changing colour and turning it into a semi circle and rotating it. The location, width, height, degree of rotation, and colour of the other two ellipses are controlled by 12 parameters.

The fourteen parameters per letter:
  * `smallWidth` : width of the small ellipse
  * `smallHeight` : height of the small ellipse
  * `smallAngle` : degree of rotation of the small ellipse
  * `offsetx` : x offset of the small ellipse relative to the big circle
  * `offsety` : y offset of the small ellipse relative to the big circle
  * `Acolor` : color of the small ellipse
  * `BsmallWidth` : width of the other small ellipse
  * `BsmallHeight` : height of the other small ellipse
  * `BsmallAngle` : degree of rotation of the other small ellipse
  * `Boffsetx` : x offset of the other small ellipse relative to the big circle
  * `Boffsety` : y offset of the other small ellipse relative to the big circle
  * `Bcolor` : color of the other small ellipse
  * `backColor` : color of the big background ellipse
  * `semiRotate` : Turns the background ellipse into a semicircle and rotates it. If the value is null it will keep the ellipse as a circle

