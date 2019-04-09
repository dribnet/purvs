const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // // 0,0 by 100,200
  // // color/stroke setup
  // stroke(colorStroke);
  // strokeWeight(4);

  // // determine parameters for second circle
  // let size2 = letterData["size"];
  // let pos2x = 50  + letterData["offsetx"];
  // let pos2y = 150 + letterData["offsety"];

  // // draw two circles
  // fill(colorFront1);
  // ellipse(50, 150, 75, 75);
  // fill(colorFront2);
  // ellipse(pos2x, pos2y, size2, size2);
  strokeWeight(2);

  fill(255,50);
  triangle();

  noFill();
  rect(0,0,100,200); // bounding
  stroke(150,150);
  // ellipseMode(CENTER);
  ellipse(100/2 - letterData["size"]/5,200/2 - letterData["size"]/5,letterData["size"],letterData["size"]);
  ellipse(100/2 + letterData["size2"]/5 , 200/2,letterData["size2"],letterData["siz2"]);
  ellipse(100/2 - letterData["size3"]/5, 200/2 + letterData["size3"]/5,letterData["size3"],letterData["size3"]);
  
  angleMode(DEGREES);
  stroke(100);
  fill(255,50);
  arc(100/2 - letterData["size"]/5,200/2 - letterData["size"]/5,letterData["size"],letterData["size"], letterData["arcStart1"], letterData["arcEnd1"]);
  arc(100/2 + letterData["size2"]/5 , 200/2,letterData["size2"],letterData["size2"], letterData["arcStart2"], letterData["arcEnd2"]);
  arc(100/2 - letterData["size3"]/5, 200/2 + letterData["size3"]/5,letterData["size3"],letterData["size3"], letterData["arcStart3"], letterData["arcEnd3"]);
  if(letterData["isLine"]){
    line(letterData["lineX"],50,letterData["lineX"],150);
    line(letterData["lineX"]+3,50,letterData["lineX"]+3,150);
  }
}

// function interpolate_letter(percent, oldObj, newObj) {
//   let new_letter = {};
//   new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
//   new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
//   new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
//   return new_letter;
// }

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]