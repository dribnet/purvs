
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


  "sizeX": 60,
  "sizeY": 100,
  "offsetx": -30,
  "offsety": 20,
   
  "qx1" :-30,
  "qy1" :-100,
  "qx2" :30,
  "qy2" :-100,
  "qx3" :100,
  "qy3" :100,
  "qx4" :-100,
  "qy4" :100,

 


// cude will be added next session


}

const letterB = {



  
  "sizeX": 120,
  "sizeY": 120,
  "offsetx": -100,
  "offsety": -100,
   
    "qx1" :-100,
  "qy1" :-60,
  "qx2" :40,
  "qy2" :0,
  "qx3" :100,
  "qy3" :100,
  "qx4" :-100,
  "qy4" :100,

}

const letterC = {


  

  "sizeX": 200,
  "sizeY": 50,
  "offsetx": -100,
  "offsety": -100,
   
   "qx1" :-100,
  "qy1" :-100,
  "qx2" :-80,
  "qy2" :-100,
  "qx3" :100,
  "qy3" :100,
  "qx4" :-100,
  "qy4" :100,


}



function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup

 


  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  
  let size1 = letterData["sizeX"];
  let size2 = letterData["sizeY"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  
  let x1 = posx + letterData["qx1"];
  let y1 = posy + letterData["qy1"];
  let x2= posx + letterData["qx2"];
  let y2 = posy + letterData["qy2"];
  let x3= posx + letterData["qx3"];
  let y3 = posy + letterData["qy3"];
  let x4 = posx + letterData["qx4"];
  let y4 = posy + letterData["qy4"];






  // draw two circles
  noStroke()
  fill (255,68,93,100);

beginShape();
vertex(x1,y1)
vertex(x2,y2)
vertex(x3,y3)
vertex(x4,y4)
endShape();


 fill (200,58,23,100);
 stroke(255,208,68)
 strokeWeight(3)
 rect(pos2x, pos2y, size1, size2);

                   




}

function draw () {
  // clear screen
  background(255,208,68);


  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 320, center_y      ,10, letterA);
  drawLetter(center_x      , center_y      ,10, letterB);
  drawLetter(center_x + 320, center_y      ,10,letterC);

}



   
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
