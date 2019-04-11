## PS2 MDDN 242 2019

Interpolation


I integrated my alphabet in to the interpolation code, adding the 10 parameters to the interpolate_letter function. As the pale blue square is fixed, it is just the smaller, darker blue squares that are animating. I am reasonably happy with how the animations look so I don't think I'll be changing anything.

The ten parameters are:
  * `primary_size` : diameter of the primary and fourth rectangles
  * `secondary_size` : diameter of the second and third rectangles
  * `prim_offsetx` : x offset of the primary rectangle relative to the first one
  * `prim_offsety` : y offset of the primary rectangle relative to the first one
  * `sec_offsetx` : x offset of the secondary rectangle relative to the first one
  * `sec_offsety` : y offset of the secondary rectangle relative to the first one
  * `third_offsetx` : x offset of the third rectangle relative to the first one
  * `third_offsety` : y offset of the third rectangle relative to the first one
  * `fourth_offsetx` : x offset of the fourth rectangle relative to the first one
  * `fourth_offsety` : y offset of the fourth rectangle relative to the first one

