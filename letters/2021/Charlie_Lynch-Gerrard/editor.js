/*******
 * define this "sliderInfo" variable
 * have an entry for each slider you want
 * and each row should be:
 * ["object_field", minimum_bound, maximum_bound]
 */

 const canvasWidth = 960;
 const canvasHeight = 500;

const sliderInfo = [

  ["triangleX",  -50, 208],
  ["triangleY",  0, 204],
  ["TriAng", -180, 180],
  ["triWidth", 0, 200],
  ["triHeight", 0, 200],
  ["ellipseX", 0, 200],
  ["ellipseY", 0, 380],
  ["ellipseSize", 0, 130],
  ["ellipse2X", 0, 200],
  ["ellipse2Y", 0, 280],
  ["ellipseSize2", 0, 130],
  ["rectX", 0, 200],
  ["rectY", 0, 200],
  ["rectWidth", 0, 130],
  ["rectHeight", 0, 200],
  ["backgroundSlider", 0, 255],
  ["offsetX", -230, 200 ],
  ["offsetY", -250, 150],
  ["letterScale", 0.5, 1.5]

];



// PROBABLY DON't NEED TO EDIT ANYTHING ELSE.
const numSliders = sliderInfo.length;

if (typeof systemBackgroundColor === 'undefined') {
    var systemBackgroundColor = "#ffffff";
}

// this will use variables if they are already defined
// var systemBackgroundColor = systemBackgroundColor || "#e3eded";

// if everything is defined above, this should just work
function sliderToDataObject() {
  let obj = {};
  for (let i=0; i<numSliders; i=i+1) {
    o_name = sliderInfo[i][0]
    bounds_low = sliderInfo[i][1]
    bounds_high = sliderInfo[i][2]
    obj[o_name] = map(param_sliders[i].value(), 0, 100, bounds_low, bounds_high);
  }
  return obj;
}

let param_sliders = [];

let main_canvas = null;

let debugBox = false;


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // rotation in degrees (more slider friendly)
  angleMode(DEGREES);

  for(let i=0; i<numSliders; i++) {
    let cur_row = select("#row" + (i+1))
    cur_row.show();
    let cur_slider = createSlider(0, 100)
    let containerString = "slider" + (i+1) + "Container"
    cur_slider.parent(containerString);
    param_sliders.push(cur_slider);
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
  background(255);
  // compute the center of the canvas

  const sliderInfo = [

  ["backgroundSlider", 0, 255],

  ];


  if (debugBox) {
    noFill()
    strokeWeight(4);
    stroke(0, 200, 0);
    rect(0, 0, 100, 200);
  }


  push();
  translate(680,150);
  let obj = sliderToDataObject();
  drawLetter(obj);
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
