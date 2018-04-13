let main_canvas = null;

let arcStart_slider = null;
let arcEnd_slider = null;
let line1Length_slider = null;
let line1Tilt_slider = null;
let line1X_slider = null;
let line1Y_slider = null;
let line2Length_slider = null;
let line2Tilt_slider = null;
let line2X_slider = null;
let line2Y_slider = null;

const canvasWidth = 960;
const canvasHeight = 500;

let savedValues = {
  "A":
    {
      "ring": {
        "arc Start": 120,
		"arc End": -60,
      },
      "line1": {
      	"length": 150,
      	"tilt": 0,
      	"position X": -125,
		"position Y": 0,
      },
      "line2": {
		"length": 220,
      	"tilt": 90,
      	"position X": 30,
		"position Y": -120,
      }
    },
  "B":
    {
      "ring": {
        "arc Start": -100,
		"arc End": 100,
      },
      "line1": {
      	"length": 250,
      	"tilt": 90,
      	"position X": 0,
		"position Y": -120,
      },
      "line2": {
		"length": 130,
      	"tilt": 0,
      	"position X": 0,
		"position Y": 0,
      }
    },
  "C":
    {
      "ring": {
        "arc Start": 45,
		"arc End": -45,
      },
      "line1": {
      	"length": 0,
      	"tilt": 0,
      	"position X": 0,
		"position Y": 0,
      },
      "line2": {
		"length": 0,
      	"tilt": 0,
      	"position X": 0,
		"position Y": 0,
      }
    }
}

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  // create two sliders
  arcStart_slider = createSlider(-360, 360, 0);
  arcEnd_slider = createSlider(-360, 360, 0);
  line1Length_slider = createSlider(0, 300, 150);
  line1Tilt_slider = createSlider(-360, 360, 00);
  line1X_slider = createSlider(-200, 200, 0);
  line1Y_slider = createSlider(-200, 200, 0);
  line2Length_slider = createSlider(0, 300, 150);
  line2Tilt_slider = createSlider(-360, 360, 0);
  line2X_slider = createSlider(-200, 200, 0);
  line2Y_slider = createSlider(-200, 200, 0);
  
   //create checkboxes
  
  line1_vis = createCheckbox('', true);
  line2_vis = createCheckbox('', true);

  sel = createSelect();
  let letters = {A, B, C, D, E, F, G, H, I, J, K, L, M, N, O, P, Q, R, S, T, U, V, W, X, Y, Z};
  for(i = 0; i < letters.length; i++){
  	sel.option(letters[i]);
  }
  for(i = 0; i < 10; i++){
  	sel.option(i);
  }
  sel.changed(letterChangedEvent);

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);

  // position each element on the page
  main_canvas.parent('canvasContainer');
  arcStart_slider.parent('slider1Container');
  arcEnd_slider.parent('slider2Container');
  line1Length_slider.parent('slider3Container');
  line1Tilt_slider.parent('slider4Container');
  line1X_slider.parent('slider5Container');
  line1Y_slider.parent('slider6Container');
  line1_vis.parent('slider7Container');
  line2Length_slider.parent('slider8Container');
  line2Tilt_slider.parent('slider9Container');
  line2X_slider.parent('slider10Container');
  line2Y_slider.parent('slider11Container');
  line2_vis.parent('slider12Container');

  sel.parent(selectorContainer);
  button.parent(buttonContainer);
}

function sliderToDataObject() {
  let obj = {};
  obj["ring"] = {};
  obj["ring"]["arc Start"] = arcStart_slider.value();
  obj["ring"]["arc End"] = arcEnd_slider.value();
  obj["line1"] = {};
  obj["line1"]["length"] = line1Length_slider.value();
  obj["line1"]["tilt"] = line1Tilt_slider.value();
  obj["line1"]["position X"] = ball1X_slider.value();
  obj["line1"]["position Y"] = ball1Y_slider.value();
  obj["line1"]["visibility"] = booleanToValue(line1_vis);
  obj["line2"] = {};
  obj["line2"]["length"] = line2Length_slider.value();
  obj["line2"]["tilt"] = line2Tilt_slider.value();
  obj["line2"]["position X"] = ball2X_slider.value();
  obj["line2"]["position Y"] = ball2Y_slider.value();
  obj["line2"]["visibility"] = booleanToValue(line2_vis);
  return obj;
}

function dataObjectToSliders(obj) {
  arcStart_slider.value(obj["ring"]["arc Start"]);
  arcEnd_slider.value(obj["ring"]["arc End"]);
  line1Length_slider.value(obj["line1"]["length"]);
  line1Tilt_slider.value(obj["line1"]["tilt"]);
  line1X_slider.value(obj["line1"]["position X"]);
  line1Y_slider.value(obj["line1"]["position Y"]);
  line2Length_slider.value(obj["line2"]["length"]);
  line2Tilt_slider.value(obj["line2"]["tilt"]);
  line2X_slider.value(obj["line2"]["position X"]);
  line2Y_slider.value(obj["line2"]["position Y"]);
}

const colorRing = [200, 200, 200];
const colorLine = [0, 0, 0];
const colorBack = [255, 255, 255];

function drawRing(start, end, size) {
  let middle_x = canvasWidth / 2;
  let middle_y = canvasHeight / 2;
  resetMatrix();
  translate(middle_x, middle_y);

  arc(0, 0, size, size, start, end);
}

function drawLine(length, tilt, posx, posy) {
  let middle_x = canvasWidth / 2;
  let middle_y = canvasHeight / 2;
  resetMatrix();
  translate(middle_x + posx, middle_y + posy);
  rotate(tilt);

  line(0, 0, length, 0);
}

function drawRingFromSliders(start_slider, end_slider, size_slider) {
	start = start_slider.value();
	end = end_slider.value();
	size = soze_slider.value();
  	drawRing(start, end, size);
}

function drawLineFromSliders(length_slider, tilt_slider, x_slider, y_slider) {
 	length = length_slider.value();
 	tilt = tilt_slider.value();
	posx = x_slider.value();
	posy = y_slider.value();
	if(length>0){
		drawLine(length, tilt, posx, posy);
	}
}

function draw () {
  background(colorBack);
  noFill();

  //draw line behind ring
  strokeWeight(5);
  stroke(colorLine);
  drawLineFromSliders(line1Length_slider, line1Tilt_slider, line1X_slider,
  	line1Y_slider);
  
  //draw ring
  stroke(colorRing);
  strokeWeight(20);
  drawRingFromSliders(arcStart_slider, arcEnd_slider);

  //draw line in front of ring
  strokeWeight(5);
  stroke(colorLine);
  drawLineFromSliders(line2Length_slider, line2Tilt_slider, line2X_slider,
  	line2Y_slider)  
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


function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}