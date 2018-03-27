let main_canvas = null;
let pos1_slider = null;
let tilt1_slider = null;
let pos2_slider = null;
let tilt2_slider = null;
let pos3_slider = null;
let tilt3_slider = null;

const canvasWidth = 960;
const canvasHeight = 500;
var DrawTypeEnum = {
  CIRCLEGRID: 1,
  SQUARE: 2,
  CIRCLE: 3,
};
var circleOn = true;
var squareOn = true;
var circleGridArray = new Array(3);
for (var i = 0; i < circleGridArray.length; i++) {
   circleGridArray[i] = new Array(3);
 }

for (var i = 0; i < circleGridArray.length; i++) {
  for (var j = 0; j < circleGridArray[i].length; j++) {
    circleGridArray[i][j]= true;
  }
}


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
    },
  "D":
    {
      "box1": {
        "position": -151,
        "tilt": -90
      },
      "box2": {
        "position": -70,
        "tilt": 57
      },
      "box3": {
        "position": -40,
        "tilt": -46
      }
    },
  "F":
    {
    "box1": {
      "position": -200,
      "tilt": -180
    },
    "box2": {
      "position": -200,
      "tilt": -92
    },
    "box3": {
      "position": -21,
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
  pos1_slider = createSlider(-200, 200, 0);
  tilt1_slider = createSlider(-180, 180, 0);
  pos2_slider = createSlider(-200, 200, 0);
  tilt2_slider = createSlider(-180, 180, 0);
  pos3_slider = createSlider(-200, 200, 0);
  tilt3_slider = createSlider(-180, 180, 0);

  sel = createSelect();
  sel.option('A');
  sel.option('B');
  sel.option('C');
  sel.option('D');
  sel.option('F');
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

const colorCircleGrid = [224, 0, 0];
const colorSquare = [0, 0, 0];
const colorCircle = [220, 220, 220];
const colorBack = [29, 42, 46];

function drawPart(y_offset, pos, tilt, drawType) {
  let middle_x = 2 * canvasWidth / 3;
  let middle_y = canvasHeight / 2;
  resetMatrix();
  translate(middle_x + pos, middle_y + y_offset);
  rotate(tilt);

  let scale = 10;

  if(drawType==DrawTypeEnum.CIRCLEGRID){
    fill(colorCircleGrid);
    for (var i = 0; i < 3; i++) {
      yTranslate=i*100;
      for (var j = 0; j < 3; j++) {
        xTranslate=j*100;
        if(circleGridArray[i][j]==true)    
          ellipse((-30*scale)+xTranslate, (-10*scale)+yTranslate, 3*scale, 3*scale);
      }
    }
  }
  else if(drawType==DrawTypeEnum.SQUARE){
      fill(colorSquare);
      if(squareOn)
        rect(-30*scale, -15*scale, 20*scale, 20*scale);
  }
  else if(drawType==DrawTypeEnum.CIRCLE){
      fill(colorCircle);
      if(circleOn)
        ellipse((-30*scale)+100, (-15*scale)+100, 20*scale, 20*scale);
    }  
}

function drawFromSliders(y_offset, pos_slider, tilt_slider, drawType) {
  let pos = pos_slider.value();
  let tilt = tilt_slider.value();
  drawPart(y_offset, pos, tilt, drawType);
}

function draw () {
  background(colorBack);
  fill(colorCircleGrid);
  stroke(95, 52, 8);
  drawFromSliders( 0, pos2_slider, tilt2_slider, DrawTypeEnum.SQUARE);
  drawFromSliders( 0, pos3_slider, tilt3_slider, DrawTypeEnum.CIRCLE);
  drawFromSliders(-50, pos1_slider, tilt1_slider, DrawTypeEnum.CIRCLEGRID);
  
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
