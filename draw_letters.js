/*
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */

function drawLetter(letterData) {

let a1 = letterData["a1"];
let a2 = letterData["a2"];

let tx1 = letterData["tx1"];
let ty1 = letterData["ty1"];
let tx2 = letterData["tx2"];
let ty2 = letterData["ty2"];
let tx3 = letterData["tx3"];
let ty3 = letterData["ty3"];

let lx1 = letterData["lx1"];
let ly1 = letterData["ly1"];
let lx2 = letterData["lx2"];
let ly2 = letterData["ly2"];

  // draw 
    
    awh = 100;
    x = 50;
    y = 100;
    stroke(0);
   noFill();
  strokeWeight(10);

  arc(x, y, awh, awh, a1, a2);

  strokeWeight(1);
  fill(0);

  triangle(x+tx1, y+ty1, x+tx2, y+ty2, x+tx3, y+ty3);

  strokeWeight(4);

  line(x+lx1, y+ly1, x+lx2, y+ly2);
}
