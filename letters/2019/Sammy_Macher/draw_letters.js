/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
 // position for all parameters
  let posx2 = letterData["posx"];
  let posy2 = letterData["posy"];
  let posx3 = letterData["pos2x"];
  let posy3 = letterData["pos2y"];
  let posx4 = letterData["pos3x"];
  let posy4 = letterData["pos3y"];
  let posx5 = letterData["pos4x"];
  let posy5 = letterData["pos4y"];

//parameters for the first and smaller secondarc
  let ArcStart = letterData["arcS"];
  let ArcEnd = letterData["arcE"];
  let Arc2Start = letterData["arc2S"];
  let Arc2End = letterData["arc2E"];

//parameters for the triangles
  //let triX1 = letterData["triX1"]
  //let triX1A = letterData["triX1A"]
  //let triX1B = letterData["triX1B"]
  //let triY1 = letterData["triY1"]
  //let triY1A = letterData["triY1A"]
  //let triY1B = letterData["triY1B"]
  let triX2 = letterData["triX2"]
  let triY2 = letterData["triY2"]
  let triY2A = letterData["triY2A"]
  let triX2A = letterData["triX2A"]
  let triY2B = letterData["triY2B"]
  let triX2B = letterData["triX2B"]
  
  //parameters for the rectangles
  let recA = letterData["recA"]
  let recB = letterData["recB"]


// drawing of two triangles, two rectangles, two arcs
  noStroke();
  fill(32,28,27,255);
  arc(posx4,posy4,100,100,ArcStart,ArcEnd);
  
  fill(237,28,34,255);
  rect(posx2+10, posy2, recA, recB);
  fill(37,108,160,255);
  rect(posx2+10, posy2, recA-10, recB);
  
  fill(248,136,28,255);
  triangle(posx5+triX2,posy5+triY2,posx5+triX2A,posy5+triY2A, posx5+triX2B, posy5+triY2B);
  fill(97,202,223,255);
  arc(posx4,posy4-20,60,60,Arc2Start,Arc2End);
   fill(255,203,1,255);
  triangle(posx3+triX2+10,posy3+triY2+40,posx3+triX2A+40,posy3+triY2A, posx3+triX2B-20, posy3+triY2B);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["posx"] = map(percent, 0, 100, oldObj["posx"], newObj["posx"]);
  new_letter["posy"] = map(percent, 0, 100, oldObj["posy"], newObj["posy"]);
  new_letter["pos2x"] = map(percent, 0, 100, oldObj["pos2x"], newObj["pos2x"]);
  new_letter["pos2y"] = map(percent, 0, 100, oldObj["pos2y"], newObj["pos2y"]);
  new_letter["pos3x"] = map(percent, 0, 100, oldObj["pos3x"], newObj["pos3x"]);
  new_letter["pos3y"] = map(percent, 0, 100, oldObj["pos3y"], newObj["pos3y"]);
  new_letter["pos4x"] = map(percent, 0, 100, oldObj["pos4x"], newObj["pos4x"]);
  new_letter["pos4y"] = map(percent, 0, 100, oldObj["pos4y"], newObj["pos4y"]);
  
  new_letter["arcS"] = map(percent, 0, 100, oldObj["arcS"], newObj["arcS"]);
  new_letter["arcE"] = map(percent, 0, 100, oldObj["arcE"], newObj["arcE"]);
  
  new_letter["recA"] = map(percent, 0, 100, oldObj["recA"], newObj["recA"]);
  new_letter["recB"] = map(percent, 0, 100, oldObj["recB"], newObj["recB"]);
  
  
  //new_letter["triX1"] = map(percent, 0, 100, oldObj["triX1"], newObj["triX1"]);
  new_letter["triX2"] = map(percent, 0, 100, oldObj["triX2"], newObj["triX2"]);
  //new_letter["triX1A"] = map(percent, 0, 100, oldObj["triX1A"], newObj["triX1A"]);
  //new_letter["triX1B"] = map(percent, 0, 100, oldObj["triX1B"], newObj["triX1B"]);
  //new_letter["triY1"] = map(percent, 0, 100, oldObj["triY1"], newObj["triY1"]);
  new_letter["triY2"] = map(percent, 0, 100, oldObj["triY2"], newObj["triY2"]);
  //new_letter["triY1A"] = map(percent, 0, 100, oldObj["triY1A"], newObj["triY1A"]);
  //new_letter["triY1B"] = map(percent, 0, 100, oldObj["triY1B"], newObj["triY1B"]);
  new_letter["triY2A"] = map(percent, 0, 100, oldObj["triY2A"], newObj["triY2A"]);
  new_letter["triX2A"] = map(percent, 0, 100, oldObj["triX2A"], newObj["triX2A"]);
  new_letter["triY2B"] = map(percent, 0, 100, oldObj["triY2B"], newObj["triY2B"]);
  new_letter["triX2B"] = map(percent, 0, 100, oldObj["triX2B"], newObj["triX2B"]);
  
  
  new_letter["arc2S"] = map(percent, 0, 100, oldObj["arc2S"], newObj["arc2S"]);
  new_letter["arc2E"] = map(percent, 0, 100, oldObj["arc2E"], newObj["arc2E"]);
  return new_letter;
}

var swapWords = [
  "AARDVARK",
  "ABERRANT",
  "LABELLED",
  "LAMELLAR",
  "01234567",
  "98765432",
  "ULTIMATE",
  "UMBRELLA",
  "XENOLITH"
  
]