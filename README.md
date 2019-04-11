## PS2 MDDN 242 2019

Overall I am happy with the final result of my project. The final aesthetic is not quite what I had envisioned when I started this project as I made myself decide between being somewhat faithful to the precedent or pursuing usability and functionality. In the end I chose usability as I decided this made the most sense for the exhibition part of the project. Issues I encountered in the design process meant that workarounds had to be made, such as the manual return of the old and new objects at less than 10 and greater than 90 percent interpolation marks respectively. This particular "solution" was to remedy the issue that the old and new letter displays in the interpolation were not the fully formed letter. I was reluctant to leave this fix as it made quite a jump from the formed character to the 10 and from the 90 percent interpolation stages. I believe a lot of my problems were caused by me moving the rectangles origin to the center and basing transforms of that center.

 If I were to redo this project I would, instead of using three separate lines I would use the vertex shape tool to be able to create the same shapes I was after throughout the project with fewer named parameters. This would be my main improvement as all adjustments to the form of a letter was tedious with 4 parameters per line. I think if I were to have done this for the current project I would have avoided a lot of troubleshooting as the transform of a vertex line instead of three separate lines may interpolate better.


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
