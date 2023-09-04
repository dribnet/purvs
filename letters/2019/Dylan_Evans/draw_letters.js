const colorFront1  = "#349e55";
const colorFront2  = "#75d192";
const colorStroke  = "#233f11";

const mainOffsetX = 50;
const mainOffsetY = 150;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(0);

  angleMode(DEGREES);
  // determine parameters for second circle
  let smallWidth2 = letterData["smallWidth"];
  let smallHeight2 = letterData["smallHeight"];
  let pos2x = mainOffsetX + letterData["offsetx"];
  let pos2y = mainOffsetY + letterData["offsety"];
  let smallAngle2 = letterData["smallAngle"];

  let BsmallWidth2 = letterData["BsmallWidth"];
  let BsmallHeight2 = letterData["BsmallHeight"];
  let Bpos2x = mainOffsetX + letterData["Boffsetx"];
  let Bpos2y = mainOffsetY + letterData["Boffsety"];
  let BsmallAngle2 = letterData["BsmallAngle"];


  let semiRotate2 = letterData["semiRotate"];

  let backColorR2 = letterData["backColorR"];
  let backColorG2 = letterData["backColorG"];
  let backColorB2 = letterData["backColorB"];

  let frontAColorR2 = letterData["AcolorR"];
  let frontAColorG2 = letterData["AcolorG"];
  let frontAColorB2 = letterData["AcolorB"];

  let frontBColorR2 = letterData["BcolorR"];
  let frontBColorG2 = letterData["BcolorG"];
  let frontBColorB2 = letterData["BcolorB"];

  // draw two circles

  //back circle
  fill(backColorR2, backColorG2, backColorB2);
  push();
  if(semiRotate2 != null){
    translate(0,0);
    rotate(semiRotate2);
    arc(mainOffsetY, -mainOffsetX, 100, 100, 0, 180, CHORD);
  }else{
    ellipse(mainOffsetX, mainOffsetY, 100, 100);
  }
  pop();

  //1st front circle
  fill(frontAColorR2,frontAColorG2,frontAColorB2);
  push();
  if(smallAngle2 != 0){
    translate(0,0);
    rotate(smallAngle2);
  }
  ellipse(pos2x, pos2y, smallWidth2, smallHeight2);
  pop();

  //2nd front circle
  fill(frontBColorR2,frontBColorG2,frontBColorB2);
  push();
  if(BsmallAngle2 != 0){
    translate(0,0);
    rotate(BsmallAngle2);
  }
  ellipse(Bpos2x, Bpos2y, BsmallWidth2, BsmallHeight2);
  pop();


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["smallWidth"]    = map(percent, 0, 100, oldObj["smallWidth"], newObj["smallWidth"]);
  new_letter["smallHeight"]    = map(percent, 0, 100, oldObj["smallHeight"], newObj["smallHeight"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_letter["smallAngle"]    = map(percent, 0, 100, oldObj["smallAngle"], newObj["smallAngle"]);
  new_letter["BsmallWidth"]    = map(percent, 0, 100, oldObj["BsmallWidth"], newObj["BsmallWidth"]);
  new_letter["BsmallHeight"]    = map(percent, 0, 100, oldObj["BsmallHeight"], newObj["BsmallHeight"]);
  new_letter["Boffsetx"] = map(percent, 0, 100, oldObj["Boffsetx"], newObj["Boffsetx"]);
  new_letter["Boffsety"] = map(percent, 0, 100, oldObj["Boffsety"], newObj["Boffsety"]);
  new_letter["BsmallAngle"]    = map(percent, 0, 100, oldObj["BsmallAngle"], newObj["BsmallAngle"]);
  //new_letter["semiRotate"] = map(percent, 0, 100, oldObj["semiRotate"], newObj["semiRotate"]);

  new_letter["backColorR"] = map(percent, 0, 100, oldObj["backColorR"], newObj["backColorR"]);
  new_letter["backColorG"] = map(percent, 0, 100, oldObj["backColorG"], newObj["backColorG"]);
  new_letter["backColorB"] = map(percent, 0, 100, oldObj["backColorB"], newObj["backColorB"]);

  new_letter["AcolorR"]    = map(percent, 0, 100, oldObj["AcolorR"], newObj["AcolorR"]);
  new_letter["AcolorG"]    = map(percent, 0, 100, oldObj["AcolorG"], newObj["AcolorG"]);
  new_letter["AcolorB"]    = map(percent, 0, 100, oldObj["AcolorB"], newObj["AcolorB"]);

  new_letter["BcolorR"] = map(percent, 0, 100, oldObj["BcolorR"], newObj["BcolorR"]);
  new_letter["BcolorG"] = map(percent, 0, 100, oldObj["BcolorG"], newObj["BcolorG"]);
  new_letter["BcolorB"] = map(percent, 0, 100, oldObj["BcolorB"], newObj["BcolorB"]);

  return new_letter;
}

var swapWords = [
  "BUBBLOCK",
  "NEGATIVE",
  "BEGINNER",
  "PLAYFUL?",
  "DYLANE19"
]