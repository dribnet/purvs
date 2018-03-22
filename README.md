## Assignment 1 - MDDN 242 - Creative Coding II 2018

### Super Clock Land

---

A retro-style floating island scene that reacts to the current time. Adhering roughly to the capabilities of the Super Game Boy, an add-on peripheral for the Super Nintendo.

---

#### Changes:
+ Added the day/night cycle
+ Murdered the framerate

#### Current Issues:
+ Probably entirely unsolvable inconsistency in behaviour between browsers and devices
+ Currently there's nothing to accommodate particle drawing being ordered correctly. I'll probably just use the order of their starting position to avoid overhead.
+ Currently nothing to accommodate stuff being drawn for the underside of the island

#### To Do:
+ Add something for the underside of the island
+ Add some default palette information for the middle of the island to prevent flickering blue squares, as aesthetic as they are
+ Implement the underside of the island
+ Add a moon maybe
+ Implement particles
+ add alarm timer red-fade palette swapping
+ increase alarm flash speed to be more alarming

#### Notes:
+ Ocean does not use palette swapping scheme, though *technically* is still within the limitations of the SGB. That per-pixel function was simply never used in any commercial game.