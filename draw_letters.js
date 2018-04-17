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
    
    stroke(255);
   noFill();
  strokeWeight(10);

  arc(x, y, awh, awh, a1, a2);

  strokeWeight(6);

  line(x+lx1, y+ly1, x+lx2, y+ly2);

  strokeWeight(2);
  fill(0);

  triangle(x+tx1, y+ty1, x+tx2, y+ty2, x+tx3, y+ty3);

  
}

function interpolate_letter(percent, oldObj, newObj){

  let new_letter = {};

  new_letter["a1"] = map(percent, 0, 100, oldObj ["a1"], newObj ["a1"]);
  new_letter["a2"] = map(percent, 0, 100, oldObj ["a2"], newObj ["a2"]);

  new_letter["tx1"] = map(percent, 0, 100, oldObj ["tx1"], newObj ["tx1"]);
  new_letter["ty1"] = map(percent, 0, 100, oldObj ["ty1"], newObj ["ty1"]);
  new_letter["tx2"] = map(percent, 0, 100, oldObj ["tx2"], newObj ["tx2"]);
  new_letter["ty2"] = map(percent, 0, 100, oldObj ["ty2"], newObj ["ty2"]);
  new_letter["tx3"] = map(percent, 0, 100, oldObj ["tx3"], newObj ["tx3"]);
  new_letter["ty3"] = map(percent, 0, 100, oldObj ["ty3"], newObj ["ty3"]);

  new_letter["lx1"] = map(percent, 0, 100, oldObj ["lx1"], newObj ["lx1"]);
  new_letter["ly1"] = map(percent, 0, 100, oldObj ["ly1"], newObj ["ly1"]);
  new_letter["lx2"] = map(percent, 0, 100, oldObj ["lx2"], newObj ["lx2"]);
  new_letter["ly2"] = map(percent, 0, 100, oldObj ["ly2"], newObj ["ly2"]);

  return new_letter;

}
