/* these are optional special variables which will change the system */

var systemBackgroundColor = "#02A89E";
var systemLineColor = "#ccc2b6";
var systemBoxColor = "#ccc2b6";
 

/* internal constants */

const dominoColor2  = "#f3f2ed"; 
const shineColor = "#f3f2ed";

/*
* Draw the letter given the letterData
*
* Letters should always be drawn with the
* following bounding box guideline:
* from (0,0) to (100, 200)
*/

function drawLetter(letterData) {

  angleMode(DEGREES);

let dotX = 50;
let dotY = 145;

 
  // DOMINO PIECE

let domino = letterData["domino"];

  noStroke();
  fill(140, 140, 140); // grey
  rectMode(CENTER);
  rect(53, 103, 90, 190, 10); // shadow
  fill(domino);
  rect(50, 100, 90, 190, 10); // domino

 

  //MIDDLE LINE OF DOMINO PIECE

  // let line1 = str(letterData["line1"]);
  // line1 = color(line1);
let line1 = letterData["line1"];
  stroke(line1);
  strokeWeight(5);
  line(15, 100, 85, 100);

  //DOTS

let dotsize = 17;

  noStroke();
  let color1 = letterData["color1"];
  let color2 = letterData["color2"];
  let color3 = letterData["color3"];
  let color4 = letterData["color4"];
  let color5 = letterData["color5"];
  let color6 = letterData["color6"];
  let color7 = letterData["color7"];
  let color8 = letterData["color8"];
  let color9 = letterData["color9"];
  let color10 = letterData["color10"];
  let color11 = letterData["color11"];
  let color12 = letterData["color12"];
  let color13 = letterData["color13"];
  let color14 = letterData["color14"];


  fill(color1);
  ellipse(dotX, dotY, dotsize, dotsize); //middle bottom
  fill(color2);
  ellipse(dotX+25, dotY-27, dotsize, dotsize); // right 1
  fill(color3);
  ellipse(dotX-25, dotY-27, dotsize, dotsize); // left 1
  fill(color4);
  ellipse(dotX+25, dotY, dotsize, dotsize); // right 2
  fill(color5);
  ellipse(dotX-25, dotY, dotsize, dotsize); // left 2
  fill(color6);
  ellipse(dotX+25, dotY+27, dotsize, dotsize); // right 3
  fill(color7);
  ellipse(dotX-25, dotY+27, dotsize, dotsize); // left 3

  fill(color8);
  ellipse(dotX, dotY-90, dotsize, dotsize); //middle top
  fill(color9);
  ellipse(dotX+25, dotY-117, dotsize, dotsize); // top right 3
  fill(color10);
  ellipse(dotX-25, dotY-117, dotsize, dotsize); // top left 3
  fill(color11);
  ellipse(dotX+25, dotY-63, dotsize, dotsize); // top right 1
  fill(color12);
  ellipse(dotX-25, dotY-63, dotsize, dotsize); // top left 1
  fill(color13);
  ellipse(dotX+25, dotY-90, dotsize, dotsize); // top right 3
  fill(color14);
  ellipse(dotX-25, dotY-90, dotsize, dotsize); // top left 3
 

  //DOTS SHINE

  let shineWidth = 6;
  let shineHeight = 4;
 
  fill(shineColor);
  ellipse(dotX+2, dotY+4, shineWidth, shineHeight); //middle bottom
  ellipse(dotX+27, dotY-23, shineWidth, shineHeight); // bottom right 3
  ellipse(dotX-23, dotY-23, shineWidth, shineHeight); // bottom left 3
  ellipse(dotX+27, dotY+4, shineWidth, shineHeight); // bottom right 2
  ellipse(dotX-23, dotY+4, shineWidth, shineHeight); // bottom left 2
  ellipse(dotX+27, dotY+31, shineWidth, shineHeight); // bottom right 1
  ellipse(dotX-23, dotY+31, shineWidth, shineHeight); // bottom left 1

  ellipse(dotX+2, dotY-86, shineWidth, shineHeight); //middle top
  ellipse(dotX+27, dotY-113, shineWidth, shineHeight); // bottom right 3
  ellipse(dotX-23, dotY-113, shineWidth, shineHeight); // bottom left 3
  ellipse(dotX+27, dotY-59, shineWidth, shineHeight); // bottom right 1
  ellipse(dotX-23, dotY-59, shineWidth, shineHeight); // bottom left 1
  ellipse();
  ellipse();

  // customDots(50, 100);

}

 

// function customDots(dotX, dotY){

 

//   noStroke();

//   fill(strokeColor);

//   ellipse(dotX, dotY, dotsize, dotsize); //middle bottom

 

//   fill(shineColor);

//   ellipse(dotX+2, dotY+4, shineWidth, shineHeight); //middle bottom

 

// }

 

function interpolate_letter(percent, oldObj, newObj) {

  let new_letter = {};
  new_letter["line1"] = map(percent,0,100,oldObj["line1"],newObj["line1"]);
  new_letter["domino"] = map(percent,0,100,oldObj["domino"],newObj["domino"]);
  // new_letter["line1"] = map(percent,0,100,oldObj["line1"],newObj["line1"]);
  // new_letter["line1"] = map(percent,0,100,oldObj["line1"],newObj["line1"]);
  // new_letter["line1"] = map(percent,0,100,oldObj["line1"],newObj["line1"]);
  // new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  // new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  // new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);

  return new_letter;

}

 

var swapWords = [

  "ABBAABBA",

  "CAB?CAB?",

  "BAAAAAAA"

]
