## MDDN 242 2022 Assignment 2

## Honey BZ - Final Submission

### Overview

Honey BZ is designed to be a bubbly, fun, bee themed font that can be used for large title texts. Its inspiration came from CGP Greys ["Hexagons are the Bestagons"](https://www.youtube.com/watch?v=thOifuHs6eY) video which inspired a limitation for my font, that it must be made using hexagons. Through the design process there were a many challenges to using Hexagons, such as intricate letters needing more detail, where to lay out the hexagons to create the letters and the nature of hexagons not being able to create straight lines. 

### Visuals

The visuals of the font are important, I wanted it to feel like balloon fonts, except with hexagons. This meant shine, it meant thick lettering and it meant large lettering. I used these three design principals to lead me to the final design of my shiny honeycomb based design. To differentiate my numbers from my letters, the bee was added. No numbers contain a bee, so if letters that look similar to a number is displayed you are able to tell if it is a 5 or an S by looking at the bee.

### Interpolation

The interpolation was considered in my design from the very first drafts, I knew that it was going to be important to take add polish to my otherwise relatively simple font. I used a method called staggering for my interpolation where the animations start time and length for each block are determined by a noise function, creating the appearance of random blocks animating in at different times which gives a playful and polished look. The bee was not planned from the beginning but still got an flying in and flying out animation when it is displayed.

The three parameters per letter:
  * `visible` : 14 length array of numbers denoting the visibility of each of the hexagons
  * `beeX` : The x position of the bee, 0 if bee is not visible
  * `beeY`" The y position of the bee, 0 if the bee is not visible