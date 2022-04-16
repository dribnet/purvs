## MDDN 242 2022 Assignment 2

Today I worked on adding in some more parameters to give me more control when drawing each letter. I added in parameters for changing the width / height of both the first and second rectangle, plus the functionality to change the X / Y position of not only the first rectangle but also the second one too. After updating the editor to work with these new parameters, I am now able to create letters with far more control and ease.

My next mission is to figure out how I am going to draw some of the more complex letters with my two rectangle mission statement in mind. Pretty much all letters of the alphabet I have already theorized to be possible, however there are a few that may prove challenging. Mainly, I think I will run into trouble with the letter E, F, H, M, W (among others). Using only two rectangles makes these especially hard to create, even with the added parameters. I am considering three options; either add a third rectangle in and switch my goal to include only three rectangles, switch my goal to being using only one of each primary shape (square, circle, triangle), or to use quad() to give me further control. I'll have to think about these over the next few days before continuing to work on the project. 

The parameters per letter:
  * `width1` : width of the first rectangle
  * `height1` : height of the first rectangle
  * `width2` : width of the second rectangle
  * `height2` : height of the second rectangle
  * `offsetX1` : x offset of the first rectangle
  * `offsetY1` : y offset of the first rectangle
  * `offsetX2` : x offset of the second rectangle
  * `offsetY2` : y offset of the second rectangle
  * `corner1` : how curved is the first corner
  * `corner2` : how curved is the second corner
  * `corner3` : how curved is the third corner
  * `corner4` : how curved is the fourth corner
