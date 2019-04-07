## PS2 MDDN 242 2019

Revising Alphabet


I found the first alphabet could be quite hard to read, so I created a fill for the rectangles to block out the main white square and create a stronger visual impact. I also had to edit some of the placements of the rects as this version is less abstract than the previous and doesn't suit the same positioning. Most letters are able to keep within the diameter of the main rect, though in some cases (t, y, 1, and ?) there is some overlap so as to have a proportionate, readable letter. I changed to a monochromatic blue colour scheme as I just thought it looked a bit nicer. The basic principles are still the same though, with the main square staying in the same place and four squares moving around forming the letters. I added a fourth square so that the x could fit the style better. The third square shares the size parameter with the second square, and the fourth with the primary, so only seperate x and y coordinates are needed.

There are between four to ten parameters per letter:
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

