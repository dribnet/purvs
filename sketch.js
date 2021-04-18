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
//position
  "posx": -80, //square
  "posy": -100, //square
  "posx2": -30, //circle
  "posy2": -50, //circle
  "posx3": -115, //yellow line
  "posy3": 110, //yellow line
  "posx4": 20, //red line
  "posy4": 0, //red line

//sizes
  "sizex": -130, //sqaure
  "sizey": -150, //square
  "sizex2": 50, //red line
  "sizey2": 110, // red line
  "sizex3": -160, //circle
  "sizey3": -180, //circle
  "sizex4": -60, //yellow line
  "sizey4": -50, //yellow line
}

const letterB = {
//position
  "posx": -80, //square
  "posy": -100, //square
  "posx2": -30, //circle
  "posy2": 50, //circle
  "posx3": 20, //yellow line
  "posy3": 105, //yellow line
  "posx4": -83, //red line
  "posy4": -100, //red line

//sizes
  "sizex": -380, //sqaure
  "sizey": -150, //square
  "sizex2": -83,//red line
  "sizey2": 105, // red line
  "sizex3": -375, //circle
  "sizey3": -150, //circle
  "sizex4": -80, //yellow line
  "sizey4": 105, //yellow line
}


const letterC = {
//position
  "posx": -80, //square
  "posy": -100, //square
  "posx2": -28, //circle
  "posy2": -50, //circle
  "posx3": 20, //yellow line
  "posy3": 105, //yellow line
  "posx4": -83, //red line
  "posy4": -100, //red line

//sizes
  "sizex": -625, //sqaure
  "sizey": -150, //square
  "sizex2": -83,//red line
  "sizey2": 105, // red line
  "sizex3": -680, //circle
  "sizey3": -300, //circle
  "sizex4": -80, //yellow line
  "sizey4": 105, //yellow line
}

const backgroundColor  = "#ed93e3";
const strokeColor      = "#233f11";

const darkBlue  = "#199cff";
const lightBlue  = "#59ccff";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  stroke(strokeColor);
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
  // determine parameters
  let sqx = posx + letterData["posx"];
  let sqy = posy + letterData["posy"];
  let crqx = posx + letterData["posx2"];
  let crqy = posy + letterData["posy2"];
  let li1x = posx + letterData["posx3"];
  let li1y = posy + letterData["posy3"];
  let li2x = posx + letterData["posx4"];
  let li2y = posy + letterData["posy4"];
  let sizex = posx + letterData["sizex"];
  let sizey = posy + letterData["sizey"];
  let sizex2 = posx + letterData["sizex2"];//red line
  let sizey2 = posy + letterData["sizey2"];//red line
  let sizex3 = posx + letterData["sizex3"];
  let sizey3 = posy + letterData["sizey3"];
  let sizex4 = posx + letterData["sizex4"];
  let sizey4 = posy + letterData["sizey4"];
  // draw two circles
  //fill(darkBlue);
 // ellipse(posx, posy, 150, 150);
 // fill(lightBlue);
//  ellipse(pos2x, pos2y, size2, size2);

  //A  
  stroke(255, 0, 25);
  line(li2x,li2y,sizex2,sizey2);//red
  stroke(255, 247, 0);
  line(li1x,li1y,sizex4,sizey4);//yellow
  stroke(0,0,0);//black
  fill(3, 252, 44);
  rect(sqx,sqy,sizex,sizey);
  fill(0, 242, 255);
  ellipse(crqx,crqy,sizex3,sizey3);


  //B
  //stroke(0,0,0);
  //fill(3, 252, 44);
  //rect(400,150,100,100);
  //fill(0, 242, 255);
 // ellipse(450,300,100,100);
 // stroke(255, 0, 25);//red
 // line(400,150,400,350);
 // stroke(255, 247, 0);
 // line(400,150,500,250)


  //C
  //stroke(0,0,0);
 // fill(3, 252, 44);
 // rect(600,150,100,100);
 // fill(0, 242, 255);
  //ellipse(pos2x,pos2y,50,50);
 // stroke(255, 0, 25);
 // line(600,250,600,350);
 // stroke(255, 247, 0);
 // line(600,350,700,350);




}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
