const canvasWidth = 960;
const canvasHeight = 500;
const rad = 15;

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

//https://image.shutterstock.com/display_pic_with_logo/2883424/276509240/stock-vector-colorful-connecting-hexagon-alphabet-letters-276509240.jpg
//https://editor.p5js.org/Rito/sketches/BJ5D_KeTg

const letterA = {
  // "size": 80,
  "offsetx": 26,
  "offsety": 0
}

const letterB = {
  // "size": 150,
  "offsetx": 26,
  "offsety": 0
}

const letterC = {
  // "size": 100,
  "offsetx": 26,
  "offsety": 0
}

const colorFront1  = "#8ee2e0";
const colorFront2  = "#f495a3";
const colorBack    = "#edf1e9";
// const colorStroke  = "#233f11";

// let bugs = [];


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  // stroke(colorStroke);
  // strokeWeight(0);
  noStroke();
  // with no animation, redrawing the screen is not necessary
  // noLoop();
  
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  // let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let w = sqrt(3) * rad;
  let h = 2 * rad;

  noFill();
  stroke(colorFront1);
  strokeWeight(1);
  polygon(posx, posy, rad, 6);

  // fill(colorFront2);
  // noStroke();
  // polygon(pos2x, pos2y, rad, 6);

  for (let i = 0; i <= 180; i +=w){
    polygon(i+w, 150, rad, 6);
  }
  for (let i = 0; i <=180; i +=w){
    polygon( w*1.5, i+w+150, rad, 6);
  }
  // https://www.redblobgames.com/grids/hexagons/#coordinates-offset

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

  //   for (let i = 0; i < bugs.length; i++){
  //   bugs[i].move()
  //   bugs[i].display();
  // }
}


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints
  beginShape();
  for (let a = 0; a < TWO_PI ; a += angle) {
    let sx = x + sin(a) * radius;
    let sy = y + cos(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

// class Jitter{
//   constructor(){
//     this.x = random(width);
//     this.y = random(height);
//     this.diameter = 10;
//     this.speed = 1;
//   }
//   move(){
//     this.x += random(-this.speed, this.speed);
//     this.y += random(-this.speed, this.speed);
//   }
//   display(){
//     ellipse(this.x, this.y, this.diameter, this.diameter);
//   }
// }
