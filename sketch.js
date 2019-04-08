const canvasWidth = 960;
const canvasHeight = 500;
const rad = 10;




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

// https://image.shutterstock.com/display_pic_with_logo/2883424/276509240/stock-vector-colorful-connecting-hexagon-alphabet-letters-276509240.jpg
// https://editor.p5js.org/Rito/sketches/BJ5D_KeTg
// https://www.redblobgames.com/grids/hexagons/#coordinates-offset
// http://1.bp.blogspot.com/-rAqRNBJmz2M/TdER5PDZX6I/AAAAAAAAC7o/CLMbuXNrsOw/s1600/IMG_4388.jpg

const letterA = {
  // "size": 80,
  // "offsetx": 0,
  // "offsety": 0
  // "on": "142,226,224";
  // "off": noFill();
}

const letterB = {
  // "size": 150,
  // "offsetx": 0,
  // "offsety": 0
}

const letterC = {
  // "size": 100,
  // "offsetx": 0,
  // "offsety": 0
}

const colorFront1  = "#8ee2e0";
const colorFront2  = "#f495a3";
const colorBack    = "#edf1e9";

// const colorStroke  = "#233f11";



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
  // let pos2x = posx + letterData["offsetx"];
  // let pos2y = posy + letterData["offsety"];
  // let lightOn = letterData["on"];
  // let lightOff = letterData["off"];
  // for (let i = 0; i <= 180; i +=w){
  //   polygon(i+w, 100, rad, 6);
  //   polygon(i+w2,100+3/4*h, rad, 6);
  // }
  hexGrid(posx, posy)


}

function draw () {
  // clear screen
  background(colorBack);
  // let w = sqrt(3) * rad;
  // let h = 2 * rad;
  // let w2 = w+1/2*w;
  // compute the center of the canvas
  let w = sqrt(3) * rad;
  let h = 2 * rad; 
  let center_x = canvasWidth / 2 - w*2;  
  let center_y = canvasHeight / 2 - h*2;


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

function hexGrid(posx, posy){
  let w = sqrt(3) * rad;
  let h = 2 * rad;  
  let w2 = 1/2*w;
  let h2 = 3/4*h;

  noFill();
  stroke(colorFront1);
  strokeWeight(1);

  //first row
  polygon(posx, posy, rad, 6);
  polygon(posx+w, posy, rad, 6);
  polygon(posx+2*w, posy, rad, 6);
  fill(colorFront1);
  polygon(posx+3*w, posy, rad, 6);
  noFill();
  polygon(posx+4*w, posy, rad, 6);
  polygon(posx+5*w, posy, rad, 6);
  polygon(posx+6*w, posy, rad, 6);

  //second row
  push();
  translate(w2, h2);
  polygon(posx, posy, rad, 6);
  polygon(posx+w, posy, rad, 6);
  fill(colorFront1);
  polygon(posx+2*w, posy, rad, 6);
  polygon(posx+3*w, posy, rad, 6);
  noFill();
  polygon(posx+4*w, posy, rad, 6);
  polygon(posx+5*w, posy, rad, 6);
  pop();

  //third row
  push();
  translate(0,2*h2);
  polygon(posx, posy, rad, 6);
  polygon(posx+w, posy, rad, 6);
  fill(colorFront1);
  polygon(posx+2*w, posy, rad, 6);
  noFill();
  polygon(posx+3*w, posy, rad, 6);
  fill(colorFront1);
  polygon(posx+4*w, posy, rad, 6);
  noFill();
  polygon(posx+5*w, posy, rad, 6);
  polygon(posx+6*w, posy, rad, 6);
  pop();

  //fourth row
  push();
  translate(w2, 3*h2);
  polygon(posx, posy, rad, 6);
  fill(colorFront1);
  polygon(posx+w, posy, rad, 6);
  noFill();
  polygon(posx+2*w, posy, rad, 6);
  polygon(posx+3*w, posy, rad, 6);
  fill(colorFront1);
  polygon(posx+4*w, posy, rad, 6);
  noFill();
  polygon(posx+5*w, posy, rad, 6);
  pop();

  //fifth row
  push();
  translate(0, 4*h2);
  polygon(posx, posy, rad, 6);
  fill(colorFront1);
  polygon(posx+w, posy, rad, 6);
  polygon(posx+2*w, posy, rad, 6);
  polygon(posx+3*w, posy, rad, 6);
  polygon(posx+4*w, posy, rad, 6);
  polygon(posx+5*w, posy, rad, 6);
  noFill();
  polygon(posx+6*w, posy, rad, 6);
  pop();

  //sixth row
  push();
  translate(w2, 5*h2);
  fill(colorFront1);
  polygon(posx, posy, rad, 6);
  noFill();
  polygon(posx+w, posy, rad, 6);
  polygon(posx+2*w, posy, rad, 6);
  polygon(posx+3*w, posy, rad, 6);
  polygon(posx+4*w, posy, rad, 6);
  fill(colorFront1);
  polygon(posx+5*w, posy, rad, 6);
  noFill();
  pop();

  //seventh row
  push();
  translate(0, 6*h2);
  fill(colorFront1);
  polygon(posx, posy, rad, 6);
  noFill();
  polygon(posx+w, posy, rad, 6);
  polygon(posx+2*w, posy, rad, 6);
  polygon(posx+3*w, posy, rad, 6);
  polygon(posx+4*w, posy, rad, 6);
  polygon(posx+5*w, posy, rad, 6);
  fill(colorFront1);
  polygon(posx+6*w, posy, rad, 6);
  pop();
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
