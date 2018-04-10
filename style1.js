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
    "position": 3,
    "tilt": -15
  },
  "box2": {
    "position": -20,
    "tilt": -30
  },
  "box3": {
    "position": -10,
    "tilt": 29
  }
},
  "B":
      {
      "box1": {
        "position": -200,
        "tilt": -158
      },
      "box2": {
        "position": -16,
        "tilt": -47
      },
      "box3": {
        "position": -51,
        "tilt": 41
      }
    },
  "C":
      {
      "box1": {
        "position": 46,
        "tilt": -85
      },
      "box2": {
        "position": -132,
        "tilt": 123
      },
      "box3": {
        "position": 38,
        "tilt": 4
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

const colorFront = [207, 222, 227];
const colorBack = [29, 42, 46];

function drawPart(y_offset, pos, tilt) {
  let middle_x = 2 * canvasWidth / 2;
  let middle_y = canvasHeight / 2;
  resetMatrix();
  translate(middle_x + pos, middle_y + y_offset);
  rotate(tilt);

  let scale = 10;

  noFill();
  stroke(205);


  beginShape();

  for(var i = 0; i < 60; i++) {

  var radius = 10 + random(50);
  var x = cos(radians(i * 3.6)) * radius;
  var y = sin(radians(i * 3.6)) * radius;
  vertex(-scale*x, -scale/2*y);
  }

endShape();

}

function drawFromSliders(y_offset, pos_slider, tilt_slider) {
  let pos = pos_slider.value();
  let tilt = tilt_slider.value();
  drawPart(y_offset, pos, tilt);
}

function draw () {
  background(0);
  stroke(95, 52, 8);

  drawFromSliders(-50, pos1_slider, tilt1_slider);
  drawFromSliders(  0, pos2_slider, tilt2_slider);
  drawFromSliders( 50, pos3_slider, tilt3_slider);
  drawFromSliders( 50, pos3_slider, tilt3_slider);
  drawFromSliders( 50, pos3_slider, tilt3_slider);
  drawFromSliders( 50, pos3_slider, tilt3_slider);
  drawFromSliders( 50, pos3_slider, tilt3_slider);
  drawFromSliders( 50, pos3_slider, tilt3_slider);
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
