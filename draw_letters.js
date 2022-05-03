/* these are optional special variables which will change the system */
var systemBackgroundColor = "red";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const strokeColor      = "green";
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";

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
  let posx = 30;
  let posy = 200;

  // determine parameters for second circle
  let lenA = letterData["lenA"];
  let lenB = letterData["lenB"];
  let leanB = letterData["leanB"];

  // draw two lines
  strokeWeight(10);
  //line A
  // line(posx, posy, posx+0, posy-lenA);
  for(let i = 0; i <= lenA/20; i++)
  {
    circle(posx,lerp(posy,posy-lenA,i/(lenA/20)),5);
  }
  noStroke();
  fill(232, 97, 197, 30);
  //line B
  for(let i = 0; i <= 10; i++)
  {
    for(let j = 0; j < 5; j++){
      circle(posx+50+lerp(0,leanB,i/10),posy-lerp(0,lenB,i/10),j*10);
    }
  }
}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["lenA"]    = map(percent, 0, 100, oldObj["lenA"], newObj["lenA"]);
  new_letter["lenB"] = map(percent, 0, 100, oldObj["lenB"], newObj["lenB"]);
  new_letter["leanB"] = map(percent, 0, 100, oldObj["leanB"], newObj["leanB"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
