const colorFront1  = "#ffffff";
const colorFront2  = "#000000";
const colorFront3  = "#aaaaaa";

/*ff59c4
 * Draw the letter given the letterData
 *
 * Letters should always be drawn with the
 * following bounding box guideline:
 * from (0,0) to (100, 200)
 */
function drawLetter(letterData) {
  // color/stroke setup
 noStroke();

  // determine parameters for second circle
  // draw two circles
  let px1 = letterData["x1"];
  let py1 = letterData["y1"];
  
  let px2 = letterData["x2"];
  let py2 = letterData["y2"];
  
  let px3 = letterData["x3"];
  let py3 = letterData["y3"];
  
  let px4 = letterData["x4"];
  let py4 = letterData["y4"];
  
  let px5 = letterData["x5"];
  let py5 = letterData["y5"];

  let px6 = letterData["x6"];
  let py6 = letterData["y6"];

  let t1s = letterData["t1s"];
  let t1sx= letterData["t1sx"];
  let t1sy= letterData["t1sy"];

  let t2s = letterData["t2s"];
  let t2sx= letterData["t2sx"];
  let t2sy= letterData["t2sy"];

//Exceptions first for G,H,K
if (px1 ==100 && py1 ==25 && px6 == 50 && py6 ==75) {
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();

  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();
  
  push();
    fill(colorFront1)
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  ellipse(25,17.5,20,20);
  ellipse(75,17.5,20,20);

} else if (px3==50 && py3==125 && px6 ==50 && py6==75 && t1s==.5) {
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
    scale(-1,1);
    translate(-100,0);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();

  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(px1,py1,px2,py2,px3,py3);
    scale(-1,1);
    translate(-140,0);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();
  
  push();
    fill(colorFront1)
    triangle(px4,py4,px5,py5,px6,py6);
    scale(-1,1);
    translate(-100,0);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
    scale(-1,1);
    translate(-140,0);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();
} else if (px1 == 0 && py1 ==25 && px2 == 100 && py2 == 25 && px6 == 100 && py6 ==25) {
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();

  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();
  
  push();
    fill(colorFront1)
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  push();
  fill(colorFront2);
  triangle(25,5,50,30,75,5);
  pop();
} else if (px1 == 0 && py1 == 0 && px3 == 60 && py3 == 100 && px6 ==60 && py6 ==100) {
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
    scale(-1,1);
    translate(-100,0);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();

  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(px1,py1,px2,py2,px3,py3);
    scale(-1,1);
    translate(-90,0);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();
  
  push();
    fill(colorFront1)
    triangle(px4,py4,px5,py5,px6,py6);
    scale(-1,1);
    translate(-100,0);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
    scale(-1,1);
    translate(-90,0);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();
}
else{
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();

  push();
    fill(colorFront3);
    scale(t1s);
    translate(t1sx,t1sy);
    triangle(px1,py1,px2,py2,px3,py3);
  pop();
  
  push();
    fill(colorFront1)
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();
}

  

  // beginShape(TRIANGLES);
  // fill(colorFront2);
  // vertex(px1,py1);
  // vertex(px2,py2);
  // vertex(px3,py3);
  // fill(colorFront1);
  // vertex(px3,py3);
  // vertex(px4,py4);
  // vertex(px5,py5);
  // endShape();

}

function interpolate_letter(percent, oldObj, newObj) {
  let new_letter = {};
  new_letter["size"]    = map(percent, 0, 100, oldObj["size"], newObj["size"]);
  new_letter["offsetx"] = map(percent, 0, 100, oldObj["offsetx"], newObj["offsetx"]);
  new_letter["offsety"] = map(percent, 0, 100, oldObj["offsety"], newObj["offsety"]);
  return new_letter;
}

var swapWords = [
  "ABBAABBA",
  "CAB?CAB?",
  "BAAAAAAA"
]