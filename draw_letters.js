
//Colours 
//Yellow - Circle
const red1 = 252;
const green1 = 199;
const blue1 = 53;

//Black - Semi-circle
const red2 = 48;
const green2 = 48;
const blue2 = 46;

//Red - Line
const red3 = 219;
const green3 = 0;
const blue3 = 0;




function drawLetter(letterData) {

//variables 
let circDiam = letterData["circDiam"];
let CircleX = 50 + letterData["CircleX"];
let CircleY = 100 + letterData["CircleY"];

let rectX = 50 + letterData["rectX"];
let rectY = 100 + letterData["rectY"];
let rectX2 = letterData["rectX2"];
let rectY2 = letterData["rectY2"];

let flipX = letterData["flipX"];
let flipY = letterData["flipY"];

let strokeW = letterData["strokeW"];


//DRAW CIRCLE
push();
noStroke();
fill(red1, green1, blue1);
arc(CircleX, CircleY, circDiam, circDiam, 0, 360);
pop();

//DRAW SEMI-CIRCLE
push();
strokeWeight(0);
strokeJoin(ROUND);
strokeCap(ROUND);
fill(red2, green2, blue2);
angleMode(DEGREES); 
arc(50, 100, 100, 100, flipX, flipY);
pop();


//DRAW LINE
strokeWeight(strokeW);
strokeCap(ROUND);
stroke(red3, green3, blue3);
fill(red3, green3, blue3);
push();
line(rectX, rectY, rectX2, rectY2);
pop();


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["circDiam"] = map(percent, 0, 90, oldObj["circDiam"], newObj["circDiam"]);
  new_letter["CircleX"] = map(percent, 0, 100, oldObj["CircleX"], newObj["CircleX"]);
  new_letter["CircleY"] = map(percent, 0, 100, oldObj["CircleY"], newObj["CircleY"]);

  new_letter["rectX"] = map(percent, 0, 90, oldObj["rectX"], newObj["rectX"]);
  new_letter["rectY"] = map(percent, 0, 90, oldObj["rectY"], newObj["rectY"]);
  new_letter["rectX2"] = map(percent, 0, 90, oldObj["rectX2"], newObj["rectX2"]);
  new_letter["rectY2"] = map(percent, 0, 90, oldObj["rectY2"], newObj["rectY2"]);



  new_letter["flipX"] = map(percent, 0, 100, oldObj["flipX"], newObj["flipX"]);
  new_letter["flipY"] = map(percent, 0, 100, oldObj["flipY"], newObj["flipY"]);



  new_letter["strokeW"] = map(percent, 0, 80, oldObj["strokeW"], newObj["strokeW"]);
  return new_letter;
}

var swapWords = [
  "YOURSELF",
  "BONELESS",
  "DURATION",
  "PHYSICAL",
  "BAUHAUS!",
  "QUESTION"
]