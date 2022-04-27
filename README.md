## MDDN 242 2022 Assignment 2

## Numeric troubles

I've implemented all letters and numbers into my font, however I am having a problem that the number 2 is exactly the same as Z, S is the same as 5 also 0 and O. For now I have given them different border colours, now using 17 data points. I'm still not set on the color scheme and that will be done after interpolation as the two will link to create my effect. 

My inspiration for my interpolation is going to be similar to material designs layers of the same object stacking on top of each other in different colours and different lerps to create smooth good looking interpolation. 

## Hexagons 2 - Electric Boogaloo

Today was do or die for my hexagon idea, I tried making all the letters in the alphabet and keeping track of what squares were used. This resulted in far too many data points being required, however when I tried to switch to upper case lettering i found 15 data points that can be used to represent all of the numbers and letters! This process took much longer than expected however I have implemented all letters now.

![image](layout.png)

## Hexagons - The maybe not bestagons

I posted my design in the feedback channel and got some awesome interpolation ideas, however came up with to a problem realising many of the characters and numbers I would like represented won't work with the small layout I had, like b not having space for a hexagon between the holes which meant it looked like a D. I looked at increasing the size however still faced problems with 8 looking the same as a b. I spent a long time in a photo editor trying different layouts with all the numbers and letters but didn't find a solution.

## Hexagons - The Bestagons
Today I created a hexagonal design for my font, the idea came from [CGP Gray's "Hexagons are the Bestagons"](https://www.youtube.com/watch?v=thOifuHs6eY) video. I'm not sure about how it will work with interpolation and how some letters like e could be improved, so this is definitely not the final idea.

The three parameters per letter:
  * `visible` : 10 length array of numbers denoting the visibility of each of the hexagons
