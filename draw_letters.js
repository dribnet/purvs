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
customarc(arc4, arc5);

stroke(177, 100, 100);
customtriangle(tri1, tri2, tri3, tri4, tri5);

stroke(177, 50, 100, 0.5);
customtriangle(tri1-5, tri2-5, tri3, tri4+5, tri5+5);

blendMode(REMOVE);
stroke(177, 60, 100, 0.3);
customtriangle(tri1-10, tri2-10, tri3, tri4+10, tri5+10);


stroke(177, 50, 100, 0.3);
customtriangle(tri1+5, tri2+5, tri3, tri4-5, tri5-5);

stroke(177, 50, 100, 0.3);
customtriangle(tri1+10, tri2+10, tri3, tri4-10, tri5-10);

customwave(line1, line2, line3, line4, line5);
}

function customarc(arc4, arc5){

  push();
  // blend modes 
//BLEND, DARKEST, LIGHTEST, DIFFERENCE, MULTIPLY, EXCLUSION, 
//SCREEN, REPLACE, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN, ADD, REMOVE or SUBTRACT 
  strokeWeight(18);
  stroke(177, 30, 100, 0.2);
  arc(50, 100, 85, 85, arc4, arc5, PIE);

  strokeWeight(12);
  stroke(334, 70, 100, 0.4);
  arc(50, 100, 85, 85, arc4, arc5, PIE);

  stroke(334, 93, 100);
  strokeWeight(5);
  arc(50, 100, 85, 85, arc4, arc5, PIE);

  strokeWeight(2);
  stroke(250);
  arc(50, 100, 85, 85, arc4, arc5, PIE);
  
  pop();
}

function customtriangle (tri1, tri2, tri3, tri4, tri5){
  strokeCap(ROUND);
  var numVertices = 3; // or 4 or 30
  const spacing = 360 / numVertices;

  push();
// original code taken from Programming Design Systems chapter 5 Procedural Shapes

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
}

function customwave (line1, line2, line3, line4, line5){
blendMode(LIGHTEST);

push();
strokeWeight(5);
stroke(57, 98, 100);
translate(line1, line2);
rotate(line3);
//original code taken from Programming Design Systems chapter 5 Procedural Shapes
beginShape();
for(let i = 0; i < line4; i++) {
  const x = i * 2;
  const y = sin(i * 2) * 100;
  vertex(x/line5, y/14);
}
endShape();
pop();

}



function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  let defaultChar = getObjFromChar("default");
  let targetwave = 100;
  if(percent < 40){
  new_letter["arcStart"]    = map(percent, 0, 40, oldObj["arcStart"], defaultChar["arcStart"]);
  new_letter["arcEnd"] = map(percent, 0, 40, oldObj["arcEnd"], defaultChar["arcEnd"]);
  new_letter["wave"] = map(percent, 0, 40, oldObj["wave"], newObj["wave"]);
}
else{
  new_letter["arcStart"]    = map(percent, 41, 100, defaultChar["arcStart"], newObj["arcStart"]);
  new_letter["arcEnd"] = map(percent, 41, 100, defaultChar["arcEnd"], newObj["arcEnd"]);
}

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
  "12345678",
  "PARTYPOP",
]