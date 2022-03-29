## MDDN 242 2022 Assignment 2

Part 1: Initial Ideas
My letters are made up of three rectangles. The size and proportion of the darkest/largest rectangle is fixed, and essentially acts as a 4 x 3 grid (each square being 50 x 50px) for the positions of the second and third rectangles. These rectangles are controlled by four parameters per rectangle; a total of eight parameters per letter.

The eight parameters per letter:
* `R2posX` : X position of the second rectangle relative to the first one
* `R2posY` : Y position of the second rectangle relative to the first one
* `Rheight2` : height of the second rectangle
* `Rwidth2` : width of the second rectangle

* `R3posX` : X position of the third rectangle relative to the first one
* `R3posY` : Y position of the third rectangle relative to the first one
* `Rheight3` : height of the third rectangle
* `Rwidth3` : width of the third rectangle

These parameters should be adjusted in "50's" according to the first rectangle grid, and shouldn't exceed the proportions of the first rectangle. Currently the rectMode(CENTER);, however if I do stick with this idea in the future I think I'd change that so the positioning of the second and third rectangles is more consistent with the grid as I'm having to adjust the position in "25's" and the proportions in "50's" - not that it's that complicated but I can sense a small headache in my future if I keep it this way.

I think if I do stick with this idea I'd like to do a lot of development and make it more abstract and interesting; but for now this was a good way to get familiar with the code etc., so I'm not too mad at it. :))
