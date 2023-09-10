17.2.MDDN342 PS3

I intend to do a cloud pattern that random clouds surround a circle, and in that circle there are colorful and different clouds.

For the iterative pattern, I use a single cloud element to make a random cloud group, and in the middle I use another cloud pattern to make a colorful and dynamic group. Technically, I use blendMode to add colors for white stroke, use lerpColor to make a color transition for the middle clouds and I use noise to move the clouds.

For the generative landscape, I use the clouds pattern to make the sky group from big to small, and I use bezier curve to create the birds, and I use a sin wave example from p5.js to create the moving waves, finally, I create some islands by using ellipse and point. All objects use random position and size.