## PS2 MDDN 242 2019

Each of my letters is composed of three arcs and a possible line. The position of each arc is determined by the size of its radius and will offset it from a point depending on the size of the radius. The smaller the radius, the closer the ellipse is to the center. I have left a grey outline of each ellipse at the moment as guidelines.

The twelve parameters per letter:
  * `size` : radius of the top arc
  * `size2` : radius of the middle arc
  * `size3` : radius of the bottom arc
  * `arcStart1` : the start angle of the first arc
  * `arcEnd1` : the end angle of the first arc
  * `arcStart2` : the start angle of the second arc
  * `arcEnd2` : the end angle of the second arc
  * `arcStart3` : the start angle of the third arc
  * `arcEnd3` : the end angle of the third arc
  * `lineX` : the x co-ord of the line
  * `isLine` : boolean whether the letter has the line
  * `offsetX` : offset all arcs by amount in x direction
