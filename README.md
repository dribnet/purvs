## PS2 MDDN 242 2019

In the beginning of the project, I had planned to use angular shapes like triangles or quads to draw out my letters. My first idea was based on pentagrams, and each panel would light up to form a letter. I eventually found out that there was interpolation involved, and I eventually moved on to another idea. 

The new Idea was based on stained glass that would shift position to form letters and numbers, without any deformation or warping to the shape. I eventually realised that this would cause my letters to be too large for the 100 x 200 boundary so I added warping and deforming to my quads. The first idea involved four quads, which would make forming the shapes and letters easy for me, but when I finally came up with my parameters, I found that it exceeded the original limit of twenty parameters, ( I had twenty four). As I wanted to follow the constraints, I took out one of the quads, leaving me with three quads, and eighteen parameters to control it.

In this final version of my project, I have used 3 quads to draw out my letters and numbers. Each letter and number has a total of eighteen parameters each, which are used to move, warp and shrink each of the 3 quads, whose functions are listed below. The effect I was going for for this font was stained glass, the kind you would see in a cathedral or church, hence the red, blue and yellow colour scheme. The colours are also translucent, much like actual stained glass, which means certain colours which are layered on top of each other can form different shades of its base colour depending on its position. The shapes are purposely angular to replicate shattered glass shapes but still retain a mostly symmetrical shape.

Side note: I tried to customise the timing for the interpolation animations, but in the end I still preferred the default animations and timing so I left it out in the end.

The eighteen parameters per letter:


  * `pos1x` : The positions (width) of the two points of the first quad at the sides.
  * `pos2x` : The positions (width) of the two points of the second quad at the sides.
  * `pos3x` : The positions (width) of the two points of the third quad at the sides.
  * `pos1y` : The position (height) of the top point of the first quad.
  * `pos2y` : The position (height) of the bottom point of the first quad.
  * `pos3y` : The position (height) of the top point of the second quad.
  * `pos4y` : The position (height) of the bottom point of the second quad.
  * `pos5y` : The position (height) of the top point of the third quad.
  * `pos6y` : The position (height) of the bottom point of the third quad.
  * `rotatesS` : Rotation of the first quad.
  * `rotateS` : Rotation of the second quad.
  * `rotatesF` : Rotation of the third quad.
  * `translates1` : Position of the first quad at the x axis.
  * `translates2` : Position of the first quad at the y axis.
  * `translates3` : Position of the second quad at the x axis.
  * `translates4` : Position of the second quad at the y axis.
  * `translatef1` : Position of the third quad at the x axis.
  * `translatef2` : Position of the third quad at the y axis.


