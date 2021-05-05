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
  fill(255);
  rotate(fullNoteR);
  scale(noteF);
  ellipse(noteFx,noteFy,1.8*nWidth,nWidth);  //full note

  pop()

}
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