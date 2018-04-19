Constell

The inspiration for my alphabet are the stars and constellations. I wanted to create something similar to how maps and images of the constellations looked.

At the very start of my project I tried to see if I could make letters with only a small amount of lines. This gave me the idea to use points, which would also be fairly parameter efficient. From there I decided to put ellipses where the points where and I enjoyed how it looked and thought about how it would look once we animated the letters.

Having only four points was quite challenging at times when designing how the letters would look. There were a few cases where I had to come back to a letter because I didn't know how to make it without it looking the same as another letter. However I didn't want to have any more than 8 parameters. I like the idea of making a whole alphabet out of a small set number of parameters.

The animation between letters was a last minute addition, but I'm glad I changed it. It feels like it moves with purpose whereas before it felt too basic and not as satisfying as I thought it could be. As soon as I got my point and line look for my letters I wanted my animation to look good with this aesthetic. To achieve this I made it so that only one point (x and y) moves at a time. Each point gets 25% of the transition to move since there are 4 points.

My parameters per letter are:
* x : x of position one
* y : y of position one
* x2 : x of position two
* y2 : y of position two
* x3 : x of position three
* y3 : y of position three
* x4 : x of position four
* y4 : y of position four 