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
  let flagI = letterData["flagInvert"];
  let noteF = letterData["noteFull"];
  let noteFx = letterData["fullNotex"];
  let noteFy = letterData["fullNotey"];
  let fullNoteR = letterData["fullNoteRot"];
  
push();
rectMode(CENTER);   //called rect mode down here because it was affect the green guidelines for alphabet.
scale(0.7, 1);
translate(50,0);

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
  noteHead(0, 0);
  pop()
  pop();
  push();
  translate(stemx,stemy);  //the stem of the note.
  rotate(stemR);
  rect(0,0,stemT,stemH); //the stem of the note.
  pop();

  push();
  //push()
  //stroke(255,0,0); // Change the color
  //strokeWeight(10);
  //point(48,15);
  //pop()
  translate(flagx,flagy);   //flagx,flagy
  scale(flagS);
  rotate(flagR);
  scale(1,flagI);
  flag(0, 0);
  pop();

  pop();   //pop to keep rectMode locked in my code without affecting grids.



function flag(flagx, flagy, flagS, flagS) {
//the flag of the note.
  push();
  //noFill();
  //translate(0, 0);
  //scale(flagS);
  //rotate(flagR);
  //rect(200,200,50,50);
  beginShape();
  curveVertex(104 - 48, 104 - 15);
  curveVertex(104- 48, 104 - 15);
  //curveVertex(114, 91);
  curveVertex(114- 48, 91 - 15);
  //curveVertex(68, 19);
  curveVertex(96- 48, 62 - 15);
  curveVertex(66- 48, 46 - 15);
  curveVertex(50- 48, 20 - 15);
  curveVertex(50- 48, 20 - 15);
  curveVertex(50- 48, 60 - 15);
  curveVertex(50- 48, 60 - 15);
  curveVertex(66- 48, 66 - 15);
  curveVertex(66- 48, 66 - 15);
  curveVertex(96- 48, 77 - 15);
  //curveVertex(96, 77);
  //curveVertex(114, 91);
  curveVertex(114- 48, 91 - 15);
  curveVertex(104- 48, 104 - 15);
  curveVertex(104- 48, 104 - 15);
  endShape();
  pop();
}

function noteHead(x,y){
  push();
  noStroke();
    translate(nHeadx,nHeady);
  rotate(noteR);
  ellipse(0,0,1.8*nWidth,nWidth);  //the notehead.  x3 math keeps width of elipse to aesthetic scale
  push();
  fill(backgroundColor);
  rotate(fullNoteR);
  scale(noteF);
  ellipse(noteFx,noteFy,1.8*nWidth,nWidth);  //full note

  pop()

}
}


function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  let defaultChar = getObjFromChar("default");

  //The following else-if chain controls the morphing to my default character, a musical note,
  //holding for some time, and then morphing from the default character into the new obkect.
  //The map values assist in keeping the animation smooth. Having the map range higher than the first
  //percentage condition shoots the the parameters of my shapes off before reconstructing them. It was
  //a cool effect and interesting discovery, but was outside of my original them of music notes. 

  if(percent < 30){
  new_letter["noteRotate"]    = map(percent, 0, 30, oldObj["noteRotate"], defaultChar["noteRotate"]);
  new_letter["noteWidth"] = map(percent, 0, 30, oldObj["noteWidth"], defaultChar["noteWidth"]);
  new_letter["notePosx"] = map(percent, 0, 30, oldObj["notePosx"], defaultChar["notePosx"]);
  new_letter["notePosy"]    = map(percent, 0, 30, oldObj["notePosy"], defaultChar["notePosy"]);
  new_letter["stemPosx"] = map(percent, 0, 30, oldObj["stemPosx"], defaultChar["stemPosx"]);
  new_letter["stemPosy"] = map(percent, 0, 30, oldObj["stemPosy"], defaultChar["stemPosy"]);
  new_letter["stemHeight"]    = map(percent, 0, 30, oldObj["stemHeight"], defaultChar["stemHeight"]);
  new_letter["stemThick"] = map(percent, 0, 30, oldObj["stemThick"], defaultChar["stemThick"]);
  new_letter["stemRotate"] = map(percent, 0, 30, oldObj["stemRotate"], defaultChar["stemRotate"]);
  new_letter["flagScale"]    = map(percent, 0, 30, oldObj["flagScale"], defaultChar["flagScale"]);
  new_letter["flagRotate"] = map(percent, 0, 30, oldObj["flagRotate"], defaultChar["flagRotate"]);
  new_letter["flagPosx"] = map(percent, 0, 30, oldObj["flagPosx"], defaultChar["flagPosx"]);
  new_letter["flagPosy"]    = map(percent, 0, 30, oldObj["flagPosy"], defaultChar["flagPosy"]);
  new_letter["flagThick"] = map(percent, 0, 30, oldObj["flagThick"], defaultChar["flagThick"]);
  new_letter["flagInvert"] = map(percent, 0, 30, oldObj["flagInvert"], defaultChar["flagInvert"]);
  new_letter["noteFull"]    = map(percent, 0, 30, oldObj["noteFull"], defaultChar["noteFull"]);
  new_letter["fullNotex"] = map(percent, 0, 30, oldObj["fullNotex"], defaultChar["fullNotex"]);
  new_letter["fullNotey"] = map(percent, 0, 30, oldObj["fullNotey"], defaultChar["fullNotey"]);
  new_letter["fullNoteRot"] = map(percent, 0, 30, oldObj["fullNoteRot"], defaultChar["fullNoteRot"]);
  } else if (percent > 71){
  new_letter["noteRotate"]    = map(percent, 71, 100, defaultChar["noteRotate"], newObj["noteRotate"]);
  new_letter["noteWidth"] = map(percent, 71, 100, defaultChar["noteWidth"], newObj["noteWidth"]);
  new_letter["notePosx"] = map(percent, 71, 100, defaultChar["notePosx"], newObj["notePosx"]);
  new_letter["notePosy"]    = map(percent, 71, 100, defaultChar["notePosy"], newObj["notePosy"]);
  new_letter["stemPosx"] = map(percent, 71, 100, defaultChar["stemPosx"], newObj["stemPosx"]);
  new_letter["stemPosy"] = map(percent, 71, 100, defaultChar["stemPosy"], newObj["stemPosy"]);
  new_letter["stemHeight"]    = map(percent, 71, 100, defaultChar["stemHeight"], newObj["stemHeight"]);
  new_letter["stemThick"] = map(percent, 71, 100, defaultChar["stemThick"], newObj["stemThick"]);
  new_letter["stemRotate"] = map(percent, 71, 100, defaultChar["stemRotate"], newObj["stemRotate"]);
  new_letter["flagScale"]    = map(percent, 71, 100, defaultChar["flagScale"], newObj["flagScale"]);
  new_letter["flagRotate"] = map(percent, 71, 100, defaultChar["flagRotate"], newObj["flagRotate"]);
  new_letter["flagPosx"] = map(percent, 71, 100, defaultChar["flagPosx"], newObj["flagPosx"]);
  new_letter["flagPosy"]    = map(percent, 71, 100, defaultChar["flagPosy"], newObj["flagPosy"]);
  new_letter["flagThick"] = map(percent, 71, 100, defaultChar["flagThick"], newObj["flagThick"]);
  new_letter["flagInvert"] = map(percent, 71, 100, defaultChar["flagInvert"], newObj["flagInvert"]);
  new_letter["noteFull"]    = map(percent, 71, 100, defaultChar["noteFull"], newObj["noteFull"]);
  new_letter["fullNotex"] = map(percent, 71, 100, defaultChar["fullNotex"], newObj["fullNotex"]);
  new_letter["fullNotey"] = map(percent, 71, 100, defaultChar["fullNotey"], newObj["fullNotey"]);
  new_letter["fullNoteRot"] = map(percent, 71, 100, defaultChar["fullNoteRot"], newObj["fullNoteRot"]);
} else{
  new_letter["noteRotate"]    = map(percent, 31, 70, defaultChar["noteRotate"], defaultChar["noteRotate"]);
  new_letter["noteWidth"] = map(percent, 31, 70, defaultChar["noteWidth"], defaultChar["noteWidth"]);
  new_letter["notePosx"] = map(percent, 31, 70, defaultChar["notePosx"], defaultChar["notePosx"]);
  new_letter["notePosy"]    = map(percent, 31, 70, defaultChar["notePosy"], defaultChar["notePosy"]);
  new_letter["stemPosx"] = map(percent, 31, 70, defaultChar["stemPosx"], defaultChar["stemPosx"]);
  new_letter["stemPosy"] = map(percent, 31, 70, defaultChar["stemPosy"], defaultChar["stemPosy"]);
  new_letter["stemHeight"]    = map(percent, 31, 70, defaultChar["stemHeight"], defaultChar["stemHeight"]);
  new_letter["stemThick"] = map(percent, 31, 70, defaultChar["stemThick"], defaultChar["stemThick"]);
  new_letter["stemRotate"] = map(percent, 31, 70, defaultChar["stemRotate"], defaultChar["stemRotate"]);
  new_letter["flagScale"]    = map(percent, 31, 70, defaultChar["flagScale"], defaultChar["flagScale"]);
  new_letter["flagRotate"] = map(percent, 31, 70, defaultChar["flagRotate"], defaultChar["flagRotate"]);
  new_letter["flagPosx"] = map(percent, 31, 70, defaultChar["flagPosx"], defaultChar["flagPosx"]);
  new_letter["flagPosy"]    = map(percent, 31, 70, defaultChar["flagPosy"], defaultChar["flagPosy"]);
  new_letter["flagThick"] = map(percent, 31, 70, defaultChar["flagThick"], defaultChar["flagThick"]);
  new_letter["flagInvert"] = map(percent, 31, 70, defaultChar["flagInvert"], defaultChar["flagInvert"]);
  new_letter["noteFull"]    = map(percent, 31, 70, defaultChar["noteFull"], defaultChar["noteFull"]);
  new_letter["fullNotex"] = map(percent, 31, 70, defaultChar["fullNotex"], defaultChar["fullNotex"]);
  new_letter["fullNotey"] = map(percent, 31, 70, defaultChar["fullNotey"], defaultChar["fullNotey"]);
  new_letter["fullNoteRot"] = map(percent, 31, 70, defaultChar["fullNoteRot"], defaultChar["fullNoteRot"]);
  }
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]