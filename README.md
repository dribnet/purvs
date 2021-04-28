## MDDN 242 2021 Assignment 2

### Thu 29 Apr

#### Lumina

Lumina is inspired by constellations. The letters are formed from a series of points around a circle that are connected by a single, continuous line. The "stars" that form the constellation are made from layers of ellipses with different alpha to give them a glow effect.

I have used a small amount of randomness in order to generate the positions of the "stars" in the background. However, the seed for the randomness is set for each letter, so the background stars for a particular letter are the same each time the letter is drawn.

The parameters I used are:
- "point1" - the first point in the sequence.
- "point2" - the second point in the sequence.
- "point3" - the third point in the sequence.
- "point4" - the fourth point in the sequence.
- "point5" - the fifth point in the sequence.
- "randomSeed" - the seed for the random functions used to generate the positions of the background stars.
- "starsAlpha" - the alpha of the background stars. Used to smooth the interpolation between the random seed.
