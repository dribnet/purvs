const colorFront  = "#F7134A";
const colorStroke = "#F787D5";

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
  angleMode(DEGREES);

 // determine parameters for the arcs
   let rot1 = letterData["rot1"];
   let rot2 = letterData["rot2"];
   let rot3 = letterData["rot3"];
   let rot4 = letterData["rot4"];
  let offsetx1 = letterData["offsetx1"];
  let offsetx2 = letterData["offsetx2"];
  let offsetx3 = letterData["offsetx3"];
  let offsetx4 = letterData["offsetx4"]; 
  let offsety1 = letterData["offsety1"];
  let offsety2 = letterData["offsety2"];
  let offsety3 = letterData["offsety3"];
  let offsety4 = letterData["offsety4"];
  
  //rect(0,0,100,200);

  push();
  translate(50, 100);

//arc1
  push();
  rotate(rot1);
  scale(0.35);
  fill(colorFront);
  arc(offsetx1, offsety1, 200, 200, 80, 280, CHORD);
  fill(colorBack);
  noStroke();
    arc(offsetx1+31, offsety1, 150, 200, 96, 264, CHORD);
  pop();

//arc2
   push();
   rotate(rot2);
   scale(0.35);
  fill(colorFront);
  arc(offsetx2, offsety2, 200, 200, 80, 280, CHORD);
  fill(colorBack);
  noStroke();
    arc(offsetx2+31, offsety2, 150, 200, 96, 264, CHORD);
  pop();

//arc3
   push();
   rotate(rot3);
   scale(0.35);
  fill(colorFront);
  arc(offsetx3, offsety3, 200, 200, 80, 280, CHORD);
  fill(colorBack);
  noStroke();
    arc(offsetx3+31, offsety3, 150, 200, 96, 264, CHORD);
  pop();

//arc4
   push();
   rotate(rot4);
   scale(0.3);
  fill(colorFront);
  arc(offsetx4, offsety4, 100, 100, 80, 280, CHORD);
  fill(colorBack);
  noStroke();
    arc(offsetx4+17, offsety4, 50, 100, 96, 264, CHORD);
  pop();

  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_Letter = {};
  new_Letter["rot1"] = map(percent, 0, 100, oldObj["rot1"], newObj["rot1"]);
  new_Letter["rot2"] = map(percent, 0, 100, oldObj["rot2"], newObj["rot2"]);
  new_Letter["rot3"] = map(percent, 0, 100, oldObj["rot3"], newObj["rot3"]);
  new_Letter["rot4"] = map(percent, 0, 100, oldObj["rot4"], newObj["rot4"]);
  new_Letter["offsetx1"] = map(percent, 0, 100, oldObj["offsetx1"], newObj["offsetx1"]);
  new_Letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);
  new_Letter["offsetx3"] = map(percent, 0, 100, oldObj["offsetx3"], newObj["offsetx3"]);
  new_Letter["offsetx4"] = map(percent, 0, 100, oldObj["offsetx4"], newObj["offsetx4"]);
  new_Letter["offsety1"] = map(percent, 0, 100, oldObj["offsety1"], newObj["offsety1"]);
  new_Letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);
  new_Letter["offsety3"] = map(percent, 0, 100, oldObj["offsety3"], newObj["offsety3"]);
  new_Letter["offsety4"] = map(percent, 0, 100, oldObj["offsety4"], newObj["offsety4"]);
  return new_Letter;
}





