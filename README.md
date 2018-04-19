## PS2 MDDN 242 2018

My idea for Boxthing was to use as minimal Parameters as possible while at the same time creating unique and readable characters. While undergoing this I came across many problems that I believe I was able to find solutions for in a unique way. 

## Reflection
If I were to further develop this I would redesign the interpolations. I had trouble figuring out how to go between colours so I did not end up getting smooth colour changes. To me, it is not the end of the world as the flickery change does help enforce the theme of the text. The characters themself however I am proud of, they have a nice and unique look and when I got to the end of the problem set was pleasantly surprised at the look of most words. Even better is that I was successful in doing this with a low amount of parameters.
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