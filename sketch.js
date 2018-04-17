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

const letterP = {
  "a1" : 235,
  "a2" : 100,

  "tx1" : -10,
  "ty1" : -40,
  "tx2" : -25,
  "ty2" : 70,
  "tx3" : 5,
  "ty3" : 70,

  "lx1" : 15,
  "ly1" : 50,
  "lx2" : -10,
  "ly2" : -25,
}

const letterQ = {
  "a1" : 0,
  "a2" : 0,

  "tx1" : -35,
  "ty1" : -35,
  "tx2" : 55,
  "ty2" : 60,
  "tx3" : 35,
  "ty3" : 60,

  "lx1" : -25,
  "ly1" : 40,
  "lx2" : -25,
  "ly2" : -21,
}

const letterR = {
  "a1" : 220,
  "a2" : 100,

  "tx1" : -10,
  "ty1" : -40,
  "tx2" : -20,
  "ty2" : 70,
  "tx3" : 0,
  "ty3" : 70,

  "lx1" : 34,
  "ly1" : 35,
  "lx2" : 55,
  "ly2" : 65,
}

const letterS = {
  "a1" : 150,
  "a2" : 330,

  "tx1" : -50,
  "ty1" : 50,
  "tx2" : -50,
  "ty2" : 70,
  "tx3" : 40,
  "ty3" : 60,

  "lx1" : -45,
  "ly1" : 25,
  "lx2" : 30,
  "ly2" : 60,
}

const letterT = {
  "a1" : 210,
  "a2" : 330,

  "tx1" : -10,
  "ty1" : -50,
  "tx2" : 10,
  "ty2" : 50,
  "tx3" : -10,
  "ty3" : 50,

  "lx1" : 10,
  "ly1" : 47,
  "lx2" : 10,
  "ly2" : -50,
}
/*
const letterT2 = {
  "a1" : 80,
  "a2" : 245,

  "tx1" : 40,
  "ty1" : -40,
  "tx2" : -50,
  "ty2" : -45,
  "tx3" : -50,
  "ty3" : -65,

  "lx1" : -10,
  "ly1" : 47,
  "lx2" : -10,
  "ly2" : -50,
}
*/

const letterU = {
  "a1" : 50,
  "a2" : 250,

  "tx1" : 40,
  "ty1" : 55,
  "tx2" : 30,
  "ty2" : -50,
  "tx3" : 20,
  "ty3" : 55,

  "lx1" : -20,
  "ly1" : -45,
  "lx2" : -20,
  "ly2" : 45,
}

const letterV = {
  "a1" : 310,
  "a2" : 230,

  "tx1" : 0,
  "ty1" : 60,
  "tx2" : -50,
  "ty2" : -40,
  "tx3" : -30,
  "ty3" : -50,

  "lx1" : 30,
  "ly1" : -45,
  "lx2" : 0,
  "ly2" : 60,
}

const letterW = {
  "a1" : 340,
  "a2" : 200,

  "tx1" : 60,
  "ty1" : 35,
  "tx2" : -55,
  "ty2" : 25,
  "tx3" : -50,
  "ty3" : 45,

  "lx1" : 0,
  "ly1" : -10,
  "lx2" : 0,
  "ly2" : 50,
}

const letterX = {
  "a1" : 90,
  "a2" : 190,

  "tx1" : -60,
  "ty1" : 45,
  "tx2" : -50,
  "ty2" : 55,
  "tx3" : 20,
  "ty3" : -20,

  "lx1" : -53,
  "ly1" : 32,
  "lx2" : -22,
  "ly2" : 32,
}

const letterY = {
  "a1" : 340,
  "a2" : 100,

  "tx1" : 0,
  "ty1" : -20,
  "tx2" : 40,
  "ty2" : 35,
  "tx3" : -10,
  "ty3" : -20,

  "lx1" : 0,
  "ly1" : -18,
  "lx2" : 38,
  "ly2" : 33,
}

const letterZ = {
  "a1" : 50,
  "a2" : 120,

  "tx1" : -20,
  "ty1" : 50,
  "tx2" : -30,
  "ty2" : 40,
  "tx3" : 30,
  "ty3" : -40,

  "lx1" : 28,
  "ly1" : -40,
  "lx2" : -30,
  "ly2" : -40,
}

const letter1 = {
  "a1" : 80,
  "a2" : 100,

  "tx1" : 0,
  "ty1" : -50,
  "tx2" : -5,
  "ty2" : 50,
  "tx3" : 5,
  "ty3" : 50,

  "lx1" : -15,
  "ly1" : -35,
  "lx2" : -1,
  "ly2" : -47,
}

const letter2 = {
  "a1" : 230,
  "a2" : 320,

  "tx1" : -33,
  "ty1" : 50,
  "tx2" : 44,
  "ty2" : -33,
  "tx3" : -15,
  "ty3" : 50,

  "lx1" : 40,
  "ly1" : 50,
  "lx2" : -30,
  "ly2" : 50,
}

const letter3 = {
  "a1" : 310,
  "a2" : 130,

  "tx1" : -20,
  "ty1" : -70,
  "tx2" : -20,
  "ty2" : -55,
  "tx3" : 60,
  "ty3" : -58,

  "lx1" : 50,
  "ly1" : -58,
  "lx2" : 10,
  "ly2" : -25,
}

const letter4 = {
  "a1" : 50,
  "a2" : 220,

  "tx1" : -5,
  "ty1" : 0,
  "tx2" : 5,
  "ty2" : 70,
  "tx3" : -15,
  "ty3" : 70,

  "lx1" : 30,
  "ly1" : 70,
  "lx2" : -40,
  "ly2" : 70,
}

const letter5 = {
  "a1" : 250,
  "a2" : 130,

  "tx1" : -30,
  "ty1" : -70,
  "tx2" : 50,
  "ty2" : -70,
  "tx3" : 50,
  "ty3" : -50,

  "lx1" : -20,
  "ly1" : -67,
  "lx2" : -20,
  "ly2" : -40,
}



const letter6 = {
  "a1" : 250,
  "a2" : 130,

  "tx1" : -35,
  "ty1" : 43,
  "tx2" : -5,
  "ty2" : -100,
  "tx3" : -50,
  "ty3" : 0,

  "lx1" : -20,
  "ly1" : 45,
  "lx2" : -3,
  "ly2" : -50,
}


const letter7 = {
  "a1" : 240,
  "a2" : 301,

  "tx1" : -15,
  "ty1" : 50,
  "tx2" : 30,
  "ty2" : -45,
  "tx3" : 5,
  "ty3" : 50,

  "lx1" : 25,
  "ly1" : 0,
  "lx2" : 0,
  "ly2" : 0,
}


const letter8 = {
  "a1" : 150,
  "a2" : 30,

  "tx1" : 0,
  "ty1" : -20,
  "tx2" : -50,
  "ty2" : 60,
  "tx3" : 50,
  "ty3" : 60,

  "lx1" : 45,
  "ly1" : 27,
  "lx2" : -45,
  "ly2" : 27,
}


const letter9 = {
  "a1" : 90,
  "a2" : 280,

  "tx1" : -7,
  "ty1" : 70,
  "tx2" : 13,
  "ty2" : -53,
  "tx3" : 13,
  "ty3" : 70,

  "lx1" : 20,
  "ly1" : 70,
  "lx2" : -15,
  "ly2" : 70,
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

const letterEMark = {
  "a1" : 89,
  "a2" : 91,

  "tx1" : 0,
  "ty1" : 40,
  "tx2" : -10,
  "ty2" : -50,
  "tx3" : 10,
  "ty3" : -50,

  "lx1" : -5,
  "ly1" : -50,
  "lx2" : 5,
  "ly2" : -50,
}

const letterQMark = {
  "a1" : 230,
  "a2" : 310,

  "tx1" : 0,
  "ty1" : 35,
  "tx2" : 37,
  "ty2" : -38,
  "tx3" : 20,
  "ty3" : -50,

  "lx1" : -2,
  "ly1" : 50,
  "lx2" : 2,
  "ly2" : 50,
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

  strokeWeight(6);
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
    
drawLetter(width/2, height/2, 10, letterL);

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
