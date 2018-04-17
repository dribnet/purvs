let main_canvas = null;

let line1_Xstart = null;
let line1_Ystart = null;
let line1_Xdir = null;
let line1_Ydir = null;
let line2_Xstart = null;
let line2_Ystart = null;
let line2_Xdir = null;
let line2_Ydir = null;
let line3_Xstart = null;
let line3_Ystart = null;
let line3_Xdir = null;
let line3_Ydir = null;

let slope = 0;
let intercept = 0;
let equationY = 0;

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
 line1_Xstart = createSlider(-200, 200, 0);
 line1_Ystart = createSlider(-200, 200, 0);
 line1_Xdir = createSlider(-180, 180, 0);
 line1_Ydir = createSlider(-180, 180, 0);
 line2_Xstart = createSlider(-200, 200, 0);
 line2_Ystart = createSlider(-200, 200, 0);
 line2_Xdir = createSlider(-180, 180, 0);
 line2_Ydir = createSlider(-180, 180, 0);
 line3_Xstart = createSlider(-200, 200, 0);
 line3_Ystart = createSlider(-200, 200, 0);
 line3_Xdir = createSlider(-180, 180, 0);
 line3_Ydir = createSlider(-180, 180, 0);

  sel = createSelect();
  sel.option('A');
  sel.option('B');
  sel.option('C');
  sel.changed(letterChangedEvent);

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);

  // position each element on the page
  main_canvas.parent('canvasContainer');
  line1_Xstart.parent('slider1Container');
  line1_Ystart.parent('slider2Container');
  line1_Xdir.parent('slider3Container');
  line1_Ydir.parent('slider4Container');
  line2_Xstart.parent('slider5Container');
  line2_Ystart.parent('slider6Container');
  line2_Xdir.parent('slider7Container');
  line2_Ydir.parent('slider8Container');
  line3_Xstart.parent('slider9Container');
  line3_Ystart.parent('slider10Container');
  line3_Xdir.parent('slider11Container');
  line3_Ydir.parent('slider12Container');

  sel.parent(selectorContainer);
  button.parent(buttonContainer);
}

function sliderToDataObject() {
  let obj = {};
  obj["box1"] = {};
  obj["box1"]["startX"] = line1_Xstart.value();
  obj["box1"]["startY"] = line1_Ystart.value();
  obj["box2"] = {};
  obj["box2"]["dirX"] = line1_Xdir.value();
  obj["box2"]["dirY"] = line1_Ydir.value();
  obj["box3"] = {};
  obj["box3"]["startX"] = line2_Xstart.value();
  obj["box3"]["startY"] = line2_Ystart.value();
  obj["box4"] = {};
  obj["box4"]["dirX"] = line2_Xdir.value();
  obj["box4"]["dirY"] = line2_Ydir.value();
  return obj;
}

function dataObjectToSliders(obj) {
  line1_Xstart.value(obj["box1"]["startX"]);
  line1_Ystart.value(obj["box1"]["startY"]);
  line1_Xdir.value(obj["box2"]["dirX"]);
  line1_Ydir.value(obj["box2"]["dirY"]);
  line2_Xstart.value(obj["box3"]["position"]);
  line2_Ystart.value(obj["box3"]["tilt"]);
  line2_Xdir.value(obj["box4"]["position"]);
  line2_Ydir.value(obj["box4"]["tilt"]);
  line3_Xstart.value(obj["box5"]["position"]);
  line3_Ystart.value(obj["box5"]["tilt"]);
  line3_Xdir.value(obj["box6"]["position"]);
  line3_Ydir.value(obj["box6"]["tilt"]);
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

//colour of the letters
const colorFront = [207, 222, 227];
//colour of the background
const colorBack = [29, 42, 46];

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



//equation of slope: m=(y2-y1)/(x2-x1)
function CalculateSlope(x1,x2,y1,y2) {
  slope = (y2 - y1)/(x2 - x1);
  CalculateIntercept(x1,y1);
}

//equation of line: y=mx+c
function CalculateIntercept(x, y) {
  intercept = y - (slope * x);
  DrawAsLine(x);
}

function DrawAsLine(xPos) {
  xPos0 = xPos;
  while (xPos < xPos0 + 100) {
    yPos = slope * xPos + intercept
    ellipse(xPos+(canvasWidth/2),yPos + (canvasHeight/2),100,100);
    xPos = xPos + 1;
  }
}


function drawFromSliders(xstart, ystart, xdir, ydir) {
  xs = line1_Xstart.value();
  ys = line1_Ystart.value();
  xd = line1_Xdir.value();
  yd = line1_Ydir.value();
  CalculateSlope(xs, ys, xd, yd);
}

function draw () {
  background(colorBack);
  fill(colorFront);
  stroke(95, 52, 8);
  drawFromSliders(line1_Xstart, line1_Ystart, line1_Xdir, line1_Ydir);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
