const colorFront  = "#199cff";
const colorStroke = "#233f11"; //pink

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup


  stroke(255,204,250);



//line 1 parameter

 let xval1 = letterData["x1"]; 
 let xval2 = letterData["x2"];
  let xval3 = letterData["x3"];
 let xval4 = letterData["x4"];

//line 2 parameter
 let yval1 = letterData["y1"];
 let yval2 = letterData["y2"];
  let yval3 = letterData["y3"];
 let yval4 = letterData["y4"];

//line 3 parameter
 let zval1 = letterData["z1"];
 let zval2 = letterData["z2"];
  let zval3 = letterData["z3"];
 let zval4 = letterData["z4"];


//draw lines
  strokeWeight(10);
 line(xval1, xval2,xval3,xval4);

  strokeWeight(5);
 line(yval1, yval2,yval3,yval4);

  strokeWeight(3);
 line(zval1, zval2,zval3,zval4);

}




