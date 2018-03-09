//Made by Ben Spearman for MDDN 242
//2018
const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;
angleMode=degrees;


var sx;
var sy;
var t;
var s;
//Creating a var for time, s for scale, and standard xy


function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');

  // you can optionally add your own code here if you also have setup code
}

// Update this function to draw you own maeda clock
function draw () {
  background(0); // Black background
  strokeWeight(0); // Stroke weight to 0 pixels


push();
scale(sin(t));
  four();
  zero();
  seven();
pop();


  t = t +1;
}

// do not alter or remove this function
function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}

//Creating a function for the standard sized blocks for the numbers
//Will start as rect to get positioning right, will be changed into circles
function stdsq (sx,sy) {
  rect(sx,sy,40,40);
}


function four (){
//Creates the number 4

//Creating vars for use in function
var xst = 380;
var yst = 50;
var st = 40;

scale();


//Vertical bar
  for(i=1;i<=7;i++){
    stdsq (xst,(yst+(i*st)));
  }
//Diag bar
  for (i=1; i<=3; i++){
    stdsq ((xst-(st*i)),(40+yst+(st*i)));
  }
//Horizontal bar
  for (i=1; i<=5; i++){
    stdsq (((xst-160)+(st*i)),(yst+200));
  }


}


function zero (){
//Creates the number 0

//Creating vars for use in function
var xst = 480;
var yst = 90;
var st = 40;

//Top bar
  for (i=1; i<=3; i++){
      stdsq (((xst)+(st*i)), yst);
    }

//Bottom bar
  for (i=1; i<=3; i++){
    stdsq (((xst)+(st*i)), (yst+240));
  }

//Left vertical bar
  stdsq (xst, (yst+40));
  stdsq (xst, (yst+80));
  stdsq (xst, (yst+120));
  stdsq (xst, (yst+160));
  stdsq (xst, (yst+200));
//Right vertical bar
  stdsq ((xst+160), (yst+40));
  stdsq ((xst+160), (yst+80));
  stdsq ((xst+160), (yst+120));
  stdsq ((xst+160), (yst+160));
  stdsq ((xst+160), (yst+200));
}

function seven (){
//Creates the number 7

//Creating vars for use in function
var xst = 710;
var yst = 90;

//Top bar
  stdsq (xst, yst);
  stdsq ((xst+40), yst);
  stdsq ((xst+80), yst);
  stdsq ((xst+120), yst);
  stdsq ((xst+160), yst);
//Right bar
  stdsq ((xst+160),(yst+40));
  stdsq ((xst+160),(yst+80));
//Lonely block :(
  stdsq ((xst+120), (yst+120));
//Middle bar
  stdsq ((xst+80), (yst+160));
  stdsq ((xst+80), (yst+200));
  stdsq ((xst+80), (yst+240));
}


