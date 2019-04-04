/*
 * Here are some things you can edit
 */
const colorBack    = "#e3eded";
const colorLines   = "#000090";

function sliderToDataObject() {
  let obj = {};
  obj["e1x"] = map(param_sliders[0].value(), 0, 100, 0, 100);
  obj["e1y"] = map(param_sliders[1].value(), 0, 100, 0, 100);
  obj["r1x"] = map(param_sliders[2].value(), 0, 100, 0, 100);
  obj["r1y"] = map(param_sliders[3].value(), 0, 100, 0, 100);
  obj["r2x"] = map(param_sliders[4].value(), 0, 100, 0, 100);
  obj["r2y"] = map(param_sliders[5].value(), 0, 100, 0, 100);
  obj["r3x"] = map(param_sliders[6].value(), 0, 100, 0, 100);
  obj["r3y"] = map(param_sliders[7].value(), 0, 100, 0, 100);
  return obj;
}

let numSliders = 8;

// PROBABLY DON't NEED TO EDIT ANYTHING ELSE.

let param_sliders = [];

let main_canvas = null;

const canvasWidth = 960;
const canvasHeight = 500;

let debugBox = false;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  for(let i=0; i<numSliders; i++) {
    let cur_row = select("#row" + (i+1))
    cur_row.show();
    let cur_slider = createSlider(0, 100, 50)
    let containerString = "slider" + (i+1) + "Container"
    cur_slider.parent(containerString);
    param_sliders.push(cur_slider);
  }

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);
  button.parent(buttonContainer);
}

function buttonPressedEvent() {
  let obj = sliderToDataObject();
  json = JSON.stringify(obj, null, 2);
  alert(json);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  push();
  scale(2);
  translate(width/4 - 50, 25);

  if (debugBox) {
    noFill()
    strokeWeight(4);
    stroke(0, 200, 0, 80);
    rect(0, 0, 100, 200);

     let pos2x = letterData["e1x"];
    let pos2y = letterData["e1y"];
    let pos3x = letterData["r1x"];
    let pos3y = letterData["r1y"];
    let pos4x = letterData["r2x"];
    let pos4y = letterData["r2y"];
    let pos5x = letterData["r3x"];
    let pos5y = letterData["r3y"];
    ellipse(pos2x, pos2y, 25, 25);
    rect(pos3x, pos3y, 60, 15);
    rect(pos4x, pos4y, 15, 120);
    rect(pos5x, pos5y, 15, 120);
  }

  let obj = sliderToDataObject();
  drawLetter(obj);
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
  else if (key == 'd') {
    debugBox = !debugBox;
    // console.log("debugBox is now: " + debugBox);
    redraw();
  }
  else if (key == ' ') {
    let obj = sliderToDataObject();
    json = JSON.stringify(obj, null, 2);
    console.log(json);
  }
}
