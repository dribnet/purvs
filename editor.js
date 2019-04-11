/*
 * Here are some things you can edit
 */
const colorBack    = "#e3eded";
const colorLines   = "#000090";

function sliderToDataObject() {
  let obj = {};
  obj["l1x"]    = map(param_sliders[0].value(), 0, 100, 0, 200);
  obj["l1y"]    = map(param_sliders[1].value(), 0, 100, 0, 200);
  obj["l2x"]    = map(param_sliders[2].value(), 0, 100, 0, 200);
  obj["l2y"]    = map(param_sliders[3].value(), 0, 100, 0, 200);
  obj["l3x"]    = map(param_sliders[4].value(), 0, 100, 0, 200);
  obj["l3y"]    = map(param_sliders[5].value(), 0, 100, 0, 200);
  obj["l4x"]    = map(param_sliders[6].value(), 0, 100, 0, 200);
  obj["l4y"]    = map(param_sliders[7].value(), 0, 100, 0, 200);
  obj["l5x"]    = map(param_sliders[8].value(), 0, 100, 0, 200);
  obj["l5y"]    = map(param_sliders[9].value(), 0, 100, 0, 200);
  obj["l6x"]    = map(param_sliders[10].value(), 0, 100, 0,200);
  obj["l6y"]    = map(param_sliders[11].value(), 0, 100, 0,200);
  obj["l7x"]    = map(param_sliders[12].value(), 0, 100, 0, 200);
  obj["l7y"]    = map(param_sliders[13].value(), 0, 100, 0, 200);
  obj["l8x"]    = map(param_sliders[14].value(), 0, 100, 0,200);
  obj["l8y"]    = map(param_sliders[15].value(), 0, 100, 0,200);
  return obj;
}

let numSliders = 16;

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
    stroke(0, 200, 0);
    rect(0, 0, 100, 200);
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
