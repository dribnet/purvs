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
  "posx": 0, //pink arc
  "posy": 60, //pink arc
  "posx2": -8, //blue arc
  "posy2": 90, //blue arc
  "posx3": 0, //yellow line
  "posy3": 110, //yellow line
  "posx4": 70, //red line
  "posy4": -50, //red line

//sizes
  "sizex": -130, //pink arc
  "sizey": -150, //pink arc
  "sizex2": 0, //red line
  "sizey2": 110, // red line
  "sizex3": -100, //blue arc
  "sizey3": -180, //blue arc
  "sizex4": -100, //yellow line
  "sizey4": -50, //yellow line
  "rotx": -140,
  "roty": -10,
  "rotx1": -50,
  "roty1": -100,
}

const letterB = {
//position
  "posx": -15, //pink arc
  "posy": -10, //pink arc
  "posx2": -20, //blue arc
  "posy2": 50, //blue arc
  "posx3": -20, //yellow line
  "posy3": 110, //yellow line
  "posx4": -20, //red line
  "posy4": -60, //red line


//sizes
  "sizex": -380, //pink arc
  "sizey": -150, //pink arc
  "sizex2": -20,//red line
  "sizey2": 105, // red line
  "sizex3": -375, //blue arc
  "sizey3": -150, //blue arc
  "sizex4": -20, //yellow line
  "sizey4": -60, //yellow line
  "rotx": -100,
  "roty": -10,
  "rotx1": -11,
  "roty1": -240,
}


const letterC = {
//position
  "posx": -55, //pink arc
  "posy": 20, //pink arc
  "posx2": -100, //blue arc
  "posy2": 20, //blue arc
  "posx3": -70, //yellow line
  "posy3": 100, //yellow line
  "posx4": -40, //red line
  "posy4": -40, //red line

//sizes
  "sizex": -625, //pink arc
  "sizey": -100, //pink arc
  "sizex2": -35,//red line
  "sizey2": -60, // red line
  "sizex3": -680, //blue arc
  "sizey3": -300, //blue arc
  "sizex4": -60, //yellow line
  "sizey4": 90, //yellow line
  "rotx": -100,
  "roty": -0,
  "rotx1": 20,
  "roty1": -10,
}

const backgroundColor  = "#000000";
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
  let arcx = posx + letterData["posx2"];
  let arcy = posy + letterData["posy2"];
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
  let rox1 = posx + letterData["rotx"];
  let roy1 = posy+ letterData["roty"];
  let rox2 = posx + letterData["rotx1"];
  let roy2 = posy + letterData["roty1"];


  //A  
  noFill();
  stroke(255, 0, 25);
  line(li2x,li2y,sizex2,sizey2);//red
  stroke(255, 247, 0);
  line(li1x,li1y,sizex4,sizey4);//yellow
  //stroke(0,0,0);//black
  //fill(3, 252, 44);
  stroke(235, 152, 225);
  arc(sqx, sqy, sizex, sizey, rox1, roy1, PI + QUARTER_PI);
  //rect(sqx,sqy,sizex,sizey);
  
  stroke(0, 242, 255);
  arc(arcx, arcy, sizex3, sizey3, rox2, roy2, PI + QUARTER_PI);
  //ellipse(crqx,crqy,sizex3,sizey3);


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
