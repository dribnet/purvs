## PS2 MDDN 242 2018

For my interaction I wanted to give a clue to how the letters were changing. To me the most important part of my letters is the square that moves, it has a drastic effect on the form. I thought that if I change the colours instantly, place the crosses at the end and then interpolate the center square inbetween. This way I would effectively be able to show how the letters are formed in an interesting way.
The Nine parameters per letter
_______________________________

* `topFill` : Fill for top triangle
* `rightFill` : Fill for right triangle
* `bottomFill` : Fill for bottom triangle
* `leftFill` : Fill for left triangle
* `SquareFill` : Fill for Square (usually white but colour is more flexable than booleans)
* `quadHorozontal` : Squares position on X axis relative to where the letter is drawn
* `quadVerticle` : Squares position on Y axis relative to where the letter is drawn

The two new parameters:
* `strokeUp` : Stroke colour from right bottom to left top
* `strokeDown` : Stroke colour from right top to left bottom

Note: It would make a bit more sense to swap the stroke names but I don't see much point in bothering to change them at the moment.