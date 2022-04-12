/* these are optional special variables which will change the system */
var systemBackgroundColor = "#ccecec"; //"#caf0f8";
var systemLineColor = "#6003ab";// purple
var systemBoxColor = "#04d9d9";// blueGreen

/* internal constants */
const backgroundColor  = "#ccecec";//light blue
const strokeColor      = "#c4c6c0";//gray
const peach  = "#f7cabe";// peach, letter colour
const lightBlue  = "#ccecec";//light blue,colour of the cutter circle
const darkGreen = "#014d4a"//eyes colour
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
  fill(peach);
  ellipse(ell_x, ellMain_y, 150, 150);// main Circle
  fill(lightBlue);
  ellipse(ell1_x, ell1_y, cntrWidth, cntrHeight);// circle in midlle
  fill(peach);
  ellipse(ell2_x, ell2_y, handle_width, handle_height);//handle shape
  fill(lightBlue);
  ellipse(ell4_x, ell4_y, cutterWidth, cutterHeight);// cutter
  fill(darkGreen);
  ellipse(ell3_x, ell3_y, eyesSize);//left eye
  ellipse(ell3_x + eyesSpace, ell3_y, eyesSize);//right eye

pop();
 }

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size_x"]    = map(percent, 0, 100, oldObj["size_x"], newObj["size_x"]);
  new_letter["size_y"]    = map(percent, 0, 100, oldObj["size_y"], newObj["size_y"]);
  new_letter["locX"] = map(percent, 0, 100, oldObj["locX"], newObj["locX"]);
  new_letter["locY"] = map(percent, 0, 100, oldObj["locY"], newObj["locY"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
