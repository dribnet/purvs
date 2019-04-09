var posx = 20;
var posy = 100;

const colorFront  = "#199cff";
const colorStroke = "#233f11";


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA",
]

function drawLetter(letterData) {

   let sc = letterData["scale"];

  let pos1x = posx + letterData["offx"]*sc/2;
  let pos1y = posy + letterData["offy"]*sc/2;
  let pos2x = posx + letterData["offx1"]*sc/2;
  let pos2y = posy + letterData["offy1"]*sc/2;
  let pos3x = posx + letterData["offx2"]*sc/2;
  let pos3y = posy + letterData["offy2"]*sc/2;

  let size = letterData["size"]*sc*1.2;

  let rot = letterData["rot"];
  let rot2 = letterData["rot2"];
  let rot3 = letterData["rot3"];

  let color1 =  color(1, 248, 248,200);
   let color2 =  color(248, 0, 248,200);
    let color3 =  color(248, 248, 1,200);
    let color4 = color(255,255,255,200);



 drawSqr(pos1x,pos1y,size,rot,color1,sc);

 drawSqr(pos2x,pos2y,size,rot2,color2,sc);
 drawSqr(pos3x,pos3y,size,rot3,color3,sc);
 //drawSqr(pos3x,pos3y,size,rot3,color4,sc);
}

function drawSqr(x,y,size,rotation,color,sc) {

//noStroke();
stroke(5);
  let a = pow(size,2);
  let b = pow(size/2, 2);
  let sqrHeight = sqrt(a-b); 
  let centreY = tan(radians(30))* size/2; //centre of shape

  x1 = - size/3; //coordinates of shapes
  y1 = - centreY/2;
  x2 =  size/2;
  y2 = - centreY;
  x3 = 0;
  y3 =  sqrHeight - centreY;

translate(x,y);
rotate(radians(rotation));
  fill(color);
  triangle(x1*sc,y1*sc,x2*sc,y2*sc, x3*sc, y3*sc);
  fill(255);

     rotate(radians(-rotation));
    translate(0-x,0-y);


}

function interpolate_letter(percent, oldObj, newObj) {


  let new_Letter = {};
  new_Letter["size"] = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_Letter["scale"] = map(percent, 0, 100, oldObj["scale"], newObj["scale"]);

  new_Letter["rot"] = map(percent, 0, 100, oldObj["rot"], newObj["rot"]);
  new_Letter["rot2"] = map(percent, 0, 100, oldObj["rot2"], newObj["rot2"]);
  new_Letter["rot3"] = map(percent, 0, 100, oldObj["rot3"], newObj["rot3"]);

  new_Letter["offx"] = map(percent, 0, 100, oldObj["offx"], newObj["offx"]);
  new_Letter["offx1"] = map(percent, 0, 100, oldObj["offx1"], newObj["offx1"]);
  new_Letter["offx2"] = map(percent, 0, 100, oldObj["offx2"], newObj["offx2"]);

  new_Letter["offy"] = map(percent, 0, 100, oldObj["offy"], newObj["offy"]);
  new_Letter["offy1"] = map(percent, 0, 100, oldObj["offy1"], newObj["offy1"]);
  new_Letter["offy2"] = map(percent, 0, 100, oldObj["offy2"], newObj["offy2"]);

  return new_Letter;


}
