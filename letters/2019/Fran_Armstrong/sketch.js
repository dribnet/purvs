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

 
//LETTER DATA 

const letterA = { 
  "p1p2": 1, 
  "p3p4": 1, 
  "p5p6": 1, 
  "p1p3": 0, 
  "p2p4": 1, 
  "p3p5": 1, 
  "p4p6": 1 
} 

 

const letterB = { 

 "p1p2": 0, 
  "p3p4": 1, 
  "p5p6": 1, 
  "p1p3": 1, 
  "p2p4": 0,
  "p3p5": 1, 
  "p4p6": 1 

} 

 

const letterC = { 
  "p1p2": 0, 
  "p3p4": 1, 
  "p5p6": 1, 
  "p1p3": 0, 
  "p2p4": 0, 
  "p3p5": 1, 
  "p4p6": 0 
} 


//COLOURS 

const colorFront1  = "#ffa100"; 
const orange  = "#ff3f00"; 
const colorBack    = "#000000"; 
const white  = "#ffffff"; 

//SETUP 

function setup () { 

  // create the drawing canvas, save the canvas element 
  main_canvas = createCanvas(canvasWidth, canvasHeight); 
  main_canvas.parent('canvasContainer');

  // color/stroke setup 

  stroke(white); 
  strokeWeight(5); 
 
  // with no animation, redrawing the screen is not necessary 
  noLoop(); 
} 

 
//DRAWLETTER 
function drawLetter(posx, posy, letterData) { 
  //draw lines 
  fill(orange); 
  stroke(orange); 
  //HORIZONTAL 
  strokeWeight(15); 
  if(letterData["p1p2"]==1){ 
    line(posx-75, posy-100, posx+75, posy-100); 
  } 
 
  if(letterData["p3p4"]==1){ 
    line(posx-75, posy, posx+75, posy); 

  } 
  if(letterData["p5p6"]==1){ 

    line(posx-75, posy+100,posx+75, posy+100); 

  } 
  //VERTICAL 

  if(letterData["p1p3"]==1){ 
    line(posx-75, posy-100, posx-75, posy); 

  } 

  if(letterData["p2p4"]==1){ 
    line(posx+75, posy-100, posx+75, posy); 

  } 

  /***/ 

  if(letterData["p3p5"]==1){ 
    line(posx-75, posy,posx-75, posy+100); 

  } 

  if(letterData["p4p6"]==1){ 
    line(posx+75, posy,posx+75, posy+100); 

  } 


  //draw dots 
  fill(white); 
  stroke(white); 
strokeWeight(5); 
  ellipse(posx-75, posy-100, 25);//top left p1 
  ellipse(posx+75, posy-100, 25);//top right p2 
 
  ellipse(posx-75, posy, 25); //mid left p3 
  ellipse(posx+75, posy, 25); //mid right p4 

  ellipse(posx-75, posy+100, 25); //bottom left p5 
  ellipse(posx+75, posy+100, 25); //bottom right p6 
} 

 
//DRAW 

function draw () { 

  // clear screen 

  background(colorBack); 
 
  // compute the center of the canvas 

  let center_x = canvasWidth / 2;   
  let center_y = canvasHeight / 2; 
 
  // draw the letters A, B, C from saved data 
 
  drawLetter(center_x - 250, center_y, letterA); 
  drawLetter(center_x      , center_y, letterB); 
  drawLetter(center_x + 250, center_y, letterC); 

} 

 

function keyTyped() { 

  if (key == '!') { 

    saveBlocksImages(); 

  } 

  else if (key == '@') { 

    saveBlocksImages(true); 

  } 

 

} 