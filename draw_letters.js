const colorFront  = "#900C3F";
const colorStroke = "#233f11";

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
  stroke(colorFront);
  //console.log("x:"+ mouseX +"  y:" + mouseY);
  //Setup the parameters
  let outer_arcStart = letterData["arcStart1"];
  let outer_arcEnd = letterData["arcEnd1"];
  let inner_arcStart = letterData["arcStart2"];
  let inner_arcEnd = letterData["arcEnd2"];
  let lx1 = letterData["lineX1"];
  let lx2 = letterData["lineX2"];
  let ly1 = letterData["lineY1"];
  let ly2 = letterData["lineY2"];
  let lx3 = letterData["lineX3"];
  let lx4 = letterData["lineX4"];
  let ly3 = letterData["lineY3"];
  let ly4 = letterData["lineY4"];
  let p1x = letterData["point1x"];
  let p1y = letterData["point1y"];
  let p2x = letterData["point2x"];
  let p2y = letterData["point2y"];


  //Setup drawing
  const colorFront2  = "#900C3F";
  const colorFront1  = "#581845";
  noFill(); 
  stroke(colorFront2);
  angleMode(DEGREES);




  

  push();
    
    
      strokeWeight(7); //Draw  arc1
      stroke(colorFront2);
      arc(50, 100, 100, 100, outer_arcStart, outer_arcEnd);
      strokeWeight(3);  //Draw arc2
      arc(50, 100, 100, 100, inner_arcStart, inner_arcEnd);
      strokeWeight(5);  //Draw inner line
      stroke(colorFront1);
      line(lx1, ly1, lx2, ly2);
      line(lx3, ly3, lx4, ly4);
      strokeWeight(15);
      point(p1x,p1y);//Draw inner point
      point(p2x,p2y);
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  
  let new_letter = {};
  new_letter["arcStart1"] = map(percent, 0, 95, oldObj["arcStart1"], newObj["arcStart1"]);
  new_letter["arcEnd1"] = map(percent, 0, 95, oldObj["arcEnd1"], newObj["arcEnd1"]);
  new_letter["arcStart2"] = map(percent, 0, 95, oldObj["arcStart2"], newObj["arcStart2"]);
  new_letter["arcEnd2"] = map(percent, 0, 95, oldObj["arcEnd2"], newObj["arcEnd2"]);
  new_letter["lineX1"] = map(percent, 0, 100, oldObj["lineX1"], newObj["lineX1"]);
  new_letter["lineX2"] = map(percent, 0, 100, oldObj["lineX2"], newObj["lineX2"]);
  new_letter["lineY1"] = map(percent, 0, 100, oldObj["lineY1"], newObj["lineY1"]);
  new_letter["lineY2"] = map(percent, 0, 100, oldObj["lineY2"], newObj["lineY2"]);
  new_letter["lineX3"] = map(percent, 0, 100, oldObj["lineX3"], newObj["lineX3"]);
  new_letter["lineX4"] = map(percent, 0, 100, oldObj["lineX4"], newObj["lineX4"]);
  new_letter["lineY3"] = map(percent, 0, 100, oldObj["lineY3"], newObj["lineY3"]);
  new_letter["lineY4"] = map(percent, 0, 100, oldObj["lineY4"], newObj["lineY4"]);
  new_letter["point1x"] = map(percent, 0, 100, oldObj["point1x"], newObj["point1x"]);
  new_letter["point2x"] = map(percent, 0, 100, oldObj["point2x"], newObj["point2x"]);
  new_letter["point1y"] = map(percent, 0, 100, oldObj["point1y"], newObj["point1y"]);
  new_letter["point2y"] = map(percent, 0, 100, oldObj["point2y"], newObj["point2y"]);
  return new_letter;
}

var swapWords = [
  "NEWWORLD",
  "WHERE123",
  "STOPLAZY"
]