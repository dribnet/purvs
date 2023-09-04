/*
 * Here are some things you can edit
 */
const colorBack    = "#FFE4E1";
const colorLines   = "#000000";
const colorHalfline   = "#FF0000";

/* 
 * do not edit this rest of this file, instead edit the letter
 * drawing code in draw_letters.js
 */

const canvasWidth = 960;
const canvasHeight = 500;

// Handy string of all letters available
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  push();
  scale(0.5);

  // constants
  const left_margin = 40;
  const right_margin = 2*width - 40;
  const top_margin = 80;
  const bottom_margin = 2*height - 60;
  const x_step = 140;
  const y_step = 280;
  const first_letter_offset_x = 120;

  let cur_letter_index = 0;

  for(let j=top_margin; j<bottom_margin-y_step; j+=y_step) {
    push();
    translate(0, j);

    // draw lines
    stroke(colorLines);
    line(left_margin, 0, right_margin, 0);
    stroke(colorLines);
    line(left_margin, 100, right_margin, 100);
    stroke(colorLines);
    for(let i=left_margin; i<right_margin-8; i+=30) {
      stroke(colorLines);
      line(i, 150, i+12, 150);
      stroke(colorLines);
      line(i, 50, i+12, 50);
      stroke(colorHalfline);
      line(i, 240, i+12, 240);
      stroke(colorHalfline);
      line(i, -40, i+12, -40);
      stroke(colorLines);
    }
    line(left_margin, 200, right_margin, 200);

    translate(left_margin+first_letter_offset_x, 130);
    for(let i=left_margin+first_letter_offset_x; i<right_margin-x_step+1; i+=x_step) {
      let letter = letters[cur_letter_index];
      if (letter in alphabet) {
        drawLetter(alphabet[letter]);
      }
      else {
        drawLetter(alphabet["default"]);    
      }
      translate(x_step, 0);
      cur_letter_index = (cur_letter_index + 1) % letters.length;
    }
    pop();
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
