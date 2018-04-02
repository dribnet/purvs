let main_canvas = null;
let quadTilt_slider = null;
let quadX_slider = null;
let quadY_slider = null;
let ball1_vis = null;
let ball1X_slider = null;
let ball1Y_slider = null;
let ball2_vis = null;
let ball2X_slider = null;
let ball2Y_slider= null;

const canvasWidth = 960;
const canvasHeight = 500;

let savedValues = {
  "A":
    {
      "quad": {
        "stretch X": 0,
		"stretch Y": 0,
        "tilt": 0,
      },
      "ball1": {
		"visibility": 0,
        "position X": 0,
		"position Y": 0,
      },
      "ball2": {
		"visibility": 0,
        "position X": 0,
		"position Y": 0,
      }
    },
  "B":
    {
      "quad": {
        "stretch X": 30,
		"stretch Y": -30,
        "tilt": -90,
      },
      "ball1": {
		"visibility": 1,
        "position X": 70,
		"position Y": -70,
      },
      "ball2": {
		"visibility": 1,
        "position X": 70,
		"position Y": 70,
      }
    },
  "C":
    {
      "quad": {
        "stretch X": 30,
		"stretch Y": -30,
        "tilt": -90,
      },
      "ball1": {
		"visibility": 0,
        "position X": 0,
		"position Y": 0,
      },
      "ball2": {
		"visibility": 0,
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
  quadTilt_slider = createSlider(-360, 360, 0);
  quadX_slider = createSlider(-200, 200, 0)
  quadY_slider = createSlider(-200, 200, 0);
  ball1X_slider = createSlider(-200, 200, 0);
  ball1Y_slider = createSlider(-200, 200, -50);
  ball2X_slider = createSlider(-200, 200, 0);
  ball2Y_slider = createSlider(-200, 200, 50);
  
   //create checkboxes
  
  ball1_vis = createCheckbox('', true);
  ball2_vis = createCheckbox('', true);

  sel = createSelect();
  sel.option('A');
  sel.option('B');
  sel.option('C');
  sel.changed(letterChangedEvent);

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);

  // position each element on the page
  main_canvas.parent('canvasContainer');
  quadTilt_slider.parent('slider1Container');
  quadX_slider.parent('slider2Container');
  quadY_slider.parent('slider3Container');
  ball1_vis.parent('slider4Container');
  ball1X_slider.parent('slider5Container');
  ball1Y_slider.parent('slider6Container');
  ball2_vis.parent('slider7Container');
  ball2X_slider.parent('slider8Container');
  ball2Y_slider.parent('slider9Container');

  sel.parent(selectorContainer);
  button.parent(buttonContainer);
}

function sliderToDataObject() {
  let obj = {};
  obj["quad"] = {};
  obj["quad"]["tilt"] = quadTilt_slidervalue();
  obj["quad"]["stretch X"] = quadX_slider.value();
  obj["quad"]["stretch Y"] = quadY_slider.value();
  obj["ball1"] = {};
  obj["ball1"]["visibility"] = booleanToValue(ball1_vis);
  obj["ball1"]["position X"] = ball1X_slider.value();
  obj["ball1"]["position Y"] = ball1Y_slider.value();
  obj["ball2"] = {};
  obj["ball2"]["visibility"] = booleanToValue(ball2_vis);
  obj["ball2"]["position X"] = ball2X_slider.value();
  obj["ball2"]["position Y"] = ball2Y_slider.value();
  return obj;
}

function dataObjectToSliders(obj) {
   quadTilt_slider.value(obj["quad"]["tilt"]);
   quadX_slider.value(obj["quad"]["stretch X"]);
   quadY_slider.value(obj["quad"]["stretch Y"]);
   ball1_vis.checked(valueToBoolean(obj["ball1"]["visibility"]));
   ball1X_slider.value(obj["ball1"]["position X"]);
   ball1Y_slider.value(obj["ball1"]["position Y"]);
   ball2_vis.checked(valueToBoolean(obj["ball2"]["visibility"]));
   ball2X_slider.value(obj["ball2"]["position X"]);
   ball2Y_slider.value(obj["ball2"]["position Y"]);
}

function booleanToValue(check){
	if(check.checked()==true){
		return 1;
	}
	else{
		return 0;
	}
}

function valueToBoolean(v){
	if(v==0){
		return false;
	}
	else{
		return true;
	}
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

const colorQuad = [200, 200, 200];
const colorCircle = [0, 0, 0];
const colorBack = [255, 255, 255];

function drawQuad(tilt, stretchx, stretchy) {
  let middle_x = canvasWidth / 2;
  let middle_y = canvasHeight / 2;
  resetMatrix();
  translate(middle_x, middle_y);
  rotate(tilt);

  //left point to top point...
  quad(-120 - stretchx, 100, 0, -100 - stretchy, 120 + stretchx, 100, 0, 40);
}

function drawCircle(posx, posy) {
  let middle_x = canvasWidth / 2;
  let middle_y = canvasHeight / 2;
  resetMatrix();
  translate(middle_x + posx, middle_y + posy);

  ellipse(0, 0, 80, 80);
}

function drawQuadFromSliders(tilt_slider, stretchx_slider, stretchy_slider) {
	stretchx = stretchx_slider.value();
	stretchy = stretchy_slider.value();
	tilt = tilt_slider.value();
  drawQuad(tilt, stretchx, stretchy);
}

function drawCircleFromSliders(vis_check, posx_slider, posy_slider) {
	posx = posx_slider.value();
	posy = posy_slider.value();
	if(vis_check.checked()==true){
		drawCircle(posx, posy);
	}
}

function draw () {
  background(colorBack);
  noStroke();
  //draw circles
  fill(colorCircle);
  drawCircleFromSliders(ball1_vis, ball1X_slider, ball1Y_slider);
  drawCircleFromSliders(ball2_vis, ball2X_slider, ball2Y_slider)
  
  //draw arrow quad
  fill(colorQuad);
  drawQuadFromSliders(quadTilt_slider, quadX_slider, quadY_slider);
  
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}


