Title : Junk

The images used are a series of Chinese fishing boats called junks from the Qingdao region. I like these photos very much without modifications, so any altering I did via code was to accentuate on the focal point on each image.

I tried the gridding techniques out but favored the original more random pattern because I felt that it fit my intended aesthetic.


Fixes / Cleanup

  - Fixed water mask bleeding
  - Fixed antialiasing problem

Added:

  + Made foreground junk pixels larger, the desaturating the bg makes the foreground stand out more so a lower resolution can be used
  + Fine tuned primitive sizes
  + Rewrote code for the water mask to make it look more like brushstrokes
  + Calculations to desaturate the background mask to draw more attention to the foreground

  let satMod = 0.5; //saturation modifier (-1 -> 1)
  let satval = 0.3 * pix[0] + 0.6 * pix[1] + 0.1 * pix[2];

  let newR = pix[0] + satMod * (satval - pix[0]) //setting new RGB values
  let newB = pix[1] + satMod * (satval - pix[1])
  let newG = pix[2] + satMod * (satval - pix[2])

   I Was originally going to just make a greyscale filter but this allowed me to tune the desaturation to my liking

Issues / progress:

  -
