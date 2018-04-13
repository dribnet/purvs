const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "a1" : 160,
  "a2" : 290,

  "tx1" : 0,
  "ty1" : -50,
  "tx2" : 10,
  "ty2" : -50,
  "tx3" : 5,
  "ty3" : 50,

  "lx1" : 0,
  "ly1" : 0,
  "lx2" : -50,
  "ly2" : 0,
}


const letterB = {
  "a1" : 260,
  "a2" : 100,

  "tx1" : -15,
  "ty1" : 5,
  "tx2" : 50,
  "ty2" : 0,
  "tx3" : 50,
  "ty3" : -15,

  "lx1" : 0,
  "ly1" : 43,
  "lx2" : 0,
  "ly2" : -43,
}


const letterC = {
  "a1" : 50,
  "a2" : 235,

  "tx1" : -20,
  "ty1" : -37,
  "tx2" : -5,
  "ty2" : -50,
  "tx3" : 40,
  "ty3" : -10,

  "lx1" : -10,
  "ly1" : 43,
  "lx2" : -10,
  "ly2" : -30,
}

const letterD = {
  "a1" : 250,
  "a2" : 110,

  "tx1" : 0,
  "ty1" : -50,
  "tx2" : -15,
  "ty2" : -50,
  "tx3" : -10,
  "ty3" : 40,

  "lx1" : -10,
  "ly1" : 50,
  "lx2" : -10,
  "ly2" : -50,
}

const letterE = {
  "a1" : 70,
  "a2" : 290,

  "tx1" : -20,
  "ty1" : -60,
  "tx2" : -40,
  "ty2" : -60,
  "tx3" : -30,
  "ty3" : 60,

  "lx1" : -30,
  "ly1" : 0,
  "lx2" : 10,
  "ly2" : 0,
}

const letterF = {
  "a1" : 200,
  "a2" : 290,

  "tx1" : -20,
  "ty1" : -60,
  "tx2" : -40,
  "ty2" : -60,
  "tx3" : -30,
  "ty3" : 60,

  "lx1" : -30,
  "ly1" : 0,
  "lx2" : 10,
  "ly2" : 0,
}

const letterG = {
  "a1" : 40,
  "a2" : 290,

  "tx1" : 20,
  "ty1" : 0,
  "tx2" : 40,
  "ty2" : 0,
  "tx3" : 50,
  "ty3" : 60,

  "lx1" : 10,
  "ly1" : 0,
  "lx2" : 45,
  "ly2" : 0,
}

const letterH = {
  "a1" : 250,
  "a2" : 20,

  "tx1" : 60,
  "ty1" : 40,
  "tx2" : 40,
  "ty2" : 40,
  "tx3" : 50,
  "ty3" : -80,

  "lx1" : -20,
  "ly1" : -80,
  "lx2" : -20,
  "ly2" : 40,
}

const letterI = {
  "a1" : 60,
  "a2" : 80,

  "tx1" : 15,
  "ty1" : 50,
  "tx2" : 20,
  "ty2" : -50,
  "tx3" : 10,
  "ty3" : -50,

  "lx1" : 30,
  "ly1" : -50,
  "lx2" : 0,
  "ly2" : -50,
}

const letterJ = {
  "a1" : 323,
  "a2" : 100,

  "tx1" : 43,
  "ty1" : 35,
  "tx2" : 33,
  "ty2" : -50,
  "tx3" : 53,
  "ty3" : -50,

  "lx1" : 60,
  "ly1" : -50,
  "lx2" : 0,
  "ly2" : -50,
}

const letterK = {
  "a1" : 330,
  "a2" : 100,

  "tx1" : -10,
  "ty1" : -40,
  "tx2" : -20,
  "ty2" : 70,
  "tx3" : 0,
  "ty3" : 70,

  "lx1" : 34,
  "ly1" : 35,
  "lx2" : 60,
  "ly2" : 65,
}

const letterL = {
  "a1" : 190,
  "a2" : 290,

  "tx1" : -43,
  "ty1" : -35,

  "tx2" : -80,
  "ty2" : 70,

  "tx3" : -50,
  "ty3" : 70,

  "lx1" : -80,
  "ly1" : 70,
  "lx2" : 30,
  "ly2" : 70,
}

const letterM = {

  "a1" : 170,
  "a2" : 10,

  "tx1" : -50,
  "ty1" : -35,
  "tx2" : 50,
  "ty2" : -25,
  "tx3" : 50,
  "ty3" : -45,

  "lx1" : 0,
  "ly1" : -50,
  "lx2" : 0,
  "ly2" : 10,
}

const letterN = {
  "a1" : 250,
  "a2" : 20,

  "tx1" : -30,
  "ty1" : 20,
  "tx2" : -10,
  "ty2" : 20,
  "tx3" : -20,
  "ty3" : -50,

  "lx1" : 50,
  "ly1" : -50,
  "lx2" : 50,
  "ly2" : 20,
}

const letterO = {
  "a1" : 0,
  "a2" : 360,

  "tx1" : -15,
  "ty1" : -30,
  "tx2" : -30,
  "ty2" : -25,
  "tx3" : -20,
  "ty3" : 45,

  "lx1" : 25,
  "ly1" : -45,
  "lx2" : -45,
  "ly2" : -20,
}

const letter0 = {
  "a1" : 0,
  "a2" : 360,

  "tx1" : -30,
  "ty1" : -40,
  "tx2" : -40,
  "ty2" : -25,
  "tx3" : 45,
  "ty3" : 45,

  "lx1" : -45,
  "ly1" : -45,
  "lx2" : 45,
  "ly2" : 45,
}


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
  angleMode(DEGREES);


  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(x, y, scale, letterData) {
  // determine parameters

let a1 = letterData["a1"];
let a2 = letterData["a2"];

let tx1 = letterData["tx1"];
let ty1 = letterData["ty1"];
let tx2 = letterData["tx2"];
let ty2 = letterData["ty2"];
let tx3 = letterData["tx3"];
let ty3 = letterData["ty3"];

let lx1 = letterData["lx1"];
let ly1 = letterData["ly1"];
let lx2 = letterData["lx2"];
let ly2 = letterData["ly2"];

  // draw 
    
    awh = 100;
    x = width/2;
    y = height/2;
   noFill();
  strokeWeight(10);

  arc(x, y, awh, awh, a1, a2);

  strokeWeight(1);
  fill(0);

  triangle(x+tx1, y+ty1, x+tx2, y+ty2, x+tx3, y+ty3);

  strokeWeight(5);

  line(x+lx1, y+ly1, x+lx2, y+ly2);
}



function draw () {
  // clear screen
  background(125, 30, 40);
center_x = width/2;
center_y = height/2;
    
drawLetter(width/2, height/2, 10, letterO);

/*
  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x      , center_y, 10, letterB);
  drawLetter(center_x + 250, center_y, 10, letterC);
*/

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
