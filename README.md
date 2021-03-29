## MDDN 242 2021 Assignment 2

The draw_letter.js has now more letters.
I set up the editor and the letter interpolations!
Will be working on adding more letters as soon as possible and then move into refining them.


Each of my letters is composed with a circle, an arc and a rectangle. The size and position of each shape varies, the arc start and end as well as the rotation of the rectangle too.

The ten parameters per letter:
  * `size` : height of the rectangle
  * `recOffsetx` : x offset of the rectangle
  * `recOffsety` : y offset of the rectangle

  * `size1` : radius of the ellipse
  * `offsetx` : x offset of the ellipse
  * `offsety` : y offset of the ellipse

  * `size2` : radius of the arc
  * `ArcOffsetx` : y offset of the arc
  * `ArcOffsety` : y offset of the arc
  * `rectAngle` : rotation angle of the rectangle
  * `angleStart` : angle start for the arc
  * `angleEnd` : angle end for the arc