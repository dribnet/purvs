/* these are optional special variables which will change the system */
const backgroundColor  = "#0D0208";
var systemBackgroundColor = backgroundColor;
// var systemLineColor = "#0D0208";
// var systemBoxColor = "#0D0208";
var systemLineColor = "#FFA500";
var systemBoxColor = "#FFA500";

/* internal constants */



const fillcol  = "#008F11";
const CENTREX=50;
const CENTREY=100;

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function vertpolysym(letterData){
fill(fillcol);
  beginShape();
  vertex(CENTREX+letterData["x1"],CENTREY+letterData["y1"]);
  vertex(CENTREX+letterData["x2"],CENTREY+letterData["y2"]);
  vertex(CENTREX+letterData["x3"],CENTREY+letterData["y3"]);
  vertex(CENTREX+letterData["x4"],CENTREY+letterData["y4"]);
  vertex(CENTREX+letterData["x5"],CENTREY+letterData["y5"]);

  vertex(CENTREX-letterData["x5"],CENTREY+letterData["y5"]);

  vertex(CENTREX-letterData["x4"],CENTREY+letterData["y4"]);

  vertex(CENTREX-letterData["x3"],CENTREY+letterData["y3"]);

  vertex(CENTREX-letterData["x2"],CENTREY+letterData["y2"]);
  vertex(CENTREX-letterData["x1"],CENTREY+letterData["y1"]);
  endShape();


}
function horpolysym(letterData){
fill(fillcol);
  beginShape();
  vertex(CENTREX+letterData["x1"],CENTREY-letterData["y1"]);
  vertex(CENTREX+letterData["x2"],CENTREY-letterData["y2"]);
  vertex(CENTREX+letterData["x3"],CENTREY-letterData["y3"]);
  vertex(CENTREX+letterData["x4"],CENTREY-letterData["y4"]);
  vertex(CENTREX+letterData["x5"],CENTREY-letterData["y5"]);


  vertex(CENTREX+letterData["x5"],CENTREY+letterData["y5"]);

  vertex(CENTREX+letterData["x4"],CENTREY+letterData["y4"]);

  vertex(CENTREX+letterData["x3"],CENTREY+letterData["y3"]);
  vertex(CENTREX+letterData["x2"],CENTREY+letterData["y2"]);
  vertex(CENTREX+letterData["x1"],CENTREY+letterData["y1"]);

  endShape();


}
function nopolysym(letterData){
fill(fillcol);
  beginShape();
  vertex(CENTREX+letterData["x1"],CENTREY+letterData["y1"]);
  vertex(CENTREX+letterData["x2"],CENTREY+letterData["y2"]);
  vertex(CENTREX+letterData["x3"],CENTREY+letterData["y3"]);
  vertex(CENTREX+letterData["x4"],CENTREY+letterData["y4"]);
  vertex(CENTREX+letterData["x5"],CENTREY+letterData["y5"]);


  endShape();


}

function cir(letterData,x,y){
  fill(backgroundColor);
     ellipse(CENTREX+x*letterData["ex"], CENTREY+y*letterData["ey"], letterData["ewidth"], letterData["eheight"]);
}
function drawLetter(letterData) {
  // color/stroke setup
 noStroke();
// stroke("#FFA500");
// strokeWeight(2);
let symmode = letterData["symmode"];

if (symmode.startsWith("symmetry_vert")){//if vertical sym
  vertpolysym(letterData);
  if (symmode.endsWith("offsetcir")){ //offseted sym circles
    cir(letterData,1,-1);
    cir(letterData,-1,1);
  }
  else if (symmode.endsWith("no_cir")){

cir(letterData,1,1);
}
  else {
//sym circles
  cir(letterData,1,1);
  cir(letterData,-1,1);
}
}
else if (symmode.startsWith("symmetry_hor")) {//if horizontal sym
horpolysym(letterData);
  //sym(letterData,1,-1);
//  sym(letterData,1,1);
if (symmode.endsWith("no_cir")){
  cir(letterData,1,1);
}
else if (symmode.endsWith("offsetcirvert")){
  cir(letterData,1,-1);
  cir(letterData,-1,1);
}
else if (symmode.endsWith("rotated")){

push();

cir(letterData,1,1);
  ellipse(CENTREX+letterData["ex"]-5, CENTREY+letterData["ey"]+letterData["eheight"]/2, letterData["eheight"], letterData["ewidth"]);
pop();
}
else{
  cir(letterData,1,-1);
  cir(letterData,1,1);
}


}
else {
  nopolysym(letterData);
  if (symmode.endsWith("cir_only")){
    cir(letterData,1,1);
    cir(letterData,1,-1);
  }
  else {
     cir(letterData,1,1);
}
}

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["symmode"]    = map(percent, 0, 100, oldObj["symmode"], newObj["symmode"]);
  new_letter["x1"]    = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["x2"] = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["x3"] = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["x4"]    = map(percent, 0, 100, oldObj["x4"], newObj["x5"]);
  new_letter["x5"] = map(percent, 0, 100, oldObj["x5"], newObj["x5"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["y2"]    = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);
  new_letter["y5"]    = map(percent, 0, 100, oldObj["y5"], newObj["y5"]);
  new_letter["ex"] = map(percent, 0, 100, oldObj["ex"], newObj["ex"]);
  new_letter["ey"] = map(percent, 0, 100, oldObj["ey"], newObj["ey"]);
  new_letter["ewidth"]    = map(percent, 0, 100, oldObj["ewidth"], newObj["ewidth"]);
  new_letter["eheight"] = map(percent, 0, 100, oldObj["eheight"], newObj["eheight"]);

  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
