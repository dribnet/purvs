## Assignment 1 - MDDN 242 - Creative Coding II 2018

### Super Clock Land

---

A retro-style floating island scene that reacts to the current time. Adhering roughly to the capabilities of the Super Game Boy, an add-on peripheral for the Super Nintendo.

---

#### Changes:
+ Added rough implementation of palette tile functionality

#### Current Issues:
+ Not really a clock.
+ Ocean currently does not use palette swapping scheme, though *technically* is still within the limitations of the SGB
+ No palettes yet
+ Antialiasing will throw off the palette swap, may be fixable by flooring to nearest valid grey shade

#### To Do:
+ Current vision is a floating island in the Super Game Boy style I am fond of
+ Further refinement of water effect. Making the shimmer fade in with particles that vanish at full white would probably do the trick
+ Start actually implementing the scene
+ Nail down the colours + implement palette tiles

#### Notes:
+ Selective palette swapping could avoid the biggest issues with this. I should also look into taking advantage of transparency features
+ Resolution could be lowered further if need be

