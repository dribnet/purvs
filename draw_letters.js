/* these are optional special variables which will change the system */
var systemBackgroundColor = "#a8d9ec";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue = "#0077b6";
const lightBlue = "#90e0ef";
const strokeColor = "#03045e";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
  angleMode(DEGREES)
  strokeJoin(ROUND);
  stroke(strokeColor);
  strokeWeight(6);
  let posx = 50
  let posy = 50

  let arcrotation = letterData["arcRotation"];

  let arcx = posx + letterData["arcX"];
  let arcy = posy + letterData["arcY"];
  let arcscale = letterData["arcScale"]

  let trianglerotation = letterData["triangleRotation"]
  let trianglescale = letterData["triangleScale"]

  let triangley = posy + letterData["triangleY"]
  let trianglex = posx + letterData["triangleX"]

//  let triangleheighty = posy + letterData["triangleHeighty"]
//  let triangleheightx = posx + letterData["triangleHeightx"]



push() //arc

stroke(218, 42, 71);
translate(arcx, arcy)
rotate(arcrotation)
scale(arcscale)

fill(218, 42, 71, 180)
arc(0, 0, 120, 120, 0, 180, OPEN)

pop()


push() //A triangle

stroke(255, 199, 201);
translate(trianglex, triangley)
translate(65, 0)
rotate(trianglerotation)
scale(trianglescale)

fill(255, 199, 201, 180)
triangle(0, 0, 60, 60, 120, 0);

pop()






}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["arcRotation"] = map(percent, 0, 100, oldObj["arcRotation"], newObj["arcRotation"]);
  new_letter["arcX"] = map(percent, 0, 100, oldObj["arcX"], newObj["arcX"]);
  new_letter["arcY"] = map(percent, 0, 100, oldObj["arcY"], newObj["arcY"]);
  new_letter["arcScale"] = map(percent, 0, 100, oldObj["arcScale"], newObj["arcScale"]);

  new_letter["triangleRotation"] = map(percent, 0, 100, oldObj["triangleRotation"], newObj["triangleRotation"]);
  new_letter["triangleScale"] = map(percent, 0, 100, oldObj["triangleScale"], newObj["triangleScale"]);
  new_letter["triangleY"] = map(percent, 0, 100, oldObj["triangleY"], newObj["triangleY"]);
  new_letter["triangleX"] = map(percent, 0, 100, oldObj["triangleX"], newObj["triangleX"]);
  //new_letter["arcY"] = map(percent, 0, 100, oldObj["arcY"], newObj["arcY"]);
  //new_letter["arcY"] = map(percent, 0, 100, oldObj["arcY"], newObj["arcY"]);
  return new_letter;
}

var swapWords = [

  "GEOMETRY",
  "??WARM??",
  "MEOWMEOW",
  "ACDCACDC",
  "THEWORLD",
  "DEATH13N",
  "FOREVER?",




]
