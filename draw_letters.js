/* these are optional special variables which will change the system */
var systemBackgroundColor = (0);
var systemLineColor = (250);
var systemBoxColor = (250);


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  noFill();
  strokeWeight(5);
  angleMode(DEGREES);
  colorMode(HSB);
 //let arc1 = letterData["arcX"];
  //let acr2 = letterData["arcY"];
  //let arc3 =  letterData["arcS"];
  let arc4 = letterData["arcStart"];
  let arc5 =letterData["arcEnd"];
  let tri1 = letterData["triX"];
  let tri2 = letterData["triY"];
  let tri3 = letterData["triR"];
  let tri4 = letterData["triH"];
  let tri5 = letterData["triW"];
  let line1 = letterData["lineX"];
  let line2 = letterData["lineY"];
  let line3 = letterData["lineR"];
  let line4 = letterData["wave"];
  let line5 = letterData["waveH"];


stroke(334, 93, 100);

//arc(50, 100, 85, 85, arc4, arc5, PIE);
customarc(arc4, arc5)
push();
// original code taken from Programming Design Systems chapter 5 Procedural Shapes
var numVertices = 3; // or 4 or 30
const spacing = 360 / numVertices;
stroke(177, 100, 100);
translate(tri1,tri2); 
rotate(tri3);
beginShape();
for(let i = 0; i <= numVertices; i++) {
  const x = cos((i * spacing)) * tri4;
  const y = sin((i * spacing)) * tri5;
  vertex(x, y);
}
endShape();
pop();

push();
stroke(57, 98, 100);
//strokeCap(SQUARE);
translate(line1, line2);
rotate(line3);

beginShape();

for(let i = 0; i < line4; i++) {
  const x = i * 2;
  const y = sin(i * 2) * 100;
  vertex(x/line5, y/14);
}
endShape();
pop();
}

function customarc(arc4, arc5){
  push();
  strokeWeight(12);
  stroke(334, 70, 100, 0.3);
  arc(50, 100, 85, 85, arc4, arc5, PIE);

  stroke(334, 93, 100);
  strokeWeight(5);
  arc(50, 100, 85, 85, arc4, arc5, PIE);

  strokeWeight(2);
  stroke(250);
  arc(50, 100, 85, 85, arc4, arc5, PIE);
  
  pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["arcStart"]    = map(percent, 0, 100, oldObj["arcStart"], newObj["arcStart"]);
  new_letter["arcEnd"] = map(percent, 0, 100, oldObj["arcEnd"], newObj["arcEnd"]);
  new_letter["triX"] = map(percent, 0, 100, oldObj["triX"], newObj["triX"]);
  new_letter["triY"]    = map(percent, 0, 100, oldObj["triY"], newObj["triY"]);
  new_letter["triR"] = map(percent, 0, 100, oldObj["triR"], newObj["triR"]);
  new_letter["triH"] = map(percent, 0, 100, oldObj["triH"], newObj["triH"]);
  new_letter["triW"]    = map(percent, 0, 100, oldObj["triW"], newObj["triW"]);
  new_letter["triR"] = map(percent, 0, 100, oldObj["triR"], newObj["triR"]);
  new_letter["lineX"] = map(percent, 0, 100, oldObj["lineX"], newObj["lineX"]);
  new_letter["lineY"] = map(percent, 0, 100, oldObj["lineY"], newObj["lineY"]);
  new_letter["lineR"] = map(percent, 0, 100, oldObj["lineR"], newObj["lineR"]);
  new_letter["wave"] = map(percent, 0, 100, oldObj["wave"], newObj["wave"]);
  new_letter["waveH"] = map(percent, 0, 100, oldObj["waveH"], newObj["waveH"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "POPLIGHT",
  "12345678"
]