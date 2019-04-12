/*
 * Here are some things you can edit
 */
const colorBack    = "#e3eded";
const colorLines   = "#000090";

function sliderToDataObject() {
  let obj = {};
  // obj["size"]    = map(param_sliders[0].value(), 0, 100, 5, 100);
  // obj["offsetx"] = map(param_sliders[1].value(), 0, 100, -50, 50);
  // obj["offsety"] = map(param_sliders[2].value(), 0, 100, -150, 50);
  // obj["point1_x"] = map(param_sliders[0].value(), 0, 100, 0, 100);
  // obj["point1_y"] = map(param_sliders[1].value(), 0, 100, 0, 200);
  // obj["point2_x"] = map(param_sliders[2].value(), 0, 100, 0, 100);
  // obj["point2_y"] = map(param_sliders[3].value(), 0, 100, 0, 200);
  // obj["point3_x"] = map(param_sliders[4].value(), 0, 100, 0, 100);
  // obj["point3_y"] = map(param_sliders[5].value(), 0, 100, 0, 200);
  // obj["point4_x"] = map(param_sliders[6].value(), 0, 100, 0, 100);
  // obj["point4_y"] = map(param_sliders[7].value(), 0, 100, 0, 200);
  obj["point1_x"] = points[0].x;
  obj["point1_y"] = points[0].y;
  obj["point2_x"] = points[1].x;
  obj["point2_y"] = points[1].y;
  obj["point3_x"] = points[2].x;
  obj["point3_y"] = points[2].y;
  obj["point4_x"] = points[3].x;
  obj["point4_y"] = points[3].y;
  obj["point5_x"] = points[4].x;
  obj["point5_y"] = points[4].y;
  obj["point6_x"] = points[5].x;
  obj["point6_y"] = points[5].y;
  obj["numLineBugs"] = round(map(param_sliders[0].value(), 0, 100, 2, 8));
  displayPoints = param_sliders[1].value() > 40;
  return obj;
}

let points = [];
let pointSize = 10;
let currentPointIndex = -1;
let displayPoints = true;

let numSliders = 2;

letterData = {
  "point1_x": 39.5,
  "point1_y": 181.5,
  "point2_x": 33,
  "point2_y": 108,
  "point3_x": 82,
  "point3_y": 123.5,
  "point4_x": 87.5,
  "point4_y": 174,
  "point5_x": 15,
  "point5_y": 188,
  "point6_x": 15.5,
  "point6_y": 97.5,
  "numLineBugs": 5
};

// PROBABLY DON't NEED TO EDIT ANYTHING ELSE.

let param_sliders = [];

let main_canvas = null;

const canvasWidth = 960;
const canvasHeight = 500;

let debugBox = true;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  for(let i=0; i<numSliders; i++) {
    let cur_row = select("#row" + (i+1));
    cur_row.show();
    let cur_slider = createSlider(0, 100, 50);
    let containerString = "slider" + (i+1) + "Container";
    cur_slider.parent(containerString);
    param_sliders.push(cur_slider);
  }

  points.push({x: letterData["point1_x"], y: letterData["point1_y"]});
  points.push({x: letterData["point2_x"], y: letterData["point2_y"]});
  points.push({x: letterData["point3_x"], y: letterData["point3_y"]});
  points.push({x: letterData["point4_x"], y: letterData["point4_y"]});

  // line points
  points.push({x: letterData["point5_x"], y: letterData["point5_y"]});
  points.push({x: letterData["point6_x"], y: letterData["point6_y"]});


  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);
  button.parent(buttonContainer);
}

function buttonPressedEvent() {
  let obj = sliderToDataObject();
  json = JSON.stringify(obj, null, 2);
  alert(json);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  push();
  scale(2);
  translate(width / 4 - 50, 25);

  if (debugBox) {
    noFill();
    strokeWeight(3);
    stroke(0, 200, 0);
    rect(0, 0, 100, 200);
    strokeWeight(1);
    line(0, 100, 100, 100);
  }

  let obj = sliderToDataObject();
  drawLetter(obj);

  // draw points
  if (displayPoints) {
    fill(255);
    stroke(0);
    for (let p of points) {
      ellipse(p.x, p.y, pointSize, pointSize);
    }
}
  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
  else if (key == 'd') {
    debugBox = !debugBox;
    // console.log("debugBox is now: " + debugBox);
    redraw();
  }
  else if (key == ' ') {
    let obj = sliderToDataObject();
    json = JSON.stringify(obj, null, 2);
    console.log(json);
  }
}

function mousePressed() {
  let mous_x = mouseX /2 - width/4 + 50;
  let mous_y = mouseY /2 - 25;

  let found = false;
  for (let i = 0; i <6; i++) {
    if (abs(points[i].x- mous_x) < pointSize*1.5 && abs(points[i].y - mous_y) < pointSize*1.5){
      currentPointIndex = i;
      found = true;
    }
  }
  if (!found) currentPointIndex = -1;
}

function mouseDragged() {
  if (currentPointIndex != -1){
    let mous_x = mouseX /2 - width/4 + 50;
    let mous_y = mouseY /2 - 25;
    points[currentPointIndex].x = mous_x;
    points[currentPointIndex].y = mous_y;
  }

}
function mouseReleased() {
  currentPointIndex = -1;
}
