const canvasWidth = 960;
const canvasHeight = 500;
const colorBack   = "#e3eded";
let k = 1;

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(0);
  stroke(0);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  // noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // // determine parameters for second circle
  // let size2 = letterData["size"];
  // let pos2x = posx + letterData["offsetx"];
  // let pos2y = posy + letterData["offsety"];

  let offset = letterData["offset"];

  let type = letterData["first"];
  if(type==0){
    strokeWeight(scale);
    line(posx, (offset*scale/2)+posy+((scale+scale/4)*0), posx, (offset*scale/2)+posy+((scale+scale/4)*0));
  } else if(type==1){
    strokeWeight(scale);
    line(posx-scale, (offset*scale/2)+posy+((scale+scale/4)*0), posx+scale, (offset*scale/2)+posy+((scale+scale/4)*0))
  }
  type = letterData["second"];
  if(type==0){
    strokeWeight(scale);
    line(posx, (offset*scale/2)+posy+((scale+scale/4)*1), posx, (offset*scale/2)+posy+((scale+scale/4)*1));
  } else if(type==1){
    strokeWeight(scale);
    line(posx-scale, (offset*scale/2)+posy+((scale+scale/4)*1), posx+scale, (offset*scale/2)+posy+((scale+scale/4)*1))
  }
  type = letterData["third"];
  if(type==0){
    strokeWeight(scale);
    line(posx, (offset*scale/2)+posy+((scale+scale/4)*2), posx, (offset*scale/2)+posy+((scale+scale/4)*2));
  } else if(type==1){
    strokeWeight(scale);
    line(posx-scale, (offset*scale/2)+posy+((scale+scale/4)*2), posx+scale, (offset*scale/2)+posy+((scale+scale/4)*2))
  }
  type = letterData["fourth"];
  if(type==0){
    strokeWeight(scale);
    line(posx, (offset*scale/2)+posy+((scale+scale/4)*3), posx, (offset*scale/2)+posy+((scale+scale/4)*3));
  } else if(type==1){
    strokeWeight(scale);
    line(posx-scale, (offset*scale/2)+posy+((scale+scale/4)*3), posx+scale, (offset*scale/2)+posy+((scale+scale/4)*3))
  }
  type = letterData["fifth"];
  if(type==0){
    strokeWeight(scale);
    line(posx, (offset*scale/2)+posy+((scale+scale/4)*4), posx, (offset*scale/2)+posy+((scale+scale/4)*4));
  } else if(type==1){
    strokeWeight(scale);
    line(posx-scale, (offset*scale/2)+posy+((scale+scale/4)*4), posx+scale, (offset*scale/2)+posy+((scale+scale/4)*4))
  }
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  if(k==0){
    let scale = 40;
    // draw the letters A, B, C from saved data
    drawLetter(center_x - 250, center_y-(scale*2.5), scale, letterA);
    drawLetter(center_x      , center_y-(scale*2.5), scale, letterB);
    drawLetter(center_x + 250, center_y-(scale*2.5), scale, letterC);
  }

  if(k==1){
    let scale = 15;
    drawLetter(center_x - 420, center_y-(scale*2.5)-180, scale, letterA);
    drawLetter(center_x - 280, center_y-(scale*2.5)-180, scale, letterB);
    drawLetter(center_x - 140, center_y-(scale*2.5)-180, scale, letterC); 
    drawLetter(center_x      , center_y-(scale*2.5)-180, scale, letterD);
    drawLetter(center_x + 140, center_y-(scale*2.5)-180, scale, letterE);
    drawLetter(center_x + 280, center_y-(scale*2.5)-180, scale, letterF);
    drawLetter(center_x + 410, center_y-(scale*2.5)-180, scale, letterG);

    drawLetter(center_x - 420, center_y-(scale*2.5)-90 , scale, letterH);
    drawLetter(center_x - 280, center_y-(scale*2.5)-90 , scale, letterI);
    drawLetter(center_x - 140, center_y-(scale*2.5)-90 , scale, letterJ); 
    drawLetter(center_x      , center_y-(scale*2.5)-90 , scale, letterK);
    drawLetter(center_x + 140, center_y-(scale*2.5)-90 , scale, letterL);
    drawLetter(center_x + 280, center_y-(scale*2.5)-90 , scale, letterM);
    drawLetter(center_x + 410, center_y-(scale*2.5)-90 , scale, letterN);

    drawLetter(center_x - 420, center_y-(scale*2.5)    , scale, letterO);
    drawLetter(center_x - 280, center_y-(scale*2.5)    , scale, letterP);
    drawLetter(center_x - 140, center_y-(scale*2.5)    , scale, letterQ); 
    drawLetter(center_x      , center_y-(scale*2.5)    , scale, letterR);
    drawLetter(center_x + 140, center_y-(scale*2.5)    , scale, letterS);
    drawLetter(center_x + 280, center_y-(scale*2.5)    , scale, letterT);
    drawLetter(center_x + 410, center_y-(scale*2.5)    , scale, letterU);

    drawLetter(center_x - 360, center_y-(scale*2.5)+90 , scale, letterV);
    drawLetter(center_x - 180, center_y-(scale*2.5)+90 , scale, letterW); 
    drawLetter(center_x      , center_y-(scale*2.5)+90 , scale, letterX);
    drawLetter(center_x + 180, center_y-(scale*2.5)+90 , scale, letterY);
    drawLetter(center_x + 360, center_y-(scale*2.5)+90 , scale, letterZ);

    drawLetter(center_x - 430, center_y-(scale*2.5)+180, scale, number1);
    drawLetter(center_x - 350, center_y-(scale*2.5)+180, scale, number2);
    drawLetter(center_x - 250, center_y-(scale*2.5)+180, scale, number3);
    drawLetter(center_x - 150, center_y-(scale*2.5)+180, scale, number4);
    drawLetter(center_x - 50 , center_y-(scale*2.5)+180, scale, number5);
    drawLetter(center_x + 50 , center_y-(scale*2.5)+180, scale, number6);
    drawLetter(center_x + 150, center_y-(scale*2.5)+180, scale, number7);
    drawLetter(center_x + 250, center_y-(scale*2.5)+180, scale, number8);
    drawLetter(center_x + 350, center_y-(scale*2.5)+180, scale, number9);
    drawLetter(center_x + 430, center_y-(scale*2.5)+180, scale, number0);
  }
}



function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
  else if (key == 'a') {
    if(k==0){
      k=1;
    } else {
      k=0;
    }
  }
}

/* 
 * my six variable per letter,
  the first 5 represent if they are a dot, a dash or null - coresponding to there morse Code:
 *
  -first
  -second
  -third
  -fourth
  -fifth 

 * while the sixth one represents the offset:
 *
  -offset

 */

const letterA = {
  "first": 0,
  "second": 1,
  "third": -1,
  "fourth": -1,
  "fifth": -1,
  "offset": 3
}
const letterB = {
  "first": 1,
  "second": 0,
  "third": 0,
  "fourth": 0,
  "fifth": -1,
  "offset": 1
}
const letterC = {
  "first": 1,
  "second": 0,
  "third": 1,
  "fourth": 0,
  "fifth": -1,
  "offset": 1
}
const letterD = {
  "first": 1,
  "second": 0,
  "third": 0,
  "fourth": -1,
  "fifth": -1,
  "offset": 2
}
const letterE = {
  "first": 0,
  "second": -1,
  "third": -1,
  "fourth": -1,
  "fifth": -1,
  "offset": 4
}
const letterF = {
  "first": 0,
  "second": 0,
  "third": 1,
  "fourth": 0,
  "fifth": -1,
  "offset": 1
}
const letterG = {
  "first": 1,
  "second": 1,
  "third": 0,
  "fourth": -1,
  "fifth": -1,
  "offset": 2
}
const letterH = {
  "first": 0,
  "second": 0,
  "third": 0,
  "fourth": 0,
  "fifth": -1,
  "offset": 1
}
const letterI = {
  "first": 0,
  "second": 0,
  "third": -1,
  "fourth": -1,
  "fifth": -1,
  "offset": 3
}
const letterJ = {
  "first": 0,
  "second": 1,
  "third": 1,
  "fourth": 1,
  "fifth": -1,
  "offset": 1
}
const letterK = {
  "first": 1,
  "second": 0,
  "third": 1,
  "fourth": -1,
  "fifth": -1,
  "offset": 2
}
const letterL = {
  "first": 0,
  "second": 1,
  "third": 0,
  "fourth": 0,
  "fifth": -1,
  "offset": 1
}
const letterM = {
  "first": 1,
  "second": 1,
  "third": -1,
  "fourth": -1,
  "fifth": -1,
  "offset": 3
}
const letterN = {
  "first": 1,
  "second": 0,
  "third": -1,
  "fourth": -1,
  "fifth": -1,
  "offset": 3
}
const letterO = {
  "first": 1,
  "second": 1,
  "third": 1,
  "fourth": -1,
  "fifth": -1,
  "offset": 2
}
const letterP = {
  "first": 0,
  "second": 1,
  "third": 1,
  "fourth": 0,
  "fifth": -1,
  "offset": 1
}
const letterQ = {
  "first": 1,
  "second": 1,
  "third": 0,
  "fourth": 1,
  "fifth": -1,
  "offset": 1
}
const letterR = {
  "first": 0,
  "second": 1,
  "third": 0,
  "fourth": -1,
  "fifth": -1,
  "offset": 2
}
const letterS = {
  "first": 0,
  "second": 0,
  "third": 0,
  "fourth": -1,
  "fifth": -1,
  "offset": 2
}
const letterT = {
  "first": 1,
  "second": -1,
  "third": -1,
  "fourth": -1,
  "fifth": -1,
  "offset": 4
}
const letterU = {
  "first": 0,
  "second": 0,
  "third": 1,
  "fourth": -1,
  "fifth": -1,
  "offset": 2
}
const letterV = {
  "first": 0,
  "second": 0,
  "third": 0,
  "fourth": 1,
  "fifth": -1,
  "offset": 1
}
const letterW = {
  "first": 0,
  "second": 1,
  "third": 1,
  "fourth": -1,
  "fifth": -1,
  "offset": 2
}
const letterX = {
  "first": 1,
  "second": 0,
  "third": 0,
  "fourth": 1,
  "fifth": -1,
  "offset": 1
}
const letterY = {
  "first": 1,
  "second": 0,
  "third": 1,
  "fourth": 1,
  "fifth": -1,
  "offset": 1
}
const letterZ = {
  "first": 1,
  "second": 1,
  "third": 0,
  "fourth": 0,
  "fifth": -1,
  "offset": 1
}
const number1 = {
  "first": 1,
  "second": 1,
  "third": 1,
  "fourth": 1,
  "fifth": 1,
  "offset": 0
}
const number2 = {
  "first": 0,
  "second": 1,
  "third": 1,
  "fourth": 1,
  "fifth": 1,
  "offset": 0
}
const number3 = {
  "first": 0,
  "second": 0,
  "third": 1,
  "fourth": 1,
  "fifth": 1,
  "offset": 0
}
const number4 = {
  "first": 0,
  "second": 0,
  "third": 0,
  "fourth": 1,
  "fifth": 1,
  "offset": 0
}
const number5 = {
  "first": 0,
  "second": 0,
  "third": 0,
  "fourth": 0,
  "fifth": 1,
  "offset": 0
}
const number6 = {
  "first": 0,
  "second": 0,
  "third": 0,
  "fourth": 0,
  "fifth": 0,
  "offset": 0
}
const number7 = {
  "first": 1,
  "second": 0,
  "third": 0,
  "fourth": 0,
  "fifth": 0,
  "offset": 0
}
const number8 = {
  "first": 1,
  "second": 1,
  "third": 0,
  "fourth": 0,
  "fifth": 0,
  "offset": 0
}
const number9 = {
  "first": 1,
  "second": 1,
  "third": 1,
  "fourth": 0,
  "fifth": 0,
  "offset": 0
}
const number0 = {
  "first": 1,
  "second": 1,
  "third": 1,
  "fourth": 1,
  "fifth": 0,
  "offset": 0
}
