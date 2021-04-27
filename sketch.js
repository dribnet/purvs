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
  "size": 100,
  "offsetx": 70,
  "offsety": 20
}

const letterB = {
  "size": 150,
  "offsetx": 0,
  "offsety": -145
}

const letterC = {
  "size": 100,
  "offsetx": 30,
  "offsety": 0
}

const backgroundColor  = "#e3eded";
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
  drawLetter(center_x, center_y, letterA);
  drawLetter(center_x      , center_y, letterB);
  drawLetter(center_x , center_y, letterC);
}

function drawLetter(posx, posy, letterData) {
  // determine parameters for second circle
  let size2 = letterData["size"];

  let pos2x = posx + letterData["offsetx"];
  let pos2y = posy + letterData["offsety"];

  // draw two circles
  // fill(lightBlue);
  // ellipse(posx, posy, 150, 150);
  // fill(lightBlue);
  // ellipse(pos2x, pos2y, size2, size2);

// A_cat ear
fill(255);
strokeWeight(7);
triangle(170, 200, 195, 130, 210, 180);
triangle(240, 180, 255, 130, 280, 200);

//A _cat body
push()
strokeWeight(7);
// line(170, 200, 190, 130);
// line(190, 130, 210, 180);
// line(170, 200, 210, 180);
//
// line(250, 180, 270, 130);
// line(270, 130, 290, 200);
// line(250, 180, 290, 200);
//
// line(210, 180, 240, 180);
line(170, 200, 130, 350);
line(280, 200, 320, 350);
pop()

push()
noFill();
beginShape();
vertex(210, 180);
quadraticVertex(225, 175, 240, 180);
endShape();
pop()



//A_cat eyes
push()
strokeWeight(5);
fill(lightBlue);
ellipse(200, 220, 20, 20);
ellipse(252, 220, 20, 20);
pop()


//B_cat ear
fill(255);
strokeWeight(7);
triangle(170+200, 200+150, 195+200, 130+150, 210+200, 180+150);
triangle(240+200, 180+150, 255+200, 130+150, 280+200, 200+150);

//head
push()
noFill();
beginShape();
vertex(210+200, 180+150);
quadraticVertex(225+200, 175+150, 240+200, 180+150);
endShape();
pop()

//B_cat eyes
push()
strokeWeight(5);
fill(lightBlue);
ellipse(200+200, 220+150, 20, 20);
ellipse(252+200, 220+150, 20, 20);
pop()

//B_body
push()
noFill();
beginShape();
vertex(280+206, 200+153);
quadraticVertex(550, 280, 450, 230);
endShape();

beginShape();
vertex(450, 230);
quadraticVertex(550, 160, 400, 130);
endShape();

pop();

//c_cat ear
fill(255);
strokeWeight(7);
triangle(170+450, 200+150, 195+450, 130+150, 210+450, 180+150);
triangle(240+450, 180+150, 255+450, 130+150, 280+450, 200+150);

//C_cat eyes
push()
strokeWeight(5);
fill(lightBlue);
ellipse(200+450, 220+150, 20, 20);
ellipse(252+450, 220+150, 20, 20);
pop()

//C_head
push()
noFill();
beginShape();
vertex(210+450, 180+150);
quadraticVertex(225+450, 175+150, 240+450, 180+150);
endShape();
pop()

//C_body
push()
noFill();
beginShape();
vertex(170+446, 200+153);
quadraticVertex(225+320, 175-20, 240+450, 180-40);
endShape();
pop()





}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
