let main_canvas = null;

let checkboxes = [];

const canvasWidth = 960;
const canvasHeight = 500;

let letterParams = {
  "A":
    [
      true,
      false,
      false,
      false,
      false,
      false
    ],
  "B":
    [
      true,
      false,
      true,
      false,
      false,
      false
    ],
  "C":
    [
      true,
      true,
      false,
      false,
      false,
      false
    ]
}

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);

  sel = createSelect();
  sel.option('A');
  sel.option('B');
  sel.option('C');
  sel.changed(letterChangedEvent);

  button = createButton('show data');
  button.mousePressed(buttonPressedEvent);

  // position each element on the page
  main_canvas.parent('canvasContainer');

  sel.parent(selectorContainer);
  button.parent(buttonContainer);

  for(let i=0; i<6; i++) {
    let cur_checkbox = createCheckbox('', false);
    checkboxes.push(cur_checkbox);
    cur_checkbox.parent('container_' + i);
  }

  letterChangedEvent();
}

function uiToDataObject() {
  let obj = [];
  for(let i=0; i<6; i++) {
    obj.push(checkboxes[i].checked());
  }
  return obj;
}

function dataObjectToUi(obj) {
  for(let i=0; i<6; i++) {
    checkboxes[i].checked(obj[i]);
  }
}

function letterChangedEvent() {
  let item = sel.value();
  dataObjectToUi(letterParams[item]);
}

function buttonPressedEvent() {
  let obj = uiToDataObject();
  json = JSON.stringify(obj, null, 2);
  alert(json);
}

const colorFront = [207, 222, 227];
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

function drawPart(pos, is_on) {
  let rad = 0;
  if(is_on) {
    strokeWeight(0);
    rad = 90;
    fill(colorFront);
  }
  else {
    stroke(colorFront);
    strokeWeight(8);
    rad = 40;
    noFill();
  }
  push();
  translate(pos[0], pos[1]);
  ellipse(0, 0, rad, rad);
  pop();
}

// obj is an array of six booleans
function drawCharacter(x, y, obj) {
  let spacing_x = 50, spacing_y = 100;

  let positions = [
    [-spacing_x, -spacing_y],
    [ spacing_x, -spacing_y],
    [-spacing_x, 0],
    [ spacing_x, 0],
    [-spacing_x, spacing_y],
    [ spacing_x, spacing_y],
  ]

  push();
    translate(x, y);
    for(let i=0; i<6; i++) {
      drawPart(positions[i], obj[i])
    }
  pop();
}

function draw () {
  background(colorBack);
  fill(colorFront);
  stroke(95, 52, 8);

  obj = uiToDataObject();
  drawCharacter(width/2, height/2, obj);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
