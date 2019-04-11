## PS2 MDDN 242 2019

This parametric alphabet I call `Midnight` and is based off the writing and design style of a group called Tau from the video game Dawn Of War. The curves and disjointed components of each character make a futuristic, unique look compared to other alphabets. 
Each of my characters are composed from two arcs and a line. The size and position values of the arcs are predetermined depending on what the character is and are stored in the `arcSize`, `offsetX`, and `offsetY` parameters. The arc angles are determined by the two parameters `arcStart` and `arcStop` respectively. The line is created from the values stored in the `lineX1`, `lineY1`, `lineX2`, and `lineY2` parameters. 

The fourteen parameters per letter:
  * `arc1Start` : starting angle of the first arc
  * `arc1Stop` : stopping angle of the first arc
  * `arc1Size` : size (radius) of the first arc
  * `arc2Start` : starting angle of the second arc
  * `arc2Stop` : stopping angle of the second arc
  * `arc2Size` : size (radius) of the second arc
  * `offsetX1`: x offset of the first arc
  * `offsetY1`: y offset of the first arc
  * `offsetX2`: x offset of the second arc
  * `offsetY2`: y offset of the second arc
  * `lineX1`: x value of the line starting point
  * `lineY1`: y value of the line starting point
  * `lineX2`: x value of the line ending point
  * `lineY2`: y value of the line ending point

Originally I had a different design and used just 2 arcs to create my letters, however I soon realied that some characters were not possible with only 2 arcs. This resulted in me sketching out the characters that were impossible and finding that I needed a line as another component. This change in design followed the Tau design better than my initial design and enabled the disjointed style to thrive. 

Due to the 100x200 limitations of each character some of the letters are inconsistent in height. This is because some letters require arcs to be positioned side-by-side. An example of this is the letter `M`. The two arcs of width 50 each are side-by-side but as arcs are spherical (and you cannot have different heights than widths) this is the only implementation I could do that fit my theme. This results in more empty space above and below the letter than compared to other letters such as `A`.
 