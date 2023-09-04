const colorFront  = "#199cff";
const colorStroke = "#ffaa00";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
  var rx=[0,0,0,0,0];
  var ry=[0,0,0,0,0];
  var grey=[255,255,255,255];
  var lastMillis = 0;
function drawLetter(letterData) {
  // color/stroke setup
  fill(255);
  stroke(255);
  strokeWeight(7);
rectMode(CENTER);
//loads letter coordinates into array
let xp = [letterData["x1"]+rx[0],letterData["x2"]+rx[1],letterData["x3"]+rx[2],letterData["x4"]+rx[3],letterData["x5"]+rx[4]]
let yp = [letterData["y1"]+ry[0],letterData["y2"]+ry[1],letterData["y3"]+ry[2],letterData["y4"]+ry[3],letterData["y5"]+ry[4]]
//draws lines
for(var i=0;i<4;i++){
fill(grey[i]);
stroke(grey[i]);
line(xp[i],yp[i],xp[i+1],yp[i+1]);
}
//draws points
stroke(255);
fill(255);
for(var i=0;i<5;i++){
rect(xp[i],yp[i],3,3);
}
//adds randomisation
let curMillis = int(millis() / 300);
if(curMillis != lastMillis) {
  lastMillis = curMillis;
  for(var i =0;i<5;i++){
    rx[i]=random(-7,7);
    ry[i]=random(-7,7);
  }
  for(var i =0;i<4;i++){
    grey[i]=random(50,255);
  }
}
}

function interpolate_letter(percent, oldObj, newObj){
  let new_letter = {};
  new_letter["x1"]=map(percent,0,100,oldObj["x1"],newObj["x1"]);
  new_letter["y1"]=map(percent,0,100,oldObj["y1"],newObj["y1"]);
  new_letter["x2"]=map(percent,0,100,oldObj["x2"],newObj["x2"]);
  new_letter["y2"]=map(percent,0,100,oldObj["y2"],newObj["y2"]);
  new_letter["x3"]=map(percent,0,100,oldObj["x3"],newObj["x3"]);
  new_letter["y3"]=map(percent,0,100,oldObj["y3"],newObj["y3"]);
  new_letter["x4"]=map(percent,0,100,oldObj["x4"],newObj["x4"]);
  new_letter["y4"]=map(percent,0,100,oldObj["y4"],newObj["y4"]);
  new_letter["x5"]=map(percent,0,100,oldObj["x5"],newObj["x5"]);
  new_letter["y5"]=map(percent,0,100,oldObj["y5"],newObj["y5"]);
  return new_letter;
}
var swapWords = [
  "VICTORY2",
  "WAYTRUTH",
  "GOODSEED",
  "BADSEEDS",
  "PRODIGAL",
  "COLINMCC",
  "ILOVEGOD"
]