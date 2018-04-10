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

//const letterA = {
  //"size": 80,
  //"offsetx": 0,
  //"offsety": 35
//}

//const letterB = {
  //"size": 150,
 //"offsetx": 0,
 // "offsety": -145
//}

//const letterC = {
  //"size": 100,
  //"offsetx": 30,
  //"offsety": 0
//}

//const colorFront  = "#199cff";
//const colorBack   = "#e3eded";
//const colorStroke = "#233f11";

var cols, rows;
var  w = 30;
var grid = [];

function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');

  cols = floor(300/w);
  rows = floor(300/w);

  

  // color/stroke setup
  //fill(colorFront);
  //stroke(colorStroke);
  //strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  //noLoop();

  for (var r = 0; r < rows; r++){
    for (var c = 0; c < cols; c++){
      var cell = new Cell(c,r);
      grid.push(cell);
    }

  }
}

//function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  //let size2 = letterData["size"];
  //let pos2x = posx + letterData["offsetx"];
  //let pos2y = posy + letterData["offsety"];

  // draw two circles
  //ellipse(posx, posy, 150, 150);
  //ellipse(pos2x, pos2y, size2, size2);
//}

function draw () {
  // clear screen
  background(51);

  translate(330, 100);

  for (var c = 0; c < grid.length; c++){
    grid[c].show();
  }

  // compute the center of the canvas
  //let center_x = canvasWidth / 2;  
  //let center_y = canvßsHeight / 2;

  // draw the letters A, B, C from saved data
  //drawLetter(center_x - 250, center_y, 10, letterA);
  //drawLetter(center_x      , center_y, 10, letterB);
  //drawLetter(center_x + 250, center_y, 10, letterC);
}
//Grid
function Cell(c, r){
this.c = c;
this.r = r;
this.walls = [true, true, true, true];

this.show = function(){
  var x = this.c*w;
  var y = this.r*w;
  stroke(255);

  if(this.walls[0]){
  line(x, y, x+w, y);
}

if(this.walls[1]){
  line(x+w, y, x+w, y+w);
}

if(this.walls[2]){
  line(x+w, y+w, x, y+w);
  }

  if(this.walls[3]){
  line(x, y+w, x, y);
}


  //noFill();
  //rect(x, y, w, w);
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
