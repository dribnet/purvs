## MDDN 242 2022 Assignment 2

Started playing around with the framework today for Project 2, messing with some ideas to see what I would like my letters to look like. After a little bit of testing I landed on using some basic rectangles, combining them together to make the letters A, B, and C. I also really liked the example of "Type Me, Type Me Not", and how that uses only two arcs to draw every letter. I am thinking about doing a similar thing, however only using two rectangles instead. I think it will provide a few creative challenges about how to draw certain letter which will be fun to solve. Adding in the rounded corners to each of the rectangles made a huge difference and I really like how it looks. I will need to add some more parameters, such as a width and height compared to just a size, but for now I am happy with where I am heading. 

The parameters per letter:
  * `size` : size of the second rectangle
  * `offsetx` : x offset of the second rectangle relative to the first one
  * `offsety` : y offset of the second rectangle relative to the first one
  * `corner1` : how curved is the first corner
  * `corner2` : how curved is the second corner
  * `corner3` : how curved is the third corner
  * `corner4` : how curved is the fourth corner
