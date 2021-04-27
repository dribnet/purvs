/* these are optional special variables which will change the system */

var systemBackgroundColor = "#5b3849";
var systemLineColor = "#ccc2b6";
var systemBoxColor = "#ccc2b6";
 

/* internal constants */

const strokeColor = "#1d1d1d"; //black
const dominoColor1 = "#f3f2ed"; //white
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

  noStroke();
  fill(140, 140, 140); // grey
  rectMode(CENTER);
  rect(53, 103, 90, 190, 10); // shadow
  fill(dominoColor1);
  rect(50, 100, 90, 190, 10); // domino

 

  //MIDDLE LINE OF DOMINO PIECE

  stroke(strokeColor);
  strokeWeight(5);
  line(15, 100, 85, 100);

  //DOTS

  let dotsize = 17;

  noStroke();
  let color1 = str(letterData["color1"]);
  color1 = color(color1);
  let color2 = str(letterData["color2"]);
  color2 = color(color2);
  let color3 = str(letterData["color3"]);
  color3 = color(color3);
  let color4 = str(letterData["color4"]);
  color4 = color(color4);
  let color5 = str(letterData["color5"]);
  color5 = color(color5);
  let color6 = str(letterData["color6"]);
  color6 = color(color6);
  let color7 = str(letterData["color7"]);
  color7 = color(color7);
  let color8 = str(letterData["color8"]);
  color8 = color(color8);
  let color9 = str(letterData["color9"]);
  color9 = color(color9);
  let color10 = str(letterData["color10"]);
  color10 = color(color10);
  let color11 = str(letterData["color11"]);
  color11 = color(color11);
  let color12 = str(letterData["color12"]);
  color12 = color(color12);
  let color13 = str(letterData["color13"]);
  color13 = color(color13);


  fill(color1);
  ellipse(dotX, dotY, dotsize, dotsize); //middle bottom
  fill(color2);
  ellipse(dotX+25, dotY-27, dotsize, dotsize); // bottom right 3
  fill(color3);
  ellipse(dotX-25, dotY-27, dotsize, dotsize); // bottom left 3
  fill(color4);
  ellipse(dotX+25, dotY, dotsize, dotsize); // bottom right 2
  fill(color5);
  ellipse(dotX-25, dotY, dotsize, dotsize); // bottom left 2
  fill(color6);
  ellipse(dotX+25, dotY+27, dotsize, dotsize); // bottom right 1
  fill(color7);
  ellipse(dotX-25, dotY+27, dotsize, dotsize); // bottom left 1

  fill(color8);
  ellipse(dotX, dotY-90, dotsize, dotsize); //middle top
  fill(color9);
  ellipse(dotX+25, dotY-117, dotsize, dotsize); // bottom right 3
  fill(color10);
  ellipse(dotX-25, dotY-117, dotsize, dotsize); // bottom left 3
  fill(color11);
  ellipse(dotX+25, dotY-63, dotsize, dotsize); // bottom right 1
  fill(color12);
  ellipse(dotX-25, dotY-63, dotsize, dotsize); // bottom left 1
 

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
