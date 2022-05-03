## MDDN 242 2022 Assignment 2
--------------------------------------------------------------------
README
--------------------------------------------------------------------

Be busy with life for the past week so spent today catching up and finally getting a base down for each of my letters. Not all of them are final and there are a couple I want to rethink (mainly the K), however it's great to have them all somewhat finished. Tonight I will catch up with the interpolation session from last week as I was busy at the time, and then I can spend tomorrow polishing things up before the hand in.

Update: added in the base for the interpolation. Works pretty well already, however there is a slight issue that I plan to address tomorrow. Because I don't use every rect for each letter, when it changes from (or to) a letter that doesn't use the full 3 rectangles the extra one goes off into the distance (because by default when I don't use a rect I have it set to 0, 0 pos). To fix this I will probably just make the location for the unused rects to be in the center of the shape.

Also added the numbers in and I am quite happy with them already, I also like the special character which I chose to be a "Space".

My final job before hand in will be to refine each letter and polish them up, polish up the interpolation, and finally pick a colour scheme I like. To be honest I am already quite fond of the colours I already picked out at the start when making my sketch, so this may not change.

--------------------------------------------------------------------
Parameters:
--------------------------------------------------------------------

  * `width1` : width of the first rectangle
  * `height1` : height of the first rectangle
  * `offsetX1` : x offset of the first rectangle
  * `offsetY1` : y offset of the first rectangle
  * `width2` : width of the second rectangle
  * `height2` : height of the second rectangle
  * `offsetX2` : x offset of the second rectangle
  * `offsetY2` : y offset of the second rectangle
  * `width3` : width of the third rectangle
  * `height3` : height of the third rectangle
  * `offsetX3` : x offset of the third rectangle
  * `offsetY3` : y offset of the third rectangle
  * `cornerA1` : how curved is the first corner of rectangle 2
  * `cornerA2` : how curved is the second corner of rectangle 2
  * `cornerA3` : how curved is the third corner of rectangle 2
  * `cornerA4` : how curved is the fourth corner of rectangle 2
  * `cornerB1` : how curved is the first corner of rectangle 3
  * `cornerB2` : how curved is the second corner of rectangle 3
  * `cornerB3` : how curved is the third corner of rectangle 3
  * `cornerB4` : how curved is the fourth corner of rectangle 3

--------------------------------------------------------------------
