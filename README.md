## PS2 MDDN 242 2019

Alphabet


I modelled the alphabet off of my initial sketch, trying to form the letters (mostly) using the negative space of the first, dark green square. This square doesn't move around, rather there are three smaller squares that move and form each letter. These three squares aren't always present, for the majority of the time it is just the main square and two moving ones. The third square shares the size parameter with the second square, so it just needs it's own x and y coordinates.

There are between four to eight parameters per letter:
  * `primary_size` : diameter of the primary rectangle
  * `secondary_size` : diameter of the second and third rectangles
  * `prim_offsetx` : x offset of the primary rectangle relative to the first one
  * `prim_offsety` : y offset of the primary rectangle relative to the first one
  * `sec_offsetx` : x offset of the secondary rectangle relative to the first one
  * `sec_offsety` : y offset of the secondary rectangle relative to the first one
  * `third_offsetx` : x offset of the third rectangle relative to the first one
  * `third_offsety` : y offset of the third rectangle relative to the first one

