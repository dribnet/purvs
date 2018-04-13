const colorFront  = "#199cff";
const colorStroke = "#233f11";

var posx1 = 0;
var posx2 = posx1 + 30;
var posx3 = posx2 + 30;

var posy1 = 0;
var posy2 = posy1 + 60;
var posy3 = posy2 + 75;
/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
var posx1 = 10;
var posx2 = 50;
var posx3 = 90;

var posy1 = 10;
var posy2 = 100;
var posy3 = 190;
  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(1);

  // determine parameters for second circle
  let dot1 = letterData["dot1"];
  let dot2 = letterData["dot2"];
  let dot3 = letterData["dot3"];
  let dot4 = letterData["dot4"];
  let dot5 = letterData["dot5"];
  let dot6 = letterData["dot6"];
  let dot7 = letterData["dot7"];
  let dot8 = letterData["dot8"];
  let dot9 = letterData["dot9"];
  
  let dotm1 = letterData["dotm1"];
  let dotm2 = letterData["dotm2"];

  //draw lines
  line(0,0,0,200);
  line(100,0,100,200);
  // draw the dots
  ellipse(posx1, posy1, dot1);
  ellipse(posx2, posy1, dot2);
  ellipse(posx3, posy1, dot3);
  ellipse(posx1, posy2, dot4);
  ellipse(posx2, posy2, dot5);
  ellipse(posx3, posy2, dot6);
  ellipse(posx1, posy3, dot7);
  ellipse(posx2, posy3, dot8);
  ellipse(posx3, posy3, dot9);

  ellipse(posx3,45,dotm1);
  ellipse(posx3,145,dotm2);
}
