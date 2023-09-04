let main_canvas = null;
let pos1_slider = null;
let tilt1_slider = null;
let pos2_slider = null;
let tilt2_slider = null;
let pos3_slider = null;
let tilt3_slider = null;

const canvasWidth = 960;
const canvasHeight = 500;

let savedValues = {
  "A":
{
  "box1": {
    "position": -174,
    "tilt": -69
  },
  "box2": {
    "position": -69,
    "tilt": -13
  },
  "box3": {
    "position": -44,
    "tilt": 66
  }
},
  "B":
{
  "box1": {
    "position": -191,
    "tilt": -85
  },
  "box2": {
    "position": -226,
    "tilt": -133
  },
  "box3": {
    "position": -5,
    "tilt": -19
  }
},
  "C":
{
  "box1": {
    "position": -280,
    "tilt": -73
  },
  "box2": {
    "position": -191,
    "tilt": 180
  },
  "box3": {
    "position": -161,
    "tilt": -9
  }
}
}

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  // create two sliders
  pos1_slider = createSlider(-280, 280, 0);
  tilt1_slider = createSlider(-180, 180, 0);
  pos2_slider = createSlider(-280, 280, 0);
  tilt2_slider = createSlider(-180, 180, 0);
  pos3_slider = createSlider(-280, 280, 0);
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
  pos2_slider.parent('slider3Container');
  tilt2_slider.parent('slider4Container');
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
  obj["box2"]["position"] = pos2_slider.value();
  obj["box2"]["tilt"] = tilt2_slider.value();
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

const colorFront = [132, 191, 151];
const colorBack = [125, 142, 123];

function drawPart(y_offset, pos, tilt) {
  let middle_x = 2 * canvasWidth / 3;
  let middle_y = canvasHeight / 2;
  resetMatrix();
  translate(middle_x + pos, middle_y + y_offset);
  rotate(tilt);

  let scale = 10;


  fill(colorFront);
  stroke (125, 142, 123);
    // rect(-100,-100,100,100);
  beginShape ();
  vertex (-24*scale, 0*scale);
  vertex (14*scale, 2*scale);
  vertex (14*scale, 6*scale);
  vertex (-24*scale, 4*scale);
  endShape (CLOSE);

  fill (255, 180);
  beginShape ();
  vertex (-24*scale, -0*scale);
  vertex (-21*scale, -2*scale);
  vertex (16*scale, 0*scale);
  vertex (14*scale, 2*scale);
  endShape (CLOSE);

  fill (60, 180);
  beginShape ();
  vertex (14*scale, 2*scale);
  vertex (16*scale, 0*scale);
  vertex (16*scale, 4*scale);
  vertex (14*scale, 6*scale);
  endShape (CLOSE);

}

function drawFromSliders(y_offset, pos_slider, tilt_slider) {
  let pos = pos_slider.value();
  let tilt = tilt_slider.value();
  drawPart(y_offset, pos, tilt);
}

function draw () {
  background(colorBack);
  fill(colorFront);

  drawFromSliders(-100, pos1_slider, tilt1_slider);
  drawFromSliders(  0, pos2_slider, tilt2_slider);
  drawFromSliders( 100, pos3_slider, tilt3_slider);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
