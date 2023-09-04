/* these are optional special variables which will change the system */
var systemBackgroundColor = "#E6FFF6";  //light blue color: caf0f8
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const black  = "#353935";  // sets the color for the stroke. The color borders a very light gray and a black.


function drawLetter(letterData) {
  strokeWeight(5);  //This gives the letters a little pop and makes them stand out from the background.
  stroke(black);  // This givess the letters there black border so they don't meld with the background.

  let posx = 0; // sets the later posx variables
  let posy = 0;  //  sets the later posy variables
  
  // This code is the foundation of my current project all the credit goes to jeremymaih here is a link to his code https://bl.ocks.org/jeremymaih/99e8644e3b6b4ec8ef263a254e0f017f/a389cc22435a93266aad7e4361f7d655367b045e
  let pos1x = posx + letterData["Rect1x"];  //  this determines the x and y coordinates of rectangle 1
  let pos1y = posy + letterData["Rect1y"];

  let pos2x = posx + letterData["Rect2x"];  //  this determines the x and y coordinates of rectangle 2
  let pos2y = posy + letterData["Rect2y"];

  let pos3x = posx + letterData["Rect3x"];  // this determines the x and y coordinates of rectangle 3
  let pos3y = posy + letterData["Rect3y"];

  let height1y = letterData["Rect1h"]; // determines the height of the rectangle
  let height2y = letterData["Rect2h"];
  let height3y = letterData["Rect3h"];

  let rectwidth = letterData["width"];  //  This allows for the rectangles to become smaller in width.
  let rect2width = letterData["width2"];
  let rect3width = letterData["width3"];

  let rot1 = letterData["Rect1r"];  //This block of code allows for the rectangles to be rotated.
  let rot2 = letterData["Rect2r"];
  let rot3 = letterData["Rect3r"];

  let cornerVal = letterData["corners"];  //  This gives the rectangles soft corners.



  push();  // based off jeremymaih’s code structure
  angleMode(DEGREES);
  rectMode(CENTER); // this sets the coordinates to the center of the rectangle

  push();
  fill(2,250,216);//  The color that is set is a very bright teal.  the hex code is #02fad8 if this helps more.
  translate(pos1x, pos1y);//retangle 1
  rotate(rot1);  // sets the rotation of the rectangle.
  rect(0, 0, rectwidth, height1y,cornerVal);
  pop();

  push();
  fill(13,192,214);  //  This color blends the blue and green to match the teal and the purple.  The hex code is #0dc0d6.  on the website it looks blue but in the alphabet code it blends the blue and green together.
  translate(pos2x, pos2y);  //rectangle 2
  rotate(rot2);
  rect(0,0,rect2width,height2y,cornerVal);
  pop();

  push();
  fill(153,2,214);//purple
  translate(pos3x, pos3y);//Rectangle 3
  rotate(rot3);
  rect(0,0,rect3width,height3y,cornerVal);
  pop();

  pop();

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["Rect1x"]  = map(percent, 30, 100, oldObj["Rect1x"], newObj["Rect1x"]);  // these map all the little parts of the rectangles.
  new_letter["Rect1y"] = map(percent, 0, 100, oldObj["Rect1y"], newObj["Rect1y"]);
  new_letter["Rect2x"] = map(percent, 30, 100, oldObj["Rect2x"], newObj["Rect2x"]);
  new_letter["Rect2y"] = map(percent, 0, 100, oldObj["Rect2y"], newObj["Rect2y"]);
  new_letter["Rect3x"] = map(percent, 30, 100, oldObj["Rect3x"], newObj["Rect3x"]);
  new_letter["Rect3y"] = map(percent, 0, 100, oldObj["Rect3y"], newObj["Rect3y"]);
  new_letter["Rect1h"] = map(percent, 0, 100, oldObj["Rect1h"], newObj["Rect1h"]);
  new_letter["Rect2h"] = map(percent, 0, 100, oldObj["Rect2h"], newObj["Rect2h"]);
  new_letter["Rect3h"] = map(percent, 0, 100, oldObj["Rect3h"], newObj["Rect3h"]);
  new_letter["Rect4h"] = map(percent, 0, 100, oldObj["Rect4h"], newObj["Rect4h"]);
  new_letter["width"] = map(percent, 0, 100, oldObj["width"], newObj["width"]);
  new_letter["width2"] = map(percent, 0, 100, oldObj["width2"], newObj["width2"]);
  new_letter["width3"] = map(percent, 0, 100, oldObj["width3"], newObj["width3"]);
  new_letter["Rect1r"] = map(percent, 0, 100, oldObj["Rect1r"], newObj["Rect1r"]);
  new_letter["Rect2r"] = map(percent, 0, 100, oldObj["Rect2r"], newObj["Rect2r"]);
  new_letter["Rect3r"] = map(percent, 0, 100, oldObj["Rect3r"], newObj["Rect3r"]);
  new_letter["corners"] = map(percent, 0, 100, oldObj["corners"], newObj["corners"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA",
  "ACTUALLY",
  "QUARTERS",
  "ACQUAINT",
  "BARBEQUE",
  "CHANTING",
  "CHICKENS",
  "DRAWBACK",
  "DYNAMITE",
  "EBONISED",
  "EGYPTIAN",
  "FIZZLING",
  "GAMEPLAY",
  "HANDAXES",
  "HEAVYSET",
  "IGNIFIED",
  "IMPOSTOR",
  "JIGSAWED",
  "JACUZZIS",
  "KLONDIKE",
  "KNIGHTLY",
  "LACQUEYS",
  "LAITANCE",
  "MORTGAGE",
  "MOSQUITO",
  "NEIGHBOR",
  "NECKLACE",
  "OVERTONE",
  "OXIDIZED",
  "PRATIQUE",
  "PRECIOUS",
  "QUANTITY",
  "REVEALED",
  "READMITS",
  "SUNBURST",
  "STARDUST",
  "TAXATION",
  "TEAMWORK",
  "UMBRELLA",
  "UNDERLIE",
  "VALKYRIE",
  "VELOCITY",
  "WHIMPERS",
  "WIELDING",
  "XENOLITH",
  "XYLIDINE",
  "YOUTHFUL",
  "YUCKIEST",
  "ZEPPELIN",
  "ZOOGENIC"

]
