## PS2 MDDN 242 2019

5th 04/05

Each of my letters is composed with two Arc and one Triangle. 
1) The size of the first circle is fixed, but the start point and the end point of the first circle is controlled by two parameters.
2) The size of the second circle is fixed, but the start point and the end point of the second circle is controlled by two parameters.
2) Three point of the triangle is controlled by six parameters.

The eight parameters per letter:
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

I added the interpolation and the exhibition words.