const colorFront  = "#e1f6fd";
const colorStroke = "#fbc24f";

const anchorX = 30;
const anchorY = 200;
const size = 25;

var snapWords = [
  "BLOCKTRON",
  "HELLO",
  "POP",
  "FAIR ENOUGH",
  "LIAM",
  "BADMAN",
  "SWAG",
  "HOWDY"
]

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
  stroke(255);
  strokeWeight(3);


  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50+letterData["offsetx"];
  let pos2y = 150+letterData["offsety"];

  let v1x = letterData["v1x"]; let v1y = letterData["v1y"];
  let v2x = letterData["v2x"]; let v2y = letterData["v2y"];
  let v3x = letterData["v3x"]; let v3y = letterData["v3y"];
  let v4x = letterData["v4x"]; let v4y = letterData["v4y"];
  let v5x = letterData["v5x"]; let v5y = letterData["v5y"];
  let cirX = letterData["cirX"]; let cirY = letterData["cirY"];


  beginShape();
    vertex(anchorX,anchorY);
    vertex(v1x,v1y);
    vertex(v2x,v2y);
    vertex(v3x,v3y);
    vertex(v4x,v4y);
    vertex(v5x,v5y);
  endShape(CLOSE);
  fill(255);//noStroke();
  fill("#87eaff")

  if(cirX){ellipse(cirX,cirY,size,size);}
  //draw two circles
  //ellipse(50, 150, 100, 100);
  //ellipse(pos2x, pos2y, size2, size2);
}

function interpolate_letter(percent, oldObj, newObj){
  
  let new_Letter = {};
  new_Letter["v1x"] = map(percent,0,100,oldObj["v1x"],newObj["v1x"]);
  new_Letter["v1y"] = map(percent,0,100,oldObj["v1y"],newObj["v1y"]);
  new_Letter["v2x"] = map(percent,0,100,oldObj["v2x"],newObj["v2x"]);
  new_Letter["v2y"] = map(percent,0,100,oldObj["v2y"],newObj["v2y"]);
  new_Letter["v3x"] = map(percent,0,100,oldObj["v3x"],newObj["v3x"]);
  new_Letter["v3y"] = map(percent,0,100,oldObj["v3y"],newObj["v3y"]);
  new_Letter["v4x"] = map(percent,0,100,oldObj["v4x"],newObj["v4x"]);
  new_Letter["v4y"] = map(percent,0,100,oldObj["v4y"],newObj["v4y"]);
  new_Letter["v5x"] = map(percent,0,100,oldObj["v5x"],newObj["v5x"]);
  new_Letter["v5y"] = map(percent,0,100,oldObj["v5y"],newObj["v5y"]);
  if(new_Letter["cirX"]){
  new_Letter["cirX"] = map(percent,0,100,oldObj["cirX"],newObj["cirX"]);
  new_Letter["cirY"] = map(percent,0,100,oldObj["cirY"],newObj["cirY"]);
  }
  return new_Letter;
}
