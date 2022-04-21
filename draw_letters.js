/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {

  push()
  let posx = 50;
  let posy = 150;
  // determine parameters for second circle
  let Width = letterData["Width"];
  let Height = letterData["Height"];
  let W = letterData["W"];
  let H2 = letterData["H2"];
  let H = letterData["H"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  let angle = letterData["RotateAngle"];
  let angle2 = letterData["RotateAngle2"];
  //let drawOrderModifier = letterData["rectBehind"];

  //if (drawOrderModifier) {
    //rectMode(CENTER)
    //fill(lightBlue);
    //rect(pos2x, pos2y, rectWidth, rectHeight);
    //fill(darkBlue);
  //  ellipse(posx, posy, 100, 100);
//  } else {
    //fill(darkBlue);
  //  ellipse(posx, posy, 100, 100);

  //  rectMode(CENTER)
  //  fill(lightBlue);
  //  rect(pos2x, pos2y, rectWidth, rectHeight);
  //}
 pop()

push()
scale(1.2)
angleMode(DEGREES);
noFill();
stroke(0);
strokeWeight(5);
rotate(angle)
arc(pos2x, pos2y, Width, Height, 0, 180, OPEN);
pop()

push()
translate(posx,posy);
rotate(angle2)
stroke(0);
strokeWeight(2);
line(W,H,W,H2);
pop()

push()
scale(0.5);
translate(posx,posy+15);
stroke(0);
fill(0);
strokeWeight(5);
triangle(32, 100, 50, 55, 68, 100);
line(50,100,50,200);

line(50,190,70,205);
line(30,195,48,180);
line(30,205,50,190);
line(70,195,50,180);
pop()
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
