## Assignment 1 - MDDN 242 - Creative Coding II 2018

### Super Clock Land

---

A retro-style floating island scene that reacts to the current time. Adhering roughly to the capabilities of the Super Game Boy, an add-on peripheral for the Super Nintendo.

---

#### Changes:
+ Implemented the terrain components, it remains to be seen how the performance is.

#### Current Issues:
+ Currently there's nothing to accommodate particle drawing being ordered correctly. I'll probably just use the order of their starting position to avoid overhead.

#### To Do:
+ Implement the rest of the scene
+ Implement particles
+ Implement hour & minute palette switching, make sure to tend towards fun shades like blues, purples, oranges
+ Find out how dawn and dusk can actually be differentiated, I don't know anything about the sun and it's probably fake
+ add alarm timer red-fade palette swapping
+ increase alarm flash speed to be more alarming

#### Notes:
+ Ocean currently does not use palette swapping scheme, though *technically* is still within the limitations of the SGB. That per-pixel function was simply never used in any commercial game.