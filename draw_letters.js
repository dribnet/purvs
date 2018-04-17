const colorFront  = "##F4F4F6";
const colorStroke = "##F4F4F6";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
 
  noFill();
  stroke(colorStroke);
  strokeWeight(5);
  // determine parameters for second circle
  //point1
  let pos2x = 0+letterData["x1"];
  let pos2y = 0+letterData["y1"];
  let size1 = letterData["s1"];
  //point2
  let pos3x = letterData["x2"];
  let pos3y = 50+letterData["y2"];
  let size2 = letterData["s2"];
  //point3
  let pos4x = letterData["x3"];
  let pos4y = letterData["y3"];
  let size3 = letterData["s3"];
  // let pos4x = 75+letterData["x3"];
  // let pos4y = 175+letterData["y3"];
  // //point4
  // let pos5x = 50+letterData["x4"];
  // let pos5y = -125+letterData["y4"];
  //drawpoint
  
  rect(pos2x,pos2y,size1,size1);
  rect(pos3x,pos3y,size2,size2);
  rect(pos4x,pos4y,size3,size3);
  // point(pos4x,pos4y);
  // point(pos5x,pos5y);
}

function interpolate_letter(percent, oldObj, newObj){
  let new_letter = {};
  new_letter["x1"] = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["x2"] = map(percent, 0, 100, oldObj["x1"], newObj["x2"]);
  new_letter["x3"] = map(percent, 0, 100, oldObj["x1"], newObj["x3"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["s1"] = map(percent, 0, 100, oldObj["x1"], newObj["s1"]);
  new_letter["s2"] = map(percent, 0, 100, oldObj["x1"], newObj["s2"]);
  new_letter["s3"] = map(percent, 0, 100, oldObj["x1"], newObj["s3"]);
  return new_letter;
}
