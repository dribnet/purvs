/* these are optional special variables which will change the system */
var systemBackgroundColor = "#000000"; //black
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#287afc";

const strokeColor  = "#233f11"; 
const orange  = "#fca028"; // rects colour
      const negativespace = "#000000"; // black rect
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  const lightBlue  = color(245, 232, 91,140); //make yellow 
  // color/stroke setup
  stroke(strokeColor);
  strokeWeight(0);
  // determine parameters bigger circle
  let size2 = letterData["size"]; // size of yellow circle
  let pos2x = 50  + letterData["offsetx"]; // yellow circle x
  let pos2y = 150 + letterData["offsety"]; // yellow circle y postion 

  // determine  parameters smaller circle
  let pos3x =  letterData["smalllength"]; // small circle x position
  let pos3y =   letterData["smallheight"]; // small circle y position
  let size3 = letterData["sizesmall"] -50; // size of small circle
 let posxrl =  letterData["leftrectW"]; // left rectangle width
  let posyrl =  letterData["leftrectH"]; // left rectangle height
  let posxrr = letterData["RightrectW"]; // right rectangle width
 let posyrr =   letterData["RightrectH"]; // right rectangle height

 // triangle
 let trix1 =   letterData["x1"]; // point 1 x position = mid point triangle
  let triy1 = letterData["y1"] ; // point 1 y position
 let trix2 =  letterData["x2"]; // point 2 x position
  let triy2 =  letterData["y2"]; // point 2 y position
  let trix3 = letterData["x3"]; // point 3 x position
 let triy3 =   letterData["y3"]; // point 3 y position

 let posxne =  letterData["negativeW"]; // black rectangle (negative space) width
  let posyne =  letterData["negativeH"]; // black rectangle (negative space) height

 

 //triangle from (0,0) to (100, 200)
 fill(255, 18, 26);
 triangle(trix1, triy1, trix2, triy2, trix3, triy3); // each angle is made up of a trix and a triy 


  // draw rect left
 fill(orange);
  rect(0, 80, posxrl, posyrl); 

// draw rect right
  fill(orange);
  rect(70, 80, posxrr, posyrr);


  //bigger circle
  fill(lightBlue, 140);
circle(pos2x, pos2y, size2);

  //NEGATIVE SPACE
fill(negativespace);
  rect(0, 80, posxne, posyne);


//DRAW circle 2
  fill(darkBlue);
  circle(pos3x, pos3y, size3);
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  let targetsize = 0; // this is the value that I want the HeadY to hit before moving on to its final destination

  let defaultChar = getObjFromChar("default"); // the variable defaultChar now contains all the infomation of the "default" section of letters.js

  if(percent < 50){
  new_letter["size"]    = map(percent, 0, 50, oldObj["size"], targetsize); // half way through the animation we want the HeadY to hit -30
  new_letter["offsetx"] = map(percent, 0, 50, oldObj["offsetx"], defaultChar["offsety"]); // half way through the animation the face looks like default
   new_letter["offsety"] = map(percent, 0, 50, oldObj["offsety"], defaultChar["offsetx"]);
  } 
  else{
   new_letter["size"]    = map(percent, 50, 100, oldObj["size"], targetsize); // starting from 0 we are moving to the next letters HeadY
  new_letter["offsetx"]  = map(percent, 50, 100, defaultChar["offsetx"], newObj["offsety"]); // moving from default to the new letter
  new_letter["offsety"]  = map(percent, 50, 100, defaultChar["offsetx"], newObj["offsetx"]);
  }

  return new_letter;
}


var swapWords = [
 "FUNHOUSE",
  "MARSHALL",
  "BACTERIA",
  "QUESTION",
  "MAJESTIC",
  "DISASTER",
  "CLOWNARY",
  "GIRLBOSS"
]