## PS2 MDDN 242 2018

Final:
My font is called Illustr8.

The projects initial inspiration was to create a legible font through the use of the font function and to apply procedural/generative effects to create an visually intricate font family.

Over the course of the project I found we had to use primitves to create our font family. My idea evolved over that time and I took inspiration from graphic design, specifically the use of Adobe Illustrator and Gestalt psychology(Visual Perception).

Still wanting to have a visually intricate font family I looked at using quadratic curves because I found them hard to manipulate into certain forms because of the parameters needed to create them, to aid in the creation of my font I used Adobe Illustrator which resulted in me realizing that my font is a restrained translation of Illustrator's pen tool into the p5.js api. I further restrained my parameters by having my parameters end in an either 0 or 5 and limited myself to 10 parameters.

The name, colour scheme and layout of my font is in reference to Adobe Illustrator so there is a connection to the program that helped me create my font. The background is a dark grey, a white rectangle representing the artboard and a font that is created by the p5.js equivalent of the pen tool.

For my swap words I used words that have some relevance to graphic design and made sure to incorporate the A-Z in those words.
I chose the name Illustr8 to again, reference Illustrator but the 8 represents how each swap word has 8 letters.

If I had to continue this project I would look at putting less constraints on myself and the font by adding more parameters like the original 24. Implementing an opacity transition with the interpolation through the use of stroke colour.

 
My 10 variable per letter are:
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

