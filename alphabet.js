/*
 * Here are some things you can edit
 */
const colorBack    = "#000000";
const colorLines   = "#000090";

/*
 * do not edit this rest of this file, instead edit the letter
 * drawing code in draw_letters.js
 */

const canvasWidth = 960;
const canvasHeight = 500;

// Handy string of all letters available
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789?";

let debugBox = false;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function mouseClicked() {
  debugBox = !debugBox;
  // console.log("debugBox is now: " + debugBox);
  redraw();
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
  const first_letter_offset_x = 20;

  let cur_letter_index = 0;

  for(let j=top_margin; j<bottom_margin-y_step; j+=y_step) {
    push();
    translate(0, j);

    // draw lines
    stroke(colorLines);
    line(left_margin, 0, right_margin, 0);
    for (let i=left_margin; i<right_margin-8; i+=30) {
      line(i, 100, i+12, 100);
    }
    line(left_margin, 200, right_margin, 200);

    translate(left_margin+first_letter_offset_x, 0);
    for (let i=left_margin+first_letter_offset_x; i<right_margin-x_step+1; i+=x_step) {
      if (cur_letter_index < letters.length) {
        if (debugBox) {
          noFill()
          strokeWeight(4);
          stroke(0, 200, 0);
          rect(0, 0, 100, 200);
        }

        let letter = letters[cur_letter_index];
        if (letter in alphabet) {
          drawLetter(alphabet[letter]);
        }
        else {
          drawLetter(alphabet["default"]);
        }
        translate(x_step, 0);
        cur_letter_index = (cur_letter_index + 1);
      }
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
