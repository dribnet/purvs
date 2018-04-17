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



//line 1 = line(x1,y1,x2,y2)

 let xval1 = letterData["x1"]; 
 let xval2 = letterData["x2"];
  let xval3 = letterData["x3"];
 let xval4 = letterData["x4"];

//line 2 = line(x1,y1,x2,y2)
 let yval1 = letterData["y1"];
 let yval2 = letterData["y2"];
  let yval3 = letterData["y3"];
 let yval4 = letterData["y4"];

//line 3 = line(x1,y1,x2,y2)
 let zval1 = letterData["z1"];
 let zval2 = letterData["z2"];
  let zval3 = letterData["z3"];
 let zval4 = letterData["z4"];


//line(x1,y1,x2,y2)
  strokeWeight(10);
 line(xval1, xval2,xval3,xval4);

  strokeWeight(5);
 line(yval1, yval2,yval3,yval4);

  strokeWeight(3);
 line(zval1, zval2,zval3,zval4);

}

//interaction code
function interpolate_letter(percent, oldObj, newObj){
  let new_letter = {};
  new_letter["x1"] = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["x4"] = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);
  new_letter["z1"] = map(percent, 0, 100, oldObj["z1"], newObj["z1"]);
  new_letter["z2"] = map(percent, 0, 100, oldObj["z2"], newObj["z2"]);
  new_letter["z3"] = map(percent, 0, 100, oldObj["z3"], newObj["z3"]);
  new_letter["z4"] = map(percent, 0, 100, oldObj["z4"], newObj["z4"]);
  return new_letter;
 }

 var swapWords = [
 "STRAIGHT",
 "PLEASING",
 "SIMPLEEE"
 ]


