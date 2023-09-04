/*
 * Here are some things you can edit
 */
const colorBack    = "#e3eded";
const colorLines   = "#000090";

function sliderToDataObject() {
  let obj = {};
  obj["posx1"]    = map(param_sliders[0].value(), -41.5, 105, 49, 147.5);
  obj["posx2"]    = map(param_sliders[1].value(), -2.5, 105, 49, 147.5);
  obj["posx3"]    = map(param_sliders[2].value(),  -2.5, 105, 49, 147.5);
  obj["posx4"]    = map(param_sliders[3].value(), -2.5, 105, 49, 147.5);
  obj["posx5"]    = map(param_sliders[4].value(),  -2.5, 105, 49, 147.5);
  obj["posx6"]    = map(param_sliders[5].value(),  -2.5, 105, 49, 147.5);
  obj["posx7"]    = map(param_sliders[6].value(),  -2.5, 105, 49, 147.5);

  obj["triposx1"] = map(param_sliders[7].value(),  -2.5, 105, 49, 147.5);
  obj["triposx2"] = map(param_sliders[8].value(),  -2.5, 105, 49, 147.5);
  obj["triposx3"] = map(param_sliders[9].value(),  -2.5, 105, 49, 147.5);

  obj["posy1"]    = map(param_sliders[10].value(),  -2.5, 105, 49, 147.5);
  obj["posy2"]    = map(param_sliders[11].value(),  -2.5, 105, 49, 147.5);
  obj["posy3"]    = map(param_sliders[12].value(),  -2.5, 105, 49, 147.5);
  obj["posy4"]    = map(param_sliders[13].value(),  -2.5, 105, 49, 147.5);
  obj["posy5"]    = map(param_sliders[14].value(),  -2.5, 105, 49, 147.5);
  obj["posy6"]    = map(param_sliders[15].value(),  -2.5, 105, 49, 147.5);
  obj["posy7"]    = map(param_sliders[16].value(),  -2.5, 105, 49, 147.5);

  obj["triposy1"] = map(param_sliders[17].value(), 0, 100,0, 200);
  obj["triposy2"] = map(param_sliders[18].value(), 0, 100,0, 200);
  obj["triposy3"] = map(param_sliders[19].value(), 0, 100, 0, 200);
  return obj;
}

let numSliders = 20;

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
