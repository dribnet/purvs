## PS2 MDDN 242 2019

Elena Lee PS2 09/04/19


When I began this problem set I planned to create a series of "trees", and the branches of these trees would change to depict each letter/number. After working a bit on this idea, I decided to remove the "tree trunk" rectangle in favour of a simpler design. 

I used three arcs to create my font, and sixteen parameters in total. These parameters covered the size of each arc, translation values of each arc, rotation values of each arc, and offsets for each of them. These offset parameters do overlap with the translation parameters in some places, but I decided to keep them in as they work together with the translation parameters. In addition removing them would mean I would have to change my code quite a bit.

Initally I did not have parameters for the rotation of the arcs, and as a result I struggled quite a lot with creating the different letters and numbers. Once I introduced these parameters it made it a lot easier to arrange the arcs to create the different characters. When I did create these parameters I changed the angle mode to degrees, which caused some problems with my existing code, and I had to change some elements I already had which were in radians, but after some fiddling I figured it out, and it became much easier to work with. 


In regards to the colours, I decided to keep a similar scheme to problem set 1, and used complementary orange and two slightly different purples for the font.  I decided on using a dark grey for the background colours so that the font stands out. The vibrancy of the colours against the dark background creates a fun and playful mood, which is what I was aiming for. Using arcs, with their straight and rounded edges, and the arrangement of them also helps to create a somewhat futuristic appearance. 

For my swap words I decided on "DISTRACT" - the font name, "FUNFUNKY", to describe my font, "ELENALEE", and "09042019". 

I decided to call the font "DISTRACT", for its playful and fun appearance. Overall I am happy with how it turned out in the end, that it has unique character and stil remains clear and legible. 


The sixteen parameters I used per letter/number:

  * 'top_offsetx' : x offset of the top arc
  * 'offsety' : y offset 
  *  'top_size': , size of top arc
  *  'middle_size': , size of middle arc
  *  'bottom_size': , size of bottom arc
  *  'middle_offset', offset of the middle arc/branch
  *  'bottom_offsetx', x offset of the bottom arc
  * 'rotate_top', degrees of rotation for top arc
  * 'rotate_bottom', degrees of rotation for bottom arc
  * 'rotate_middle', degrees of rotation for top arc
  * 'translate_top_x', x translate value for top arc
  * 'translate_top_y', y translate value for top arc
  * 'translate_bottom_x', x translate value for bottom arc
  * 'translate_bottom_y', y translate value for bottom arc
  * 'translate_middle_x', x translate value for middle arc
  * 'translate_middle_y', y translate value for middle arc
