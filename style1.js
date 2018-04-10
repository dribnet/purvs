let main_canvas = null;
let point1x = null;
let point1y = null;
let point2x = null;
let point2y = null;
let point3x = null;
let point3y = null;
let point4x = null;
let point4y = null;

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
  point1x = createSlider(-200, 200, 0);
  point1y = createSlider(-180, 180, 0);
  point2x = createSlider(-200, 200, 0);
  point2y = createSlider(-180, 180, 0);
  point3x = createSlider(-200, 200, 0);
  point3y = createSlider(-180, 180, 0);
  point4x = createSlider(-200, 200, 0);
  point4y = createSlider(-180, 180, 0);

  sel = createSelect();
  sel.option('A');
  sel.option('B');
  sel.option('C');
  sel.changed(letterChangedEvent);

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);

  // position each element on the page
  main_canvas.parent('canvasContainer');
  point1x.parent('slider1Container');
  point1y.parent('slider2Container');
  point2x.parent('slider3Container');
  point2y.parent('slider4Container');
  point3x.parent('slider5Container');
  point3y.parent('slider6Container');
  point4x.parent('slider7Container');
  point4y.parent('slider8Container');

  sel.parent(selectorContainer);
  button.parent(buttonContainer);
}

function sliderToDataObject() {
  let obj = {};
  obj["box1"] = {};
  obj["box1"]["positionx"] = point1x.value();
  obj["box1"]["positiony"] = point1y.value();
  obj["box2"] = {};
  obj["box2"]["positionx"] = point2x.value();
  obj["box2"]["positiony"] = point2y.value();
  obj["box3"] = {};
  obj["box3"]["positionx"] = point3x.value();
  obj["box3"]["positiony"] = point3y.value();
  obj["box4"] = {};
  obj["box4"]["positionx"] = point4x.value();
  obj["box4"]["positiony"] = point4y.value();
  return obj;
}

function dataObjectToSliders(obj) {
  point1x.value(obj["box1"]["positionx"]);
  point1y.value(obj["box1"]["positiony"]);
  point2x.value(obj["box2"]["positionx"]);
  point2y.value(obj["box2"]["positiony"]);
  point3x.value(obj["box3"]["positionx"]);
  point3y.value(obj["box3"]["positiony"]);
  point4x.value(obj["box4"]["positionx"]);
  point4y.value(obj["box4"]["positiony"]);
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

const colorFront = [28,22,120];
const colorBack = [255,255,240];

function drawPart(y_offset, posx, posy) {
  let middle_x = 2 * canvasWidth / 3;
  let middle_y = canvasHeight / 2;
  resetMatrix();
  translate(middle_x + posx, middle_y + posy);

  let scale = 10;
  fill(colorFront);
  console.log(point1x, point1y);
  beginShape(POINTS);
  vertex(point1x, point1y);
  vertex(point2x, point2y);
  vertex(point3x, point3y);
  vertex(point4x, point4y);
  endShape();
}

function drawFromSliders(y_offset, posx_slider, posy_slider) {
  let posx = posx_slider.value();
  let posy = posy_slider.value();
  drawPart(y_offset, posx, posy);
}


function draw () {
  background(colorBack);
  fill(colorFront);
  stroke(95, 52, 8);

  drawFromSliders(-50, point1x, point1y);
  drawFromSliders(  0, point2x, point2y);
  drawFromSliders( 50, point3x, point3y);
  drawFromSliders(-50, point4x, point4y);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
