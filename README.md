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

  Added the interpolation part of the project. If I have time I want to add a cosmetic interpolation just to clean up how the handles create sharp glitchy things when animating. Trying to think of ways to create a smoother transition possibly through strokeweight or opacity or maybe the use of the line caps? I think they're called that.