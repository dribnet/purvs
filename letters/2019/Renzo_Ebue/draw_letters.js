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
  "CONCRETE",
  "TRIANGLE",
  "CARTOONS",
]

function drawLetter(letterData) {

   let sc = letterData["scale"];

  let pos1x = posx + letterData["offsetx"]*sc/2;
  let pos1y = posy + letterData["offsety"]*sc/2;
  let pos2x = posx + letterData["offsetx1"]*sc/2;
  let pos2y = posy + letterData["offsety1"]*sc/2;
  let pos3x = posx + letterData["offsetx2"]*sc/2;
  let pos3y = posy + letterData["offsety2"]*sc/2;

  let size = letterData["size"]*sc*1.2;

  let rotate = letterData["rotate"];
  let rotate2 = letterData["rotate2"];
  let rotate3 = letterData["rotate3"];

  let color1 = color(1, 248, 248,200);
  let color2 = color(248, 0, 248,200);
  let color3 = color(248, 248, 1,200);
  let color4 = color(255,255,255,200);



 drawSqr(pos1x,pos1y,size,rotate,color1,sc);

 drawSqr(pos2x,pos2y,size,rotate2,color2,sc);
 drawSqr(pos3x,pos3y,size,rotate3,color3,sc);
 //drawSqr(pos3x,pos3y,size,rotate3,color4,sc);
}

function drawSqr(x,y,size,rotation,color,sc) {

//noStroke();
stroke(5);
  let a = pow(size,2);
  let b = pow(size/2, 2);
  let sqrHeight = sqrt(a-b);
  let centreY = cos(floor(30))* size/2;

  x1 = - size/3;
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

  new_Letter["rotate"] = map(percent, 0, 100, oldObj["rotate"], newObj["rotate"]);
  new_Letter["rotate2"] = map(percent, 0, 100, oldObj["rotate2"], newObj["rotate2"]);
  new_Letter["rotate3"] = map(percent, 0, 100, oldObj["rotate3"], newObj["rotate3"]);

  new_Letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_Letter["offsetx1"] = map(percent, 0, 100, oldObj["offsetx1"], newObj["offsetx1"]);
  new_Letter["offsetx2"] = map(percent, 0, 100, oldObj["offsetx2"], newObj["offsetx2"]);

  new_Letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  new_Letter["offsety1"] = map(percent, 0, 100, oldObj["offsety1"], newObj["offsety1"]);
  new_Letter["offsety2"] = map(percent, 0, 100, oldObj["offsety2"], newObj["offsety2"]);

  return new_Letter;


}
