## PS2 MDDN 242 2018

Coming up with a full alphabet prooved difficult for the minimal set of parameters I started with. I thought hard to think of solutions that would help create letters I struggled with without stacking on too many more variables. My solution was to add only two more parameters, two colourable 45 degree lines though the middle of the letter. This allowed me to make use of negetive space as well as open up just the right amount of possibilities. I found this was the best way to finish my alphabet without obscuring the style of the design

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