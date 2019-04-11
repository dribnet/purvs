## PS2 MDDN 242 2019

Final

I wanted to create a font that was bold, fun, and blocky, while still being clear and readable. My first sketch was of a more abstract alphabet, but after finding it too hard to read the letters I modified my idea, adding fill to the rects and (mostly) confining the letters inside of the main square so that the alphabet was more legible. 
I used a monochromatic blue colour scheme, and chose to have different shades for the main square, moving rects, and background, so as to distinguish each part. The moving rects are a darker shade than the main square so that the letters forming in the square can stand out.
My final alphabet is based upon rectangles, with each letter being created inside one fixed square. The letters are spelled out using 1-4 smaller rectangles which move around and block out parts of the main square, leaving the remaining space to form the letters. Most letters are kept within the boundary of this main square, though in some cases the rectangles cross it's borders in order to either add to the shape of the letter (e.g. in letters b, d, and q), or to ensure the letter is readable and proportionate (e.g. in letters t, and y). 

These moving rectangles are controlled by these ten parameters:
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

I chose to name my font 'Old Fogey', as it is an old nickname for a conservative or 'square' person, and thought it would be a fun name for my square-ish font.