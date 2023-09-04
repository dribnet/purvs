const colorFront  = "#e3eded";
const colorStroke = "#e3eded";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {
  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
  let posx = letterData["x"];
  let posy = letterData["y"];

  let pos2x = letterData["x2"];
  let pos2y = letterData["y2"];

  let pos3x = letterData["x3"];
  let pos3y = letterData["y3"];

  let pos4x = letterData["x4"];
  let pos4y = letterData["y4"];

  // draw four circles
  ellipse(posx, posy, 11, 11);
  ellipse(pos2x, pos2y, 11, 11);
  ellipse(pos3x, pos3y, 11, 11);
  ellipse(pos4x, pos4y, 11, 11);

  //draws the lines connecting the points
strokeWeight(5)
  line(posx,posy,pos2x,pos2y)
  line(posx,posy,pos3x,pos3y) 
  line(pos3x,pos3y,pos4x,pos4y)
strokeWeight(1.5)
 line(posx,posy,pos4x,pos4y)
  line(pos2x,pos2y,pos4x,pos4y)
  line(pos2x,pos2y,pos3x,pos3y)
 
}
function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
//Every 25% the a point moves from the old point to the new point.
//None of them move at the same time.
  if(percent < 25){
  new_letter["x"] = oldObj["x"]
  new_letter["y"] = oldObj["y"]
  new_letter["x3"] = oldObj["x3"]
  new_letter["y3"] = oldObj["y3"]
  new_letter["x4"] = oldObj["x4"]
  new_letter["y4"] = oldObj["y4"]
  new_letter["x2"] = map(percent, 0, 25, oldObj["x2"], newObj["x2"]);
  new_letter["y2"] = map(percent, 0, 25, oldObj["y2"], newObj["y2"]);
  }

   else if(percent < 50){
    new_letter["x2"] = newObj["x2"]
    new_letter["y2"] = newObj["y2"]
  new_letter["x3"] = oldObj["x3"]
  new_letter["y3"] = oldObj["y3"]
  new_letter["x4"] = oldObj["x4"]
  new_letter["y4"] = oldObj["y4"]
  new_letter["x"] = map(percent, 25, 50, oldObj["x"], newObj["x"]);
  new_letter["y"] = map(percent, 25, 50, oldObj["y"], newObj["y"]);
  }

    else if(percent < 75){
    new_letter["x2"] = newObj["x2"]
    new_letter["y2"] = newObj["y2"]
    new_letter["x"] = newObj["x"]
    new_letter["y"] = newObj["y"]
  new_letter["x4"] = oldObj["x4"]
  new_letter["y4"] = oldObj["y4"]
  new_letter["x3"] = map(percent, 50, 75, oldObj["x3"], newObj["x3"]);
  new_letter["y3"] = map(percent, 50, 75, oldObj["y3"], newObj["y3"]);
  }

    else if(percent < 100){
    new_letter["x2"] = newObj["x2"]
    new_letter["y2"] = newObj["y2"]
    new_letter["x"] = newObj["x"]
    new_letter["y"] = newObj["y"]
    new_letter["x3"] = newObj["x3"]
    new_letter["y3"] = newObj["y3"]

  new_letter["x4"] = map(percent, 75, 100, oldObj["x4"], newObj["x4"]);
  new_letter["y4"] = map(percent, 75, 100, oldObj["y4"], newObj["y4"]);
  }

  else{
  new_letter["x"] = newObj["x"]
  new_letter["y"] = newObj["y"]
  new_letter["x2"] = newObj["x2"]
  new_letter["y2"] = newObj["y2"]
  new_letter["x3"] = newObj["x3"]
  new_letter["y3"] = newObj["y3"]
  new_letter["x4"] = newObj["x4"]
  new_letter["y4"] = newObj["y4"]
  }

  return new_letter;
}
