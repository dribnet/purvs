## Assignment 1 - MDDN 242 - Creative Coding 2018

### Flaming Clock

--------------------------------------------------

A digital display clock where the numbers are emitting flaming particles.

---

#### Changes:
+ Threw some placeholder greyscale on.
+ Tidied up the particle movement and lifespans.
+ Fixed the density/framerate issues a bit.
+ Added placeholder text body.

#### Current Issues:
+ Framerate still suffers, no margin to do anything else with.
+ Placeholder text body looks pretty bad.
+ Placeholder text code is kind of a mess too.
+ Particles tend to obscure values, readability suffers.
    + Random singular particles aren't working out at all in that regard.
+ It's kinda boring.
+ Lots of magic numbers in code that need parameterising.
+ Overall, clock design is much too noisy.

#### To Do:
+ If I continue with this:
    + Replace text body drawing code entirely with a seven-segment style display
    + Work out a better particle style that would fit that display:
        + possibly a series of long trails per-segment.
    + If the load can be lightened to improve framerate further,
        investigate background options to make this more interesting to look at.
    + Work out better colour scheme.
+ Otherwise:
    + Plan out some more clock concepts to try instead / in tandem.
+ Fix magic numbers.

#### Notes:
+ Currently there are around 450-550 live particles at any given point. The seven-segment display should have fewer, but up to 700.

---