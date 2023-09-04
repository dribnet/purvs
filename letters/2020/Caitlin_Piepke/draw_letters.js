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
let CircleX = letterData["CircleX"];
let CircleY = letterData["CircleY"];

let lineX = letterData["lineX"];
let lineY = letterData["lineY"];
let lineX2 = letterData["lineX2"];
let lineY2 = letterData["lineY2"];

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
line(lineX, lineY, lineX2, lineY2);
pop();


}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

//CIRCLE 
new_letter["circDiam"] = map(percent, 0, 90, oldObj["circDiam"], newObj["circDiam"]);
new_letter["CircleX"] = map(percent, 0, 100, oldObj["CircleX"], newObj["CircleX"]);
new_letter["CircleY"] = map(percent, 0, 100, oldObj["CircleY"], newObj["CircleY"]);



//LINE POSITION
if(percent < 90){
new_letter["linrX"] = oldObj["lineX"];
new_letter["lineY"] = oldObj["lineY"];
new_letter["lineX2"] = oldObj["lineX2"];
new_letter["lineY2"] = oldObj["lineY2"];
}

else{
  new_letter["lineX"] = map(percent, 0, 100, oldObj["lineX"], newObj["lineX"]);
  new_letter["lineY"] = map(percent, 0, 100, oldObj["lineY"], newObj["lineY"]);
  new_letter["lineX2"] = map(percent, 0, 100, oldObj["lineX2"], newObj["lineX2"]);
  new_letter["lineY2"] = map(percent, 0, 100, oldObj["lineY2"], newObj["lineY2"]);
}


//SEMI-CIRCLE FLIP
new_letter["flipX"] = map(percent, 0, 100, oldObj["flipX"], newObj["flipX"]);
new_letter["flipY"] = map(percent, 0, 100, oldObj["flipY"], newObj["flipY"]);

//STROKE
new_letter["strokeW"] = map(percent, 0, 80, oldObj["strokeW"], newObj["strokeW"]);


return new_letter;
}

var swapWords = [
  "GERMANO!",
  "BAUHAUS!",
  "YOURSELF",
  "TYPE4YOU",
  "BONELESS",
  "CAITLINP",
  "01234567",
  "DURATION",
  "PHYSICAL",
  "QUESTION"
]