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
	//v1 top left of bounding box
	"v1x":130,
	"v1y":200,
	//v2 top right of bounding box 
	"v2x":230,
	"v2y":200,
	//v3 bottom right of bounding box
	"v3x":180,
	"v3y":250,
	//middle paramenter in most cases but can be swapped
	"v4x":300,
	"v4y":300
	//Anchor point at bottom left
	//offsetX:
	//offsetY:
	//size:???
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

const colorFront  = "#199cff";
const colorBack   = "#e3eded";
const colorStroke = "#233f11";

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  
  //LetterA trial
  //let v1 = letterData["v1"];
  //let v2 = letterData["v2"];
  //let v3 = letterData["v3"];
  //let v4 = letterData["v4"];
  //let v5 = letterData["v5"];
  let anchorX = 130;
  let anchorY = 300;

  let v1x = letterData["v1x"]; let v1y = letterData["v1y"];
  let v2x = letterData["v2x"]; let v2y = letterData["v2y"];
  let v3x = letterData["v3x"]; let v3y = letterData["v3y"];
  let v4x = letterData["v4x"]; let v4y = letterData["v4y"];

  beginShape();
    vertex(v1x,v1y);
    vertex(v2x,v2y);
    vertex(v3x,v3y);
    vertex(v4x,v4y);
    vertex(anchorX,anchorY);
  endShape(CLOSE);



  // determine parameters for second circle
  // size2 = letterData["size"];
  //let pos2x = posx + letterData["offsetx"];
  //let pos2y = posy + letterData["offsety"];

  // draw two circles
  //ellipse(posx, posy, 150, 150);
  //ellipse(pos2x, pos2y, size2, size2);
}

function draw () {
  // clear screen
  background(colorBack);

  // compute the center of the canvas
  let center_x = canvasWidth / 2;  
  let center_y = canvasHeight / 2;

  drawLetter(0,0,0,letterA);

  // draw the letters A, B, C from saved data
  //drawLetter(center_x - 250, center_y, 10, letterA);
  //drawLetter(center_x      , center_y, 10, letterB);
  //drawLetter(center_x + 250, center_y, 10, letterC);

  //let width = 100;

  //beginShape();
    //vertex(130,200);
    //vertex(230,200);
    //vertex(230,300);
    //vertex(180,250);
    //vertex(130,300);
  //endShape(CLOSE);

}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
