//Made by Ben Spearman for MDDN 242
//2018
const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

var sx;
var sy;
var t = 0;
var ss;
var ssf;
var fillf;
var fillo;

//Creating a vars for standard x, standard y, time, fill standard size (for the blocks),
//and a second standard for number four

function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');
  angleMode(DEGREES);
}


function draw () {
  background(0); // Black background
  strokeWeight(0); // Stroke weight to 0 pixels

  fillf = (-(sin(t))*255);
  fillo = ((sin(t))*255);
  //Making the fills change over time with the growth
  ss = (sin(t)+1)*40 
  ssf = ((sin(-t)+1)*40)
  //Creating the alternating growth of the squares

  four();
  zero();
  seven();

  t = t +1; //Making time count up
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
//Second version is for the number four, so they can alternate in growth
function stdsq (sx,sy) {
  rect(sx,sy,ss,ss);
}

function stdsqf (sx,sy) {
  rect(sx,sy,ssf,ssf);
}


//Creates the number 4
function four (){

//Creating vars for use in function
//Standard xy, standard block distance max
var xst = 310;
var yst = 50;
var st = 40;

beginShape();

fill(fillf);
//Vertical bar
  for(i=1;i<=7;i++){
    stdsqf (xst,(yst+(i*st)));
  }
//Diag bar
  for (i=1; i<=3; i++){
    stdsqf ((xst-(st*i)),(40+yst+(st*i)));
  }
//Horizontal bar
  for (i=1; i<=5; i++){
    stdsqf (((xst-160)+(st*i)),(yst+200));
  }
endShape();
}

//Creates the number 0
function zero (){

fill(fillo);
//Creating vars for use in function
var xst = 450;
var yst = 90;
var st = 40;

//For loops to draw numbers
//Top bar
  for (i=1; i<=3; i++){
      stdsq (((xst)+(st*i)), yst);
    }

//Bottom bar
  for (i=1; i<=3; i++){
    stdsq (((xst)+(st*i)), (yst+240));
  }

//Left vertical bar
   for (i=1; i<=5; i++){
    stdsq (xst, (yst+(st*i)));
  }
//Right vertical bar
 for (i=1; i<=5; i++){
    stdsq ((xst+160), (yst+(st*i)));
  }
}

//Creates the number 7
function seven (){
//Creating vars for use in function
var xst = 710;
var yst = 90;
var st = 40;

//Top bar
  for (i=1; i<=5; i++){
    stdsq ((xst+(st*i)-40), yst);
  }
//Right bar
  for (i=1;i<=2;i++){
    stdsq (xst+160, yst+(st*i));
  }
//Lonely block :(
  stdsq ((xst+120), (yst+120));
//Middle bar
  for (i=1; i<=3;i++){
    stdsq (xst+80, yst+(120+st*i));
  }
}


