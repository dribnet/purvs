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
        "position": -200,
        "tilt": 119
      },
      "box2": {
        "position": -35,
        "tilt": 12
      },
      "box3": {
        "position": -79,
        "tilt": 74
      }
    },
  "B":
    {
      "box1": {
        "position": -200,
        "tilt": -162
      },
      "box2": {
        "position": -200,
        "tilt": -180
      },
      "box3": {
        "position": -22,
        "tilt": -16
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

const colorFront = [222, 184, 135];
const colorBack = [248, 248, 255];



function draw () {
  background(colorBack);
  fill(colorFront);
  stroke(922, 184, 135);
  strokeWeight(4);

  //A
  line(280, 180, 250, 250);
  line(280, 180, 310, 250);
  line(260, 230, 300, 230);
  line(257, 238, 270, 238);

  //B
  line(330, 180, 330, 250);
  line(330, 180, 380, 215);
  line(380, 215, 330, 250);
  line(380, 215, 345, 215);

  //C
  line(400, 180, 400, 250);
  line(400, 180, 450, 180);
  line(450, 250, 400, 250);
  line(450, 250, 450, 235);

  //D
  line(480, 180, 480, 250);
  line(480, 180, 530, 215);
  line(530, 215, 480, 250);
  line(490, 225, 490, 240);


  //E
  line(550, 180, 550, 250);
  line(550, 180, 600, 180);
  line(600, 250, 550, 250);
  line(600, 215, 565, 215);

}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
