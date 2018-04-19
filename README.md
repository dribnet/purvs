## PS2 MDDN 242 2018
 
 Currently my 10 variable per letter are:
  - vertX: X position of initial start of the line(anchor point)
  - vertY: Y position of initial start of the line(anchor point)
  - ctrlPx: X position of the control point for vertX
  - ctrlPy: Y position of the control point for vertY
  - vertX2: X position of the end point of the line(anchor point)
  - vertY2: Y position of the end point of the line(anchor point)
Added:
  - ctrlPx2: X position of the control point for the second curve
  - ctrlPy2: Y position of the control point for the second curve
  - vertX3: X position of the end point of the second curve(anchor point)
  - vertY3: Y position of the end point of the second curve(anchor point)

  Confused by how to fix the glitching animation, strokeCaps don't seem to affect the sharp edges that the control handles create. I then tried creating a change in opacity through making the stroke colour of the line change to the colour of the rect so during transition the line would become feint enough to not notice the glitch but that came with errors which for me was confusing since my code 

  var c = color(50,50,50) and then added the variable to my stroke(c). Unsure as to why it gave errors. Probably something small that i'm missing.

  Decided to add some comments to my draw_letters to hopefully make it less confusing because it was confusing for me to figure out.