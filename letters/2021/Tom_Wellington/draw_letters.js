/* these are optional special variables which will change the system */
var systemBackgroundColor = "#303030";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const strokeColor1 = "#a6a6a6";//light grey for outer arcs
const strokeColor2 = "ededed";//lighter gray for inner arcs


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
 function drawLetter(letterData) {
//setup the sketch
angleMode(DEGREES)

stroke(strokeColor1);
strokeWeight(6);


//inner line rotation from the centre
let line1R = letterData["line1R"];
let line2R = letterData["line2R"];
let line3R = letterData["line3R"];
let line4R = letterData["line4R"];
//start and end of outer arcs
let arc1Start = letterData["arc1Start"];
let arc1End = letterData["arc1End"];
let arc2Start = letterData["arc2Start"];
let arc2End = letterData["arc2End"];

let lineLength = letterData["lineLength"];


noFill();

 /////////////////OUTER ARCS AND LINES///////////////

 //outer arcs
 arc(50, 150, 95, 95, arc1Start-90, arc1End-90);
 arc(50, 150, 95, 95, arc2Start-90, arc2End-90);

//inner radial lines
push();
translate(50, 150);
rotate(line1R+180);
line(0, 0, 0, lineLength);
pop();

push();
translate(50, 150);
rotate(line2R+180);
line(0, 0, 0, lineLength);
pop();


push();
translate(50, 150);
rotate(line3R+180);
line(0, 0, 0, lineLength);
pop();


push();
translate(50, 150);
rotate(line4R+180);
line(0, 0, 0, lineLength);
pop();


////////////////INNER ARCS AND LINES///////////////////////////


  stroke(strokeColor2);//lighter grey
  strokeWeight(3);

 //outer arcs with a smaller radius
 arc(50, 150, 75, 75, arc1Start-90, arc1End-90);
 arc(50, 150, 75, 75, arc2Start-90, arc2End-90);

//inner radial lines
push();
translate(50, 150);
rotate(line1R+180);
line(0, 0, 0, lineLength *0.76);
pop();

push();
translate(50, 150);
rotate(line2R+180);
line(0, 0, 0, lineLength *0.76);
pop();


push();
translate(50, 150);
rotate(line3R+180);
line(0, 0, 0, lineLength *0.76);
pop();


push();
translate(50, 150);
rotate(line4R+180);
line(0, 0, 0, lineLength *0.76);
pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["line1R"]    = map(percent, 0, 100, oldObj["line1R"], newObj["line1R"]);
  new_letter["line2R"] = map(percent, 0, 100, oldObj["line2R"], newObj["line2R"]);
  new_letter["line3R"] = map(percent, 0, 100, oldObj["line3R"], newObj["line3R"]);
  new_letter["line4R"] = map(percent, 0, 100, oldObj["line4R"], newObj["line4R"]);
  new_letter["arc1Start"] = map(percent, 0, 100, oldObj["arc1Start"], newObj["arc1Start"]);
  new_letter["arc1End"] = map(percent, 0, 100, oldObj["arc1End"], newObj["arc1End"]);
  new_letter["arc2Start"] = map(percent, 0, 100, oldObj["arc2Start"], newObj["arc2Start"]);
  new_letter["arc2End"] = map(percent, 0, 100, oldObj["arc2End"], newObj["arc2End"]);
  new_letter["lineLength"] = map(percent, 0, 100, oldObj["lineLength"], newObj["lineLength"]);
  return new_letter;
}

var swapWords = [
  "CICLICAL",//The name of my font
  "ORBITING",
  "VAULTED?",
  "COMPUTER"
  ]