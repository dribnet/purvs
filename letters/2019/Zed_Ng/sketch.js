const canvasWidth = 960;
const canvasHeight = 500;
const characterheight = 200;
const characterwidth = 100;

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
  "point1x":-50,
  "point1y":100,
  "point2x":0,
  "point2y":-100,
  "point3x":50,
  "point3y":100,
  "point4x":-50,
  "point4y":0,
  "point5x":0,
  "point5y":0,
  "point6x":50,
  "point6y":0
}

const letterB = {
  "point1x":-50,
  "point1y":100,
  "point2x":-50,
  "point2y":-100,
  "point3x":50,
  "point3y":-50,
  "point4x":-50,
  "point4y":0,
  "point5x":50,
  "point5y":50,
  "point6x":-50,
  "point6y":100
}

const letterC = {
  "point1x":50,
  "point1y":-50,
  "point2x":0,
  "point2y":-100,   
  "point3x":-50,
  "point3y":-50,
  "point4x":-50,
  "point4y":50,
  "point5x":0,
  "point5y":100,
  "point6x":50,
  "point6y":50
}



function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
  angleMode(DEGREES);

  // color/stroke setup
  stroke(50);
  strokeWeight(1);

  // with no animation, redrawing the screen is not necessary
  // noLoop();
}


function characterSizeChecker(posx,posy){
  rectMode(CENTER)

  noFill()
  rect(posx,posy,100,200)
push()
  fill(100,150);
  noStroke()
  textAlign(RIGHT);
  text("-50,-100",posx-50,posy-100)
  textAlign(CENTER);
  text("0,-100",posx,posy-100)
  textAlign(LEFT);
  text("50,-100",posx+50,posy-100)

  textAlign(RIGHT, CENTER);
  text("-50,-50",posx-50,posy-50)
  textAlign(CENTER, CENTER);
  text("0,-50",posx,posy-50)
  textAlign(LEFT, CENTER);
  text("50,-50",posx+50,posy-50)

  textAlign(RIGHT, CENTER);
  text("-50,0",posx-50,posy)
  textAlign(CENTER, CENTER);
  text("0,0",posx,posy)
  textAlign(LEFT, CENTER);
  text("50,0",posx+50,posy)

  textAlign(RIGHT, CENTER);
  text("-50,50",posx-50,posy+50)
  textAlign(CENTER, CENTER);
  text("0,50",posx,posy+50)
  textAlign(LEFT, CENTER);
  text("50,50",posx+50,posy+50)


  textAlign(RIGHT,TOP);
  text("-50,100",posx-50,posy+100)
  textAlign(CENTER,TOP);
  text("0,100",posx,posy+100)
  textAlign(LEFT,TOP);
  text("50,100",posx+50,posy+100)
pop()
}



function drawLetter(posx, posy, letterData) {
  characterSizeChecker(posx,posy)
    for (i = 0; i < 8; i++){
      push()
      translate(posx, posy);
      rotate(random(-3,3))
      stroke(random(150,250))
      strokeWeight(2);
      beginShape();
      vertex(letterData["point1x"], letterData["point1y"]);
      vertex(letterData["point2x"], letterData["point2y"]);
      vertex(letterData["point3x"], letterData["point3y"]);
      vertex(letterData["point4x"], letterData["point4y"]);
      vertex(letterData["point5x"], letterData["point5y"]);
      vertex(letterData["point6x"], letterData["point6y"]);
      endShape();
      pop();
    };
  }

function draw () {
  // clear screen
  background(0);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // // draw the letters A, B, C from saved data
  drawLetter(center_x-250, center_y,letterA);
  drawLetter(center_x, center_y, letterB);
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
