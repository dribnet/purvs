
var posx = 0;
var posy = 100;


/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  
   let sc = letterData["scale"];
  
   let pos1x = posx + letterData["offx"]*sc;
  let pos1y = posy + letterData["offy"]*sc;
  let pos2x = posx + letterData["offx1"]*sc;
  let pos2y = posy + letterData["offy1"]*sc;
  let pos3x = posx + letterData["offx2"]*sc;
  let pos3y = posy + letterData["offy2"]*sc;
  
  let size = letterData["size"];
  
  let rot = letterData["rot"];
  let rot2 = letterData["rot2"];
  let rot3 = letterData["rot3"];
  
  let color1 =  color(102, 185, 193);
   let color2 =  color(228, 115, 72);
    let color3 =  color(144, 36, 108);
    
   


  drawTriangle(pos1x,pos1y,size,rot,color1,sc);

 drawTriangle(pos2x,pos2y,size,rot2,color2,sc);
  drawTriangle(pos3x,pos3y,size,rot3,color3,sc);
}

function drawTriangle (x,y,size,rotation,c,sc){

noStroke();
  let a = pow(size,2); 
  let b = pow(size/2, 2);
  let triHeight = sqrt(a-b); //base of the tringle to its peak (a^2 - c^2 = b^2)
 let centreY = tan(radians(30))* size/2; //trig to work out centre of triangle
 
  x1 = - size/2; //coordinates of triangle 
  y1 = - centreY
  x2 =  size/2;
  y2 = - centreY; 
  x3 = 0;
  y3 =  triHeight - centreY;
  
translate(x,y);
rotate(radians(rotation)); 
  fill(c);
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

