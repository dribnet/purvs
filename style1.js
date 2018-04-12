let main_canvas = null;
let pos1x_slider = null;
let pos1y_slider = null;
let tilt1_slider = null;
let pos2x_slider = null;
let pos2y_slider = null;
let tilt2_slider = null;
let pos3x_slider = null;
let pos3y_slider = null;
let tilt3_slider = null;
let pos4x_slider = null;
let pos4y_slider = null;
let tilt3_slider = null;
let pos5x_slider = null;
let pos5y_slider = null;
let tilt5_slider = null;

const canvasWidth = 960;
const canvasHeight = 500;

let savedValues = {
  "A":
    {
      "box1": {
        "position": -174,
        "tilt": -47
      },
      "box2": {
        "position": -104,
        "tilt": -4
      },
      "box3": {
        "position": -121,
        "tilt": 58
      }
    },
  "B":
    {
      "box1": {
        "position": -191,
        "tilt": -90
      },
      "box2": {
        "position": -54,
        "tilt": -45
      },
      "box3": {
        "position": -12,
        "tilt": 6
      }
    },
  "C":
    {
      "box1": {
        "position": -163,
        "tilt": -84
      },
      "box2": {
        "position": -191,
        "tilt": 163
      },
      "box3": {
        "position": 0,
        "tilt": -27
      }
    }
}

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  // create two sliders
  pos1x_slider = createSlider(-200, 200, 0);
  pos1y_slider = createSlider(-200, 200, 0);
  tilt1_slider = createSlider(-180, 180, 0);
  pos2x_slider = createSlider(-200, 200, 0);
  pos2y_slider = createSlider(-200, 200, 0);
  tilt2_slider = createSlider(-180, 180, 0);
  pos3x_slider = createSlider(-200, 200, 0);
  pos3y_slider = createSlider(-200, 200, 0);
  tilt3_slider = createSlider(-180, 180, 0);
  pos4x_slider = createSlider(-200, 200, 0);
  pos4y_slider = createSlider(-200, 200, 0);
  tilt4_slider = createSlider(-180, 180, 0);
  pos5x_slider = createSlider(-200, 200, 0);
  pos5y_slider = createSlider(-200, 200, 0);
  tilt5_slider = createSlider(-180, 180, 0);

  sel = createSelect();
  sel.option('A');
  sel.option('B');
  sel.option('C');
  sel.changed(letterChangedEvent);

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);

  // position each element on the page
  main_canvas.parent('canvasContainer');
  pos1x_slider.parent('slider1Container');
  pos1y_slider.parent('slider2Container');
  tilt1_slider.parent('slider3Container');
  pos2x_slider.parent('slider4Container');
  pos2y_slider.parent('slider5Container');
  tilt2_slider.parent('slider6Container');
  pos3x_slider.parent('slider7Container');
  pos3y_slider.parent('slider8Container');
  tilt3_slider.parent('slider9Container');
  pos4x_slider.parent('slider10Container');
  pos4y_slider.parent('slider11Container');
  tilt4_slider.parent('slider12Container');
  pos5x_slider.parent('slider13Container');
  pos5y_slider.parent('slider14Container');
  tilt5_slider.parent('slider15Container');

  sel.parent(selectorContainer);
  button.parent(buttonContainer);
}

function sliderToDataObject() {
  let obj = {};
  obj["box1"] = {};
  obj["box1"]["positionx"] = pos1x_slider.value();
  obj["box1"]["positiony"] = pos1y_slider.value();
  obj["box1"]["tilt"] = tilt1_slider.value();
  obj["box2"] = {};
  obj["box2"]["positionx"] = pos2x_slider.value();
  obj["box2"]["positiony"] = pos2y_slider.value();
  obj["box2"]["tilt"] = tilt2_slider.value();
  obj["box3"] = {};
  obj["box3"]["positionx"] = pos3x_slider.value();
  obj["box3"]["positiony"] = pos3y_slider.value();
  obj["box3"]["tilt"] = tilt3_slider.value();
  obj["box4"] = {};
  obj["box4"]["positionx"] = pos4x_slider.value();
  obj["box4"]["positiony"] = pos4y_slider.value();
  obj["box4"]["tilt"] = tilt4_slider.value();
  obj["box5"] = {};
  obj["box5"]["positionx"] = pos5x_slider.value();
  obj["box5"]["positiony"] = pos5y_slider.value();
  obj["box5"]["tilt"] = tilt5_slider.value();
  return obj;
}

function dataObjectToSliders(obj) {
  pos1x_slider.value(obj["box1"]["positionx"]);
  pos1y_slider.value(obj["box1"]["positiony"]);
  tilt1_slider.value(obj["box1"]["tilt"]);
  pos2x_slider.value(obj["box2"]["positionx"]);
  pos2y_slider.value(obj["box2"]["positiony"]);
  tilt2_slider.value(obj["box2"]["tilt"]);
  pos3x_slider.value(obj["box3"]["positionx"]);
  pos3y_slider.value(obj["box3"]["positiony"]);
  tilt3_slider.value(obj["box3"]["tilt"]);
  pos4x_slider.value(obj["box4"]["positionx"]);
  pos4y_slider.value(obj["box4"]["positiony"]);
  tilt4_slider.value(obj["box4"]["tilt"]);
  pos5x_slider.value(obj["box5"]["positionx"]);
  pos5y_slider.value(obj["box5"]["positiony"]);
  tilt5_slider.value(obj["box5"]["tilt"]);
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

const colorFront = [207, 222, 227];
const colorBack = [29, 42, 46];

function drawPart(y_offset, posx, posy, tilt) {
  let middle_x = 2 * canvasWidth / 3;
  let middle_y = canvasHeight / 2;
  resetMatrix();
  translate(middle_x + posx, middle_y + posy);
  rotate(tilt);

  let scale = 10;

  fill(colorFront);
  // rect(-100,-100,100,100);
  rect(-20*scale, -3*scale, 20*scale, 3*scale);
}

function drawFromSliders(y_offset, posx_slider, posy_slider, tilt_slider) {
  let posx = posx_slider.value();
  let posy = posy_slider.value();
  let tilt = tilt_slider.value();
  drawPart(y_offset, posx, posy, tilt);
}

function draw () {
  background(colorBack);
  fill(colorFront);
  stroke(95, 52, 8);

  drawFromSliders(-50, pos1x_slider, pos1y_slider, tilt1_slider);
  drawFromSliders(  0, pos2x_slider, pos2y_slider, tilt2_slider);
  drawFromSliders( 50, pos3x_slider, pos3y_slider, tilt3_slider);
  drawFromSliders(-50, pos4x_slider, pos4y_slider, tilt4_slider);
  drawFromSliders(  0, pos5x_slider, pos5y_slider, tilt5_slider);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
