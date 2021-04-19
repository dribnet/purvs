/* these are optional special variables which will change the system */
var systemBackgroundColor = "#e3eded";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#199cff";
//const lightBlue  = "#59ccff";   //changed but kept just in case.
const strokeColor  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
   // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = letterData["offsetx"];
  let pos2y = letterData["offsety"];
  
  let col1 = letterData["ColourPlanet"];
  let col2 = letterData["ColourSun"];

  let starsize1 = random(1, 10); // random stars
  let starsize2 = random(1, 10);
  let starsize3 = random(1, 10);
  let starsize4 = random(1, 10);

   fill(0);
  quad(-5, 0, -5, 200, 105, 200, 105, 0); // black background
  fill(255);
  square(25,15,starsize1); // the stars in the background
  square(88,25,starsize2);
  square(14,178,starsize3);
  square(79,190,starsize4);

  // draw two circles                                                                            
  fill(40);
  ellipse(50, 100, 100, 100);
  if(col2 == 0){ // this is the sun colour
 fill(250,180,0);
  }
  else if (col2 == 1) {
    fill(255,255,0);
  }
  else if (col2 == 2) {
    fill(255,255,255);
  }
  ellipse(50, 100, 50, 50);

  if(col1 == 0){ //this is the planet colour
    fill(5, 13, 255);
  }
  else if (col1 == 1) {
    fill(255, 34, 0);
  }
  else if (col1 == 2) {
    fill(0, 166, 22);
  }
  else if (col1 == 3) {
    fill(180, 5, 255);
  }
   else if (col1 == 5) {
    fill(255, 0, 162);
  }
   else if (col1 == 6) {
    fill(132, 255, 0);
  }
   else if (col1 == 7) {
    fill(0, 217, 255);
  }
   else if (col1 == 8) {
    fill(255, 140, 0);
  }
   else if (col1 == 9) {
    fill(0,0,0);
  }
   else if (col1 == 4) {
    fill(242, 255, 0);
  }

  // var X = letterData["ShadowX"];
  // var Y = letterData["ShadowY"];
  // var SizeW = letterData["ShadowW"];
  // var SizeH = letterData["ShadowH"];

  var ShadowPos = letterData["Shadow"];
  if (ShadowPos == 0) { //this the code that can be typed to tell where the shadow is
    X = 0;
    Y = 0;
    SizeW = 1;
    SizeH = 1;
  }
  else if (ShadowPos == 1){
    X = 0;
    Y = -9;
    SizeW = 19;
    SizeH = 10;
  }
  else if (ShadowPos == 3){
    X = 0;
    Y = 9;
    SizeW = 19;
    SizeH = 10;
  }
  else if (ShadowPos == 4){
    X = -9;
    Y = 0;
    SizeW = 10;
    SizeH = 19;
  }
  else if (ShadowPos == 2){
    X = 9;
    Y = 0;
    SizeW = 10;
    SizeH = 19;
  }

  ellipse(pos2x, pos2y, size2, size2); // planet
  fill(200);
  ellipse(pos2x + 17, pos2y + 10, 8, 8); // Moon
  fill(155);
  ellipse(pos2x + X, pos2y + Y, SizeW, SizeH) //shadow x and y the size Width and Height
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]