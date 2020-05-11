## MDDN 242 2020 Assignment 2

I've added in the interpolation feature to my code, and tested how some of the letters transitioned. Some of them worked great, and others didn't work that well. I tried to fix as many I could, but some funny transtions were solely due to the arc start and stop points. Which I couldn't really reverse or change as it would completely mess up my letters. 
The way around this was a bit of acceptance but also changing some of the arc sizes so it's not changing too dramatically. But I am quite happy with my transitions, they have an element of unpredictability which I am a fan of, since my alphabet has a similar vibe.

I also produced a symbol, I decided to make it small to really seperate it from the rest of the letters/numbers and so it couldn't be accidentally mistaken for either.

I just played around with the stroke on the arc, decided on PIE at the moment, it gives a fuller look. I also played with stroke weight to try dampen the contrast. I am a fan of the smaller stroke but I still feel that I like the stroke too much to get rid of it completely.

The parameters per letter:
  offsetx - the x offset of the letter components
  offsety - the y offset of the letter components
  triangleX1 - first x co-ordinate of the triangle
  triangleY1 - first y co-ordinate of the triangle
  triangleX2 - second x co-ordinate of the triangle
  triangleY2 - second y co-ordinate of the triangle
  triangleX3 - third x co-ordinate of the triangle
  triangleY3 - third y co-ordinate of the triangle
  arcSizeX - arc length on the x axis
  arcSizeY - arc length on the y axis
  arcStart - beginning of the arc in degrees
  arcEnd - end of the arc in degrees
