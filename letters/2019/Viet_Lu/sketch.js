const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
 "offsetx5": 15,
  "offsetx6": 15,
  "offsetx7": 15,
  "offsetx8": 15,
  "offsetx9": 15,
 
  "offsety5": 50,
  "offsety6": 50,
  "offsety7": 50,
  "offsety8": 50,
  "offsety9": 65,
}

const letterB = {
  "offsetx1": 15,
  "offsetx2": 15,
  "offsetx3": 15,
  "offsetx4": 15,
  "offsetx5": 15,
  "offsetx6": 15,
  "offsetx7": 15,
  "offsetx8": 15,
  "offsetx9": 15,

  "offsety1": 10,
  "offsety2": 10,
  "offsety3": 10,
  "offsety4": 10,
  "offsety5": 50,
  "offsety6": 50,
  "offsety7": 50,
  "offsety8": 50,
  "offsety9": 50,
}

const letterC = {
  "offsetx5": 25,
  "offsetx6": 15,
  "offsetx7": 15,
  "offsetx8": 15,
  "offsetx9": 25,
 
  "offsety5": 60,
  "offsety6": 40,
  "offsety7": 30,
  "offsety8": 40,
  "offsety9": 60,
}

const colorBack    = 0;
const colorStroke  = 255;
const lineSpacing = 10;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}


function drawLetter(posx, posy, letterData) {

 let positionx1 = letterData["offsetx1"];
  let positionx2 = letterData["offsetx2"];
  let positionx3 = letterData["offsetx3"];
  let positionx4 = letterData["offsetx4"];
  let positionx5 = letterData["offsetx5"];
  let positionx6 = letterData["offsetx6"];
  let positionx7 = letterData["offsetx7"];
  let positionx8 = letterData["offsetx8"];
  let positionx9 = letterData["offsetx9"];
  let positionx10 = letterData["offsetx10"];
 
  let length1 = letterData["offsety1"];
  let length2 = letterData["offsety2"];
  let length3 = letterData["offsety3"];
  let length4 = letterData["offsety4"]; 
  let length5 = letterData["offsety5"]; 
  let length6 = letterData["offsety6"];
  let length7 = letterData["offsety7"];
  let length8 = letterData["offsety8"];
  let length9 = letterData["offsety9"]; 
  let length10 = letterData["offsety10"]; 


  line(posx + positionx1, posy + lineSpacing,   posx + length1 + positionx1, posy + lineSpacing);
  line(posx + positionx2, posy + lineSpacing*2, posx + length2 + positionx2, posy + lineSpacing*2);
  line(posx + positionx3, posy + lineSpacing*3, posx + length3 + positionx3, posy + lineSpacing*3);
  line(posx + positionx4, posy + lineSpacing*4, posx + length4 + positionx4, posy + lineSpacing*4);
  line(posx + positionx5, posy + lineSpacing*5, posx + length5 + positionx5, posy + lineSpacing*5);
  line(posx + positionx6, posy + lineSpacing*6, posx + length6 + positionx6, posy + lineSpacing*6);
  line(posx + positionx7, posy + lineSpacing*7, posx + length7 + positionx7, posy + lineSpacing*7);
  line(posx + positionx8, posy + lineSpacing*8, posx + length8 + positionx8, posy + lineSpacing*8);
  line(posx + positionx9, posy + lineSpacing*9, posx + length9 + positionx9, posy + lineSpacing*9);
  line(posx + positionx10, posy + lineSpacing*10, posx + length10 + positionx10, posy + lineSpacing*10);
}


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