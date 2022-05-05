/* these are optional special variables which will change the system */
var systemBackgroundColor = "#F2DBAE";
var systemLineColor = "#734567";
var systemBoxColor = "#4B50BF";

/* internal constants */

const strokeColor  = "#0F6466";
const arcOffsetColorA  = "#D9967E";
const arcOffsetColorB  = "#AFBF34";
const rectAcolor  = "#7D8C0B";
const rectBcolor  = "#D9863D";

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
  strokeWeight(4);

  //arc's para
  let arcPosx = letterData["arcA_PosX"];
  let arcPosY = letterData["arcA_PosY"];
  let arcWidth = letterData["arcA_SizeX"];
  let arcHeight = letterData["arcA_SizeY"];
  let arcBegin = letterData["arcA_Begin"];
  let arcEnd = letterData["arcA_End"];

  //rectA's para
  let rectAPosX = letterData["rectA_PosX"];
  let rectAPosY = letterData["rectA_PosY"];
  let rectAWidth = letterData["rectA_SizeX"];
  let rectAHeight = letterData["rectA_SizeY"];

  //rectB's para
  let rectBPosX = letterData["rectB_PosX"];
  let rectBPosY = letterData["rectB_PosY"];
  let rectBWidth = letterData["rectB_SizeX"];
  let rectBHeight = letterData["rectB_SizeY"];

push();
  //draw the main arc
  angleMode(DEGREES);
  noFill();
  strokeWeight(8);
  arc(arcPosx, arcPosY, arcWidth, arcHeight, arcBegin, arcEnd);

  //draw the offset arc
  strokeWeight(4);
  if(arcBegin>=0){ //red stroke if the arc bending towards left side
  stroke(arcOffsetColorA);
  arc(arcPosx*1.06, arcPosY*0.96, arcWidth, arcHeight, arcBegin, arcEnd);
} else { //green stroke if the arc bending towards right side
  stroke(arcOffsetColorB);
  arc(arcPosx*0.9, arcPosY*0.92, arcWidth, arcHeight, arcBegin, arcEnd);
}


  //draw the green color rect
  stroke(strokeColor);
  strokeWeight(4);
  fill(rectAcolor);
  rectMode(CENTER);
  rect(rectAPosX, rectAPosY, rectAWidth, rectAHeight, 14);

  //draw the orange color rect
  strokeWeight(6);
  fill(rectBcolor);
  rect(rectBPosX, rectBPosY, rectBWidth, rectBHeight, 14);
pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["arcA_PosX"] = map(percent, 0, 100, oldObj["arcA_PosX"], newObj["arcA_PosX"]);
  new_letter["arcA_PosY"] = map(percent, 0, 100, oldObj["arcA_PosY"], newObj["arcA_PosY"]);

  new_letter["arcA_Begin"] = map(percent, 0, 100, oldObj["arcA_Begin"], newObj["arcA_Begin"]);
  new_letter["arcA_End"] = map(percent, 0, 100, oldObj["arcA_End"], newObj["arcA_End"]);


  //changing the letters size at percent 50 when transforming
  if(percent < 50){
    //change arc size
    //make the arc's x & y size as big as the bounding box when percent at 50
    new_letter["arcA_SizeX"] = map(percent, 0, 50, oldObj["arcA_SizeX"], 100);
    new_letter["arcA_SizeY"] = map(percent, 0, 50, oldObj["arcA_SizeY"], 200);
    //--------------------------------------------------------------------------

    //change rectA size at percent 50
    //if the old rect sizeX <=30 &/or sizeY <=50, they will grow larger (x to 70, y to 140)
    //otherwise they will shrink smaller (x to 20, y to 40)
    if(oldObj["rectA_SizeX"] <= 30){
      new_letter["rectA_SizeX"] = map(percent, 0, 50, oldObj["rectA_SizeX"], 70);
    } else {
      new_letter["rectA_SizeX"] = map(percent, 0, 50, oldObj["rectA_SizeX"], 20);
    }

    if(oldObj["rectA_SizeY"] <= 50){
      new_letter["rectA_SizeY"] = map(percent, 0, 50, oldObj["rectA_SizeY"], 140);
    } else {
      new_letter["rectA_SizeY"] = map(percent, 0, 50, oldObj["rectA_SizeY"], 40);
    }
    //--------------------------------------------------------------------------

    //change rectB size at percent 50
    //if the old rect sizeX <=20 &/or sizeY <=40, they will grow larger (x to 55, y to 100)
    //otherwise they will shrink smaller (x to 10, y to 20)
    if(oldObj["rectB_SizeX"] <= 20){
      new_letter["rectB_SizeX"] = map(percent, 0, 50, oldObj["rectB_SizeX"], 55);
    } else {
      new_letter["rectB_SizeX"] = map(percent, 0, 50, oldObj["rectB_SizeX"], 10);
    }

    if(oldObj["rectB_SizeY"] <= 40){
      new_letter["rectB_SizeY"] = map(percent, 0, 50, oldObj["rectB_SizeY"], 100);
    } else {
      new_letter["rectB_SizeY"] = map(percent, 0, 50, oldObj["rectB_SizeY"], 20);
    }
    //--------------------------------------------------------------------------
  }


  //making the letters size back to normal at percent 100
  else{
    //change arc size
    //make arc's x & y size back to normal
    new_letter["arcA_SizeX"] = map(percent, 51, 100, 100, newObj["arcA_SizeX"]);
    new_letter["arcA_SizeY"] = map(percent, 51, 100, 200, newObj["arcA_SizeY"]);
    //--------------------------------------------------------------------------

    //change rectA size
    //make the grown x & y back to normal size (x from 70, y from 140)
    //make the shrunken x & y back to normal size (x from 20, y from 40)
    if(oldObj["rectA_SizeX"] <= 30){
      new_letter["rectA_SizeX"] = map(percent, 51, 100, 70, newObj["rectA_SizeX"]);
    } else {
      new_letter["rectA_SizeX"] = map(percent, 51, 100, 20, newObj["rectA_SizeX"]);
    }

    if(oldObj["rectA_SizeY"] <= 50){
      new_letter["rectA_SizeY"] = map(percent, 51, 100, 140, newObj["rectA_SizeY"]);
    } else {
      new_letter["rectA_SizeY"] = map(percent, 51, 100, 40, newObj["rectA_SizeY"]);
    }
    //--------------------------------------------------------------------------

    //change rectB size
    //make the grown x & y back to normal size (x from 55, y from 100)
    //make the shrunken x & y back to normal size (x from 10, y from 20)
    if(oldObj["rectB_SizeX"] <= 20){
      new_letter["rectB_SizeX"] = map(percent, 51, 100, 55, newObj["rectB_SizeX"]);
    } else {
      new_letter["rectB_SizeX"] = map(percent, 51, 100, 10, newObj["rectB_SizeX"]);
    }

    if(oldObj["rectB_SizeY"] <= 40){
      new_letter["rectB_SizeY"] = map(percent, 51, 100, 100, newObj["rectB_SizeY"]);
    } else {
      new_letter["rectB_SizeY"] = map(percent, 51, 100, 20, newObj["rectB_SizeY"]);
    }

  }

  new_letter["rectA_PosX"] = map(percent, 0, 100, oldObj["rectA_PosX"], newObj["rectA_PosX"]);
  new_letter["rectA_PosY"] = map(percent, 0, 100, oldObj["rectA_PosY"], newObj["rectA_PosY"]);

  new_letter["rectB_PosX"] = map(percent, 0, 100, oldObj["rectB_PosX"], newObj["rectB_PosX"]);
  new_letter["rectB_PosY"] = map(percent, 0, 100, oldObj["rectB_PosY"], newObj["rectB_PosY"]);

  return new_letter;
}

var swapWords = [
  "GREENERY",
  "TROPICAL",
  "WOODLAND",
  "VICTORIA"
]
