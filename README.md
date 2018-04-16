## PS2 MDDN 242 2018

My initial idea was using the basic geometric shape to compose my letters. In this sketch I used two rectangle to compose my letter by changing the position and shape, and there are 8 parameters. 
2x, 2y, 3x, 3y control the position 

s1, s2, s3, s4 control the sahpe

  let pos2x = 0+letterData["x1"];
  let pos2y = 0+letterData["y1"];
  let size1 = letterData["s1"];
  let size2 = letterData["s2"];

  let pos3x = letterData["x2"];
  let pos3y = 50+letterData["y2"];
  let size3 = letterData["s3"];
  let size4 = letterData["s4"]; 

The three parameters per letter are now:
  * `size` : radius of the second circle
  * `offsetx` : x offset of the second circle relative to the first one
  * `offsety` : y offset of the second circle relative to the first one

