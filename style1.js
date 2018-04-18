let main_canvas = null;
let octo1x_slider = null;
let octo1y_slider = null;
let octo1s_slider = null;
let octo2x_slider = null;
let octo2y_slider = null;
let octo2s_slider = null;
let rectx_slider = null;
let recty_slider = null;
let rects_slider = null;
let rectr_slider = null;

const canvasWidth = 960;
const canvasHeight = 500;

let savedValues = {
  "A":
    {
      "octo1": {
        "x": -174,
        "y": +50,
        "scale": 50
      },
      "octo2": {
        "x": +174,
        "y": +50,
        "scale": 100
      },
      "rect": {
        "x": -121,
        "y": +58,
        "scale": 100,
        "tilt": 40
      }
    },
  "B":
    {
      "octo1": {
        "x": -174,
        "y": +50,
        "scale": 50
      },
      "octo2": {
        "x": +174,
        "y": +50,
        "scale": 100
      },
      "rect": {
        "x": -121,
        "y": +58,
        "scale": 100,
        "tilt": 40
      }
    },
  "C":
    {
      "octo1": {
        "x": -174,
        "y": +50,
        "scale": 50
      },
      "octo2": {
        "x": +174,
        "y": +50,
        "scale": 100
      },
      "rect": {
        "x": -121,
        "y": +58,
        "scale": 100,
        "tilt": 40
      }
    }
}

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  // create two sliders
  octo1x_slider = createSlider(-200, 200, 0);
  octo1y_slider = createSlider(-180, 180, 0);
  octo1s_slider = createSlider(-200, 200, 0);
  octo2x_slider = createSlider(-180, 180, 0);
  octo2y_slider = createSlider(-200, 200, 0);
  octo2s_slider = createSlider(-180, 180, 0);
  rectx_slider = createSlider(-180, 180, 0);
  recty_slider = createSlider(-180, 180, 0);
  rects_slider = createSlider(-180, 180, 0);
  rectr_slider = createSlider(-180, 180, 0);

  sel = createSelect();
  sel.option('A');
  sel.option('B');
  sel.option('C');
  sel.changed(letterChangedEvent);

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);

  // position each element on the page
  main_canvas.parent('canvasContainer');
  octo1x_slider.parent('slider1Container');
  octo1y_slider.parent('slider2Container');
  octo1s_slider.parent('slider3Container');
  octo2x_slider.parent('slider4Container');
  octo2y_slider.parent('slider5Container');
  octo2s_slider.parent('slider6Container');
  rectx_slider.parent('slider7Container');
  recty_slider.parent('slider8Container');
  rects_slider.parent('slider9Container');
  rectr_slider.parent('slider10Container');

  sel.parent(selectorContainer);
  button.parent(buttonContainer);
}

function sliderToDataObject() {
  let obj = {};
  obj["octo1"] = {};
  obj["octo1"]["x"] = octo1x_slider.value();
  obj["octo1"]["y"] = octo1y_slider.value();
  obj["octo1"]["scale"] = octo1s_slider.value();
  obj["octo2"] = {};
  obj["octo2"]["x"] = octo2x_slider.value();
  obj["octo2"]["y"] = octo2y_slider.value();
  obj["octo2"]["scale"] = octo2s_slider.value();
  obj["rect"] = {};
  obj["rect"]["x"] = rectx_slider.value();
  obj["rect"]["y"] = recty_slider.value();
  obj["rect"]["scale"] = rects_slider.value();
  obj["rect"]["tilt"] = rectr_slider.value();
  return obj;
}

function dataObjectToSliders(obj) {
  octo1x_slider.value(obj["octo1"]["x"]);
  octo1y_slider.value(obj["octo1"]["y"]);
  octo1s_slider.value(obj["octo1"]["scale"]);
  octo2x_slider.value(obj["octo2"]["x"]);
  octo2y_slider.value(obj["octo2"]["y"]);
  octo2s_slider.value(obj["octo2"]["scale"]);
  rectx_slider.value(obj["rect"]["x"]);
  recty_slider.value(obj["rect"]["y"]);
  rects_slider.value(obj["rect"]["scale"]);
  rectr_slider.value(obj["rect"]["tilt"]);
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

const colorFront = [148, 183, 239];
const colorBack = [244, 255, 253];

/*function drawPart(y_offset, pos, tilt) {
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
}*/

function drawOcto(octo1x_slider,octo1y_slider,octo1s_slider) {
  fill(colorFront);
  polygon(0,0,octo1s_slider.value,8)
  translate(middle_x + x, middle_y + y);
}

function draw () {
  background(colorBack);
  fill(colorFront);

  drawOcto(octo1x_slider,octo1y_slider,octo1s_slider)
  drawOcto(octo2x_slider,octo2y_slider,octo2s_slider)
  drawRect(rectx_slider,recty_slider,rects_slider,rectr_slider)

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
