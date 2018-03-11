//Made by Ben Spearman for MDDN 242
//2018
const CANVAS_WIDTH = 960;
const CANVAS_HEIGHT = 500;

var sx;
var sy;
var t = 0;
var ss;
var ssf;
//Creating a var for time, s for scale, and standard xy


function setup () {
  // create the drawing canvas, save the canvas element
  let main_canvas = createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  main_canvas.parent('canvasContainer');
  angleMode(DEGREES);
}


function draw () {
  background(0); // Black background
  strokeWeight(0); // Stroke weight to 0 pixels

  ss = (sin(t)+1)*40
  ssf = ((sin(-t)+1)*40)

  four();
  zero();
  seven();



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
//Second version is for the number four, so they can alternate in growth
function stdsq (sx,sy) {
  rect(sx,sy,ss,ss);
}

function stdsqf (sx,sy) {
  rect(sx,sy,ssf,ssf);
}

function four (){
//Creates the number 4

//Creating vars for use in function
var xst = 310;
var yst = 50;
var st = 40;



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


}


function zero (){
//Creates the number 0

//Creating vars for use in function
var xst = 450;
var yst = 90;
var st = 40;

beginShape();
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
endShape();

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


