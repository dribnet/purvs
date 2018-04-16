## PS2 MDDN 242 2018

When I put my code in alphabet file, I found that the posx and posy which were used as my postion of triangle (1), are also used as the postion of the whole letters form in the draw_letters file. Because of this, I added two new parameters to control triangle (1).

Each of my letters is composed with four triangles. The first triangle (1) will be draw first, then the other three will be draw based on the data of posx and posy. Triangle (1) and triangle (3) are controlled by 4 parameters. Then triangle (2) and triangle (4) are controlled by 3 parameters.

The 14 parameters per letter:
*sizeR1 : scale the size of triangle(1)
*sizeR3 : scale the size of triangle(3)
*offsetx1 : x offset of the triangle(1) relative to the posx
*offsety1 : y offset of the triangle(1) relative to the posy
*offsetx2 : x offset of the triangle(2) relative to the posx
*offsety2 : y offset of the triangle(2) relative to the posy
*offsetx3 : x offset of the triangle(3) relative to the posx
*offsety3 : y offset of the triangle(3) relative to the posy
*offsetx4 : x offset of the triangle(4) relative to the posx
*offsety4 : y offset of the triangle(4) relative to the posy
*tilt1 : rotation degrees for triangle(1)
*tilt2 : rotation degrees for triangle(2)
*tilt3 : rotation degrees for triangle(3)
*tilt4 : rotation degrees for triangle(4)


