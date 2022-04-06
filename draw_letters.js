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

   let ell_x = 85;
   let ell_y = 260;
    push();
   scale(0.57)
   // let ellSize = 90;//size of main circles
   let handleWidth = 25// width of handle
 // determine parameters for other circles
 let cntrSize_x = letterData["cntrSize_x"];
 let cntrSize_y = letterData["cntrSize_y"];
 let handleHeight = letterData["handleHeight"];
 let eyeSize = letterData["eyeSize"];
 let cutSize_x = letterData["cutSize_x"];
 let cutSize_y = letterData["cutSize_y"];
 let ell1_x = ell_x + letterData["locCntr_x"];
 let ell1_y = ell_y + letterData["locCntr_y"];
 let ell2_x = ell_x + letterData["locHandl_x"];
 let ell2_y = ell_y + letterData["locHandl_y"];
 let ell3_x = ell_x + letterData["locEye_x"];
 let ell3_y = ell_y + letterData["locEye_y"];
 let ell4_x = ell_x + letterData["locCut_x"];
 let ell4_y = ell_y + letterData["locCut_y"];
 let eyesSpace = letterData["eyesSpace"];



 // draw 6 circles/ovel
 noStroke();
fill(peach);
ellipse(ell2_x, ell2_y, handleWidth, handleHeight);//handle shape
fill(peach);
ellipse(ell_x, ell_y, 150, 150);//main Circle
fill(lightBlue);
ellipse(ell1_x, ell1_y, cntrSize_x, cntrSize_y);// circle in midlle
fill(lightBlue);
ellipse(ell4_x, ell4_y, cutSize_x, cutSize_y);// cutter
fill(darkGreen);
ellipse(ell3_x, ell3_y, eyeSize);//left eye
ellipse(ell3_x + eyesSpace, ell3_y, eyeSize);//right eye

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
