## Assignment 1 - MDDN 242 - Creative Coding 2018

### Super Clock Land

---

A retro-style floating island scene that reacts to the current time.

---

#### Changes:
+ Got the ocean effect to a point I'm happy with for now
+ Added an FPS counter to keep an eye on that nonsense
+ Pulled the framerate in runner.js back to 30. Hopefully that's not gonna be an issue
+ Was using the wrong constants for the faux-shader, fixed that.
+ Went and accidentally committed a bunch of IDE files, cursing my bloodline for a thousand years.

#### Current Issues:
+ Not really a clock.
+ Framerate is EXTREMELY fragile. Will need to take care not to ruin it
+ Ocean currently does not use palette swapping scheme, though *technically* is still within the limitations of the SGB

#### To Do:
+ Current vision is a floating island in the Super Game Boy style I am fond of
+ Further refinement of water effect. Making the shimmer fade in with particles that vanish at full white would probably do the trick
+ Start actually implementing the scene
+ Nail down the colours + implement palette tiles

#### Notes:
+ Selective palette swapping could avoid the biggest issues with this. I should also look into taking advantage of transparency features
+ Resolution could be lowered further if need be

