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
  "offsetRightTop": 80,
  "offsetMidTop": -20,
  "offsetMidRight":0

}

const letterB = {
  "size": 5,
  "offsetRightTop": 0,
  "offsetMidTop": -20,
 "offsetMidRight":-25,
  "ArcEnd":420,
  "TrianglePoint":0
}

const letterC = {
  "size": 5,
  "offsetRightTop": -20,
  "offsetMidTop": 0,
 "offsetMidRight":-75,
  "ArcEnd":420,
  "TrianglePoint":0
}

const backgroundColor  = "#000000";
const strokeColor      = "#233f11";

const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  // stroke(strokeColor);
  // strokeWeight(4);
  noStroke();

  // with no animation, redrawing the screen is not necessary
  noLoop();
  angleMode(DEGREES)
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
  // // determine parameters for second circle
 
// let TopAxis = 0
// let RightAxis = 0
// let BottomAxis = 200
// let LeftAxis = 100

//Nodes

let TopAxis = posy-100+letterData["offsetRightTop"]//change when porting to draw_letters
let TopMidAxis = posy-125 +letterData["offsetMidTop"]
let RightAxis = posx
let BottomSideAxis = posy+ 75
let BottomMidAxis = BottomSideAxis +25
let LeftAxis = posx+100
let leftMidAxisY = posy
let leftMidAxisX = posx +100+ letterData["offsetMidRight"]

stroke(255);
strokeWeight(1);



 line(RightAxis,TopAxis,RightAxis,BottomSideAxis); //right
 line(RightAxis,TopAxis,RightAxis,BottomSideAxis);

noFill();
beginShape();
vertex(RightAxis, TopAxis);
vertex(LeftAxis-25,TopMidAxis)
vertex(LeftAxis, TopAxis);
vertex(leftMidAxisX,leftMidAxisY)
vertex(LeftAxis,BottomSideAxis );
vertex(LeftAxis-25, BottomMidAxis);
vertex(RightAxis,BottomSideAxis);
endShape(CLOSE);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
