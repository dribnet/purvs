const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

const letterA = {
    

  "rx1":0,
  "ry1":-40,
  "rw1":180,
  "rh1":15, //blue rect

  "rx2":-60,
  "ry2":-40,
   "rw2":30,
   "rh2":50, //mint green rect

   "rx3":60,
   "ry3":-40,
   "rw3":30,
   "rh3":50, // yellow rect

   "lx1":-120,
   "ly1":90,
   "ex1":20,
   "ey1":-200, //line white

   "lx2":-20,
   "ly2":-200,
   "ex2":120,
   "ey2":90  //line black



}

const letterB = {
  

  "rx1":-70,
  "ry1":-40,
  "rw1":15,
  "rh1":300,

  "rx2":0,
  "ry2":60,
   "rw2":180,
   "rh2":28,  

   "rx3":0,
   "ry3":-140,
   "rw3":180,
   "rh3":28,


   "lx1":-120,
   "ly1":-80,
   "ex1":90,
   "ey1":70,

   "lx2":-120,
   "ly2":-10,
   "ex2":90,
   "ey2":-150 


}

const letterC = {
 "rx1":-40,
  "ry1":-10,
  "rw1":30,
  "rh1":180,  

  "rx2":-40,
  "ry2":-70,
   "rw2":60,
   "rh2":40,  

   "rx3":-40,
   "ry3":50,
   "rw3":60,
   "rh3":40,   

   "lx1":-120,
   "ly1":50,
   "ex1":20,
   "ey1":-200,  

   "lx2":-120,
   "ly2":40,
   "ex2":100,
   "ey2":80
}

const backgroundColor  = "#ff9999";
 

 

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  
  strokeWeight(8);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
   
   
  
  let rect1x= posx + letterData["rx1"];
  let rect1y= posy + letterData["ry1"];
  let rect1w= letterData["rw1"];
  let rect1h= letterData["rh1"];


  let rect2x= posx + letterData["rx2"];
  let rect2y= posy + letterData["ry2"];
  let rect2w= letterData["rw2"];
  let rect2h= letterData["rh2"];


  let rect3x= posx + letterData["rx3"];
  let rect3y= posy + letterData["ry3"];
  let rect3w= letterData["rw3"];
  let rect3h= letterData["rh3"];

  let line1x= posx + letterData["lx1"];
  let line1y= posy + letterData["ly1"];
  let end1x= posx+letterData["ex1"];
  let end1y= posy+letterData["ey1"];

  let line2x= posx + letterData["lx2"];
  let line2y= posy + letterData["ly2"];
  let end2x= posx+letterData["ex2"];
  let end2y= posy+letterData["ey2"];


  noFill();
  stroke(255) ;
  line(line1x,line1y,end1x,end1y); //line white

  stroke(0);
  line(line2x,line2y,end2x,end2y); //line black

  
 
  noStroke();
  fill(90, 188, 191);
  rectMode(CENTER);
  rect(rect1x,rect1y,rect1w,rect1h,5);

  fill(197, 212, 205); 
  rect(rect2x,rect2y,rect2w,rect2h,30);

  fill(237, 236, 187); 
  rect(rect3x,rect3y,rect3w,rect3h,30);
  

    

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
