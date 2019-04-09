## PS2 MDDN 242 2019

Elena Lee PS2 09/04/19

I have finished creating all my letters and numbers, and am quite happy with how they've turned out. I might still do a few touch ups.

To do this I added three parameters for the rotation of each arc, and two parameters for the translation of each of them.
When I added the parameters to introduce rotation to my font I changed the angle mode to degrees, which is when I found out why my editor.js file wasn't working properly. After a bit of playing around with the placement of the angle mode, and changing all my arcs into degrees, I managed to make it work, and this let me create different letters much more easily.
I also removed several parameters I no longer needed. Some of my offset parameters overlap with my new translate parameters, but I've decided to keep them in rather than remove them and have to change my code.
Overall my font is a bit playful, fun, and still clear enough to read.
Rather than making each letter a tree with different branches, I removed the "tree trunk" rectangle and created my font to follow the English alphabet.
I'm still deciding on a name for it.


The sixteen parameters per letter:

  * `top_offsetx` : x offset of the top arc
  * `offsety` : y offset of the second circle relative to the first one
  *  'top_size': , size of top arc
  *  'middle_size': , size of middle arc
  *  'bottom_size': , size of bottom arc
  *  'middle_offset', offset of the middle arc/branch
  *  'bottom_offsetx', x offset of the bottom arc
  * 'rotate_top', degrees of rotation for top arc
  * 'rotate_bottom', degrees of rotation for bottom arc
  * 'rotate_middle', degrees of rotation for top arc
  * 'translate_top_x', x translate value for top arc
  * 'translate_top_y', y translate value for top arc
  * 'translate_bottom_x', x translate value for bottom arc
  * 'translate_bottom_y', y translate value for bottom arc
  * 'translate_middle_x', x translate value for middle arc
  * 'translate_middle_y', y translate value for middle arc
