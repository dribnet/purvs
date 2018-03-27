//this one's linked to index html for some reason

let main_canvas = null;
let pos1_slider = null;
let tilt1_slider = null;
let pos2x_slider = null;
let pos2y_slider = null;
let pos3_slider = null;
let tilt3_slider = null;

const canvasWidth = 960;
const canvasHeight = 500;

let savedValues = {
  "A":
    {
  "box1": {
    "position": -187,
    "tilt": -72
  },
  "box2": {
    "position": 0,
    "tilt": 0
  },
  "box3": {
    "position": -77,
    "tilt": 59
  }
},
  "B":
    {
  "box1": {
    "position": -200,
    "tilt": 93
  },
  "box2": {
    "position": -86,
    "tilt": -71
  },
  "box3": {
    "position": -97,
    "tilt": 68
  }
},
  "C":
    {
  "box1": {
    "position": 21,
    "tilt": 0
  },
  "box2": {
    "position": -86,
    "tilt": -95
  },
  "box3": {
    "position": -176,
    "tilt": -180
  }
}
}

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  // create two sliders
  pos1_slider = createSlider(-200, 200, 0);
  tilt1_slider = createSlider(-180, 180, 0);
  pos2x_slider = createSlider(-200, 200, 0);
  pos2y_slider = createSlider(-200, 200, 0);
  pos3_slider = createSlider(-200, 200, 0);
  tilt3_slider = createSlider(-180, 180, 0);

  sel = createSelect();
  sel.option('A');
  sel.option('B');
  sel.option('C');
  sel.changed(letterChangedEvent);

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);

  // position each element on the page
  main_canvas.parent('canvasContainer');
  pos1_slider.parent('slider1Container');
  tilt1_slider.parent('slider2Container');
  pos2x_slider.parent('slider3Container');
  pos2y_slider.parent('slider4Container');
  pos3_slider.parent('slider5Container');
  tilt3_slider.parent('slider6Container');

  sel.parent(selectorContainer);
  button.parent(buttonContainer);
}

function sliderToDataObject() {
  let obj = {};
  obj["box1"] = {};
  obj["box1"]["position"] = pos1_slider.value();
  obj["box1"]["tilt"] = tilt1_slider.value();
  obj["box2"] = {};
  obj["box2"]["position"] = pos2x_slider.value();
  obj["box2"]["tilt"] = pos2y_slider.value();
  obj["box3"] = {};
  obj["box3"]["position"] = pos3_slider.value();
  obj["box3"]["tilt"] = tilt3_slider.value();
  return obj;
}

function dataObjectToSliders(obj) {
  pos1_slider.value(obj["box1"]["position"]);
  tilt1_slider.value(obj["box1"]["tilt"]);
  pos2_slider.value(obj["box2"]["position"]);
  tilt2_slider.value(obj["box2"]["tilt"]);
  pos3_slider.value(obj["box3"]["position"]);
  tilt3_slider.value(obj["box3"]["tilt"]);
}

function letterChangedEvent() {
  let item = sel.value();
  dataObjectToSliders(savedValues[item]);
}

function buttonPressedEvent() {
  let obj = sliderToDataObject();
  json = JSON.stringify(obj, null, 2);
  alert(json);
}

const colorFront = [240, 30, 46];
const colorBack = [220, 30, 46];

function drawPart(y_offset, pos, tilt) {
  let middle_x = 2 * canvasWidth / 3;
  let middle_y = canvasHeight / 2;
  resetMatrix();
  translate(middle_x + pos, middle_y + y_offset);
  rotate(tilt);

  let scale = 10;

  fill(colorFront);
  noStroke();
  // rect(-100,-100,100,100);
  rect(-20*scale, -3*scale, 20*scale, 4*scale, 20, 0, 0, 20);
}

function drawFromSliders(y_offset, pos_slider, tilt_slider) {
  let pos = pos_slider.value();
  let tilt = tilt_slider.value();
  drawPart(y_offset, pos, tilt);
}

function draw () {
  background(colorBack);
  fill(colorFront);
  //stroke(95, 52, 8);
  noStroke();

  ellipse(canvasWidth/2, canvasHeight/2, 50, 50);

  drawFromSliders(-50, pos1_slider, tilt1_slider);
 // drawFromSliders(  0, pos2_slider, tilt2_slider);
  drawFromSliders( 50, pos3_slider, tilt3_slider);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
