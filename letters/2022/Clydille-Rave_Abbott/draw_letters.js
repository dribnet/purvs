/* these are optional special variables which will change the system */
var systemBackgroundColor = "#16041c";
var systemLineColor = "#b2c7eb";
var systemBoxColor = "#00c800";

/* internal constants */
const lightRed = "#cb644e";
const lightYellow = "#b78b4c";
const strokeColor = "#03045e";
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  push()
  // determine parameters for red circle
  let circleR1 = letterData["circleR1"]; //First red circle
  let circleR2 = letterData["circleR2"]; //secound red circle
  let circleR3 = letterData["circleR3"]; //thrid red circle
  let posR1x = letterData["r1x"]; //First red circle x
  let posR1y = letterData["r1y"]; //First red circle y
  let posR2x = letterData["r2x"]; //secound red circle x
  let posR2y = letterData["r2y"]; //secound red circle y
  let posR3x = letterData["r3x"]; //thrid red circle x
  let posR3y = letterData["r3y"]; //thrid red circle y
  // Yellow circle
  let circleY1 = letterData["circleY1"]; //First yellow circle
  let circleY2 = letterData["circleY2"]; //secound yellow circle
  let circleY3 = letterData["circleY3"]; //thrid yellow circle
  let posY1x = letterData["y1x"]; //First yellow circle x
  let posY1y = letterData["y1y"]; //First yellow circle y
  let posY2x = letterData["y2x"]; //second yellow circle x
  let posY2y = letterData["y2y"]; //second yellow circle y
  let posY3x = letterData["y3x"]; //third yellow circle x
  let posY3y = letterData["y3y"]; //third yellow circle y
  //red lines
  let redline1 = letterData["redline1"] //First vertical red line
  let redline2 = letterData["redline2"] //second vertical red line
  let rl1x = letterData["rl1x"]; //First vertical red line x
  let rl1y = letterData["rl1y"]; //First vertical red line y
  let rl2x = letterData["rl2x"]; //second vertical red line x
  let rl2y = letterData["rl2y"]; //second vertical red line y
  //yellow lines
  let yellowline1 = letterData["yellowline1"] // horizontal yellow line
  let yellowline2 = letterData["yellowline2"] // vetical yellow line
  let yl1x = letterData["yl1x"]; // horizontal yellow line x
  let yl1y = letterData["yl1y"]; // horizontal yellow line y
  let yl2x = letterData["yl2x"]; // vetical yellow line x
  let yl2y = letterData["yl2y"]; // vetical yellow line y

  // yellow circles
  noStroke()
  fill(lightYellow);
  ellipse(posY1x, posY1y, circleY1, circleY1); //first circle
  ellipse(posY2x, posY2y, circleY2, circleY2); //second circle
  ellipse(posY3x, posY3y, circleY3, circleY3); //third circle
  //yellow lines
  rect(yl1x, yl1y, yellowline1, 10); //horizontal line
  rect(yl2x, yl2y, 10, yellowline2); //vetical line
  // red
  fill(lightRed);
  ellipse(posR1x, posR1y, circleR1, circleR1); //first circle
  ellipse(posR2x, posR2y, circleR2, circleR2); //second circle
  ellipse(posR3x, posR3y, circleR3, circleR3); //third circle
  //red lines
  rect(rl1x, rl1y, 10, redline1); //vetical line
  rect(rl2x, rl2y, 10, redline2); //vetical line
  pop()
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};

  let cricleY = 100;
  let linesY = 100;
  let linesX = 50;

  let defultChar = getObjFromChar("default");

  if (percent < 50) {
    new_letter["circleR1"] = map(percent, 0, 50, oldObj["circleR1"], newObj["circleR1"]); //First red circle
    new_letter["circleR2"] = map(percent, 0, 50, oldObj["circleR2"], newObj["circleR2"]); //secound red circle
    new_letter["circleR3"] = map(percent, 0, 50, oldObj["circleR3"], newObj["circleR3"]); //thrid red circle
    new_letter["r1x"] = map(percent, 0, 50, oldObj["r1x"], defultChar["r1x"]); //First red circle x
    new_letter["r1y"] = map(percent, 0, 50, oldObj["r1y"], cricleY); //First red circle y
    new_letter["r2x"] = map(percent, 0, 50, oldObj["r2x"], defultChar["r2x"]); //secound red circle x
    new_letter["r2y"] = map(percent, 0, 50, oldObj["r2y"], cricleY); //secound red circle y
    new_letter["r3x"] = map(percent, 0, 50, oldObj["r3x"], defultChar["r3x"]); //thrid red circle x
    new_letter["r3y"] = map(percent, 0, 50, oldObj["r3y"], cricleY); //thrid red circle y
    new_letter["circleY1"] = map(percent, 0, 50, oldObj["circleY1"], newObj["circleY1"]);//First yellow circle
    new_letter["circleY2"] = map(percent, 0, 50, oldObj["circleY2"], newObj["circleY2"]);//secound yellow circle
    new_letter["circleY3"] = map(percent, 0, 50, oldObj["circleY3"], newObj["circleY3"]);//thrid yellow circle
    new_letter["y1x"] = map(percent, 0, 50, oldObj["y1x"], defultChar["y1x"]);//First yellow circle x
    new_letter["y1y"] = map(percent, 0, 50, oldObj["y1y"], cricleY);//First yellow circle y
    new_letter["y2x"] = map(percent, 0, 50, oldObj["y2x"], defultChar["y2x"]);//second yellow circle x
    new_letter["y2y"] = map(percent, 0, 50, oldObj["y2y"], cricleY);//second yellow circle y
    new_letter["y3x"] = map(percent, 0, 50, oldObj["y3x"], defultChar["y3x"]);//third yellow circle x
    new_letter["y3y"] = map(percent, 0, 50, oldObj["y3y"], cricleY);//third yellow circle y
    new_letter["redline1"] = map(percent, 0, 50, oldObj["redline1"], newObj["redline1"]);//First vertical red line
    new_letter["redline2"] = map(percent, 0, 50, oldObj["redline2"], newObj["redline2"]);//second vertical red line
    new_letter["rl1x"] = map(percent, 0, 50, oldObj["rl1x"], linesX);//First vertical red line x
    new_letter["rl1y"] = map(percent, 0, 50, oldObj["r1y"], linesY);//First vertical red line y
    new_letter["rl2x"] = map(percent, 0, 50, oldObj["rl2x"], linesX);//second vertical red line x
    new_letter["rl2y"] = map(percent, 0, 50, oldObj["rl2y"], linesY);//second vertical red line y
    new_letter["yellowline1"] = map(percent, 0, 50, oldObj["yellowline1"], newObj["yellowline1"]);//First vertical red line
    new_letter["yellowline2"] = map(percent, 0, 50, oldObj["yellowline2"], newObj["yellowline2"]);//second vertical red line
    new_letter["yl1x"] = map(percent, 0, 50, oldObj["yl1x"], linesX);//First vertical red line x
    new_letter["yl1y"] = map(percent, 0, 50, oldObj["yl1y"], linesY);//First vertical red line y
    new_letter["yl2x"] = map(percent, 0, 50, oldObj["yl2x"], linesX);//second vertical red line x
    new_letter["yl2y"] = map(percent, 0, 50, oldObj["yl2y"], linesY);//second vertical red line y
  } else {
    new_letter["circleR1"] = map(percent, 51, 100, oldObj["circleR1"], newObj["circleR1"]);//First red circle
    new_letter["circleR2"] = map(percent, 51, 100, oldObj["circleR2"], newObj["circleR2"]);//secound red circle
    new_letter["circleR3"] = map(percent, 51, 100, oldObj["circleR3"], newObj["circleR3"]);//thrid red circle
    new_letter["r1x"] = map(percent, 51, 100, defultChar["r1x"], newObj["r1x"]);//First red circle x
    new_letter["r1y"] = map(percent, 51, 100, cricleY, newObj["r1y"]);//First red circle y
    new_letter["r2x"] = map(percent, 51, 100, defultChar["r2x"], newObj["r2x"]);//secound red circle x
    new_letter["r2y"] = map(percent, 51, 100, cricleY, newObj["r2y"]);//secound red circle y
    new_letter["r3x"] = map(percent, 51, 100, defultChar["r3x"], newObj["r3x"]);//thrid red circle x
    new_letter["r3y"] = map(percent, 51, 100, cricleY, newObj["r3y"]);//thrid red circle y
    new_letter["circleY1"] = map(percent, 51, 100, oldObj["circleY1"], newObj["circleY1"]);//First yellow circle
    new_letter["circleY2"] = map(percent, 51, 100, oldObj["circleY2"], newObj["circleY2"]);//secound yellow circle
    new_letter["circleY3"] = map(percent, 51, 100, oldObj["circleY3"], newObj["circleY3"]);//thrid yellow circle
    new_letter["y1x"] = map(percent, 51, 100, defultChar["y1x"], newObj["y1x"]);//First yellow circle x
    new_letter["y1y"] = map(percent, 51, 100, cricleY, newObj["y1y"]);//First yellow circle y
    new_letter["y2x"] = map(percent, 51, 100, defultChar["y2x"], newObj["y2x"]);//second yellow circle x
    new_letter["y2y"] = map(percent, 51, 100, cricleY, newObj["y2y"]);//second yellow circle y
    new_letter["y3x"] = map(percent, 51, 100, defultChar["y3x"], newObj["y3x"]);//third yellow circle x
    new_letter["y3y"] = map(percent, 51, 100, cricleY, newObj["y3y"]);//third yellow circle y
    new_letter["redline1"] = map(percent, 51, 100, oldObj["redline1"], newObj["redline1"]);//First vertical red line
    new_letter["redline2"] = map(percent, 51, 100, oldObj["redline2"], newObj["redline2"]);//second vertical red line
    new_letter["rl1x"] = map(percent, 51, 100, linesX, newObj["rl1x"]);//First vertical red line x
    new_letter["rl1y"] = map(percent, 51, 100, linesY, newObj["rl1y"]);//First vertical red line y
    new_letter["rl2x"] = map(percent, 51, 100, linesX, newObj["rl2x"]);//second vertical red line x
    new_letter["rl2y"] = map(percent, 51, 100, linesY, newObj["rl2y"]);//second vertical red line y
    new_letter["yellowline1"] = map(percent, 51, 100, oldObj["yellowline1"], newObj["yellowline1"]);//First vertical red line
    new_letter["yellowline2"] = map(percent, 51, 100, oldObj["yellowline2"], newObj["yellowline2"]);//second vertical red line
    new_letter["yl1x"] = map(percent, 51, 100, linesX, newObj["yl1x"]);//First vertical red line x
    new_letter["yl1y"] = map(percent, 51, 100, linesY, newObj["yl1y"]);//First vertical red line y
    new_letter["yl2x"] = map(percent, 51, 100, linesX, newObj["yl2x"]);//second vertical red line x
    new_letter["yl2y"] = map(percent, 51, 100, linesY, newObj["yl2y"]);//second vertical red line y
   }
  return new_letter;
}

var swapWords = [
  "DOTNLINE",
  "COMPUTER",
  ".PASTAL.",
  ".YELLOW.",
  "KEYBOARD",
  "GRAPHICS",
  "VICTORA"
]
