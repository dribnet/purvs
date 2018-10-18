/*
 * This is the function to implement to make your own abstract design.
 *
 * arguments:
 * p5: the p5.js object - all draw commands should be prefixed with this object
 * x1, x2, y1, y2: draw the pattern contained in the rectangle x1,y1 to x2, y2
 * z: use this as the noise z offset (can be shifted)
 * zoom: current zoom level (starts at 0), useful to decide how much detail to draw
 *
 * The destination drawing should be in the square 0, 0, 255, 255.
 */


/* the random number seed for the tour */
var tourSeed = 301;
/* triplets of locations: zoom, x, y */
var tourPath = [
  [2, 512, 512],
  [4, 512, 512],
  [6, 512, 512]
]

//function drawWindow(p5,x,y,x1,y1,x2,y2){
	//let rX = p5.map(x+100, x1, x2, 0, 256);
	//let rY = p5.map(y+100, y1, y2, 0, 256);
	//let rW = p5.map(x-50, x1, x2, 0, 256);
	//let rH = p5.map(y+50, y1, y2, 0, 256);
	//p5.fill(255);
	//p5.rect(rX, rY, 40, 40);

//}

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
	let x = 0;
	let y = 0;
	let w = 0;
	let h = 0;
	let X2 = 0;
  let Y2 = 0;
  let X3 = 0;
  let Y3 = 0;
	 p5.background(248, 240, 233);
     p5.rectMode(p5.CORNERS);
     p5.angleMode(p5.DEGREES);

     x = p5.map(256, x1, x2, 0, 256);
     y = p5.map(256, y1, y2, 0, 256);
     w = p5.map(768, x1, x2, 0, 256);
     h = p5.map(768, y1, y2, 0, 256);
     p5.strokeWeight(25);
     p5.stroke(175, 128, 81);
     p5.noFill();
     p5.rect(x, y, w, h);

     x = p5.map(256, x1, x2, 0, 256);
     y = p5.map(256, y1, y2, 0, 256);
     w = p5.map(768, x1, x2, 0, 256);
     h = p5.map(768, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(224, 255, 255);
     p5.rect(x, y, w, h);

     x = p5.map(512, x1, x2, 0, 256);
     y = p5.map(256, y1, y2, 0, 256);
     w = p5.map(512, x1, x2, 0, 256);
     h = p5.map(768, y1, y2, 0, 256);
     p5.strokeWeight(10);
     p5.stroke(175, 128, 81);
     p5.noFill();
     p5.line(x, y, w, h);

     x = p5.map(256, x1, x2, 0, 256);
     y = p5.map(512, y1, y2, 0, 256);
     w = p5.map(768, x1, x2, 0, 256);
     h = p5.map(512, y1, y2, 0, 256);
     p5.strokeWeight(10);
     p5.stroke(175, 128, 81);
     p5.noFill();
     p5.line(x, y, w, h);

     x = p5.map(150, x1, x2, 0, 256);
     y = p5.map(800, y1, y2, 0, 256);
     w = p5.map(900, x1, x2, 0, 256);
     h = p5.map(800, y1, y2, 0, 256);
     p5.strokeWeight(40);
     p5.stroke(175, 128, 81);
     p5.noFill();
     p5.line(x, y, w, h);
     //bird mouth
     x = p5.map(440, x1, x2, 0, 256);
     y = p5.map(180, y1, y2, 0, 256);
     w = p5.map(460, x1, x2, 0, 256);
     h = p5.map(180, y1, y2, 0, 256);
     p5.strokeWeight(5);
     p5.stroke(255, 69, 0);
     p5.noFill();
     p5.line(x, y, w, h);
     //left leg
     x = p5.map(390, x1, x2, 0, 256);
     y = p5.map(180, y1, y2, 0, 256);
     w = p5.map(390, x1, x2, 0, 256);
     h = p5.map(245, y1, y2, 0, 256);
     p5.strokeWeight(5);
     p5.stroke(51);
     p5.noFill();
     p5.line(x, y, w, h);
     //right leg
     x = p5.map(410, x1, x2, 0, 256);
     y = p5.map(180, y1, y2, 0, 256);
     w = p5.map(410, x1, x2, 0, 256);
     h = p5.map(245, y1, y2, 0, 256);
     p5.strokeWeight(5);
     p5.stroke(51);
     p5.noFill();
     p5.line(x, y, w, h);
     //bird body
     x = p5.map(400, x1, x2, 0, 256);
     y = p5.map(180, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 215, 0);
     p5.ellipse(x, y, 90, 90);
     //bird eye
     x = p5.map(410, x1, x2, 0, 256);
     y = p5.map(180, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(51);
     p5.ellipse(x, y, 15, 15);
     //bird tail
     x = p5.map(355, x1, x2, 0, 256);
     y = p5.map(180, y1, y2, 0, 256);
     p5.noStroke();
     p5.fill(255, 215, 0);
     p5.ellipse(x, y, 30, 15);
     //bird wing
     x = p5.map(380, x1, x2, 0, 256);
     y = p5.map(190, y1, y2, 0, 256);
     p5.fill(255, 215, 0);
     p5.strokeWeight(5);
     p5.stroke(51);
     p5.arc(x, y, 25, 85, 50, 200);
     

  //p5.noFill();
  //p5.strokeWeight(1);
  //p5.stroke(0, 200, 200)
  //p5.rect(0, 0, 255, 255);
  //p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  //let sizex = x2 - x1;
  //p5.text("width: " + sizex, 10, 40);
}

  // debug - show border
  // p5.noFill();
  // p5.stroke(255, 0, 0)
  // p5.rect(0, 0, 255, 255);

