/* these are optional special variables which will change the system */

var systemBackgroundColor = "#02A89E";
var systemLineColor = "#ccc2b6";
var systemBoxColor = "#ccc2b6";

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

}

function interpolate_letter(percent, oldObj, newObj) {

  let new_letter = {};

  // if(percent < 50){
  //   new_letter["domino"] = oldObj["domino"]
  // }
  // else{
  //   new_letter["domino"] = map(percent,51, 100,oldObj["domino"],newObj["domino"]);
  // }

  new_letter["color1"] = map(percent, 0, 100, oldObj["color1"], newObj["color1"]);
  new_letter["color2"] = map(percent, 0, 100, oldObj["color2"], newObj["color2"]);
  new_letter["color3"] = map(percent, 0, 100, oldObj["color3"], newObj["color3"]);
  new_letter["color4"] = map(percent, 0, 100, oldObj["color4"], newObj["color4"]);
  new_letter["color5"] = map(percent, 0, 100, oldObj["color5"], newObj["color5"]);
  new_letter["color6"] = map(percent, 0, 100, oldObj["color6"], newObj["color6"]);
  new_letter["color7"] = map(percent, 0, 100, oldObj["color7"], newObj["color7"]);
  new_letter["color8"] = map(percent, 0, 100, oldObj["color8"], newObj["color8"]);
  new_letter["color9"] = map(percent, 0, 100, oldObj["color9"], newObj["color9"]);
  new_letter["color10"] = map(percent, 0, 100, oldObj["color10"], newObj["color10"]);
  new_letter["color11"] = map(percent, 0, 100, oldObj["color11"], newObj["color11"]);
  new_letter["color12"] = map(percent, 0, 100, oldObj["color12"], newObj["color12"]);
  new_letter["color13"] = map(percent, 0, 100, oldObj["color13"], newObj["color13"]);
  new_letter["color14"] = map(percent, 0, 100, oldObj["color14"], newObj["color14"]);
  new_letter["line1"] = map(percent,0,100,oldObj["line1"],newObj["line1"]);
  new_letter["domino"] = map(percent,0,100,oldObj["domino"],newObj["domino"]);
  

  return new_letter;

}

 

var swapWords = [

  "DOMINO37",

  "COLLAPSE",

  "CARNIVAL",

  "SPINNING",

  "12345678",

  "ROULETTE",

  "PLATFORM",

  "UNICORNS",

  "HUSTLERS"

]
