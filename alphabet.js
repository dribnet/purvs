/*
 * Here are some things you can edit
 */

 var img;

function preload() {
  img = loadImage('preview.jpg');
}

const colorBack    = "#e3eded";
const colorLines   = "#000090";

/* 
 * do not edit this rest of this file, instead edit the letter
 * drawing code in draw_letters.js
 */

const canvasWidth = 960;
const canvasHeight = 500;

// Handy string of all letters available
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?!.";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  angleMode (DEGREES);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
 image(img, 0, 0);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
