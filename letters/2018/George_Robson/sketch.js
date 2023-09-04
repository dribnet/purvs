const canvasWidth = 960;
const canvasHeight = 500;
const sz = 80;


/* 
These are the 10 parameters per letter:
  * `size` : length of the sides of the triangle

  * `offx` : X position of the first triangle
  * `offy` : Y position of the first triangle
  * `rot` : rotation of the first triangle in degrees

  * `offx1` : X position of the second triangle
  * `offy1` : Y position of the second triangle
  * `rot2` : rotation of the second triangle in degrees


  * `offx2` : X position of the third triangle
  * `offy2` : Y position of the third triangle
  * `rot3` : rotation of the third triangle in degrees
 */

const letterA = {
  "size": 80,
   "offx": 0,
  "offy": 0,
  "offx1": -sz/2,
  "offy1":69,  
   "offx2": sz/2,
  "offy2": 69,
  
  "rot": 180,
  "rot2": 180,
  "rot3": 180,
}

const letterB = {
   "size": 80,
   
  "offx": 0,
  "offy": 0,
  "offx1": -46,
  "offy1":40,
   "offx2": -0,
  "offy2": 80,
  
  "rot": 270,
  "rot2": 90,
  "rot3": 270,
}

const letterC = {
  "size": 80,
  
  "offx": 0,
  "offy": -40,
  "offx1": -46,
  "offy1":40  ,
   "offx2": -0,
  "offy2": 120,
  
  "rot": 270,
  "rot2": 90,
  "rot3": 270,
}


const letterD = {
  "size": 80,
  
  "offx": -40,
  "offy": 0,
  "offx1": 29,
  "offy1":40  ,
   "offx2": -40,
  "offy2": 80,
  
  "rot": 270,
  "rot2": 270,
  "rot3": 270,
}

const letterE = {
  "size": 80,
  
  "offx": -30,
  "offy": -40,
  "offx1": -30,
  "offy1":40  ,
   "offx2": -30,
  "offy2": 120,
  
  "rot": 270,
  "rot2": 270,
  "rot3": 270,
}

const letterF = {
  "size": 80,
  
  "offx": 0,
  "offy": -40,
  "offx1": -0,
  "offy1":40  ,
   "offx2": -62,
  "offy2": 103,
  
  "rot": 270,
  "rot2": 270,
  "rot3": 0,
}

const colorFront  = "#199cff";
const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {

  // determine parameters for triangles
  let pos1x = posx + letterData["offx"];
  let pos1y = posy + letterData["offy"];
  let rot = letterData["rot"];
  
  let pos2x = posx + letterData["offx1"];
  let pos2y = posy + letterData["offy1"];
  let rot2 = letterData["rot2"];
   
  let pos3x = posx + letterData["offx2"];
  let pos3y = posy + letterData["offy2"];
  let rot3 = letterData["rot3"];
  
  let size = letterData["size"];
  

  // draw three triangles
 drawTriangle(pos1x,pos1y,size,rot);
 drawTriangle(pos2x,pos2y,size,rot2);
  drawTriangle(pos3x,pos3y,size,rot3);

}
function drawTriangle (x,y,size,rotation){


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
  fill(colorFront);
  triangle(x1,y1,x2,y2, x3, y3);
  fill(255);
    ellipse(0,0,10,10)
    
     rotate(radians(-rotation)); 
    translate(0-x,0-y);
   
     
}

function draw () {

  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  
  drawLetter(width/7, center_y, 10, letterA);
  drawLetter(width/7*2     , center_y, 10, letterB);
  drawLetter(width/7*3 , center_y, 10, letterC);
  drawLetter(width/7*4 , center_y, 10, letterD);
  drawLetter(width/7*5 , center_y, 10, letterE);
  drawLetter(width/7*6 , center_y, 10, letterF);
  drawLetter(width/7*7 , center_y, 10, letterG);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
