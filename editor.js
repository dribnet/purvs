/*******
 * define this "sliderInfo" variable
 * have an entry for each slider you want
 * and each row should be:
 * ["object_field", minimum_bound, maximum_bound]
 */
const sliderInfo = [
  ["sizex", 0, 100],
  ["sizey", 0, 100],
  ["offsetx", -50, 50],
  ["offsety", -50, 50],
  ["sizexT",0, 100], // second square
  ["sizeyT", 0, 100],
  ["offsetxT", -50, 50],
  ["offsetyT", -50, 50],
  ["offsetx3", -50, 50],
  ["offsety3", -50, 50],
  ["angleR",  -3.14, 3.14],
  ["angleL",  -3.14, 3.14],
  ["angleR2", -3.14, 3.14],
  ["angleL2", -3.14, 3.14]

];

    


    // "sizex": 40, // first square
    // "sizey": 80,
    // "offsetx": -30,
    // "offsety": -40,
    // "sizexT": 80, // second square
    // "sizeyT": 40,
    // "offsetxT": -30,
    // "offsetyT": -40,
    // "offsetx3": 0, // arc
    // "offsety3": 0,
    // "angleR":0, //red
    // "angleL":0,
    // "angleR":0, // orange
    // "angleL":0



  //   ["size",       0, 100],
  // ["offsetx",  -30,  30],
  // ["offsety", -100, 100],
  // ["height", 0, 100]

// PROBABLY DON'T NEED TO EDIT ANYTHING ELSE. STOP HERE.

const numSliders = sliderInfo.length;

if (typeof systemBackgroundColor === 'undefined') {
    var systemBackgroundColor = "#e3eded";
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

const canvasWidth = 960;
const canvasHeight = 500;

let debugBox = false;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // rotation in degrees (more slider friendly)
  

  for(let i=0; i<numSliders; i++) {
    let cur_row = select("#row" + (i+1))
    cur_row.show();
    let cur_slider = createSlider(0, 100, 50)
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
  background(systemBackgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  push();
  scale(2);
  translate(width/4 - 50, 25);

  if (debugBox) {
  arc(pos2x, pos2y, 80, 80, rightAngle2, leftAngle2, PIE);
  
  fill(darkBlue);
  arc(pos3x, pos3y, 80, 80, rightAngle, leftAngle, PIE);
  fill(lightBlue);
  
  rect(pos2x, pos2y, size1, size2);
  fill(darkBlue);
  rect(pos2xT, pos2yT, size1T, size2T);
  }

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
