## PS2 MDDN 242 2019

## AURELION

Each of my letters is composed of three arcs and a line. The position of each arc is determined by the size of its radius and will offset it from the center depending on the size of the radius. The smaller the radius, the closer the ellipse is to the center.
I wanted my font to have a unified design so many of the letters have similar parameters such as 'E' & 'F', 'U' & 'V' & 'W', '2' & '5' & '6' and many more.

The eleven parameters per letter:
  * `size` : radius of the top arc
  * `size2` : radius of the middle arc
  * `size3` : radius of the bottom arc
  * `arcStart1` : the start angle of the first arc
  * `arcEnd1` : the end angle of the first arc
  * `arcStart2` : the start angle of the second arc
  * `arcEnd2` : the end angle of the second arc
  * `arcStart3` : the start angle of the third arc
  * `arcEnd3` : the end angle of the third arc
  * `lineX` : the x co-ord of the double line
  * `offsetX` : offset all arcs by amount in x direction


Process:

I initially wanted to create a design with ellipses and arcs. I didn't want to have too many parameters. Instead of having a separate position and size parameter for each ellipse, I changed the position of each ellipse to depend on the size of the arc. When at the smallest possible size, the ellipse would be at a center axis and would diverge away from the center axis when the size is larger. I found that only having those parameters was too tricky to create all alphabets so I created a new parameter to offset the entire shape but only in the x-axis.

For this font I was inspired by art deco styles and added an extra spine to each letter with the option to remove it through a boolean. I ended up removing the boolean to keep a more unified design for all the letters. The spine would also be there as an anchor during the interpolation and will barely change between letters.

The colours of the font were also inspired by the art deco style and each letter has a base dark gold colour with a lighter gold highlight to create a 3d effect and a almost black background to contrast against.

Throughout the alphabet, I created some 'set' of letters which included almost the exact same parameter values possibly mirrored or had the exact same values on different arcs. Some 'sets' are:
{C,D}, {E,F,G}, {H,M,N}, {O,Q}, {U,V,W} and etc... I did this to keep a unified design system.

My unknown symbol isn't a regular '?' symbol but rather just a symbol with all 'active' arc parameters to be able to show the transition from this neutral letter to any other letter which might not use all arcs actively. I also liked how between interpolations it looked like it was 'locking' a letter.

For my interpolation I had to change all the arc angle values to positive values and change the arc end angle to always be large than its respective start angle, to create a smoother transition between letters. The interaction would initially sometimes loop the arcs once or twice between letters because the arc values given into the map weren't consistent and would range from negative numbers to very large positive numbers. I had to increase some end arc angles since sometimes an arc would decrease to a 0 degree angle then reloop back to a 359 degree angle and looked very jarring.
