## MDDN 242 2022 Assignment 2

(Replace this README with information about your alphabet. This is an example.)

Each of my letters is composed with two circles. The size and position of the first circle is fixed, but the location and size of the second circle is controlled by three parameters.

The three parameters per letter:
  * `size` : radius of the second circle
  * `offsetx` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one

5/5 Beziers!

-bezier design style

-made a shape editor in p5 web editor https://editor.p5js.org/verteks/sketches/_gDUaKeex
this is where I'll create letter shapes

-brought variables into draw_letters and R into letters gallery

-started experimenting with colour

Next steps : full alphabet, editor, interpolation, continue style development

7/5 Shadows!

the concept is shadows that are a little abstract but seem plausible in the shapes that create them and use a consistent style and a bit of consideration in how they are weighted. This usually means making them look a bit more like they are wrapping around the circle as if it's a sphere, with the shadow running up the wall from the bottom left. This comes a cross a little less with shapes that took more parameters to just make a legible form, though I did rework some letters.

I would have done better to find a way to put a list of precise values back into the editor to allow a consistent back-and-forth tweaking rather than reinventing the wheel whenever I go to make a change, but the p5 web editor I made helped me a little here, allowing this workflow but being more clunky.

I think these letters could still use some work; currently things are fun but ehh 60% there visual- consistency-wise. The numbers are blocky but look good and consistent. There's a few minor imperfections I want to work out but this is a little hard by design - could be due to how I've set everything up!
