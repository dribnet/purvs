/*
 * Here are some things you can edit
 */
const colorBack    = "#e3eded";
const colorLines   = "#000090";

function sliderToDataObject() {
  let obj = {};

  obj["lx1"] = map(param_sliders[0].value(), 0, 100, 0, 100);
  obj["ly1"] = map(param_sliders[1].value(), 0, 100, 0, 200);
  obj["lx2"] = map(param_sliders[2].value(), 0, 100, 0, 100);
  obj["ly2"] = map(param_sliders[3].value(), 0, 100, 0, 200);
  obj["lx3"] = map(param_sliders[4].value(), 0, 100, 0, 100);
  obj["ly3"] = map(param_sliders[5].value(), 0, 100, 0, 200);
  obj["lx4"] = map(param_sliders[6].value(), 0, 100, 0, 100);
  obj["ly4"] = map(param_sliders[7].value(), 0, 100, 0, 200);
  obj["lx5"] = map(param_sliders[8].value(), 0, 100, 0, 100);
  obj["ly5"] = map(param_sliders[9].value(), 0, 100, 0, 200);
  obj["lx6"] = map(param_sliders[10].value(), 0, 100, 0, 100);
  obj["ly6"] = map(param_sliders[11].value(), 0, 100, 0, 200);
  obj["lx7"] = map(param_sliders[12].value(), 0, 100, 0, 100);
  obj["ly7"] = map(param_sliders[13].value(), 0, 100, 0, 200);
  obj["lx8"] = map(param_sliders[14].value(), 0, 100, 0, 100);
  obj["ly8"] = map(param_sliders[15].value(), 0, 100, 0, 200);
  obj["lx9"] = map(param_sliders[16].value(), 0, 100, 0, 100);
  obj["ly9"] = map(param_sliders[17].value(), 0, 100, 0, 200);
  obj["lx10"] = map(param_sliders[18].value(), 0, 100, 0, 100);
  obj["ly10"] = map(param_sliders[19].value(), 0, 100, 0, 200);
  obj["lx11"] = map(param_sliders[20].value(), 0, 100, 0, 100);
  obj["ly11"] = map(param_sliders[21].value(), 0, 100, 0, 200);
  obj["lx12"] = map(param_sliders[22].value(), 0, 100, 0, 100);
  obj["ly12"] = map(param_sliders[23].value(), 0, 100, 0, 200);
  obj["lx13"] = map(param_sliders[24].value(), 0, 100, 0, 100);
  obj["ly13"] = map(param_sliders[25].value(), 0, 100, 0, 200);
  obj["size1"] = map(param_sliders[26].value(), 0, 100, 0, 25);

  return obj;
}

let numSliders = 27;

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
