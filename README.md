## PS2 MDDN 242 2019


During the process of creating the interpolation function I encountered a major issue. From the beginning of the design process, without thinking about the implications I Had most of my elements transformed off the rectangle's origin point which I had set to "CENTER" mode at (50,100). I went ahead and created the majority of my alphabet like this, not realising how this would affect the other components of the project. A main issue I found was that the "oldObj" and "newObj" displays on the interaction.js canvas were no where close to the letter they were supposed to display. After a lot of trial and error I fixed this by having manual return of the old and new objects at less than 10 and greater than 90 percent.



 Each of my letters is composed of a rectangle and between one and three lines that I move around to form each letter.

### My 16 parameters per letter:

#### Rectangle Transform Parameters
  * `rect_posx` : Position of the rectangle on the X axis
  * `rect_posy` : Position of the rectangle on the Y axis
  * `rect_xscale` : Scale of the rectangle on the X axis
  * `rect_xscale` : Scale of the rectangle on the Y axis

####   Line One

  * `lineA_x1` : Position of the X1 parameter of line "A"
  * `lineA_y1` : Position of the Y1 parameter of line "A"
  * `lineA_x2` : Position of the X2 parameter of line "A"
  * `lineA_y2` : Position of the Y2 parameter of line "A"


####   Line Two

  * `lineB_x1` : Position of the X1 parameter of line "B"
  * `lineB_y1` : Position of the Y1 parameter of line "B"
  * `lineB_x2` : Position of the X2 parameter of line "B"
  * `lineB_y2` : Position of the Y2 parameter of line "B"


####   Line Three
  * `lineC_x1` : Position of the X1 parameter of line "C"
  * `lineC_y1` : Position of the Y1 parameter of line "C"
  * `lineC_x2` : Position of the X2 parameter of line "C"
  * `lineC_y2` : Position of the Y2 parameter of line "C"
