const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * The Seven parameters \\
 * =================== *
 
   topFill: Fill for top triangle
   rightFill: Fill for right triangle
   bottomFill: Fill for bottom triangle
   leftFill: Fill for left triangle
   SquareFill: Fill for Square (usually white but colour is more flexable than booleans)
   
   Irrelevant at the moment but neccisary for future Letters
   * ===================================================== *
   quadHorozontal: Squares position on X axis relative to where the letter is drawn
   quadVerticle: Squares position on Y axis relative to where the letter is drawn
 *
 */

const letterA = {
  "topFill": "rgb(153, 255, 255)" ,
  "rightFill": "rgb(51, 255, 255)" ,
  "bottomFill": "#33FFFF , 0" ,
  "leftFill": "rgb(51, 255, 255)" ,
  "SquareFill": "rgba(255, 255, 255)" ,
  "quadHorozontal": 0 ,
  "quadVerticle": 0
};

const letterB = {
  "topFill": "rgb(153, 255, 255)" ,
  "rightFill": "rgb(153, 255, 255, 0)" ,
  "bottomFill": "rgb(51, 255, 255)" ,
  "leftFill": "rgb(51, 255, 255)" ,
  "SquareFill": "rgba(255, 255, 255, 0)" ,
  "quadHorozontal": 0 ,
  "quadVerticle": 0
};

const letterC = {
  "topFill": "rgb(153, 255, 255)" ,
  "rightFill": "rgb(51, 255, 255, 0)" ,
  "bottomFill": "rgb(51, 255, 255)" ,
  "leftFill": "rgb(51, 255, 255)" ,
  "SquareFill": "rgb(255, 255, 255)" ,
  "quadHorozontal": 0 ,
  "quadVerticle": 0
};

const colorBack   = "#ffffff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  strokeWeight(0);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // Triangle Variables
  let fill1 = letterData["topFill"];
  let fill2 = letterData["rightFill"];
  let fill3 = letterData["bottomFill"];
  let fill4 = letterData["leftFill"];
  let fill5 = letterData["SquareFill"]; 
    
  let quadPosX = letterData["quadHorozontal"];
  let quadPosY = letterData["quadVerticle"];
    
  // Draw Triangles (4 Parameters) 
  // * ========================= *
    
  let triSize = 30 * scale;     // Make size relative to scale  
  //strokeJoin(BEVEL);            // Fix broken stroke edges
   
  //TOP TRIANGLE\\
  fill(fill1);
  //stroke(fill1);  
  triangle(posx - triSize, posy - triSize, posx, posy, posx + triSize, posy - triSize);
    
  //RIGHT TRIANGLE\\    
  fill(fill2);
  //stroke(fill2); 
  triangle(posx + triSize, posy + triSize, posx, posy, posx + triSize, posy - triSize);
    
  //BOTTOM TRIANGLE    
  fill(fill3);
  //stroke(fill3); 
  triangle(posx - triSize, posy + triSize, posx, posy, posx + triSize, posy + triSize);
    
  //LEFT TRIANGLE  
  fill(fill4);
  //stroke(fill4); 
  triangle(posx - triSize, posy - triSize, posx, posy, posx - triSize, posy + triSize);
    
  // Draw Mid Square (2 Parameters) \\
  // * ========================== *
    
  let quadSize = 15 * scale;            // Make Size relative to scale
  let relQuadPosX = quadPosX + posx;    // Make quadPosX relative to Letter position x
  let relQuadPosY = quadPosY + posy;    // Make quadPosY relative to Letter position y
  fill(fill5);
  //stroke(fill5);
  //strokeJoin(MITER);
  quad(relQuadPosX - quadSize, relQuadPosY - quadSize, 
       relQuadPosX - quadSize, relQuadPosY + quadSize, 
       relQuadPosX + quadSize, relQuadPosY + quadSize, 
       relQuadPosX + quadSize, relQuadPosY - quadSize);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 3, letterA);
  drawLetter(center_x      , center_y, 3, letterB);
  drawLetter(center_x + 250, center_y, 3, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
