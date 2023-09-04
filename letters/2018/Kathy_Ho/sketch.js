const canvasWidth = 960;
const canvasHeight = 500;

const letterA = {
  "box2": {
  "x": -130,
  "y": 20,
  },

"box3": {
  "x":-130,
  "y":-20,
},

"box4": {
  "x":-50, //layer
  "y":50, //actually under 
},

"box5": {
  "x":-50, //layer
  "y":10, //actually under
},

"box6": {
  "x":-50, //solid
  "y":-30, //solid
},

"box7": {
  "x":-81, //very top
  "y":30, //very top
},

"box8": {
  "x":-97, //very behind
  "y":-39 //very behind
}
}

const letterB = {
  "box2": {
  "x": -130,
  "y": 20,
  },

"box3": {
  "x":-130,
  "y":-20,
},

"box4": {
  "x":-98, //layer
  "y":-39, //actually under 
},

"box5": {
  "x":-55, //layer
  "y":18, //actually under
},

"box6": {
  "x":-84, //solid
  "y":77, //solid
},

"box7": {
  "x":-84, //very top
  "y":77, //very top
},

"box8": {
  "x":-58, //very behind
  "y":-32, //very behind
},
// "box9": {
// 	"x":-58,
// 	"y":-10
// }
}


const letterC = {
  "box2": {
  "x": -130, //solid
  "y": 20, //solid
},

  "box3": {
  "x":-130, //solid
  "y":-20, //solid
},

  "box4": {
  "x":-100,
  "y":-38,
},

  "box5": {
  "x":-81,
  "y":80,
},

"box6": {
  "x":-130, //solid
  "y":-20, //solid
},

  "box7": {
  "x":-55,
  "y":-30,
},

  "box8": {
  "x":-81,
  "y":80
}
}


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  col1 = color(255,204,116); //dark green
  col2 = color(255,121,145); //light green
  col3 = color(79,196,216); //red
  col4 = color(255,192,203);
  // color/stroke setup


  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, col, letterData) {
  // determine parameters for second circle
  // let col3 = letterData["col3"];
  
  let pos2x = posx + letterData["box2"]["x"];
  let pos2y = posy + letterData["box2"]["y"];

  let pos3x = posx + letterData["box3"]["x"];
  let pos3y = posy + letterData["box3"]["y"];

  let pos4x = posx + letterData["box4"]["x"];
  let pos4y = posy + letterData["box4"]["y"];

  let pos5x = posx + letterData["box5"]["x"];
  let pos5y = posy + letterData["box5"]["y"];

  let pos6x = posx + letterData["box6"]["x"];
  let pos6y = posy + letterData["box6"]["y"];

  let pos7x = posx + letterData["box7"]["x"];
  let pos7y = posy + letterData["box7"]["y"];

  let pos8x = posx + letterData["box8"]["x"];
  let pos8y = posy + letterData["box8"]["y"];  

  // let pos9x = posx + letterData["box9"]["x"];
  // let pos9y = posy + letterData["box9"]["y"];

  // let pos2x = posx + letterData["box10"]["x"];
  // let pos2y = posy + letterData["box10"]["y"];
  // draw two circles
  // ellipse(posx, posy, 150, 150);
  // ellipse(pos2x, pos2y, size2, size2);

  drawOwl(posx-130,posy+60,150,150);
  drawOwl(pos4x,pos4y,150,150); //x4y4
  drawOwl(pos2x,pos2y,150,150);

  drawOwl(pos8x,pos8y,150,150); //x8y8
  drawOwl(pos3x,pos3y,150,150); //x3y3

  drawOwl(pos5x,pos5y,150,150); //x5y5

  drawOwl(pos6x,pos6y,150,150); //x6y6

  drawOwl(pos7x,pos7y,150,150); //x7y7
  

  // drawOwl2(pos9x,pos9y,150,150) //x10y10 //different col
  // drawOwl2(pos10x,pos10y,150,150) //x10y10 //different col
}

function draw () {
  translate(0,-70);
  // clear screen
  background(255,192,203);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data

  // drawOwl(100,350);
  drawLetter(center_x - 250, center_y, 10, letterA);
  drawLetter(center_x      , center_y, 10, letterB);
  drawLetter(center_x + 250, center_y, 10, letterC);
}
function drawOwl(x,y){
  push();
  translate(x, y);


  push();
  fill(col1);
  stroke(col1);
  beginShape();
  vertex(50,50);
  vertex(100,70);
  vertex(100,20);
  vertex(50,10);
  endShape();
  pop();
  
  push();
  fill(col2);
  stroke(col2);
  beginShape();
  vertex(100,70);
  vertex(100,20);
  vertex(130,0);
  vertex(130,40);
  endShape();
  pop();
  
  push();
  fill(col3);
  stroke(col3);
  beginShape();
  vertex(100,20);
  vertex(130,-2);
  vertex(85,-10);
  vertex(50,10);
  endShape();
  pop();

  pop();
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
