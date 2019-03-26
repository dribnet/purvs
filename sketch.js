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

const letterA = {
  size:150,
  placements: [
  {loc:'top', offsetx:(150/2)/2, offsety:15,width:150/2},
  {loc: "bottom",offsetx: (150/2)/2, offsety: 150*.74,width:150/2}
  ]
}

const letterB = {
  size:150,
  placements: [
    {loc:'top', offsetx:(150*.5), offsety:20, width:150*.4},
    {loc: "bottom",offsetx: (150*.5), offsety: 90, width:150*.4}
  ]
}

const letterC = {
  size:150,
  "offsetx": 30,
  "offsety": 0,
  numOf: 0,
  placements: [
    {loc:'top', offsetx:(150*.5), offsety:150*.35, width:150/2},
  ]
}

const letterE = {
  size:150,
  "offsetx": 0,
  "offsety": -145,
  numOf: 4, 
  placements: [
    {loc:'top', offsetx:(150*.5), offsety:10,width:150/2},
    {loc: "bottom",offsetx: (150*.5), offsety: 100,width:150/2}
  ]
}
const colorFront1 = "#199cff";
const colorFront2 = "#59ccff";
const colorBack = "#e3eded";
const colorStroke = "#233f11";

function setup() {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  // let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  fill(colorFront1);
  rect(posx, posy, letterData.size, letterData.size);
  fill(colorBack);
  // stroke(colorFront1)
  // rect(pos2x, pos2y, size2, size2);
  // drawing inner circles
  letterData.placements.forEach(myRect => {
    let rectX = 0;
    let rectY = 0;
    rect(posx+myRect.offsetx, posy + myRect.offsety, myRect.width,(letterData.size*0.25));
    // switch(myRect.loc) {
    //   case 'top':
    //     rect(posx+letterData.size*.25, posy + letterData.size*0.1, letterData.size/2,(letterData.size*0.25));
    //     break;
    //   case 'mid':
    //     // code block
    //     break;
    //   case 'bottom':
    //     // rect(posx+ (150/2)/2,posy+80, 80,80/2);
    //     rect(posx+myRect.offsetx, posy + letterData.size*0.75, letterData.size/2,(letterData.size*0.25));
    //     break;
    //   case 'right':
    //      // rect(posx+ (150/2)/2,posy+80, 80,80/2);
    //     rect(posx+myRect.offsetx, posy + letterData.size*0.75, letterData.size/2,(letterData.size*0.25));
    //     break;
    //   default:
    //     // code block
    // }
  })
}

function draw() {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x, center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
