// const colorFront1  = "#ffffff";
// const colorFront2  = "#000000";
// const colorFront3  = "#aaaaaa";

const colorFront1  = "#FCEA97";
const colorFront2  = "#FFC003";
const colorFront3  = "#A60202";

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

  let accent = 0.0;
  if ("accent" in letterData) {
    accent = letterData["accent"];
  }

//Exceptions first for G,H,K,O,V,X,Z
if (px1 ==100 && py1 ==25 && px6 == 50 && py6 ==75) {
  //G
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
  triangle(25,25,40,5,55,25);
  fill(colorFront1);
  triangle(45,5,60,25,75,5);
  pop();

} else if (px3==50 && py3==125 && px6 ==50 && py6==75 && t1s==.5) {
  //H
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
}
/*
 else if (px1 == 0 && py1 ==25 && px2 == 100 && py2 == 25 && px6 == 100 && py6 ==25) {
  //K
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
}
*/ else if (px1 == 0 && py1 == 0 && px3 == 60 && py3 == 100 && px6 ==60 && py6 ==100) {
  //O
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
} else if (px1==45 && py1 == 10 && px6 == 55 && py6 ==190) {
  //V
  push();
    fill(colorFront2);
    triangle(px1,py1,px2,py2,px3,py3);
    rect(45,0,10,30);
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
    rect(45,170,10,30);
  pop();

  push();
    fill(colorFront3);
    scale(t2s);
    translate(t2sx,t2sy);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();
} else if (px3 ==100 && py3 ==175 && px6 ==0 && py6 == 175) {
  //X
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
  triangle(75,175,100,175,100,200);
  pop();
} else if (px3==40 && py3 ==200 && px5 ==50 && py5 ==200) {
  //Z
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
    translate(-149,0);
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
    translate(-150,0);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();

} else if (px3==40&&py3==175&&px6==50&&py6==0) {
  //0
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
    translate(-150,0);
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
    translate(-150,0);
    triangle(px4,py4,px5,py5,px6,py6);
  pop();
  push();
    fill(colorFront2);
    triangle(75,175,100,175,100,200);
  pop();
} else if (px5==80&&py5==150&&px6==0&&py6==200) {
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
    fill(colorFront2);
    translate(80,0);
    triangle(px1,py1,px2,py2,px3,py3);
    fill(colorFront3);
    translate(20,0);
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
} else if (px2==25&&py2==200&&px6==25&&py6==200) {
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
    triangle(0,25,25,0,25,25);
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

  push();
  scale(accent);
  fill(colorFront2);
  triangle(25,5,50,30,75,5);
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
  new_letter["x1"]    = map(percent, 0, 100, oldObj["x1"], newObj["x1"]);
  new_letter["y1"] = map(percent, 0, 100, oldObj["y1"], newObj["y1"]);
  new_letter["x2"]    = map(percent, 0, 100, oldObj["x2"], newObj["x2"]);
  new_letter["y2"] = map(percent, 0, 100, oldObj["y2"], newObj["y2"]);
  new_letter["x3"]    = map(percent, 0, 100, oldObj["x3"], newObj["x3"]);
  new_letter["y3"] = map(percent, 0, 100, oldObj["y3"], newObj["y3"]);
  new_letter["t1s"] = map(percent, 0, 100, oldObj["t1s"], newObj["t1s"]);
  new_letter["t1sx"] = map(percent, 0, 100, oldObj["t1sx"], newObj["t1sx"]);
  new_letter["t1sy"] = map(percent, 0, 100, oldObj["t1sy"], newObj["t1sy"]);
  new_letter["x4"]    = map(percent, 0, 100, oldObj["x4"], newObj["x4"]);
  new_letter["y4"] = map(percent, 0, 100, oldObj["y4"], newObj["y4"]);
  new_letter["x5"]    = map(percent, 0, 100, oldObj["x5"], newObj["x5"]);
  new_letter["y5"] = map(percent, 0, 100, oldObj["y5"], newObj["y5"]);
  new_letter["x6"]    = map(percent, 0, 100, oldObj["x6"], newObj["x6"]);
  new_letter["y6"] = map(percent, 0, 100, oldObj["y6"], newObj["y6"]);
  new_letter["t2s"] = map(percent, 0, 100, oldObj["t2s"], newObj["t2s"]);
  new_letter["t2sx"] = map(percent, 0, 100, oldObj["t2sx"], newObj["t2sx"]);
  new_letter["t2sy"] = map(percent, 0, 100, oldObj["t2sy"], newObj["t2sy"]);

  let old_accent = 0;
  if ("accent" in oldObj) {
    old_accent = oldObj["accent"];
  }
  let new_accent = 0;
  if ("accent" in newObj) {
    new_accent = newObj["accent"];
  }
  new_letter["accent"]    = map(percent, 0, 100, old_accent, new_accent);



  return new_letter;
}

var swapWords = [
  "SULJOS2O",
  "BM6T1",
  "SULA",
  "QJIEFX"
]