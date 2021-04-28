## MDDN 242 2021 Assignment 2

### Wed 28 Apr

I modified the stars, adding a new function to draw them, that gives the stars a glow effect. I did this by layering ellipses with different alphas on top of each other with the high the alpha, the smaller the circle.

I also added stars in the background. This resulted in adding two new parameters to the letters:
- "randomSeed" sets the seed that the random functions use to generate the positions of the stars so that the positions are the same each time the same letter is drawn.
- "starsAlpha" is used to transition the random stars of one letter into the next letter so that there isn't a jarring change.
