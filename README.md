## MDDN 242 2020 Assignment 2

-05/05/20-
Due to spilling coffee all over my keyboard during Monday's lecture, I had a fair bit of catching up to do on a few classes. I am in the process of generating ideas for my alaphabet. I changed around colours and stroke weight as a test commit, using Github Desktop.

-06/05/20-
I was messing around with Bezier curves initally, trying to get them to form into letters, I was sucessful in creating an uppercase A, but realised at that point it was going to be too complicated to use these for the whole project. I've since moved to a much simpler style, using an ellipse and a rect to create minimal letter forms. I'll use these two shapes, overlapping and in various sizes, to create my alphabet.

-06/05/20-
I've transferred my code into draw_letters.js and am now working on configuring each letter in letters.js

So far my parameters include:
  "size"    = size of ellipse (will change to with and height)
  "offsetx" = x position offset from origin
  "offsety" = y position offset from origin
  "rectL"   = length of rectangle
  "rectW"   = height of rectangle
  "radi"    = radius of rectangle corners.
