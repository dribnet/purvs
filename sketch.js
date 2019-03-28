const canvasWidth = 960;
const canvasHeight = 500;

/* 
 * my three variable per letter are:
 *
   size: radius of the second circle (in pixels)
   offsetx: x offset (in pixels) of the second circle
            relative to the first one
   offsety: y offset (in pixels) of the second circle
            relative to the first one
 *
 */

 const LETTA_A = {
  shapes: [
    {
      x: [ -67, -103, 0, 103, 67, 0, -67 ],
      y: [ 69, 31, -127, 31, 69, 0, 69 ],
      col: "#199cff"
    },
    {
      x: [ -67, 67, 0, -67 ],
      y: [ 69, 69, 0, 69 ],
      col: "#FFFFFF"
    },
  ]
}

const LETTA_B = {
  shapes: [
    {
      x: [ -78, -78, 14, 78, 14, 78, 14,-78 ],
      y: [ 98, -98, -98, -49, 0, 49, 98,98],
      col: "#199cff"
    },
    {
      x: [78, 78, 14, 78],
      y: [ -49, 49, 0, -49 ],
      col: "#FFFFFF"
    },
  ]
}

const LETTA_C = {
  shapes: [
    {
      x: [ 93-181, 93-181, 127-181, 249-181, 249-181, 127-181, 93-181],
      y: [ 305-256, 207-256, 158-256, 158-256, 354-256, 354-256,305-256],
      col: "#199cff"
    },
    {
      x: [ 249-181, 249-181, 127-181, 249-181 ],
      y: [ 158-256, 354-256, 256-256, 158-256 ],
      col: "#FFFFFF"
    },
  ]
}

// const letterA = {
//   "posx1":129,    
//   "posx2":93,
//   "posx3":196,
//   "posx4":299,
//   "posx5":263,
//   "posx6":196,
//   "posx7":196,

  

//   "posy1":354,
//   "posy2":316,
//   "posy3":158,
//   "posy4":316,
//   "posy5":354,
//   "posy6":285,
//   "posy7":354,
// }

// const letterB = {
//   "posx1":93,
//   "posx2":93,
//   "posx3":235,
//   "posx4":299,
//   "posx5":235,
//   "posx6":299,
//   "posx7":235,

//   "posy1":354,
//   "posy2":158,
//   "posy3":158,
//   "posy4":207,
//   "posy5":256,
//   "posy6":305,
//   "posy7":354,
// }

// //const letterC = {
//   "posx1":93,
//   "posx2":93,
//   "posx3":127,
//   "posx4":269,
//   "posx5":269,
//   "posx6":127,
//   "posx7":127,

//   "posy1":305,
//   "posy2":207,
//   "posy3":158,
//   "posy4":158,
//   "posy5":354,
//   "posy6":354,
//   "posy7":256,
// }

const colorFront1  = "#199cff";
const colorFront2  = "#59ccff";
const colorBack    = "#ffb2c3";
const colorStroke  = "#FF69B4";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(0);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawALetter(posx, posy, letter, sc) {
  push()
    
    translate(posx, posy);
    scale(sc);

    for(s= 0; s < letter.shapes.length; s++ ) { 
      fill(letter.shapes[s].col);
      beginShape()
        for(let i = 0; i < letter.shapes[s].x.length; i++ ) {
          vertex( letter.shapes[s].x[i], letter.shapes[s].y[i] )
        }
      endShape()
    }

  pop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle

  let posx1 = posx + letterData["posx1"];
  let posx2 = posx + letterData["posx2"];
  let posx3 = posx + letterData["posx3"];
  let posx4 = posx + letterData["posx4"];
  let posx5 = posx + letterData["posx5"];
  let posx6 = posx + letterData["posx6"];
  let posx7 = posx + letterData["posx7"];

  let posy1 = posy + letterData["posy1"];
  let posy2 = posy + letterData["posy2"];
  let posy3 = posy + letterData["posy3"];
  let posy4 = posy + letterData["posy4"];
  let posy5 = posy + letterData["posy5"];
  let posy6 = posy + letterData["posy6"];
  let posy7 = posy + letterData["posy7"];

  // draw two circles
  // fill(255);
  // ellipse(221,256,50,50);
  
  // quad(posx3,posy3,posx6,posy6,posx5,posy5,posx4,posy4);
  // quad(posx1,posy1,posx2,posy2,posx3,posy3,posx6,posy6);
  // fill(255);
  // triangle(posx1,posy1,posx6,posy6,posx5,posy5);
  // line(posx7,posy7,posx6,posy6);


  // fill(colorFront1);
  // quad(posx1,posy1,posx2,posy2,posx3,posy3,posx7,posy7);
  // quad(posx3,posy3,posx4,posy4,posx6,posy6,posx7,posy7);

  // fill(255);
  // triangle(posx4,posy4,posx6,posy6,posx5,posy5);


  // fill(colorFront1);
  // quad(posx1,posy1,posx2,posy2,posx3,posy3,posx6,posy6);
  // quad(posx3,posy3,posx4,posy4,posx5,posy5,posx6,posy6);

  // fill(255);
  // triangle(posx4,posy4,posx5,posy5,posx7,posy7);
  }

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight/ 2;

  // draw the letters A, B, C from saved data
  // scale(0.6);
  // drawLetter(center_x - 250, center_y, letterA);
  // drawLetter(center_x      , center_y, letterB);
  // drawLetter(center_x + 250, center_y, letterC);
  // drawALetter(center_x, center_y, LETTA_A, 1);
  drawALetter(center_x-250, center_y, LETTA_A, 1);
  drawALetter(center_x , center_y-25, LETTA_B, 1);
  drawALetter(center_x+250, center_y-25, LETTA_C, 1);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
