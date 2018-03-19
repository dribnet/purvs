## Assignment 1 - MDDN 242 - Creative Coding II 2018

### Super Clock Land

---

A retro-style floating island scene that reacts to the current time. Adhering roughly to the capabilities of the Super Game Boy, an add-on peripheral for the Super Nintendo.

---

#### Changes:
+ Fixed the framerate issue, seemed to be some sort of cache miss with the palettes
+ Palette swapping mostly implemented, does not yet respect tile palettes
+ Crude alarm function refined
+ Added moving ball to demonstrate pixel + palette behaviour

#### Current Issues:
+ Not really a clock yet

#### To Do:
+ Start actually implementing the scene
+ Nail down the colours + implement palette tiles
+ Implement z-ordering for scene objects

#### Notes:
+ Ocean currently does not use palette swapping scheme, though *technically* is still within the limitations of the SGB. That per-pixel function was simply never used in any commercial game.