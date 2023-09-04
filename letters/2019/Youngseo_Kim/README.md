## PS2 MDDN 242 2019

The name of my font is 'MONGFONT' which came from my nickname 'Mongsta'.

I have chosen the swap words such as 'POSITIVE', 'ILOVEYOU', 'BIRTHDAY' that can make me happy.

The main design concept of my alphabet is 'Autumn'. New Zealand is located in the southern hemisphere and has opposite seasons of South Korea which is my home country. South Korea is finishing the cold winter and it is springing but New Zealand is now entering autumn. The Autumn of April is so amazing because it is first experience of my life. So I concentrated on color combinations of the shapes and the background to express the 'Autumn'. 

As I used the super long code on the last 'Super Mario' clock assignment, I wanted to use as few parameters as possible to make my own alphabet. So, I tried to make all of the alphabet only using one arc and one triangle. It was hard to find the start point and end point of arc using 'PI'. Because 0 and TWO_PI look like same position but it has significant difference in Interpolation. The unique point of my font is 'Numbers'. Because I didn't want to make numbers in same way with one arc and one triangle, I made unique clock shape with two arcs to express numbers.

Each of my letters is composed with two Arc and one Triangle. 
1) The size of the first circle is fixed, but the start point and the end point of the first circle is controlled by two parameters.
2) The size of the second circle is fixed, but the start point and the end point of the second circle is controlled by two parameters.
2) Three point of the triangle is controlled by six parameters.

The ten parameters per letter:
  * `arcS` : angle to start the arc, specified in radians of the first circle
  * `arcE` : angle to stop the arc, specified in radians of the first circle
  * `arc2S` : angle to start the arc, specified in radians of the second circle
  * `arc2E` : angle to stop the arc, specified in radians of the second circle
  * `movetriX1` : X1 offset of the triangle relative to the posX
  * `triX1toX2` : X2 offset of the triangle relative to the posX
  * `triX1toX3` : X3 offset of the triangle relative to the posX
  * `movetriY1` : Y1 offset of the triangle relative to the posY
  * `triY1toY2` : Y2 offset of the triangle relative to the posY
  * `triY1toY3` : Y3 offset of the triangle relative to the posY

