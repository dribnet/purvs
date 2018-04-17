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
  //"offsety": -145
//}

//const letterC = {
  //"size": 100,
  //"offsetx": 30,
  //"offsety": 0
//}

//const colorFront  = "#199cff";
//const colorBack   = "#e3eded";
//const colorStroke = "#233f11";


function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
  
  pixelDensity(1);
  
  // color/stroke setup
  //fill(colorFront);
  //stroke(colorStroke);
  //strokeWeight(4);

  // with no animation, redrawing the screen is not necessary
  noLoop();

  
//function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  //let size2 = letterData["size"];
  //let pos2x = posx + letterData["offsetx"];
  //let pos2y = posy + letterData["offsety"];

  // draw two circles
  //ellipse(posx, posy, 150, 150);
  //ellipse(pos2x, pos2y, size2, size2);
}

function draw () {
  // clear screen
  
  loadPixels();

  for (var y = 0; y < height; y++){
    for(var x = 0; x < width; x++ ){
      var index = (x + y * width) * 4;
       pixels[index+0] = 255;
       pixels[index+1] = 0;
       pixels[index+2] = 255;
       pixels[index+3] = 255;

   }
  }

  updatePixels();


}


//Grid Pattern
//function grid(){

   //translate(360, 150);

  //background(0);
  //strokeWeight(2);
  //stroke(255);
  //fill(127);

  //for (var x = 0; x < 200; x = x + 50) {
  //for (var y = 0; y < 200; y = y + 50) {
    //rect(x, y, 50, 50);
  //}

  
//}
//}

  
  // compute the center of the canvas
  //let center_x = canvasWidth / 2;  
 // let center_y = canvasHeight / 2;

  // draw the letters A, B, C from saved data
  //drawLetter(center_x - 250, center_y, 10, letterA);
  //drawLetter(center_x      , center_y, 10, letterB);
 // drawLetter(center_x + 250, center_y, 10, letterC);


//function keyTyped() {
  //if (key == '!') {
    //saveBlocksImages();
  //}
  //else if (key == '@') {
   // saveBlocksImages(true);
 // }
