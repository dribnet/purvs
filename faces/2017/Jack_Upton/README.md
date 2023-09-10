# PS1 MDDN 342 2017

This parametric toy creates a grid of 5x3 monsters,
that have randomly generated features such as color, width, height, facetype, nose,
mouth, and horn size.

Most features are acquired via distribution.

The color scheme of each block is random, but the colors used in each scheme are not.
Using a scheme like this is better than using completely random colors, as you have more
control over the colors and can create pleasing combinations.

The eyes are obtained using a distribution to make having only 1 eye or
6 eyes a rare event.

The width and height of the monster is distributed, and affects the shape of each monster's
face.

Each face type is also acquired using a distribution, using the more unique faces more commonly
to keep up visual interest.

Each feature uses a distribution to randomize such as the horns and the nose, but each face also
has certain features which are unique to it. For example, facetype 3 only uses spikey horns, but
facetype 1 can have either spikey or normal horns. Facetype 5 only uses flat horns, but can
have either a polygonal or spherical nose. This creates interesting combinations of features
that are also unique to each facetype.

Click anywhere on the canvas to generate a new set of monsters.

Have fun!
