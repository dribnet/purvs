/* these are optional special variables which will change the system */
var systemBackgroundColor = "#221D23";
var systemLineColor = "#FFFFFF";
var systemBoxColor = "#00c800";

/* internal constants */
const bloodRed  = "#DB162F";
const niteBlack  = "#221D23";
const strokeColor  = "#FCDEBE";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(2);



//triangle1
let x1 = letterData["x1"];
let x2 = letterData["x2"];
let x3 = letterData["x3"];

let y1 = letterData["y1"];
let y2 = letterData["y2"];
let y3 = letterData["y3"];

//triangle2
let a1 = letterData["a1"];
let a2 = letterData["a2"];
let a3 = letterData["a3"];

let b1 = letterData["b1"];
let b2 = letterData["b2"];
let b3 = letterData["b3"]; 

//circle 
let circlex = letterData["circlex"];
let circley = letterData["circley"];
let circled = letterData["circled"];

 
  //red rect
  fill(bloodRed);
  noStroke();
  rect(0,0,100,200,20);
  
  // triangles 
  fill(niteBlack);
  triangle(x1,y1,x2,y2,x3,y3);
  fill(niteBlack);
  triangle(a1,b1,a2,b2,a3,b3);
  
  //circle
  fill(strokeColor);
  circle(circlex,circley,circled);
 
  
   




  



}

function interpolate_letter(percent, oldObj, newObj) {
  // DO NOT DELETE THIS LINE vvvvv
  let new_letter = {};
  // DO NOT DELETE THIS LINE ^^^^^
 let targetx1 = -30; 
 let targety1 = -30
 let targetx2 = -30
 let targety2 = -30
 let targetx3 = -30
 let targety3 = -30

 let defaultChar = getObjFromChar("default"); 

 if(percent <50){
  new_letter["x1"]    = map(percent, 0, 50, oldObj["x1"], targetx1);
  new_letter["y1"]    = map(percent, 0, 50, oldObj["y1"], targety1);
  new_letter["x2"]    = map(percent, 0, 50, oldObj["x2"], targetx2);
  new_letter["y2"]    = map(percent, 0, 50, oldObj["y2"], targety2);
  new_letter["x3"]    = map(percent, 0, 50, oldObj["x3"], targetx3);
  new_letter["y3"]    = map(percent, 0, 50, oldObj["y3"], targety3);
}
else{
  new_letter["x1"]    = map(percent, 51, 100, targetx1, newObj["x1"]);
  new_letter["y1"]    = map(percent, 51, 100, targety1, newObj["y1"]);
  new_letter["x2"]    = map(percent, 51, 100, targetx2, newObj["x2"]);
  new_letter["y2"]    = map(percent, 51, 100, targety2, newObj["y2"]);
  new_letter["x3"]    = map(percent, 51, 100, targetx3, newObj["x3"]);
  new_letter["y3"]    = map(percent, 51, 100, targety3, newObj["y3"]);
}
  


  // DO NOT DELETE BELOW HERE!!!!!
  return new_letter;
}

var swapWords = [
  "MOUNTAIN",
  "AMAZING",
  "ABSTRACT"
  
]