const colorFront  = "#199cff";
const colorStroke = "#233f11";

function drawLetter(letterData) {
//Creating basic positions for the 3x3 grid
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

  //Creating vars from the parameters in letter.js
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

  //Draw lines for ease of reading(mayberemoved later)
  line(0,0,0,200);
  line(100,0,100,200);

  //Drawing the dots in a 3x3 grid
  ellipse(posx1, posy1, dot1);
  ellipse(posx2, posy1, dot2);
  ellipse(posx3, posy1, dot3);
  ellipse(posx1, posy2, dot4);
  ellipse(posx2, posy2, dot5);
  ellipse(posx3, posy2, dot6);
  ellipse(posx1, posy3, dot7);
  ellipse(posx2, posy3, dot8);
  ellipse(posx3, posy3, dot9);
  //Drawing the extra two dots in the grid
  ellipse(posx3,50,dotm1);
  ellipse(posx3,145,dotm2);
}
