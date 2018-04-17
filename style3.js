/*const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

//Defined Constant 
//center points
const main = {x: CANVAS_WIDTH/2, y: CANVAS_HEIGHT/2};
const mainUpper = {x: main.x, y: main.y*0.5};
const mainLower = {x: main.x, y: main.y*1.5};
//left points
const leftMain = {x: main.x*0.5, y: main.y};
const leftUpper = {x: main.x*0.5, y: main.y*0.5};
const leftLower = {x: main.x*0.5, y: main.y*1.5};
//right points
const rightMain = {x: main.x*1.5, y: main.y};
const rightUpper = {x: main.x*1.5, y: main.y*0.5};
const rightLower = {x: main.x*1.5, y: main.y*1.5};
//Quarter for the X and Y divisions
const xQ = ((main.x - leftMain.x)/2);
const yQ = ((main.y - mainLower.y)/2);
//Four Sub-points  //FIX THE QUARTER POINTS VIA A DISTANCE
const leftHigh = {x: leftMain.x + xQ, y: mainUpper.y + yQ};
const leftLow = {x: leftMain.x + xQ, y: main.y + yQ};
const rightHigh = {x: main.x + xQ, y: leftUpper.y + yQ};
const rightLow = {x: main.x + xQ, y: leftMain.y + yQ};

let stroke = 0;
let numStroke = 0;
let r = 0;

const bWidth = 40;
let fWidth = 0; */

let main_canvas = null;
let pos1_slider = null;
let tilt1_slider = null;
let pos2_slider = null;
let tilt2_slider = null;
let pos3_slider = null;
let tilt3_slider = null;

const canvasWidth = 960;
const canvasHeight = 500;

//Defined Constant 
//center points
const main = {x: canvasWidth/2, y: canvasHeight/2};
const mainUpper = {x: main.x, y: main.y*0.5};
const mainLower = {x: main.x, y: main.y*1.5};
//left points
const leftMain = {x: main.x*0.5, y: main.y};
const leftUpper = {x: main.x*0.5, y: main.y*0.5};
const leftLower = {x: main.x*0.5, y: main.y*1.5};
//right points
const rightMain = {x: main.x*1.5, y: main.y};
const rightUpper = {x: main.x*1.5, y: main.y*0.5};
const rightLower = {x: main.x*1.5, y: main.y*1.5};
//Quarter for the X and Y divisions
const xQ = ((main.x - leftMain.x)/2);
const yQ = ((main.y - mainLower.y)/2);
//Four Sub-points  //FIX THE QUARTER POINTS VIA A DISTANCE
const leftHigh = {x: leftMain.x + xQ, y: mainUpper.y + yQ};
const leftLow = {x: leftMain.x + xQ, y: main.y + yQ};
const rightHigh = {x: main.x + xQ, y: leftUpper.y + yQ};
const rightLow = {x: main.x + xQ, y: leftMain.y + yQ};

let setStroke = 0;
let numStroke = 0;
let r = 0;

const bWidth = 40;
let fWidth = 0;

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

function artStroke(x1,y1,x2,y2){
  line(x1, y1, x2, y2);
}

function dStroke(int){
  let cY = map();
}

function rGen(){
  r = Math.floor(random(0, 40));
  fWidth = bWidth - r;
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

function drawFromSliders(y_offset, pos_slider, tilt_slider) {
  let pos = pos_slider.value();
  let tilt = tilt_slider.value();
  drawPart(y_offset, pos, tilt);
}

function draw () {
  background('#80dfff');
  fill(colorFront);
  stroke(95, 52, 8);

  drawFromSliders(-50, pos1_slider, tilt1_slider);
  drawFromSliders(  0, pos2_slider, tilt2_slider);
  drawFromSliders( 50, pos3_slider, tilt3_slider);
}

function setup(){
	//
}

function draw(){
	background('#80dfff');
}

function artStroke(x1,y1,x2,y2){
	line(x1, y1, x2, y2);
}

function dStroke(){

}

function rGen(){
	r = Math.floor(random(0, 40));
	fWidth = bWidth - r;
}

function A(){ 

	//left stroke 
	artStroke(mainUpper.x, mainUpper.y, leftLower.x, leftLower.y);
	//right stroke
	artStroke(mainUpper.x, mainUpper.y, rightLower.x, rightLower.y);
	//optional middle
	artStroke(main.x, main.y, leftMain.x, leftMain.y);
	artStroke(leftMain.x, leftMain.y, main.x, main.y);
}

function B(){
	//left stroke
	artStroke(leftUpper.x, leftUpper.y, leftLower.x, leftLower.y); //1st Stroke
	//NEED TO CALCULATE THE MAP FOR HALF FRAME
	//2nd Stroke
	artStroke(leftUpper.x, leftUpper.y, mainUpper.x, mainUpper.y);
	artStroke(mainUpper.x, mainUpper.y, rightHigh.x, rightHigh.y);
	artStroke(rightHigh.x, rightHigh.y, main.x, main.y);
	artStroke(main.x, main.y, leftMain.x, leftMain.y);
	//3rd Stroke
	artStroke(leftMain.x, leftMain.y, main.x, main.y);
	artStroke(main.x, main.y, rightLow.x, rightLow.y);
	artStroke(rightLow.x, rightLow.y, mainLower.x, mainLower.y);
	artStroke(mainLower.x, mainLower.y, leftLower.x, leftLower.y);
}

function C(){
	//1st Stroke
	artStroke(rightHigh.x, rightHigh.y, mainUpper.x, mainUpper.y);
	artStroke(mainUpper.x, mainUpper.y, leftHigh.x, leftHigh.y);
	artStroke(leftHigh.x, leftHigh.y, leftLow.x, leftLow.y);
	artStroke(leftLow.x, leftLow.y, mainLower.x, mainLower.y);
	artStroke(mainLower.x, mainLower.y, rightLow.x, rightLow.y);
}

//FIX YOUR DAMN FUNCTIONS AND CODE BOI

function D(){
	//1st Stroke
	artStroke(leftUpper.x, leftUpper.y, leftLower.x, leftLower.y);
	//2nd Stroke
	artStroke(leftUpper.x, leftUpper.y, mainUpper.x, mainUpper.y);
	artStroke(mainUpper.x, minUpper,y, leftHigh.x, leftHigh.y);
	artStroke(leftHigh.x, leftHigh.y, leftLow.x, leftLow.y);
	artStroke(leftLow.x, leftLow.y, mainLower.x, mainLower.y);
	artStroke(mainLower.x, mainLower.y, leftLower.x, leftLower.y);
}

function E(){
	//1st Stroke
	artStroke(leftUpper.x, leftUpper.y, leftLower.x, leftLower.y);
	//2nd Stroke
	artStroke(leftUpper.x, leftUpper.y, rightUpper.x, rightUpper.y);
	//3rd Stroke
	artStroke(leftMain.x, leftMain.y, rightMain.x, rightMain.y);
	//4th Stroke
	artStroke(leftLower.x, leftLower.y, rightLower.x, rightLower.y);
}

function F(){
		//1st Stroke
	artStroke(leftUpper.x, leftUpper.y, leftLower.x, leftLower.y);
	//2nd Stroke
	artStroke(leftUpper.x, leftUpper.y, rightUpper.x, rightUpper.y);
	//3rd Stroke
	artStroke(leftMain.x, leftMain.y, rightMain.x, rightMain.y);
}