// const blue  = "#222638";
const blue  = "#384061";
const yellow = "#F2D28A";
const dark = "#B38800";
const colorFront2  = "#59ccff";
const colorStroke  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  angleMode(DEGREES);

  // determine parameters for quads & lines

  let x1 = letterData["x1"];//top quad width 
  let y1 = letterData["y1"];//top quad height
  let hy1 = letterData["hy1"];//top quad horizontal symmetry line (y position)
  let sw1 =letterData["sw1"];//top quad strokeweight
  
  let x2 = letterData["x2"];//middle quad width
  let y2 = letterData["y2"];//middle quad height
  let hy2 = letterData["hy2"];//middle quad y position (horizontal symmetry line)
  let sw2 =letterData["sw2"];

  let x3 = letterData["x3"];//bottom quad width
  let y3 = letterData["y3"];//bottom quad height
  let hy3 = letterData["hy3"];//bottom quad y position
  let sw3 =letterData["sw3"];//bottom quad strokeweight

  let ly = letterData["ly"];//y position for group of lines




  //backgrounds settings------------------------------------------------

  //frame rects-----------------------------------------
  push();
  rectMode(RADIUS);
  stroke(yellow);
  strokeWeight(2);
  noFill();
  var a = 50;
  rect(50,100,a,100);

  pop();



  //lines-------------------------------------parallel
  stroke(yellow);
  strokeWeight(0.8);
  strokeCap(ROUND);

  for(i = 0;i<=6;i++){
    var g = 3;//distance between each line
    var g2 = g*i;// distance of all lines
    var c = 50-g;//left lines staring x position

    line(0,ly+3*i,100,ly+3*i);//parallel lines with same width
  }
  
  //draw quads-----------------------------------------main body
  var add = 1;//adjust all the strokeweights
  strokeCap(SQUARE);


  noFill();
  stroke(yellow);
  strokeWeight(sw2+add);
  quad(50,y2,x2,hy2,50,hy2*2-y2,100-x2,hy2);//middle quad

  stroke(blue);
  strokeWeight(sw2-4);
  quad(50,y2,x2,hy2,50,hy2*2-y2,100-x2,hy2);//blue quad following msqaure

  stroke(yellow);
  strokeWeight(sw1+add);
  quad(50,y1,x1,hy1,50,hy1*2-y1,100-x1,hy1);//top quad

  stroke(yellow);
  strokeWeight(sw3+add);
  quad(50,y3,x3,hy3,50,hy3*2-y3,100-x3,hy3);//bottom quad


}



function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["x1"]    = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["hy1"] = map(percent, 0, 100, oldObj["hy1"], newObj["hy1"]);
  new_letter["sw1"] = map(percent, 0, 100, oldObj["sw1"], newObj["sw1"]);

  new_letter["x2"]    = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["hy2"] = map(percent, 0, 100, oldObj["hy2"], newObj["hy2"]);
  new_letter["sw2"] = map(percent, 0, 100, oldObj["sw2"], newObj["sw2"]);

  new_letter["x3"]    = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["hy3"] = map(percent, 0, 100, oldObj["hy3"], newObj["hy3"]);
  new_letter["sw3"] = map(percent, 0, 100, oldObj["sw3"], newObj["sw3"]);
  new_letter["ly"] = map(percent, 0, 100, oldObj["ly"], newObj["ly"]);

  return new_letter;
}

var swapWords = [
  "DECOEVER",//font name
  "SHOWTIME",
  "EVERGOLD",
  "NEVERDIE",
  "INDUSTRY",
  "YINANZHA",//my name :)
  "MDDN2422",//course
  "20200522"
]