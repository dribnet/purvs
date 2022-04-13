/* these are optional special variables which will change the system */
var systemBackgroundColor = "#caf0f8";
var systemLineColor = "#000090";
var systemBoxColor = "#00c800";

/* internal constants */
const darkBlue  = "#0077b6";
const lightBlue  = "#90e0ef";
const strokeColor  = "#03045e";

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
let posx=50
let posy=50

  let arcrotation = letterData["arcRotation"];

  let arcx = posx + letterData["arcX"];
  let arcy = posy + letterData["arcY"];
let arcscale = letterData["arcScale"]

  let trianglerotation = letterData["triangleRotation"]
  let trianglescale = letterData["triangleScale"]

  let triangley = posy + letterData["triangleY"]
  let trianglex =  posx +letterData["triangleX"]





  // draw two circles

  //ellipse(posx, posy, 150, 150);
  noFill()




  push()//arc

  stroke(lightBlue);
  translate(arcx, arcy)
  rotate(arcrotation)
scale(arcscale)

  arc(0, 0, 120, 120, 0, 180, OPEN)

  pop()


  push() //A triangle

  stroke(darkBlue);
  translate(trianglex, triangley)
  translate(65,0)
 rotate(trianglerotation)
scale(trianglescale)

  triangle(0, 0, 60, 60, 120, 0);

  stroke(lightBlue)

  pop()





  // draw two circles
  fill(darkBlue);
//  ellipse(50, 150, 75, 75);
  fill(lightBlue);
//  ellipse(pos2x, pos2y, size2, size2);
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
