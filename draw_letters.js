/* these are optional special variables which will change the system */
//var systemLineColor = "#000090";
var systemLineColor = "#ffffff";
var systemBoxColor = "#00c800";


/* internal constants */
const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";
const strokeColor  = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  angleMode(DEGREES);
  // color/stroke setup
  noStroke();

  //triangle x,y
  let triangleX =  letterData["triangleX"];
  let triangleY =  10  + letterData["triangleY"];


  //fixed angle of triangle
  let TriAng = letterData["TriAng"];

  //width of triangle
  let triWidth = letterData["triWidth"];

  let triHeight = letterData["triHeight"];

  let left = 30 - triWidth/2;

  let right = 30 + triWidth/2;
  //let pos4y = pos2y + pos2y/2;
  let triangleHeight = triangleY + triHeight;


  //ellipse x,y
  let ellipseX = letterData["ellipseX"];
  let ellipseY = letterData["ellipseY"];
  //size
  let ellipseSize = letterData["ellipseSize"];

  //rect x,y
  let rectX = letterData["rectX"];
  let rectY = letterData["rectY"];
  //size
  let rectWidth = letterData["rectWidth"];
  let rectHeight = letterData["rectHeight"];


  //creates triangle
  // push();
  // translate(triangleX,0);
  // fill(0);
  // rotate(TriAng);
  // triangle(left, triangleY, right, triangleY, 30, triangleHeight);
  // pop();

  push();

  fill(0);
  translate(triangleX,triangleY);
  rotate(TriAng);
  //rotate(TriAng);
  triangle(left, 30, right, 30, 30, triHeight);
//  translate(triangleX,triangleY);

  pop();



  //creates an ellipse
  push()
  fill(255);
  ellipse(ellipseX, ellipseY, ellipseSize);
  pop();

  //creates a rectangle
  push()
  fill(255);
  //rectMode(CENTER);
  translate(rectX,rectY);
  rect(rectX, rectY, rectWidth, rectHeight)
  pop();

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["triangleX"] = map(percent, 0, 100, oldObj["triangleX"], newObj["triangleX"]);
  new_letter["triangleY"] = map(percent, 0, 100, oldObj["triangleY"], newObj["triangleY"]);
  new_letter["TriAng"] = map(percent, 0, 100, oldObj["TriAng"], newObj["TriAng"]);
  new_letter["triWidth"] = map(percent, 0, 100, oldObj["triWidth"], newObj["triWidth"]);
  new_letter["triHeight"] = map(percent, 0, 100, oldObj["triHeight"], newObj["triHeight"]);
  new_letter["ellipseX"] = map(percent, 0, 100, oldObj["ellipseX"], newObj["ellipseX"]);
  new_letter["ellipseY"] = map(percent, 0, 100, oldObj["ellipseY"], newObj["ellipseY"]);
  new_letter["ellipseSize"] = map(percent, 0, 100, oldObj["ellipseSize"], newObj["ellipseSize"]);
  new_letter["rectX"] = map(percent, 0, 100, oldObj["rectX"], newObj["rectX"]);
  new_letter["rectY"] = map(percent, 0, 100, oldObj["rectY"], newObj["rectY"]);
  new_letter["rectWidth"] = map(percent, 0, 100, oldObj["rectWidth"], newObj["rectWidth"]);
  new_letter["rectHeight"] = map(percent, 0, 100, oldObj["rectHeight"], newObj["rectHeight"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]
