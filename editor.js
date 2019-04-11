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
  obj["offset"] = 0;
  return obj;
}

let points = [];
let pointSize = 10;
let currentPointIndex = -1;

let numSliders = 8;

// PROBABLY DON't NEED TO EDIT ANYTHING ELSE.

let param_sliders = [];

let main_canvas = null;

const canvasWidth = 960;
const canvasHeight = 500;

let debugBox = false;

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

  for (let i = 0; i < 4; i++) {
    points.push({x : random(25, 75), y : random(75, 125)});
  }

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
  translate(width/4 - 50, 25);

  if (debugBox) {
    noFill();
    strokeWeight(4);
    stroke(0, 200, 0);
    rect(0, 0, 100, 200);
  }

  let obj = sliderToDataObject();
  drawLetter(obj);

  fill(255);
  stroke(0);
  for (let p of points) {
    ellipse(p.x, p.y, pointSize ,pointSize);
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
  print("mouse_x: " + mous_x);
  print("mouse_y: " + mous_y);

  let found = false;
  for (let i = 0; i <4; i++) {
    if (abs(points[i].x- mous_x) < pointSize*2 && abs(points[i].y - mous_y) < pointSize*2){
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
