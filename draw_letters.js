/* these are optional special variables which will change the system */
var systemBackgroundColor = "#F2DBAE";
var systemLineColor = "#734567";
var systemBoxColor = "#4B50BF";

/* internal constants */

const strokeColor  = "#0F6466";
const arcOffsetColor  = "#D9967E";
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

  let arcPosx = letterData["arcA_PosX"];
  let arcPosY = letterData["arcA_PosY"];
  let arcWidth = letterData["arcA_SizeX"];
  let arcHeight = letterData["arcA_SizeY"];
  let arcBegin = letterData["arcA_Begin"];
  let arcEnd = letterData["arcA_End"];

  let rectAPosX = letterData["rectA_PosX"];
  let rectAPosY = letterData["rectA_PosY"];
  let rectAWidth = letterData["rectA_SizeX"];
  let rectAHeight = letterData["rectA_SizeY"];

  let rectBPosX = letterData["rectB_PosX"];
  let rectBPosY = letterData["rectB_PosY"];
  let rectBWidth = letterData["rectB_SizeX"];
  let rectBHeight = letterData["rectB_SizeY"];

push();
  angleMode(DEGREES);
  noFill();
  strokeWeight(8);
  arc(arcPosx, arcPosY, arcWidth, arcHeight, arcBegin, arcEnd);
  strokeWeight(4);
  stroke(arcOffsetColor);
  arc(arcPosx*1.06, arcPosY*0.96, arcWidth, arcHeight, arcBegin, arcEnd);
  // stroke("#AFBF34");
  // arc(arcPosx*0.9, arcPosY*0.92, arcWidth, arcHeight, arcBegin, arcEnd);

  stroke(strokeColor);
  strokeWeight(4);
  //noStroke();
  fill(rectAcolor);
  rectMode(CENTER);
  rect(rectAPosX, rectAPosY, rectAWidth, rectAHeight, 14);
  strokeWeight(6);
  fill(rectBcolor);
  rect(rectBPosX, rectBPosY, rectBWidth, rectBHeight, 14);
pop();
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  new_letter["arcA_PosX"] = map(percent, 0, 100, oldObj["arcA_PosX"], newObj["arcA_PosX"]);
  new_letter["arcA_PosY"] = map(percent, 0, 100, oldObj["arcA_PosY"], newObj["arcA_PosY"]);
  // new_letter["arcA_SizeX"] = map(percent, 0, 100, oldObj["arcA_SizeX"], newObj["arcA_SizeX"]);
  // new_letter["arcA_SizeY"] = map(percent, 0, 100, oldObj["arcA_SizeY"], newObj["arcA_SizeY"]);
  new_letter["arcA_Begin"] = map(percent, 0, 100, oldObj["arcA_Begin"], newObj["arcA_Begin"]);
  new_letter["arcA_End"] = map(percent, 0, 100, oldObj["arcA_End"], newObj["arcA_End"]);

  if(percent < 50){
    //change arc size
    new_letter["arcA_SizeX"] = map(percent, 0, 50, oldObj["arcA_SizeX"], 100);
    new_letter["arcA_SizeY"] = map(percent, 0, 50, oldObj["arcA_SizeY"], 200);
    //--------------------------------------------------------------------------

    //change rectA size
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

    //change rectB size
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

  else{
    //change arc size
    new_letter["arcA_SizeX"] = map(percent, 51, 100, 100, newObj["arcA_SizeX"]);
    new_letter["arcA_SizeY"] = map(percent, 51, 100, 200, newObj["arcA_SizeY"]);
    //--------------------------------------------------------------------------

    //change rectA size
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
  // new_letter["rectA_SizeX"] = map(percent, 0, 100, oldObj["rectA_SizeX"], newObj["rectA_SizeX"]);
  // new_letter["rectA_SizeY"] = map(percent, 0, 100, oldObj["rectA_SizeY"], newObj["rectA_SizeY"]);

  new_letter["rectB_PosX"] = map(percent, 0, 100, oldObj["rectB_PosX"], newObj["rectB_PosX"]);
  new_letter["rectB_PosY"] = map(percent, 0, 100, oldObj["rectB_PosY"], newObj["rectB_PosY"]);
  // new_letter["rectB_SizeX"] = map(percent, 0, 100, oldObj["rectB_SizeX"], newObj["rectB_SizeX"]);
  // new_letter["rectB_SizeY"] = map(percent, 0, 100, oldObj["rectB_SizeY"], newObj["rectB_SizeY"]);

  return new_letter;
}

var swapWords = [
  "GREENERY",
  "TROPICAL",
  "WOODLAND",
  "VICTORIA"
]
