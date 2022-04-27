/* these are optional special variables which will change the system */
var systemBackgroundColor = "#b8d9d4"; //"#caf0f8";
var systemLineColor = "#713191";// purple
var systemBoxColor = "#04d9d9";// blueGreen

/* internal constants */
const backgroundColor  = "#b8d9d4";//light green
 const strokeColor      = "#713191";//purple

 const purple  = "#713191";//purple
 const green = "#078774"; // green
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
 function drawLetter(letterData) {

   let ell_x = 80;
   let ell_y = 260;
    push();
   scale(0.57);
   translate(10,10);

   // let ellSize = 90;//size of main circles
   let eyesSize = 25;
   let eyesSpace = 40;


 // determine parameters for other circles

   let cntrWidth = letterData["cntr_w"];
   let cntrHeight = letterData["cntr_h"];
   let handle_width = letterData["handle_w"];
   let handle_height = letterData["handle_h"];
   let cutterWidth = letterData["cutter_w"];
   let cutterHeight = letterData["cutter_h"];
   let ellMain_size = letterData["mainSize"];
   let ellMain_y = letterData["main_ypos"];
   let ell1_x = ell_x + letterData["cntr_xpos"];
   let ell1_y = ell_y + letterData["cntr_ypos"];
   let ell2_x = ell_x + letterData["handl_xpos"];
   let ell2_y = ell_y + letterData["handl_ypos"];
   let ell3_x = ell_x + letterData["eyes_xpos"];
   let ell3_y = ell_y + letterData["eyes_ypos"];
   let ell4_x = ell_x + letterData["cutter_xpos"];
   let ell4_y = ell_y + letterData["cutter_ypos"];




   // draw 6 circles/ovel
   noStroke();
  fill(purple);
  ellipse(ell_x, ellMain_y, ellMain_size, ellMain_size);// main Circle
  fill(backgroundColor);
  ellipse(ell1_x, ell1_y, cntrWidth, cntrHeight);// circle in midlle
  fill(backgroundColor);
  fill(purple);
  ellipse(ell2_x, ell2_y, handle_width, handle_height);//handle shape
  fill(backgroundColor);
  ellipse(ell4_x, ell4_y, cutterWidth, cutterHeight);// cutter
  fill(green);
  ellipse(ell3_x, ell3_y, eyesSize);//left eye
  ellipse(ell3_x + eyesSpace, ell3_y, eyesSize);//right eye
pop();

// push();
//  let angleParts = 360 / ell2_x;
//  for(let i = 0; i < ell2_x; i++){
//    rotate(anglePart*i);
//  };
//  pop()

 }

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["cntr_w"] = map(percent, 0, 100, oldObj["cntr_w"], newObj["cntr_w"]);
  new_letter["cntr_h"] = map(percent, 0, 100, oldObj["cntr_h"], newObj["cntr_h"]);
  new_letter["handle_w"] = map(percent, 0, 100, oldObj["handle_w"], newObj["handle_w"]);
  new_letter["handle_h"] = map(percent, 0, 100, oldObj["handle_h"], newObj["handle_h"]);
  new_letter["cutter_w"] = map(percent, 0, 100, oldObj["cutter_w"], newObj["cutter_w"]);
  new_letter["cutter_h"] = map(percent, 0, 100, oldObj["cutter_h"], newObj["cutter_h"]);
  new_letter["mainSize"] = map(percent, 0, 100, oldObj["mainSize"], newObj["mainSize"]);
  new_letter["main_ypos"] = map(percent, 0, 100, oldObj["main_ypos"], newObj["main_ypos"]);
  new_letter["cntr_xpos"] = map(percent, 0, 100, oldObj["cntr_xpos"], newObj["cntr_xpos"]);
  new_letter["cntr_ypos"] = map(percent, 0, 100, oldObj["cntr_ypos"], newObj["cntr_ypos"]);
  new_letter["handl_xpos"] = map(percent, 0, 100, oldObj["handl_xpos"], newObj["handl_xpos"]);
  new_letter["handl_ypos"] = map(percent, 0, 100, oldObj["handl_ypos"], newObj["handl_ypos"]);
  new_letter["eyes_xpos"] = map(percent, 0, 100, oldObj["eyes_xpos"], newObj["eyes_xpos"]);
  new_letter["eyes_ypos"] = map(percent, 0, 100, oldObj["eyes_ypos"], newObj["eyes_ypos"]);
  new_letter["cutter_xpos"] = map(percent, 0, 100, oldObj["cutter_xpos"], newObj["cutter_xpos"]);
  new_letter["cutter_ypos"] = map(percent, 0, 100, oldObj["cutter_ypos"], newObj["cutter_ypos"]);
  return new_letter;
}

var swapWords = [
  // "",
  "ABCDEFGH",
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA",
  "!012345!",
  "6789!!!!"
]
