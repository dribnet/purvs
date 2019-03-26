## PS2 MDDN 242 2019

For my first experiment at making some letters I was inspired by our first clock project and created some letters inspired by a digital clock. 

Each letter has six fixed dots which can have lines between them to make different letters. I made seven parameters, that function like booleans (1 for true, 0 for false), to tell decide whether a letter needs a line between two of the dots. The drawLetter function then runs if statements to test whether each parameter is true and then draws a line between the points if it is true. 

The parameters are:
  * `p1p2`: Between top left and top right
  * `p3p4`: Between mid left and mid right
  * `p5p6`: Between bottom left and bottom right
  * `p1p3`: Between top left and mid left
  * `p2p4`: Between top right and mid right
  * `p3p6`: Between mid left and bottom left
  * `p4p6`: Between mid right and bottom right

