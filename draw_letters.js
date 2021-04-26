/* these are optional special variables which will change the system */

var systemBackgroundColor = "#5b3849";

var systemLineColor = "#ccc2b6";

var systemBoxColor = "#ccc2b6";

 

/* internal constants */

const strokeColor = "#1d1d1d"; //black
const dominoColor1 = "#f3f2ed"; //white
const dominoColor2  = "#f3f2ed";
const shineColor = "#8c8c8c"

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
  fill(strokeColor);
  ellipse(dotX, dotY, dotsize, dotsize); //middle bottom
  ellipse(dotX+25, dotY-27, dotsize, dotsize); // bottom right 3
  ellipse(dotX-25, dotY-27, dotsize, dotsize); // bottom left 3
  ellipse(dotX+25, dotY, dotsize, dotsize); // bottom right 2
  ellipse(dotX-25, dotY, dotsize, dotsize); // bottom left 2
  ellipse(dotX+25, dotY+27, dotsize, dotsize); // bottom right 1
  ellipse(dotX-25, dotY+27, dotsize, dotsize); // bottom left 1

  ellipse(dotX, dotY-90, dotsize, dotsize); //middle top
  ellipse(dotX+25, dotY-117, dotsize, dotsize); // bottom right 3
  ellipse(dotX-25, dotY-117, dotsize, dotsize); // bottom left 3
  ellipse(dotX+25, dotY-63, dotsize, dotsize); // bottom right 1
  ellipse(dotX-25, dotY-63, dotsize, dotsize); // bottom left 1
 

  // //DOTS SHINE

  let shineWidth = 7;
  let shineHeight = 5;
 
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
