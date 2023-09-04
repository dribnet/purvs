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

 //have how many skips would be needed as a parameter 0,1,2 and then have a seperate thing that will add x amount to the skipper and count through then draw 

const letterA = {
  "squaresL": 10,
  "squaresR": 10,
  "skipL":3,
  "skipR": 100,//placeholder
  "sizex": 50,
  "sizey": 25,
  "offsetx": -60,
  "offsety": -100
}

const letterB = {
  "squaresL": 10,
  "squaresR": 10,
  "skipL":100,//placeholder
  "skipR":0,
  "sizex": 50,
  "sizey": 25,
  "offsetx": -60,
  "offsety": -100
}

const letterC = {
  "squaresL": 10,
  "squaresR": 10,
  "skipL":100,//placeholder
  "skipR": 5,
  "sizex": 50,
  "sizey": 25,
  "offsetx": -60,
  "offsety": -100
}

const backgroundColor  = (255);//"#e3eded";
//const strokeColor      = "#233f11";

const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(0);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function draw () {
  // clear screen
  background(backgroundColor);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  drawLetter(center_x - 250, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x + 250, center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];
  let i = 0;
  // draw two circles
  fill(0);
  while (i <= letterData["squaresR"]){
    if(i == letterData["skipR"]|| i == letterData["skipR2"]){
    posy += letterData["sizey"];
    i++;
    }
    else{
      rect(posx, posy-100, letterData["sizex"], letterData["sizey"]);
      posy += letterData["sizey"];
      i++;
    }
  }
  i=0;
  fill(0);
  while (i<= letterData["squaresL"]){
    if (i == letterData["skipL"]){
    pos2y += letterData["sizey"];
    i++;
    }
    else{
    rect(pos2x, pos2y, letterData["sizex"],letterData["sizey"]);
    pos2y += letterData["sizey"];
    i++;
  }
  }
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
