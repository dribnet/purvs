## MDDN 242 2022 Assignment 2
--------------------------------------------------------------------
README
--------------------------------------------------------------------

After some quite heavy reworking and rethinking of my code and concept, I have finally come to a point where I can knuckle down and get my letters done (tomorrows job!).

As I stated last time, my concept has changed. Now my design goals / challenges are to:
- Confine all of my letter within a rounded square rectangle
- Use a maximum of three rectangles of the same colour within the rounded rectangle to create my letters
- Keep a somewhat "70s Title Card" style to each letter (as best I can)

With these new challenges in mind, I got to work sketching out each of my letter on some papers to get a rough idea about how each letter could look. I got most of them done to a good level, however I had some trouble with a few letters in particular; "S","G", "W" (to name a few). I'll have to work on those some more.

After that, I got to work refactoring my code to work with these new constraints, including adding a third rectangle to use and adding new parameters for each of the individual rectangles so I could change them as I saw fit (see below for the list). Some work will need to be done to make everything a little more readable and efficient, but for now it will do. The main hassle was fixing the editor up and getting it to a usable state with my HUGE list of parameters, but after some work I managed to get everything working as I wanted. Now I can easily create new letters, which will be my main goal now. I just need to get a rough version of each letter finished, then I can move onto polish and make the interpolation look nice.

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
