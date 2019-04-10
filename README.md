## PS2 MDDN 242 2019


My alphabet is based on Runic styling (shown in image below).

![Image of Runic lettering](/blog_images/runic.jpg)

My main focus in this project was to focus on the geometry of my letters and to not use curves at all. With this in mind I began designing my alphabet. I briefly did this manually but quickly realised the editor was perfect for the system I was making. My editor progressed over multiple updates as I encountered more complex letters, starting with the original 8 parameters(params) for two lines. Next came 10 params with 8 for two lines and 2 for the rectangle's X axis position and scale. Finally the current version with 16 params with 12 for 3 lines, 4 for the rectangles X and Y position and scale. I found changing the mapping of certain elements for individual letters helpful in speeding up the design process.

As my editor became more suited for the task I have gone back and updated styling.




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
