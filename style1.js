let main_canvas = null;
let octo1x_slider = null;
let octo1y_slider = null;
let octo1s_slider = null;
let octo1p_slider = null;
let octo2x_slider = null;
let octo2y_slider = null;
let octo2s_slider = null;
let octo2p_slider = null;
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
        "x": -56,
        "y": 12,
        "scale": 42,
        "poly" : 8
      },
      "octo2": {
        "x": -107,
        "y": -124,
        "scale": 75,
        "poly" : 3
      },
      "rect": {
        "x": 0,
        "y": -8,
        "scale": 126,
        "tilt": 53
      }
    },
  "B":
    {
      "octo1": {
        "x": -174,
        "y": +50,
        "scale": 50,
        "poly" : 8
      },
      "octo2": {
        "x": +174,
        "y": +50,
        "scale": 100,
        "poly" : 8
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
        "scale": 50,
        "poly" : 8
      },
      "octo2": {
        "x": +174,
        "y": +50,
        "scale": 100,
        "poly" : 8
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
  rectMode(CENTER);

  // create two sliders
  octo1x_slider = createSlider(-200, 200, 0);
  octo1y_slider = createSlider(-200, 200, 0);
  octo1s_slider = createSlider(0, 200, 100);
  octo1p_slider = createSlider(3, 10, 8);
  octo2x_slider = createSlider(-200, 200, 0);
  octo2y_slider = createSlider(-200, 200, 0);
  octo2s_slider = createSlider(0, 200, 100);
  octo2p_slider = createSlider(3, 10, 8);
  rectx_slider = createSlider(-200, 200, 0);
  recty_slider = createSlider(-200, 200, 0);
  rects_slider = createSlider(0, 200, 100);
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
  octo1p_slider.parent('slider4Container');
  octo2x_slider.parent('slider5Container');
  octo2y_slider.parent('slider6Container');
  octo2s_slider.parent('slider7Container');
  octo2p_slider.parent('slider8Container');
  rectx_slider.parent('slider9Container');
  recty_slider.parent('slider10Container');
  rects_slider.parent('slider11Container');
  rectr_slider.parent('slider12Container');

  sel.parent(selectorContainer);
  button.parent(buttonContainer);

}

function sliderToDataObject() {
  let obj = {};
  obj["octo1"] = {};
  obj["octo1"]["x"] = octo1x_slider.value();
  obj["octo1"]["y"] = octo1y_slider.value();
  obj["octo1"]["scale"] = octo1s_slider.value();
  obj["octo1"]["poly"] = octo1p_slider.value();
  obj["octo2"] = {};
  obj["octo2"]["x"] = octo2x_slider.value();
  obj["octo2"]["y"] = octo2y_slider.value();
  obj["octo2"]["scale"] = octo2s_slider.value();
  obj["octo2"]["poly"] = octo2p_slider.value();
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
  octo1p_slider.value(obj["octo1"]["poly"]);
  octo2x_slider.value(obj["octo2"]["x"]);
  octo2y_slider.value(obj["octo2"]["y"]);
  octo2s_slider.value(obj["octo2"]["scale"]);
  octo2p_slider.value(obj["octo2"]["poly"]);
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

function draw () {
  background(85, 72, 89);
  noStroke();

  //Drop Shadows
  fill(255, 130, 148);

  //Immovable Rect
  rect(2* canvasWidth /3-100+16,canvasHeight/2+16,20,120);

  //Moveable Objects
  drawFromSliders(1,octo1x_slider,octo1y_slider,octo1s_slider,octo1p_slider,12,12);
  drawFromSliders(1,octo2x_slider,octo2y_slider,octo2s_slider,octo2p_slider,12,12);
  drawFromSliders(2,rectx_slider,recty_slider,rects_slider,rectr_slider,12,12);

  //Front of Objects
  fill(255);

  rect(2* canvasWidth /3-100,canvasHeight/2,20,120);

  //Moveable Objects
  drawFromSliders(1,octo1x_slider,octo1y_slider,octo1s_slider,octo1p_slider,0,0);
  drawFromSliders(1,octo2x_slider,octo2y_slider,octo2s_slider,octo2p_slider,0,0);
  drawFromSliders(2,rectx_slider,recty_slider,rects_slider,rectr_slider,0,0);
}

function drawFromSliders(drawtype, x_slider, y_slider,scale_slider,polyrot_slider,xoff,yoff) {
  
  let x = x_slider.value();
  let y = y_slider.value();
  let scal = scale_slider.value();
  let poly = polyrot_slider.value();

  if (drawtype==1) {
    drawPoly(x+xoff,y+yoff,scal,poly);
  }
  if (drawtype==2) {
    drawRect(x+xoff,y+xoff,scal,poly);
  }
} 

function drawRect(x, y, scal, tilt) {
  let middle_x = 2 * canvasWidth / 3;
  let middle_y = canvasHeight / 2;
  resetMatrix();
  translate(middle_x + x, middle_y + y);
  rotate(tilt);
  rectMode(RADIUS);
  rect(0,0,scal,scal/6);
  rotate(-tilt);
  translate(-middle_x - x, -middle_y - y);
}

function drawPoly(x, y, scal, poly) {
  let middle_x = 2 * canvasWidth / 3;
  let middle_y = canvasHeight / 2;
  resetMatrix();
  translate(middle_x + x, middle_y + y);

  polygon(0,0,scal,poly);
  translate(-middle_x - x, -middle_y - y);
}

function polygon(x, y, radius, npoints) {
  angleMode(RADIANS);
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  angleMode(DEGREES);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
