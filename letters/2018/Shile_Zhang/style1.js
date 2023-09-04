let main_canvas = null;
let pos1_slider = null;
let tilt1_slider = null;
let pos2_slider = null;
let tilt2_slider = null;
let pos3_slider = null;
let tilt3_slider = null;
let pos4_slider = null;
let tilt4_slider = null;

const canvasWidth = 960;
const canvasHeight = 500;

let savedValues = {
  "A":
    {
  "box1": {
    "position": -130,
    "tilt": -50
  },
  "box2": {
    "position": 21,
    "tilt": 162
  },
  "box3": {
    "position": 130,
    "tilt": -140
  },
  "box4": {
    "position": 40,
    "tilt": -40
  }
},
  "B":
    {
  "box1": {
    "position": 0,
    "tilt": 0
  },
  "box2": {
    "position": 0,
    "tilt": 0
  },
  "box3": {
    "position": -176,
    "tilt": 0
  },
  "box4": {
    "position": 0,
    "tilt": -180
  }
},
  "C":
    {
  "box1": {
    "position": 66,
    "tilt": -180
  },
  "box2": {
    "position": 70,
    "tilt": -71
  },
  "box3": {
    "position": 150,
    "tilt": -150
  },
  "box4": {
    "position": 80,
    "tilt": -100
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
  pos2_slider = createSlider(-200, 200, 0);
  tilt2_slider = createSlider(-180, 180, 0);
  pos3_slider = createSlider(-200, 200, 0);
  tilt3_slider = createSlider(-180, 180, 0);
  pos4_slider = createSlider(-200, 200, 0);
  tilt4_slider = createSlider(-180, 180, 0);

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
  pos2_slider.parent('slider3Container');
  tilt2_slider.parent('slider4Container');
  pos3_slider.parent('slider5Container');
  tilt3_slider.parent('slider6Container');
  pos4_slider.parent('slider7Container');
  tilt4_slider.parent('slider8Container');

  sel.parent(selectorContainer);
  button.parent(buttonContainer);
}

function sliderToDataObject() {
  let obj = {};
  obj["box1"] = {};
  obj["box1"]["position"] = pos1_slider.value();
  obj["box1"]["tilt"] = tilt1_slider.value();
  obj["box2"] = {};
  obj["box2"]["position"] = pos2_slider.value();
  obj["box2"]["tilt"] = tilt2_slider.value();
  obj["box3"] = {};
  obj["box3"]["position"] = pos3_slider.value();
  obj["box3"]["tilt"] = tilt3_slider.value();
  obj["box4"] = {};
  obj["box4"]["position"] = pos4_slider.value();
  obj["box4"]["tilt"] = tilt4_slider.value();
  return obj;
}

function dataObjectToSliders(obj) {
  pos1_slider.value(obj["box1"]["position"]);
  tilt1_slider.value(obj["box1"]["tilt"]);
  pos2_slider.value(obj["box2"]["position"]);
  tilt2_slider.value(obj["box2"]["tilt"]);
  pos3_slider.value(obj["box3"]["position"]);
  tilt3_slider.value(obj["box3"]["tilt"]);
  pos4_slider.value(obj["box4"]["position"]);
  tilt4_slider.value(obj["box4"]["tilt"]);
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

const colorFront = [255];
const colorBack = [64,219,217];

function drawPart(y_offset, pos, tilt) {
  let middle_x = 2 * canvasWidth / 3;
  let middle_y = canvasHeight / 2;
  resetMatrix();
  translate(middle_x + pos, middle_y + y_offset);
  rotate(tilt);

  let scale = 10;

  fill(colorFront);
  // rect(-100,-100,100,100);
  rect(-20*scale, -3*scale, 20*scale, 3*scale);
}

function drawFromSliders(y_offset, pos_slider, tilt_slider) {
  let pos = pos_slider.value();
  let tilt = tilt_slider.value();
  drawPart(y_offset, pos, tilt);
}

function draw () {
  background(colorBack);
  noFill();
  strokeWeight(10);
  angleMode(DEGREES);

  stroke(240,246,247);
  arc(width/2, height/2, 200, 200, pos1_slider.value(), tilt1_slider.value());
  stroke(132,242,104);
  arc(width/2, height/2, 150, 150, pos2_slider.value(), tilt2_slider.value());
  stroke(25,176,188);
  arc(width/1.4, height/2, 200, 200, pos3_slider.value(), tilt3_slider.value());
  fill(255);
  noStroke();
  arc(width/2, height/2, 80, 80, pos4_slider.value(), tilt4_slider.value());
  //drawFromSliders(-50, pos1_slider, tilt1_slider);
  //drawFromSliders(  0, pos2_slider, tilt2_slider);
  //drawFromSliders( 50, pos3_slider, tilt3_slider);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}