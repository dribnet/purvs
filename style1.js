let main_canvas = null;
let posx1_slider = null;
let posy1_slider = null;
let tilt1_slider = null;
let length1_slider = null;
let posx2_slider = null;
let posy2_slider = null;
let tilt2_slider = null;
let length2_slider = null;

const canvasWidth = 960;
const canvasHeight = 500;

let savedValues = {
  "A":
    {
      "box1": {
        "position X": -120,
		"position Y": 0,
        "tilt": 0,
		"length": 300,
      },
      "box2": {
        "position X": -120,
		"position Y": 0,
        "tilt": 0,
		"length": 0,
      }
    },
  "B":
    {
      "box1": {
        "position X": -120,
		"position Y": 0,
        "tilt": -30,
		"length": 300,
      },
      "box2": {
        "position X": -120,
		"position Y": 0,
        "tilt": 20,
		"length": 350,
      }
    },
  "C":
    {
      "box1": {
        "position X": -57,
		"position Y": 30,
        "tilt": -111,
		"length": 180,
      },
      "box2": {
        "position X": -50,
		"position Y": 22,
        "tilt": 32,
		"length": 205,
      }
    }
}

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  // create two sliders
  posx1_slider = createSlider(-300, 300, -120);
  posy1_slider = createSlider(-300, 300, -10);
  tilt1_slider = createSlider(-360, 360, 0);
  length1_slider = createSlider(0, 600, 200);
  posx2_slider = createSlider(-300, 300, -120);
  posy2_slider = createSlider(-300, 300, 10);
  tilt2_slider = createSlider(-360, 360, 0);
  length2_slider = createSlider(0, 600, 200);

  sel = createSelect();
  sel.option('A');
  sel.option('B');
  sel.option('C');
  sel.changed(letterChangedEvent);

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);

  // position each element on the page
  main_canvas.parent('canvasContainer');
  posx1_slider.parent('slider1Container');
  posy1_slider.parent('slider2Container');
  tilt1_slider.parent('slider3Container');
  length1_slider.parent('slider4Container');
  posx2_slider.parent('slider5Container');
  posy2_slider.parent('slider6Container');
  tilt2_slider.parent('slider7Container');
  length2_slider.parent('slider8Container');

  sel.parent(selectorContainer);
  button.parent(buttonContainer);
}

function sliderToDataObject() {
  let obj = {};
  obj["box1"] = {};
  obj["box1"]["position X"] = posx1_slider.value();
  obj["box1"]["position Y"] = posy1_slider.value();
  obj["box1"]["tilt"] = tilt1_slider.value();
  obj["box1"]["length"] = length1_slider.value();
  obj["box2"] = {};
  obj["box2"]["position X"] = posx2_slider.value();
  obj["box2"]["position Y"] = posy2_slider.value();
  obj["box2"]["tilt"] = tilt2_slider.value();
  obj["box1"]["length"] = length2_slider.value();
  return obj;
}

function dataObjectToSliders(obj) {
  posx1_slider.value(obj["box1"]["position X"]);
  posy1_slider.value(obj["box1"]["position Y"]);
  tilt1_slider.value(obj["box1"]["tilt"]);
  length1_slider.value(obj["box1"]["length"]);
  posx2_slider.value(obj["box2"]["position X"]);
  posy2_slider.value(obj["box2"]["position Y"]);
  tilt2_slider.value(obj["box2"]["tilt"]);
  length2_slider.value(obj["box2"]["length"]);
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

const colorFront = [0, 0, 0];
const colorBack = [255, 255, 255];

function drawPart(posx, posy, tilt, len) {
  let middle_x = canvasWidth / 2;
  let middle_y = canvasHeight / 2;
  resetMatrix();
  translate(middle_x + posx, middle_y + posy);
  rotate(tilt);


  // rect(-100,-100,100,100);
  rect(0, 0, len, 10);
}

function drawFromSliders(posx_slider, posy_slider, tilt_slider, length_slider) {
	posx = posx_slider.value();
	posy = posy_slider.value();
	tilt = tilt_slider.value();
	len = length_slider.value();
  drawPart(posx, posy, tilt, len);
}

function draw () {
  background(colorBack);
  noStroke();

  //background triangle
  fill(colorFront);
  triangle(360, 390, 600, 390, 360, 110);
  
  //white stripes
  fill(colorBack);
  drawFromSliders(posx1_slider, posy1_slider, tilt1_slider, length1_slider);
  drawFromSliders(posx2_slider, posy2_slider, tilt2_slider, length2_slider);
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
