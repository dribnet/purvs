## PS2 MDDN 242 2019 - RazerArk

The basic idea of my font 'RazerArk' was to make a very sharp and geometric font that looked readable and nice. I decided to use two shades of red for the colour of my font to give the font a more chaotic mood. The chaotic mood is also showed through how I have done the interpolation for my font, it flies outward and back into place throughout the animation.

The sketch file shows my first idea of what I wanted my font to look like and as you can see I didnt make a lot of changes to the idea other than stretching it out to fit into the bounding box better. 

Each letter is composed with four triangles and each triangle is controlled by 6 parameters, 2 for each pont.


An example of the code for one triangle:

  * `offsetx1 tri 1` : x offset of the first triangle point relative to the center
  * `offsety1 tri 1` : y offset of the first triangle point relative to the center
  * `offsetx2 tri 1` : x offset of the second triangle point relative to the center
  * `offsety2 tri 1` : y offset of the second triangle point relative to the center
  * `offsetx3 tri 1` : x offset of the third triangle point relative to the center
  * `offsety3 tri 1` : y offset of the third triangle point relative to the center

  this is the same for the other 3 triangles with different offset names 

  This font required 24 parameters for each letter which is a very large amount but this didn't make it too difficult to create due to the editor page. The reason for me having such a large amount of parameters was due to the fact that I had to provide the X & Y values for each point of every triangle.

  The name RazerArc just came to me once I had finished the font and it just seemed to fit well as the letters are sharp like a razer. The 'Arc' just comes from the fact that used triangles and arks typically have triangular shapes to them on the outside.
 
  I am very happy with the final outcome of my RazerArk font. I think it looks very unique and could be the kind of font used by a metal band of some description due to the sharp edges and more 'ragey' colours.

