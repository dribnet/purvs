const colorFront  = "#199cff";
const colorStroke = "#233f11";

/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

 /*
function drawLetter(letterData) {
  // color/stroke setup
  fill(colorFront);
  stroke(colorStroke);
  strokeWeight(4);

  // determine parameters for second circle
  let size2 = letterData["size"];
  let pos2x = 50+letterData["offsetx"];
  let pos2y = 150+letterData["offsety"];

  // draw two circles
  ellipse(50, 150, 100, 100);
  ellipse(pos2x, pos2y, size2, size2);
};
*/

function drawLetter (letterData) {
  angleMode(DEGREES);
  noStroke();
  let o1x = letterData["o1x"];
  let o1y = letterData["o1y"];
  let o1s = letterData["o1s"];
  let o1p = letterData["o1p"];
  let o2x = letterData["o2x"];
  let o2y = letterData["o2y"];
  let o2s = letterData["o2s"];
  let o2p = letterData["o2p"];
  let rx = letterData["rx"];
  let ry = letterData["ry"];
  let rs = letterData["rs"];
  let rr = letterData["rr"];

  //Drop Shadows
  fill(255, 130, 148);

  //Immovable Rect
  rect(-25+6,6,5,30);

  //Moveable Objects
   
  translate(o1x+6, o1y+6);
  polygon(0,0,o1s,o1p);
  translate(-o1x-6, -o1y-6);

   
  translate(o2x+6, o2y+6);
  polygon(0,0,o2s,o2p);
  translate(-o2x-6, -o2y-6);

   
  translate(x+6,y+6);
  rotate(tilt);
  rectMode(RADIUS);
  rect(0,0,rs,rs/6);
  rotate(-tilt);
  translate(-x-6, -y-6);

  //Front of Objects
  fill(255);
   
  rect(-25,0,5,30);

  //Moveable Objects
   
  translate(o1x, o1y);
  polygon(0,0,o1s,o1p);
  translate(-o1x, -o1y);
  
   
  translate(o2x, o2y);
  polygon(0,0,o2s,o2p);
  translate(-o2x, -o2y);

   
  translate(rx,ry);
  rotate(rr);
  rectMode(RADIUS);
  rect(0,0,rs,rs/6);
  rotate(-rr);
  translate(-rx, -ry);

   

  angleMode(RADIANS);
}


function polygon(x, y, radius, npoints) {
  angleMode(RADIANS);
  var angle = TWO_PI / npoints;
  beginShape();
  for (var a = 0; a < TWO_PI; a += angle) {
    var sx = x + cos(a) * radius;
    var sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
  angleMode(DEGREES);
}