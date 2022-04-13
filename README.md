## MDDN 242 2022 Assignment 2

### 01/04/22 - CHANGING MY DESIGN A BIT

Today, I decided to change my letterforms a bit. I wasn't happy with what I had been doing previously so I went looking for some more inspiration, still around the Mondrian/Bauhaus aesthetic. I came across the image below on Pinterest and I could see a sort of F shape in it. It made me think that what my design was missing was some white squares, which are quite a main part of Mondrian art.

![Bauhaus minimalist print](https://i.pinimg.com/564x/4d/53/06/4d5306f3c8ee77fe81b5888cca29b3a2.jpg)

As a result, I have created a for loop that creates a stack of squares, the number of squares based on a variable. This means I can have lots of squares without having lots of variables. I initially had an if statement that decided if the line of squares was horizontal or vertical, dictated by a variable that was set to either 0 or 1. As I was coding, however, I found that all of the letters I was making used a vertical line, so I decided to get rid of the variable and make the line in all of the letters vertical. The second square drawn in the line is coloured blue while the rest are white.

I have got two rectangles, one red and one yellow, that have changeable heights and widths (meaning they can also be squares), and two white squares, which are sometimes hidden behind other squares or each other if they aren't needed to make the letter.

I also changed the colours to make them less default and slightly brighter and more pastel-like. I think these colours look a lot better. I have made the background grey mostly just for contrast to the letters so I might change this later, however I do quite like this colour.

The 15 parameters per letter:
  * `numLineSquares` : The number of squares to be drawn in the array
  * `lineSquaresX`: The x position of the square array
  * `lineSquaresY`: The y position of the square array
  * `rect1X`: The x position of the yellow rectangle
  * `rect1Y`: The y position of the yellow rectangle
  * `rect1Width`: The width of the yellow rectangle
  * `rect1Height`: The height of the yellow rectangle
  * `rect2X`: The x position of the red rectangle
  * `rect2Y`: The y position of the red rectangle
  * `rect2Width`: The width of the red rectangle
  * `rect2Height`: The height of the red rectangle
  * `square1X`: The x position of one of the first white squares
  * `square1Y`: The y position of the first white square
  * `square2X`: The x position of the second white square
  * `square2Y`: The y position of the second white square

I am much happier with my design now so I will continue to make the rest of the letters and numbers. There are going to be a few that will be a bit harder, particularly the wider letters as currently all of my letters are three squares wide. You can see this issue with my M.

I will also try to decrease the number of parameters I have. The current 15 is quite a few but I can see that all of my rectangles are the same width as my squares so I could make that a constant value instead, I would just have to make sure the orientation was still correct.
