const canvasWidth = 960;
const canvasHeight = 500;



function setup () {
  // create the drawing canvas, save the canvas element
  main_canvas = createCanvas(canvasWidth, canvasHeight);
  main_canvas.parent('canvasContainer');
 background(180);
 
  // with no animation, redrawing the screen is not necessary
  noLoop();
}

function drawLetter(posx, posy, scale, letterData) {
  // determine parameters for second circle
  // let size2 = letterData["size"];
  // let pos2x = posx + letterData["offsetx"];
  // let pos2y = posy + letterData["offsety"];
  

  // draw two circles
  // rect(480, 250 , 150, 150);
  // rect(pos2x, pos2y, size2, size2);
}

function draw () {
  
noStroke();
fill(0);
//A
triangle(100, 400 ,200, 200, 300, 400);
//B
triangle(450, 400, 450, 250, 600, 325);
triangle(450, 400, 450, 200, 550, 250);
//C
triangle(900, 400, 900, 200, 700, 300 );
fill(180);
triangle(850, 350, 850, 250, 950, 300);
}

function keyTyped() {
  if (key == '!') {
    saveBlocksImages();
  }
  else if (key == '@') {
    saveBlocksImages(true);
  }
}
