/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */

const backgroundColor  = "#e3eded";
const strokeColor = "#233f11";
const darkPurple  = "#582C70";
const lightPurple  = "#BD5DF0";
const black = "#000000";
const orange = "#F65502";



/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */


function drawLetter(letterData) {
  // color/stroke setup
  stroke(black);   //strokeColor
  strokeWeight(4);
  angleMode(DEGREES);
  push();
  rectMode(CENTER);
  pop();

  // parameters for letters
  let size2 = letterData["size"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let rot = letterData["rotation"];
  let pos3x = letterData["arcPosX"];
  let pos3y = letterData["arcPosY"];
  let startAngle = letterData["start"];
  let stopAngle = letterData["stop"];


//my notes ones
  let noteR = letterData["noteRotate"];
  let nWidth = letterData["noteWidth"];
  let nHeadx = letterData["notePosx"];
  let nHeady = letterData["notePosy"];
  let stemx = letterData["stemPosx"];
  let stemy = letterData["stemPosy"];
  let stemH = letterData["stemHeight"];
  let stemT = letterData["stemThick"];
  let stemR = letterData["stemRotate"];
  let flagS = letterData["flagScale"];
  let flagR = letterData["flagRotate"];
  let flagx = letterData["flagPosx"];
  let flagy = letterData["flagPosy"];
  let flagT = letterData["flagThick"];
  


  // draw two circles
  push();
  fill(darkPurple);
//  ellipse(50, 150, 100, 100);
  pop();

  fill(black);   //lightPurple
  push();
  translate(pos2x, pos2y);
  rotate(rot);
//  rect(0, 0, size2, size2);
  pop();

  push();
  fill(orange);
// arc(pos3x, pos3y, 50, 50, startAngle, stopAngle, PIE);
  pop();

//new note code starts here
  push();
  translate(nHeadx,nHeady);
  rotate(noteR);
  ellipse(0, 0, 1.8*nWidth,nWidth);  //the notehead.
  pop()
  push();
  translate(stemx,stemy);  //the stem of the note.
  rotate(stemR);
  rect(0,0,stemT,stemH); //the stem of the note.
  pop();



//the flag of the note.
  push();
  //noFill();
  translate(flagx, flagy);
  scale(flagS);
  rotate(flagR);
//  rect(200,200,50,50);
  beginShape();
  curveVertex(-54, -65);
  curveVertex(-54, -65);
  //curveVertex(-64, -41);
  curveVertex(-64, -41);
  //curveVertex(-18, 31);
  curveVertex(-46, -12);
  curveVertex(-16,4);
  curveVertex(0, 30);
  curveVertex(0, 30);
  curveVertex(0, -10);
  curveVertex(0, -10);
  curveVertex(-16, -16);
  curveVertex(-16, -16);
  curveVertex(-46, -27);
  //curveVertex(-46, -27);
  //curveVertex(-64, -41);
  curveVertex(-64, -41);
  curveVertex(-54, -65);
  curveVertex(-54, -65);
  endShape();
  pop();
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]