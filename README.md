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

  Cosmetic iteration;
  In my last commit I said I was happy with the current iteration and would focus on catching up but after pushing the commit I felt like the the 2 letters A/B could be refined more because I have a bad habit of nitpicking my work. I just didn't like how they have the sharp edge.

  I personally felt that since the fonts are so minimal(a line) that even the slightest anomaly such as the sharp edge in one of the letter forms would render them as not apart of the font family. It's also something that can be cleaned up reasonably easily just by changing the control handles. Possibly for the animation the sharp edge is incorporated to show a contrast from the fluidity of the form. 

  I also changed the artboard(rect) to a size of 100x200 instead of 150x150 because the drawLetter(data) draws each letter in a 100x200 rectangle so I just wanted to further restrain my font to fit the parameters of the function. Now I feel like I can catch up.