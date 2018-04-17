## PS2 MDDN 242 2018

<<<<<<< HEAD
Each of my letters consist of 4 cresents made up of 2 arcs each, all based at the center and rotating outward from there. None of the postions are fixed and they all move with the letter and are postioned so they dont overlap most of the time. Some of them do use the fact that they overlap as a feature of the arcs and hide points or even fully behind the other arcs.
When changing letter or number they do cross over each other creating a weird but cool effect for the letters.
With my code I found that my letters were to big for the bounding box but this was fixed easily with the use of scale and translate to move them into their proper position.

The eight parameters per letter:
  * `rot1`: Controls rotation of Arc1
  * `rot2`: Controls rotation of Arc2
  * `rot3`: Controls rotation of Arc3
  * `rot4`: Controls rotation of Arc4
  * `offsetx1`: Controls the X offset of Arc1
  * `offsetx2`: Controls the X offset of Arc2
  * `offsetx3`: Controls the X offset of Arc3
  * `offsetx4`: Controls the X offset of Arc4
  * `offsety1`: Controls the Y offset of Arc1
  * `offsety2`: Controls the Y offset of Arc2
  * `offsety3`: Controls the Y offset of Arc3
  * `offsety4`: Controls the Y offset of Arc4

At first I only wanted the parameters for rotationa and offsetx but through the course of the project with other letters i found that adding parameters for offsety made it easier to move and clean up.

