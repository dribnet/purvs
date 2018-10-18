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
  [1, 460, 500],
  [3, 450, 410],
  [5, 447, 426],
  [3, 450, 410],
  [3, 450, 620]
]

//package of chocolate

function covercho(p5, x, y, x1, x2, y1, y2) {
  p5.stroke(155);
  p5.rectMode(p5.CORNER);

  //set x,y
  let cover_x = p5.map(x + -280, x1, x2, 0, 256);
  let cover_x1 = p5.map(x + 480, x1, x2, 0, 256);
  let cover_x2 = p5.map(x + 100, x1, x2, 0, 256);
  let cover_x3 = p5.map(x + 120 , x1, x2, 0, 256);
  let cover_x4 = p5.map(x + 210, x1, x2, 0, 256);
  let cover_y = p5.map(y + -230, y1, y2, 0, 256);
  let cover_y1 = p5.map(y + 220, y1, y2, 0, 256);
  let cover_y2 = p5.map(y + -100 , y1, y2, 0, 256);
  let cover_y3 = p5.map(y + 200 , y1, y2, 0, 256);
  let cover_y4 = p5.map(y+ -80  , y1, y2, 0, 256);
  let cover_y5 = p5.map(y+ -210  , y1, y2, 0, 256);
  p5.strokeWeight(20);

//My references point for draw shapes
  // p5.point(cover_x,cover_y);
  //p5.point(cover_x2,cover_y2);
  // p5.point(cover_x,cover_y1);
  // p5.point(cover_x1,cover_y);
  // p5.point(cover_x1,cover_y1);
  //p5.point(cover_x2,cover_y3);

//Cover
  p5.stroke('#a32c0b');
  p5.strokeWeight(7);  
  p5.beginShape();
  p5.fill(255);
  p5.vertex(cover_x,cover_y);
  p5.vertex(cover_x1,cover_y);
  p5.vertex(cover_x1,cover_y1);
  p5.vertex(cover_x,cover_y1);
  p5.endShape(p5.CLOSE);

//Red rect
  p5.beginShape();
  p5.noStroke();
  p5.fill('#d11f00');
  p5.vertex(cover_x+210,cover_y+40);
  p5.vertex(cover_x1-200,cover_y+40);
  p5.vertex(cover_x1-200,cover_y1-100);
  p5.vertex(cover_x+210,cover_y1-100);
  p5.endShape(p5.CLOSE);  

//my texts on cover  
  p5.textSize(120);
  p5.noStroke();
  p5.fill('#db9f1e');
  p5.textAlign(p5.CENTER);
  p5.text('A L M    N D', cover_x2+6,cover_y2+6);
  p5.textSize(120);
  p5.strokeWeight(6);
  p5.stroke('#a32c0b');
  p5.fill('#a32c0b');
  p5.textAlign(p5.CENTER);
  p5.text('A L M    N D', cover_x2,cover_y2);
  p5.stroke('#db9f1e');
  p5.fill('#db9f1e');
  p5.strokeWeight(1);
  p5.textSize(60);
  p5.textAlign(p5.CENTER);
  p5.text('C  H   O   C   O   L   A   T  E', cover_x2,cover_y3);
  // p5.ellipse(cover_y4,cover_x4,50,30);
  p5.strokeWeight(20);
  // p5.point(cover_x4,cover_y5);
  // p5.point(cover_x3+120,cover_y4-20);
  // p5.point(cover_x4-120,cover_y5+20);

 //Almond shape 
  p5.beginShape();
  p5.fill('#703c19');
  p5.stroke('#703c19');
  p5.vertex(cover_x4-5,cover_y5);
  p5.bezierVertex(cover_x3-160,cover_y4+10, cover_x3+120,cover_y4+160, cover_x4-5,cover_y5);
  p5.endShape(p5.CLOSE);

//Highlight part of Almond  
   p5.stroke(145, 80, 36,230);
   p5.noFill();
    p5.ellipse(cover_x3+60,cover_y4-60,10,45);
    p5.stroke(255, 255, 255,150);
    p5.ellipse(cover_x3+60,cover_y4-70,6,25);
    p5.fill(255, 255, 255);
    p5.noStroke(255, 255, 255,150);
    p5.ellipse(cover_x3+60,cover_y4-80,20,25);
  // p5.bezier(cover_x3,cover_y4, cover_x3-120,cover_y4+20, cover_x3+120,cover_y4-20, cover_x3,cover_y4);
}

// This version draws two rectangles and two ellipses.
// The rectangles are 960x720 and centered at 512,512.
function drawGrid(p5, x1, x2, y1, y2, z, zoom) {
  p5.background('#ba7a50');

if (zoom => 0){
  covercho(p5, 412, 512, x1, x2, y1, y2);
}
// if (zoom <2){
//   opencho(p5, 412, 512, x1, x2, y1, y2);
// }
  // debug - show border
  // p5.noFill();
  // p5.stroke(0, 200, 200)
  // p5.rect(0, 0, 255, 255);
  // p5.text("corner: (" + x1 + "," + y1 + ")", 10, 20);
  // let sizex = x2 - x1;
  // p5.text("width: " + sizex, 10, 40);
}