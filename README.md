## PS2 MDDN 242 2018

Final Statement


In my font, each letter is composed with four triangles. All this triangles are in green tone colour and with opacity difference in them. When these triangles overlying each other, there will be a new colour("new triangle"). My idea is inspired from paper crane, so I use the elements such as crane(nature) and triangle(shape). I want my letters have a style which is natural, fresh and simple. According to that, I choose light green and light blue to be the colour in my font. I can make my font better if I can find out a way to create more animation which are relate to paper folding. Also, if I can put more parameters, I want to use "scale" parameter in all my triangles so that I can create a more readable shape for my letter.

critique the design. What would you do to make it better? what was difficult about making it?
****************
experiment 1:

This is my original style. The triangles are in dark green and background colour is silver. I didn't add opacity in my letters.

****************
experiment 2:

tried four different background colours:

const colorBack    = "#e3eded"; // light blue
const colorBack    = "#e6f0e1"; // light green
const colorBack    = "#fff4f4"; // light pink
const colorBack    = "#f3fafc"; // light blue2 (currently use)

I changed my colour in green tone, with light blue at the back. To create a fresh and natural style.

****************
update: Interaction and Exhibition

colour:
	const colorBack   = "#f5f4f7";//sliver rgb(245, 244, 247)

	triangle (1):
	fill(53, 124, 59, 180);

	triangle (2):
	fill(122, 188, 166, 150);

	triangle (3):
	fill(122, 188, 130, 150);

	triangle (4):
	fill(61, 112, 10, 100);
****************
My idea:

Inspired by paper crane, I decided to use four different triangles to constitute my letter. I want my letters have a style which is natural, fresh and simplicity.

****************



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


