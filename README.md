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

  In my last commit I stated that using just one curve to create a set of letters is too challenging for the viewer to decipher what letter it is. In this iteration i've added 4 new parameters for an extra quadratic curve. Because i'm using Adobe Illustrator and the pen tool to create my font letters I feel like my font is a recreation of what the pen tool does in the p5.js framework.

  I find the resemblance/recreation of the Illustrator's pen tool fitting because it's a program used for Graphic Design/Font creation and one of the inspirations for my project is the graphic design principle of Gestalt. Gestalt is a psychology term which refers to visual perception. I don't feel as my font has a strong resemblance to any of the Gestalt principles currently as my font has changed since I first sourced it as inspiration.